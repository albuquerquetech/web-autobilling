import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './loginDeUsuarios.module.css';

const LoginDeUsuarios = () => {
    return (
        <div className="container mt-5">  {/* Usando a classe container do Bootstrap para centralização e margem */}
            <form>
                <div className="card p-4">  {/* Usando card para uma caixa com sombra e padding */}
                    <div className="card-header">
                        <h1 className={styles.h1ittle}>Login Autobilling</h1>  {/* Título dentro do header do card */}
                    </div>
                    <div className={styles.divContainer}>
                        <div className="mb-3">  {/* Classe mb-3 para margem inferior */}
                            <label htmlFor="email" className="form-label text-left">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-start">Senha:</label>
                            <input type="password" className="form-control" id="password" name="password" />
                        </div>
                    </div>
                    <div className={styles.divButton}>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary w-100">Entrar</button>  {/* Botão estilizado e largura completa */}
                        </div>
                    </div>
                    <p className={styles.pCadastrese}><a href="/cadastro">Cadastrar-se</a></p>  {/* Links centralizados */}
                    <p className={styles.pEsqueceuSenha}><a href="/esqueceu-senha">Esqueceu a senha?</a></p>
                </div>
            </form>
        </div>
        // <div className={styles.divContainer}> 
        //     <form >
        //         <div className={styles.containerGlob}>
        //             <div className={styles.divHeader}>
        //                 <h1 className={styles.h1ittle}>Login Autobilling</h1>
        //             </div>
        //             <div className={styles.inputContainer}>
        //                 <label htmlFor="email">Email:</label>
        //                 <input className={styles.divInput} type="email" id="email" name="email" />
        //             </div>
        //             <div className={styles.inputContainer}>
        //                 <label htmlFor="password">Senha:</label>
        //                 <input className={styles.divInput} type="password" id="password" name="password" />
        //             </div>
        //             <div className={styles.inputContainer}>
        //             <button className={styles.divButton} type="submit">Entrar</button>
        //             </div>
        //             <p className={styles.pCadastrese}><a href="/cadastro">Cadastrar-se</a></p>
        //             <p className={styles.pEsqueceuSenha}><a href="/esqueceu-senha">Esqueceu a senha?</a>
        //             </p>
        //         </div>
        //     </form>
        // </div>
    );
};

export default LoginDeUsuarios;
