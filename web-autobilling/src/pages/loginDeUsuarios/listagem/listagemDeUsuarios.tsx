import 'bootstrap/dist/css/bootstrap.min.css';

const ListagemDeUsuarios = () => {

     // Dados dos usuários, normalmente você buscaria esses dados via API
    const users = [
        { id: 1, name: 'Alice',sobreNome: 'Martelli', email: 'alice@example.com', role: 'Administrador', CPF: '123.456.789-00', telefone: '(11) 99999-9900'},
        { id: 2, name: 'Bob', sobreNome: 'Castelanny',email: 'bob@example.com', role: 'Usuário', CPF: '123.456.789-25', telefone: '(11) 99999-9925' },
        { id: 3, name: 'Clara', sobreNome: 'Moreira',email: 'clara@example.com', role: 'Visitante', CPF: '123.456.789-30', telefone: '(11) 99999-9930' }
    ];
    
    return (
        /* Aqui vamos criar uma listagem de usuários que estão cadastrados no sistema. */
        /* Usando biblioteca de UI/UX bootstrap */
        <div className="mt-1 ">
            <h1>Listagem de Usuários</h1>
            <table className="table table-striped p-2 w-auto p-auto">
                <thead className="table">
                    <tr>
                        {/* <th className="px-2">#</th> */}
                        <th className="px-2 d-none d-md-table-cell">Id</th>
                        <th className="px-2">Nome</th>
                        <th className="px-2 d-none d-md-table-cell">Sobrenome</th>
                        <th className="px-2">Email</th>
                        <th className="px-2 d-none d-md-table-cell">CPF</th>
                        <th className="px-2">Telefone</th>
                        <th className="px-2 d-none d-md-table-cell">Role</th>
                        <th className="px-2">Edição</th>
                        <th className="px-2 d-none d-md-table-cell">Exclusão</th>
                    </tr>
                </thead>
                <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="px-3 d-none d-md-table-cell">{user.id}</td>
                                <td className="px-3">{user.name}</td>
                                <td className="px-3 d-none d-md-table-cell">{user.sobreNome}</td>
                                <td className="px-3">{user.email}</td>
                                <td className="px-3 d-none d-md-table-cell">{user.CPF}</td>
                                <td className="px-3">{user.telefone}</td>
                                <td className="px-3 d-none d-md-table-cell">{user.role}</td>
                                <td className="px-3">
                                    <button className="btn btn-primary mx-5">Editar</button>                                    
                                </td>
                                <td className="px-3">
                                    <button className="btn btn-danger mx-5 d-none d-md-table-cell">Excluir</button>
                                </td>

                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
        
    );
};

export default ListagemDeUsuarios;
