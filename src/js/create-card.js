const btnCreate = document.querySelector ('.js_btnCreate');
const sectionCreated = document.querySelector('.js-section-created');



function handleCreate (event){
    event.preventDefault();
    
    fetch('https://dev.adalab.es/api/card/',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(cardData)
    })
    .then(response => response.json())
    .then(dataResponse => {
        console.log(dataResponse);

        if(dataResponse.success){
            btnCreate.classList.remove('btn-create');
            btnCreate.classList.add('btn-create_grey');
            sectionCreated.classList.remove('collapsed');
            localStorage.setItem('newCard', JSON.stringify(cardData));
            cardLink.innerHTML = dataResponse.cardURL;
            cardLink.href = dataResponse.cardURL;
        }else if(dataResponse.error.toLowerCase().includes('mandatory field')){
            createError.innerHTML = 'Es necesario rellenar todos los campos.';          
        }else if(dataResponse.error.includes('ER_DATA_TOO_LONG')){
            createError.innerHTML = 'El peso de la imagen no puede ser superior a 19KB.'
        }
        
    })
    // .catch((error)=> console.log(`Ha sucedido un error:${error}`));

}

btnCreate.addEventListener('click', handleCreate);
