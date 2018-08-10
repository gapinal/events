// queremos agarrar los contact details del user y mandarlos a la api
// obtener el formulario
const formNode = document.getElementById('register');

// escuchar el submit 
formNode.addEventListener('submit', function(e) {

// detener submit    
    e.preventDefault();

//obtener la info del formulario    
    const nameNode = document.getElementById('name');
    const passwordNode = document.getElementById('password');

data = {
    name: nameNode.nodeValue,
    password: passwordNode.nodeValue,
};    

    console.log('se mando el submit', data);

//enviar la info al API

};