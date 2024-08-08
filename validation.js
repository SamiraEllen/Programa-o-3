let nomeIsOk;
function validaEmail(event){
    // pega o valor digitado no elemento input
    const inputEmail = event.target;
    // cria uma expressão regular: <texto>@<texto>.<texto>
    var regex = /\S+@\S+\.\S+/;
    // se o email estiver correto muda a cor para verde
    if(regex.test(inputEmail.value)){
       
        inputEmail.style.color = "green";
    }
    // caso contrário, para vermelho
    else 
        inputEmail.style.color = "red";
}
function validaTelefone(event){
    const inputPhone = event.target;
    let formatedPhone = inputPhone.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    console.log(formatedPhone);
    inputPhone.value = !formatedPhone[2] ? formatedPhone[1] : '(' + formatedPhone[1] + ') ' + formatedPhone[2] + (formatedPhone[3] ? '-' + formatedPhone[3] : '');
}
function validaForm(event){

}
function validaCPF(event) {
    const inputCPF = event.target;
    let formatedCPF = inputCPF.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    console.log(formatedCPF);
    inputCPF.value = !formatedCPF[2] ? formatedCPF[1] : formatedCPF[1] + '.' + formatedCPF[2] + (formatedCPF[3] ? '.' + formatedCPF[3] : '') + (formatedCPF[4] ? '-' + formatedCPF[4] : '');
}
function validaForm(event){

}
function validaRenda(event) {
    const inputRenda = event.target;
    let valor = inputRenda.value;

    // Remove todos os caracteres que não são dígitos ou vírgulas
    valor = valor.replace(/[^\d,]/g, '');

    // Substitui a vírgula por um ponto para facilitar o tratamento numérico
    valor = valor.replace(',', '.');

    // Converte o valor para um número float
    let num = parseFloat(valor);

    // Se não for um número válido, retorna
    if (isNaN(num)) {
        inputRenda.value = '';
        return;
    }

    // Converte de volta para string e mantém até dois dígitos decimais
    valor = num.toFixed(2);

    // Converte de volta para string e substitui o ponto por vírgula
    valor = valor.toString().replace('.', ',');

    // Adiciona separadores de milhares
    let partes = valor.split(',');
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Junta as partes novamente
    inputRenda.value = partes.join(',');
}

function validaForm(event){

}
function exibirAlerta() {
    alert("Obrigada por se cadastrar! Vai me dar os cinco pontos? kskskks");
}
