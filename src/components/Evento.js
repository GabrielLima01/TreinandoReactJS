function Evento ({numero}){

   function meuEvento(){
       console.log(`Botão Ativado ${numero}`);
   }

    return (
       <div>
           <p>Clique para disparar um evento</p>
           <button onClick={meuEvento}>Ative o botão</button>
       </div>
    )
}

export default Evento;