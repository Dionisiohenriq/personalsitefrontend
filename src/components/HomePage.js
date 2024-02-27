import React from "react";
import Parallax from "./Parallax";

function HomePage() {
    return (<>
            <div>
                <h1>Página Inicial</h1>
                <p>Bem-vindo ao meu site Pessoal!</p>
            </div>
            <div>
                <Parallax>Test</Parallax>
            </div>
        </>);
}

export default HomePage;