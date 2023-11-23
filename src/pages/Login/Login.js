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
    const {signIn, loadingAuth, toast} = useContext(AuthContext);

    async function handleSignIn(e) {
        e.preventDefault();
        if (email !== '' && senha !== '') {
            await signIn(email, senha);
        }
    }

    return (
        <form onSubmit={handleSignIn}>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="mb-3">
                    <label htmlFor="username" className="mr-7">Email</label>
                    <InputText value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="Email" className="py-1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="senha" className="mr-6" >Senha</label>
                    <Password value={senha} onChange={(e) => setSenha(e.target.value)} toggleMask feedback={false} />
                </div>
                <Button label={loadingAuth ? 'Carregando...' : 'Entrar'} className="bg-orange mt-4" type="submit"/>
            </div>
            <Toast ref={toast} />
        </form>

    )
}

export default Login;