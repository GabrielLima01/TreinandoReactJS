import Item from './Item';

function List() {
    return(
        <>
            <h1>Minha lista</h1>
        
         <ul>
             <Item marca="BMW" ano_lancamento={1945}/>
             <Item marca="Audi" ano_lancamento={1965}/>
             <Item marca="Nissan" ano_lancamento={1955}/>
         </ul>
         </>
    )
}

export default List;