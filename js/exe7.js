function exe7(){
    var salario = Number(document.getElementById("salario").value);
    if(salario< 500){
        var novo = salario + salario *30/100
        alert("novo valor " +novo)
    }
    else{
        alert("nao tem diretio a aumento")
    }
}