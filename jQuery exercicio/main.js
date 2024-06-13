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
        $(`<div class="sublinhado">
                <li>
                    <input type="checkbox" id="checkbox"><span class="text">${nomeDaTarefa}</span>
                </li>
            </div>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(1000);
        $('#nome-tarefa').val('');
    })
})