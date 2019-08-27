function exe2(){
    //recuperar dados do usuario 
   var n1=Number(document.getElementById("n1").value);
   var n2=Number(document.getElementById("n2").value);
    //calcular media
    var media = (n1 + n2)/2
    //verifica aprovação
    if(media >= 7){
        alert("aprovado com media" + media)
    }
    else if((media >= 3) && (media < 7)){
        alert("exame com media " + media)
    }
    else{
        alert("reprovado com media " + media)
    }
}