function exe5(){
    var n1 = Number(document.getElementById=("n1").Value);
    var n2 = Number(document.getElementById=("n2").Value);
    var opcao = Number(document.getElementById=("ocpao").Value);
    var resultado
    switch(opcao){
        case 1: resultado = (n1+n2) / 2
        break//nçao entra no case de bloco

        case 2: if (n1 >= n2){
            resultado = n1 - n2
        }
            else{
                resultado = n2- n1
            }
            break // nao entra no case de Baixo

        case 3:resultado = n1 * n2
            break // não entra no case de baixo

        case 4: if (n2 != 0){
            resultado = n1 /n2
        }
        else{
            resultado = "Divisão por zero"
        }
        break // não entra no case de baixo
    default: resultado = "opcao invalida"
    }
    alert("resultado " + resultado)
   
    }
    
    