function exe3(){
    //recuperar dados do usuario 
    var n1 = Number(document.getElementById("n1").Value);
    var n2 = Number(document.getElementById("n2").Value);
    //calcular media[]
    if(n1 < n2){
        alert("menor numero"+ n1)
    }
    else if(n2 < n1){
        alert("menor numero"+ n2)
    }
    else{
        alert("numero iguais")
    }
    
}