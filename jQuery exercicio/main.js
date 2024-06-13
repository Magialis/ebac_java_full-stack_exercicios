$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeDaTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li style="display: none"></li>');
        $(`<li>
            <input type="checkbox" id="checkbox"><span class="text">${nomeDaTarefa}</span>
        </li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(1000);
        $('#nome-tarefa').val('');
    })
    
    //para riscar os itens da lista
    function toggleClasseRiscado() {
    $(this).toggleClass('riscado');
    }
    $('ul').on('click', 'li', toggleClasseRiscado);
})
