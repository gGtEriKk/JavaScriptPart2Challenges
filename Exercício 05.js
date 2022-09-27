/*
    Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde
    qual número é maior
*/

const numbers = (numberOne, numberTwo) => {

    if(numberOne > numberTwo){
        console.log(`${numberOne} é o maior número`)
    }

    else{
        console.log(`${numberTwo} é o maior número`)
    }

}

numbers(0, 0)