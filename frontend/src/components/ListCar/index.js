import Style from './index.module.css'
import Button from "../button"
import { useEffect, useState } from 'react';


const ListCar=({idCar,onEvent})=>{
    const [idEdit,setIdEdit]=useState('')
    function createNode(element) {
        return document.createElement(element);
    }
    function append(parent, element) {
        return parent.appendChild(element);
    }
    function updateList(){
        const list=document.getElementById('list-cars')
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
            list.innerHTML='';
            return data.forEach(car => {
                let li = createNode('li')
                let div = createNode('div')
                let excludeButton = createNode('button')
                let editButton = createNode('button')
                for(let i=1;i<=(Object.values(car).length-3);i++){
                    let p = createNode('p')
                    p.textContent=Object.values(car)[i];
                    append(li,p)
                }
                excludeButton.textContent='X'
                excludeButton.className=Style.action
                append(div,excludeButton)

                editButton.textContent='edit'
                editButton.className=Style.action
                append(div,editButton)
                
                div.className=Style.box_actions
                append(li,div)

                li.className= Style.informations
                append(list,li) 

                excludeButton.addEventListener('click',(e)=>excludeItem(car.id,e.target))
                editButton.addEventListener('click', () => {
                    setIdEdit(car.id);
                    onEvent('true')

                });
            });
        })
        .catch(error => {
            console.error(error);
        });
    }
    function excludeItem(id, e){
        fetch(`http://localhost:3030/veiculos/${id}`, {
            method: 'DELETE',
            headers: {
            "Content-Type": "application/json"
            }
        })
        .then(response=>{
            if(!response.ok){
                throw new Error('Erro ao excluir veiculo')
            }
            e.closest('li').remove()
        })
    }
    useEffect(()=>{
        idCar(idEdit)
    },[idEdit])
    return(
        <section className={Style.sectionList} idcar={idEdit}>
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
            <ul id="list-cars" className={Style.listCars}>
            </ul>
        </section>
    )
}

export default ListCar