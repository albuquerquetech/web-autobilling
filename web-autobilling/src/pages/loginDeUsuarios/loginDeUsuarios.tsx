const LoginDeUsuarios = () => {
    return (
        <div>
            <div className="header">
                <h1>Login Autobilling</h1>
            </div>

            <form>
                <div className="container">

                    <div className="inputContainer">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="exemploEmail@exemplo.com"/>
                    </div>
                    
                    <div className="inputContainer">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password"/>
                    </div>

                    <button type="submit">Entrar</button>

                    <p><a href="/cadastro">Cadastrar-se</a></p>

                    <p><a href="/esqueceu-senha">Esqueceu a senha?</a>
                    </p>
                </div>                
            </form>
        </div>
    );
};

export default LoginDeUsuarios;
