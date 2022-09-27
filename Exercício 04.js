/*
    Escreva um programa onde, você chame uma função, e ela diga que ano estamos!
*/

const year = () => {

    const date = new Date()

    let years = date.getFullYear();

    console.log(`Estamos no ano ${years}`)

}

year()

// const weekDay = () => {

//     const date = new Date ()
//     let days = date.getDay()
    

//     console.log(`Hoje é ${days}`)

// }

// weekDay()