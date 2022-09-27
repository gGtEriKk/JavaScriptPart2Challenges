/*
    Escreva um programa onde, você chame uma função enviando um número, a função deve imprimir na tela os
    números de 1 até o número que você enviou
*/

// function numbers(){

//     let random = (Math.floor(Math.random() * (20 - 1) + 1))

//     console.log(`O número enviado foi o ${random}`)

//     for(let i = 1; i <= random; i++) {
//         console.log(i)
//     }
// }

// numbers()

const randomNumber = (numbers) => {

    for(let i = 1; i <= numbers; i++)
        console.log(i)

}

randomNumber(200)