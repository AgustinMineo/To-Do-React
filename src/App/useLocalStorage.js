import React from 'react'

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

export {useLocalStorage}
