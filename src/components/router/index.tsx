import React, { useState } from "react";
//import Dashboard from "../../pages/dashboard";
import Home from "../../pages/Home";
import Sobre from "../../pages/Sobre";
import Login from "../../pages/Login";

enum EnumPaginas {
    'home' = 'home',
    'dashboard' = 'dashboard',
    'sobre' = 'sobre',
    'login' = 'login'
}

const Router = () => {
    const [getPaginaAtual, setPaginaAtual] = useState<EnumPaginas>(EnumPaginas.login);

    const renderizarCabecalho = () => {
        if (getPaginaAtual === EnumPaginas.login) {
            return null;
        }

        return (
            <div>
                <button onClick={() => setPaginaAtual(EnumPaginas.home)}>Inicio</button>
                <button onClick={() => setPaginaAtual(EnumPaginas.dashboard)}>Dashboard</button>
                <button onClick={() => setPaginaAtual(EnumPaginas.sobre)}>Sobre</button>
            </div>
        );
    };

    const handleLoginSuccess = () => {
        setPaginaAtual(EnumPaginas.home); // Redireciona para a home
    };

    const renderizarPagina = () => {
        switch (getPaginaAtual) {
            case EnumPaginas.home: return <Home />;
         //   case EnumPaginas.dashboard: return <Dashboard />;
            case EnumPaginas.sobre: return <Sobre />;
            case EnumPaginas.login: return <Login onLogin={handleLoginSuccess} />;
            default: return <div><h1>home</h1></div>;
        }
    };

    return (
        <div>
            {renderizarCabecalho()}
            {renderizarPagina()}
        </div>
    );
};

export default Router;
