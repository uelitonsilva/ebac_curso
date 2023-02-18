
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');
let message = document.getElementById('message');
let botao = document.getElementById('btn')
const form = document.getElementById('formulario');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validaCampo(campoA, campoB);
});

function validaCampo(campoA, campoB) {

    if (campoA.value < campoB.value) {
        alert ('Os valores estão corretos!!')

    }

    else {
        alert  ('O valor do campo B precisa ser maior que o campo A!!')
        
    }
}


