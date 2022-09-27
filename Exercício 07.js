/*
    Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
    Você deve enviar como argumentos da função: 
    - Valor inicial investido 
    - Valor atual do investimento 
    - Tempo em meses, que o valor está investido
    A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula para te
    auxiliar com o cálculo.
    Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido 
    * tempo
*/

// const taxaMensal = () => {

//     const initialInvestment = 5000
//     const currentInvestmentValue = 7500
//     const investmentTime = 12

//     console.log (`A taxa de juros mensal é de ${((currentInvestmentValue - initialInvestment) / 
//                 (initialInvestment * investmentTime) * 100).toFixed(2)}%`)
// }

// taxaMensal()

// OUTRA FORMA

function rate (initialInvestment, currentInvestmentValue, investmentTime) {

    const juros = (currentInvestmentValue - initialInvestment) / (initialInvestment * investmentTime);

    const taxaMensal = (juros * 100)

    console.log(`A taxa de juros mansal é de ${taxaMensal}%`)
}

rate(2000, 2250, 10)