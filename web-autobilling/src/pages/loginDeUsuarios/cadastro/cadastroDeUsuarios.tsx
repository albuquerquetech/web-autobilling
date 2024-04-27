// funções tsx

const CadastroDeUsuarios = () => {
    return (
        <div>
            <h1>Cadastro de Usuários</h1>
            <form>
                <div className="div-nome">
                    <label>Nome</label>
                    <input type="text" placeholder="Nome" name="nome" />
                </div>

                <div className="div-sobrenome">
                    <label>Sobrenome</label>
                    <input
                        type="text"
                        placeholder="Sobrenome"
                        name="sobrenome"
                    />
                </div>

                <div className="div-email">
                    <label>Email</label>
                    <input type="text" placeholder="Email" name="email" />
                </div>

                <div className="div-cpf">
                    <label>CPF</label>
                    <input type="text" placeholder="CPF" name="cpf" />
                </div>

                <div className="div-telefone">
                    <label>Telefone</label>
                    <input type="text" placeholder="Telefone" name="telefone" />
                </div>

                <div className="div-password">
                    <label>Senha</label>
                    <input type="password" placeholder="Senha" name="senha" />
                </div>

                <div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
};

export default CadastroDeUsuarios;
