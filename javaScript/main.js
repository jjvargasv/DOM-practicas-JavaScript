const 
    $form =document.querySelector('[data-form]'),
    $showDataEl =document.querySelector('.show-data');


show()
//tarea: Obtener los datos del localStore
function getData() {
    return  JSON.parse( localStorage.getItem('todos')) || []; //Obtengo la data persistente y convierto en un objeto
}


//CRUD
//Create: crear y/o insertar un producto{id, name, price}
function add() {}

//Read Obtener la data y mostrarla
function show() {
    const data =getData();
    console.log(data)
}
//Update
function update() {}
//Delete
function remove(){}




console.log($form);
console.log($showDataEl)

$form.addEventListener( 'submit', ( e )=>{
    e.preventDefault();
    console.log('Me as dado click');
});