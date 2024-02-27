import React from "react";

function ContactPage(){
    return (
        <div>
            <h1>Entre em contato</h1>
            <form>
                <label htmlFor="nome">Nome:</label><br />
                <input type="text" id="nome" name="nome" /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" /><br />
                <label htmlFor="mensagem">Mensagem:</label><br />
                <textarea id="mensagem" name="mensagem"></textarea><br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ContactPage;