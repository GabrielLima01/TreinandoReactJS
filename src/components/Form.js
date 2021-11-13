import { useState } from 'react';
function Form() {


    function cadastrarUsuario(e) {
        e.preventDefault()  //Para a execução do formulário, e executa a linha de código abaixo
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
        console.log('Usuário cadastrado!')
    }

   const [name, setName] = useState()
   const [password, setPassword] = useState()

    return (
        <div>
            <h1>Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text"
                     placeholder="Digite seu nome"  
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                <label htmlFor="password">Senha:</label>
                    <input type="password" placeholder="Digite sua senha" 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;