import { useState, useEffect, createContext , useRef} from 'react';
import { auth, db } from './firebaseConnections';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Toast } from 'primereact/toast';

import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const toast = useRef(null);

  const showToast = (severity, summary, detail) => {
    toast.current.show({
      severity: severity,
      summary: summary,
      detail: detail,
      life: 3000
    });
  };

  useEffect(() => {
    async function loadUser() {
      const storageUser = localStorage.getItem('@campo-conecta');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadUser();
  }, [])

  function changeUser(user) {
    storageUser(user);
    setUser(user);
  }

  async function signIn(email, senha) {
    setLoadingAuth(true);
    await signInWithEmailAndPassword(auth, email, senha)
      .then(async (value) => {

        let uid = value.user.uid;

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        const dados = docSnap.data();
        let data = {
          uid: uid,
          nome: dados.nome,
          email: value.user.email,
          endereco: dados.endereco
        }
        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
        showToast('sucess', 'Sucess', 'Bem vindo(a) de volta!');
        navigate('/home');

      }).catch((error) => {
        console.log(error);

        if (error.message.includes("auth/invalid-email")) {
            showToast('error', 'Erro', 'Email inválido. Por favor, verifique o formato do seu email.');
          } else if (error.message.includes("wrong-password")) {
            showToast('error', 'Erro', 'Senha incorreta.');
          } else {
            showToast('error', 'Erro', 'Ocorreu um erro ao tentar realizar o login. Por favor, tente mais tarde.'); 
          }
        setLoadingAuth(false);
      })
  }

  async function signUp(email, senha, nome, endereco) {
    setLoadingAuth(true);
    await createUserWithEmailAndPassword(auth, email, senha)
      .then(async (value) => {
        let uid = value.user.uid
        await setDoc(doc(db, "users", uid), {
          nome: nome,
          endereco:endereco,
          uid: uid,
        }).then(() => {
          let data = {
            uid: uid,
            nome: nome,
            email: email,
            endereco: endereco,
          }
          setUser(data);
          storageUser(data);
          setLoadingAuth(false);
          showToast('sucess', 'Sucess', 'Seja bem vindo ao Campo Conecta!');
          navigate("/home");
        })
      }).catch((error) => {
        console.log(error);
        if (error.message.includes("Password")) {
            showToast('error', 'Erro', 'A senha precisa conter pelo menos 6 caracteres.');
        } else if (error.message.includes("email-already")) {
            showToast('error', 'Erro', 'E-mail já cadastrado. Favor, realize o login.');
        } else {
            showToast('error', 'Erro', 'Ocorreu um erro durante o cadastro. Tente novamente mais tarde.');
        }
        setLoadingAuth(false);
      })
  }

  function storageUser(data) {
    localStorage.setItem('@campo-conecta', JSON.stringify(data))
  }

  async function logout() {
    await signOut(auth);
    localStorage.removeItem('@campo-conecta');
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signUp, logout, loadingAuth, loading, toast}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;