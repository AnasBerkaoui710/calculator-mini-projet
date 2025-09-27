const prompt = require("prompt-sync")();



function addition(a,b){
    return a+b
}

function soustraction(a,b){
    return a-b
}

function division(a,b){
    let div=1
    if(b==0){
        console.log("impossible calcul")
    }else{
        div = a/b
    }
    return div
}

function puissance(a,b){
    return a**b
}

function racineCarrre(a){
    return Math.sqrt(a)
}

function factorial(n) {
let fac = 1;
for (let i = 1; i <= n; i++) {
fac *= i;
}
return fac;
}

function produit(a,b){
    return a*b
}

let x=0
let y=0


function calculator(operation,num1,num2){
        let resultat=0

    switch (operation) {
    case "1":
        resultat=addition(num1,num2)
        break;
    case"2":
        resultat=soustraction(num1,num2)
        break;
    case"3":
        resultat=produit(num1,num2)
        break;
    case "4":
        resultat=division(num1,num2)
        break;
    case "5":
        resultat=puissance(num1,num2)
        break;
    case "6":
        resultat=racineCarrre(num1)
        break;
    case"7":
        resultat=factorial(num1)
        break;
    case"8":
        console.log(historique);
        break;

    default:
        console.log("ALERT: choix invalide!!!")

        break;
}

return resultat
}




let historique=[]




while(true){
    console.log("1 pour addition: \n2 pour soustraction: \n3 pour multiplication: \n4 pour division: \n5 pour puissance: \n6 pour racine carre: \n7 pour factoriel: \n8 pour historique: \n9 pour sortir")
    let choice = prompt("choisissez une operation: ");

    if (choice == 9)break 




if(choice>=1 && choice <=5){
    x=parseFloat(prompt("entrer le premier nombre: "))
    y=parseFloat(prompt("entrer le deuxième nombre: "))

}else if(choice == 6 || choice == 7){
    x= prompt("entrer un nombre: ")
}else if(choice == 8){
    console.log("Resultat: ", resultat)

}

resultat=calculator(choice,x,y)
console.log("Resultat: " , resultat);
historique.push(resultat)


}








    



















