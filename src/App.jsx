import logo from './FrontImg.jpg';
import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { CreateNewToDo } from './components/CreateNewToDo';
import { ToDoItem } from './components/ToDoItem';
import { NewTask } from './components/NewTask';

/*
const defaultToDo =[
  {text: 'Cortar cebolla', completed : true, id:1},
  {text: 'Hacer un curso', completed : false, id:2},
  {text: 'Comer algo', completed : false, id:3},
  {text: 'Otra cebolla', completed : false, id:4},
  {text: 'OTRA cebolla', completed : true, id:5}
]

localStorage.setItem('TODOS_V1',JSON.stringify(defaultToDo));*/
//localStorage.removeItem('TODOS_V1');

//Customer hook
function useLocalStorage(itemName, initialState){
  
  const localStorageItem = localStorage.getItem(itemName); // Traemos el string desde el localStorage
  let parsedItem;
  
  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialState));//Seteamos el array vació como string
    parsedItem = initialState;//Si el localstorage esta vació, generamos un arreglo sin nada
  }else{
    parsedItem = JSON.parse(localStorageItem);
  };
  
  const [item,setItems] = React.useState(parsedItem);
  const saveItem = (newItem) =>{
    localStorage.setItem('TODOS_V1',JSON.stringify(newItem));
    setItems(newItem)
  };

  return [item,saveItem];
}

function App() {

  const [todos,saveItems] = useLocalStorage('TODOS_V1',[]); // Arreglo vació.
  const [searchValue, setSearchValue] = React.useState(''); // Declaramos un estado de la variable searchValue por defecto con React.useState(''); Para que este campo este vació

  const completedToDos = todos.filter(todos => !!todos.completed).length; // !! sirve para convertir la response en boolean.
  const totalToDos = todos.length ; // Total de to-dos 

  const seachActualToDo = todos.filter((todo)=>{
    const todoText = todo.text.toLowerCase(); // Cambiamos todo el text del arreglo a minuscula
    const todoSearch = searchValue.toLowerCase();//Cambiamos el texto buscado a minuscula
    return todoText.includes(todoSearch); // Buscamos y devolvemos el texto buscado dentro del arreglo.
  });//Buscar en base al search

  const changeStatusToDo = (id)=>{
    console.log('cambie')
    const newListToDo = [...todos];//Copiamos el array principal
    newListToDo.map(list => {
        if(list.id === id){
          list.completed = !list.completed;
        }
      });
      saveItems(newListToDo)
  }

  const onDelete = (id)=>{
    console.log('cambie')
    const newListToDo = [...todos];//Copiamos el array principal
    saveItems(newListToDo.filter(list => list.id !== id))
  }

  return (
    <>
    <div className="row align-items-center vh-100 overflow-hidden m-0" style={{background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}}>
      <div className="col-6 d-flex flex-wrap justify-content-center align-items-center">
        <h1>Create a new Task!</h1>
        <div className='vh-75 w-100 d-flex flex-wrap align-items-center justify-content-center'>
          <NewTask/>
          <CreateNewToDo/>
        </div>
          {/*<img src={logo} className="img-fluid" width={'500px'} height={'500px'}></img>*/}
      </div>
        <div className="col-6">
        <TodoCounter completed={completedToDos} total={totalToDos} searchValue={searchValue} setSearchValue={setSearchValue} />
          <TodoList>
          {seachActualToDo.map(todo => (
            <ToDoItem key={todo.id} 
            text={todo.text} 
            status={todo.completed}
            onComplete={() => changeStatusToDo(todo.id)}
            onDelete={()=> onDelete(todo.id)}
            />
          ))}
          </TodoList>
        </div>
    </div>
    </>
  );
}

export default App;
