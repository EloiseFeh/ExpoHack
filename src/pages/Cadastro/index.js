import React, { useState, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password'
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import { AuthContext } from "../../services/auth";

import "./styles.css";

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nome, setNome] = useState('');
    const {signUp, loadingAuth, toast} = useContext(AuthContext);


    async function handleSingUp(e){
      e.preventDefault();
  
      if (nome !== '' && email !== '' && senha !== '' && endereco !='') {
        await signUp(email, senha, nome, endereco);
      }
    };

    return (
        <form onSubmit={handleSingUp}>
            <div className="flex flex-col justify-center items-center h-screen">
            <div className="mb-3">
                    <label htmlFor="nome" className="mr-7">Nome</label>
                    <InputText value={nome} onChange={(e) => setNome(e.target.value)} aria-describedby="Email" className="py-1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="endereco" className="mr-7">Endereco</label>
                    <InputText value={endereco} onChange={(e) => setEndereco(e.target.value)} aria-describedby="Email" className="py-1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="mr-7">Email</label>
                    <InputText value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="Email" className="py-1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="senha" className="mr-6" >Senha</label>
                    <Password value={senha} onChange={(e) => setSenha(e.target.value)} toggleMask feedback={false} />
                </div>
                <Button label={loadingAuth ? 'Carregando...' : 'Cadastrar'} className="bg-secondary-accent" type="submit"/>
            </div>
            <Toast ref={toast} />
        </form>

    )
}

export default Login;