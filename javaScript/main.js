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
    console.log(data);

    data.forEach(function(item) {
        
    });
    


    /* 
    const $tableEl = document.createElement('tablet');
    $tableEl.setAttribute('border',1);
    $tableEl.setAttribute('cellspacing','1xp');
    $tableEl.setAttribute('cellpadding','1xp');
    const
        $tbodyEl = document.createElement('tbody'),
        $trEl = document.createElement('tr'),
        $tdEl = document.createElement('td');

    data.forEach( todos => {
        console.log(todos)
    });


    $trEl.appendChild($tdEl);
    $tbodyEl.appendChild($trEl);
    $tableEl.appendChild($tbodyEl)

    console.log($tableEl); */
   
}
//Update
function update() {}
//Delete
function remove(){}




/* console.log($form);
console.log($showDataEl)
 */
$form.addEventListener( 'submit', ( e )=>{
    e.preventDefault();
    console.log('Me as dado click');
});