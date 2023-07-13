import React from 'react'

function useLocalStorage(itemName, initialState){
  
  const [item,setItems] = React.useState(initialState);
  const [loading,setLoading] = React.useState(true);
  const [error,setError] = React.useState(false);
  
  React.useEffect( () => {
      const localStorageItem = localStorage.getItem(itemName); // Traemos el string desde el localStorage
      let parsedItem;
      if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialState));//Seteamos el array vació como string
        parsedItem = initialState;//Si el localstorage esta vació, generamos un arreglo sin nada
      }else{
        parsedItem = JSON.parse(localStorageItem);
      };
    },[]);
    
    const saveItem = (newItem) =>{
      localStorage.setItem('TODOS_V1',JSON.stringify(newItem));
      setItems(newItem)
    };
  
    return {item,
            saveItem,
            error,
            loading};//Al tener mas de 2 items al devolver, es buena practica enviar un objeto en vez de un arreglo.
  }

export {useLocalStorage}
