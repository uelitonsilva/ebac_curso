$('form').on('submit', function(e){
  e.preventDefault();
  const inputTarefa = $('#nome-tarefa[type="text"]').val();
  const novaTarefa = $('<li></li>')
  
  $(`<div><p>${inputTarefa}</p></div>`).appendTo(novaTarefa);

  $(novaTarefa).appendTo('ul');

  $('#nome-tarefa[type="text"]').val('');
});

$('ul').on('click', 'li', function() {
  $(this).toggleClass('tarefa-concluida');
});