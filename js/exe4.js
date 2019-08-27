function exe4(){
    var n1 = Number(document.getElementById=("n1").Value);
    var n2 = Number(document.getElementById=("n2").Value);
    var n3 = Number(document.getElementById=("n3").Value);

    if ((n1 == n2) && (n1 == n3)){
        alert("não existe maior numero")
    }
    else if ((n1 >= n2) && (n1 >= n3)){
        alert("maor numero e "+ n1)
    }
    else{
        alert("o maior numero e "+ n3)
    }
   
}