import './App.css';
import Form from './components/form';
import ListCar from './components/ListCar';

function App() {
  return (
    <div className='container' >
      <p className='title'>CRUD de Veículos</p>
      <p className='subtitle'>Adicionar Novo Veiculo</p>
      <Form/>
      <ListCar/>
    </div>
  );
}

export default App;
