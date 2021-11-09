function Form() {


    function cadastrarUsuario(e) {
        e.preventDefault()  //Para a execução do formulário, e executa a linha de código abaixo
        console.log('Usuário cadastrado!');
    }

    return (
        <div>
            <h1>Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;