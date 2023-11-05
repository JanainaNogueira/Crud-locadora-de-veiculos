import { useState } from 'react';

import './App.css';
import Form from './components/form';
import ListCar from './components/ListCar';

function App() {
  const [data,setdata]=useState("")
  const [event,setEvent]=useState(false)
  function childToParent(childdata){
    return setdata(childdata)
  }
  function onEvent(event){
    setEvent(event)
  }
  return (
    <div className='container' >
      <p className='title'>CRUD de Veículos</p>
      <p className='subtitle'>Adicionar Novo Veiculo</p>
      <Form idCar={data} onEvent={event} />
      <ListCar idCar={childToParent} onEvent={onEvent} />
    </div>
  );
}

export default App;
