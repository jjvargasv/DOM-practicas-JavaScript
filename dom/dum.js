const $btnnew =document.querySelector('[data-btn-producto]');
let productos=[];
$btnnew.addEventListener('click',function(event){
    event.preventDefault();//detiene el comportamiento de la etiqueta form

    const imputproducto = document.querySelector('[data-producto]');
    productos.push(imputproducto.value) //agregamos el producto a la lista
    //const $ulEl =document.querySelector('.product-list');
    //let templareil ="<li>"+imputproducto.value+ "</li>";
    //let templareil = `- ${imputproducto.value}`;
    //$ulEl.append( `${templareil}`)
    
    const $ulEl =document.querySelector('.product-list'); // obtengo el ul del dom
    const $liEL =document.createElement('li'); //creo el elemento li
    const $aEl =document.createElement('a'); // creo el elemento a 
    $aEl.setAttribute('href','#');
    $aEl.textContent=imputproducto.value;
    $liEL.append($aEl)
    $ulEl.append($liEL)


    console.log($ulEl)
});



