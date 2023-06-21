// localStorage sessionStorage
//sessionStorage.setItem(); //la data va a perdurar mientras la sesion


localStorage.setItem('tareas','[{name"estudiar JavaScrips",status:"pendiente"}]');  // la data persiste 
const data =localStorage.getItem('tareas');
console.log(data);

localStorage.removeItem(1);