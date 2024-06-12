const form = document.getElementById('formulario');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const validacaoTrue = document.getElementById('true');
    const validacaoFalse = document.getElementById('false');
    const validacaoEqual = document.getElementById('equal');

    if (campoB.value > campoA.value){
        validacaoTrue.style.display = 'block';
        validacaoFalse.style.display = 'none';
        validacaoEqual.style.display = 'none';
    } else if (campoB.value == campoA.value) {
        validacaoEqual.style.display = 'block';
        validacaoFalse.style.display = 'none';
        validacaoTrue.style.display = 'none';
    } else {
        validacaoFalse.style.display = 'block';
        validacaoTrue.style.display = 'none';
        validacaoEqual.style.display = 'none';
    }
    campoA.value = '';
    campoB.value = '';
})