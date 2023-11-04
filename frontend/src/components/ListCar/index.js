import Style from './index.module.css'
import Button from "../button"


const ListCar=()=>{
    const list=document.getElementById('list-cars')
    function createNode(element) {
        return document.createElement(element);
    }
    function append(parent, element) {
        return parent.appendChild(element);
    }
    function updateList(){
        console.log('funciona')
        fetch('http://localhost:3030/veiculos', {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Erro ao buscar os dados da API');
    }
    return response.json();
})
.then(data => {
    let cars=data;
    return cars.map(function(cars){
        let li = createNode('li')
        append(list,li)
    })
})
.catch(error => {
    console.error(error);
});
    }
    return(
        <section className={Style.sectionList}>
            <Button onClick={updateList} text={'Atualizar lista'}/>
            <div className={Style.listHeader}>
                <p>Locadora</p>
                <p>Modelo</p>
                <p>Marca</p>
                <p>Ano</p>
                <p>Motor</p>
                <p>Portas</p>
                <p>Câmbio</p>
                <p>Ar condicionado</p>
                <p>Ações</p>
            </div>
            <ul id="list-cars"></ul>
        </section>
    )
}

export default ListCar