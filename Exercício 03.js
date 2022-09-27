/*
    Escreva um programa onde, você chame uma função, e ela diga a hora exata!
*/

const hours = () => {

    const clock = new Date()

    let hour = clock.getHours()
    let min = clock.getMinutes()
    let sec = clock.getSeconds()

    console.log(`${hour}:${min}:${sec}`)

}

hours()

// OUTRO FORMATO

// console.log(new Date().getFullYear())