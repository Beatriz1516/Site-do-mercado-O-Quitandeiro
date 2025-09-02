document.getElementById('entradaSite').addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log(data);//adiciona linha para verificar os dados no console

    fetch('https://script.google.com/macros/s/AKfycbxmPskooApm9rI3QvXMrQGdmXd-xlczA6mfOFW6tlKnks2bjxXTNPk24mVne9ZtpZOl/exec', {
        method: 'POST',
        body: new URLSearchParams(data)
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.result === 'está certo') {
            alert ('Email correto');
            event.target.reset();
        } else if (responseData.result === 'error' && responseData.message ==='Email não registrado' ) {
            alert('Erro: O email não existe.');
        } else {
            alert('Erro ao enviar os dados.')
        }
    })
    .catch(error => console.error('Error:' , error));
});