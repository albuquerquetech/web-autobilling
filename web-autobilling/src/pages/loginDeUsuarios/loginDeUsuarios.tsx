import styles from './loginDeUsuarios.module.css';

const LoginDeUsuarios = () => {
    return (
        <div className={styles.divContainer}>            

            <form >
                
                <div className={styles.containerGlob}>

                    <div className={styles.divHeader}>
                        <h1 className={styles.h1ittle}>Login Autobilling</h1>
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Email:</label>
                        <input className={styles.divInput} type="email" id="email" name="email" placeholder="exemploEmail@exemplo.com"/>
                    </div>
                    
                    <div className={styles.inputContainer}>
                        <label htmlFor="password">Senha:</label>
                        <input className={styles.divInput} type="password" id="password" name="password" placeholder='Digite sua senha!'/>
                    </div>

                    <div className={styles.inputContainer}>
                    <button className={styles.divButton} type="submit">Entrar</button>
                    </div>                    

                    <p className={styles.pCadastrese}><a href="/cadastro">Cadastrar-se</a></p>

                    <p className={styles.pEsqueceuSenha}><a href="/esqueceu-senha">Esqueceu a senha?</a>
                    </p>
                </div>                
            </form>
        </div>
    );
};

export default LoginDeUsuarios;
