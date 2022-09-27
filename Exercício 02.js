/*
    Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e 
    escrever a tabuada de 1 a 10 do valor lido.
*/

// const tabuada = (numberSent) => {

//     // const numberSent = Math.floor((Math.random() * (10 - 1) + 1))

//         console.log(`${numberSent} * 1 =`, numberSent * 1)
//         console.log(`${numberSent} * 2 =`, numberSent * 2)
//         console.log(`${numberSent} * 3 =`, numberSent * 3)
//         console.log(`${numberSent} * 4 =`, numberSent * 4)
//         console.log(`${numberSent} * 5 =`, numberSent * 5)
//         console.log(`${numberSent} * 6 =`, numberSent * 6)
//         console.log(`${numberSent} * 7 =`, numberSent * 7)
//         console.log(`${numberSent} * 8 =`, numberSent * 8)
//         console.log(`${numberSent} * 9 =`, numberSent * 9)
//         console.log(`${numberSent} * 10 =`, numberSent * 10)

// }

// tabuada(11)

const table = (number) => {

    if (number > 10 || number < 1) {
        console.log('Aceitamos SOMENTE valores entre 1 e 10')
        return
    }

        for (let i = 1; i <= 10; i++) {
            console.log(`${number} * ${i} = ${number * i}`, )
        }

    }


table(4)