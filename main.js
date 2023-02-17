
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');
let message = document.getElementById('message');
let botao = document.getElementById('btn')
const form = document.getElementById('formulario');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validaCampo(campoA, campoB);
});

const errorMessage = ('o valor do campo B precisa ser maior que o campo A!')
const sucessmessage = ('Os valores estão corretos!')

function validaCampo(campoA, campoB) {

    if (campoA.value < campoB.value) {
        const messagemsucesso = document.querySelector('.sucessmessage');
        messagemsucesso.innerHTML = sucessmessage;
        messagemsucesso.style.display = 'block';
    }

    else {
        campoB.style.border = '1px solid red'
        document.querySelector('.errorMessage').style.display = 'block';
        
    }
}


