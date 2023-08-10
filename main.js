$('#cpf').mask('000.000.000-00',{placeholder: ' ex: 123.123.123.00'});
$('#cep').mask('00000-000', {placeholder:'ex: 12345-000'});
$('#telefone').mask('(00) 00000-0000', {placeholder:'(ddd) + cel '});

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cpf: {
            required: true
        },
        cep: {
            required: true
        }

    },
    messages: {
        nome:'Campo obrigatório',
        email: 'Campo obrigatório',
        telefone:'Campo obrigatório',
        cpf:'Campo obrigatório' ,
        cep:'Campo obrigatório' ,
        endereco:'Campo obrigatório'
    },
})