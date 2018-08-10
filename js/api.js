const formNode = document.getElementById('register');

formNode.addEventListener('submit', (e) => {
    // detener el submit
    e.preventDefault();

    // obtener la información del formulario
    const nameNode = document.getElementById('name');
    const passwordNode = document.getElementById('password');

    // validar formulario (no campos vacios, numeros y letras, etc)

    // procesar datos
    let data = {
        name: nameNode.value,
        password: passwordNode.value,
    };

    //enviar la información al api
    const myRequest = new Request(
        'http://localhost:3000/users',
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    fetch(myRequest)
    .then((response) => {
        if (response.status === 201) {
            return response.json();
        } else {
            throw new Error('Something went wrong on api server!');
        }
    })
    .then((response) => {
        console.log(response);
    }).catch(error => {
        console.error(error);
    })
});

