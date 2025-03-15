function testa_form() {
    var nome = document.forms["formnome"]["nome"].value;

    var ddd = document.forms["formddd"]["ddd"].value;

    var mensagem = document.forms["formmensagem"]["mensagem"].value;

    var email = document.forms["formemail"]["email"].value;

    // Verifica se o campo "Nome" está vazio
    if (nome == "") {
        alert("Nome completo precisa ser informado");
        document.forms["formnome"]["nome"].focus();
        
        return false;
    }

    // Verifica se o campo "DDD" está vazio
    if (ddd == "") {
        alert("DDD completo precisa ser informado");
        document.forms["formddd"]["ddd"].focus();
        
        return false;
    }

    // Verifica se o campo "Mensagem" está vazio
    if (mensagem == "") {
        alert("Mensagem completa precisa ser informada");
        document.forms["formmensagem"]["mensagem"].focus();
       
        return false;
    }

    // Verifica se o campo "Email" está vazio
    if (email == "") {
        alert("Email completo precisa ser informado");
        document.forms["formemail"]["email"].focus();
        
        return false;
    }

    return true;
}