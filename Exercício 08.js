/*
    Escreva um programa onde, você cria uma função geradora de desconto.
    A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do
    cliente ou não, um booleano que diz se o cliente vai pagar a vista ou não)
    Os descontos funcionam da seguinte forma:
    - Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
    - Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de
      desconto
    - Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
    - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
    - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
    - Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
    - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
    - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de
      desconto
    - Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
    - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto 
    - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
    - Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve
      imprimir na tela:
    - Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total
      com desconto e a porcentagem de desconto que ele recebeu.
    - Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom
      de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra
*/

const client = [
  {clientName:'Erik Gomes', firstPurchase:true, cashPayment:true, purchaseValue: 2199},
  {clientName:'Paloma Cunha', firstPurchase:true, cashPayment:true, purchaseValue: 799},
  {clientName:'Gilton Cruz' ,firstPurchase:false, cashPayment:true, purchaseValue: 299},
  {clientName:'João Paulo', firstPurchase:false, cashPayment:false, purchaseValue:199},
  {clientName:'Xerife de Souza', firstPurchase:true, cashPayment:false, purchaseValue: 1399},
  {clientName:'Paulina Gomes', firstPurchase:false, cashPayment:false, purchaseValue: 599}
]

const discountCoupon = (client) => {

  if(client.firstPurchase && client.cashPayment){

    if(client.purchaseValue > 1000){
      console.log(`Parabéns pela sua compra sr(a) ${client.clientName}! O valor total da compra era de 
      ${client.purchaseValue}, com o desconto de 30% ficou ${(client.purchaseValue * 0.7).toFixed(2)}. Obrigado e volte sempre!!!`)
    }else if(client.purchaseValue < 500){
      console.log(`Parabéns pela sua compra sr(a) ${client.clientName}! O valor total da compra era de 
      ${client.purchaseValue}, com o desconto de 20% ficou ${(client.purchaseValue * 0.8).toFixed(2)}. Obrigado e volte sempre!!!`)
    }else{
      console.log(`Parabéns pela sua compra sr(a) ${client.clientName}! O valor total da compra era de 
      ${client.purchaseValue}, com o desconto de 25% ficou ${(client.purchaseValue * 0.75).toFixed(2)}. Obrigado e volte sempre!!!`)
    }
  }

  if(client.firstPurchase && !client.cashPayment){

    if(client.purchaseValue > 1000){
      console.log(`Parabéns pela sua compra sr(a) ${client.clientName}! O valor total da compra era de 
      ${client.purchaseValue}, com o desconto de 20% ficou ${(client.purchaseValue * 0.8).toFixed(2)}. Obrigado e volte sempre!!!`)
    }else if(client.purchaseValue < 500){
      console.log(`Parabéns pela sua compra sr(a) ${client.clientName}! O valor total da compra era de 
      ${client.purchaseValue}, com o desconto de 10% ficou ${(client.purchaseValue * 0.9).toFixed(2)}. Obrigado e volte sempre!!!`)
    }else{
      console.log(`Parabéns pela sua compra sr(a) ${client.clientName}! O valor total da compra era de 
      ${client.purchaseValue}, com o desconto de 15% ficou ${(client.purchaseValue * 0.85).toFixed(2)}. Obrigado e volte sempre!!!`)
    }
  }

  if(!client.firstPurchase && client.cashPayment){

    if(client.purchaseValue > 1000){
      console.log(`Parabéns pela sua compra sr(a) ${client.clientName}! O valor total da compra era de 
      ${client.purchaseValue}, com o desconto de 20% ficou ${(client.purchaseValue * 0.8).toFixed(2)}. Obrigado e volte sempre!!!`)
    }else if(client.purchaseValue < 500){
      console.log(`Parabéns pela sua compra sr(a) ${client.clientName}! O valor total da compra era de 
      ${client.purchaseValue}, com o desconto de 10% ficou ${(client.purchaseValue * 0.9).toFixed(2)}. Obrigado e volte sempre!!!`)
    }else{
      console.log(`Parabéns pela sua compra sr(a) ${client.clientName}! O valor total da compra era de 
      ${client.purchaseValue}, com o desconto de 15% ficou ${(client.purchaseValue * 0.85).toFixed(2)}. Obrigado e volte sempre!!!`)
    }
  }

  if(!client.firstPurchase && !client.cashPayment){

    if(client.purchaseValue > 1000){
      console.log(`Parabéns pela sua compra sr(a) ${client.clientName}! O valor total da compra era de 
      ${client.purchaseValue}, com o desconto de 10% ficou ${(client.purchaseValue * 0.9).toFixed(2)}. Obrigado e volte sempre!!!`)
    }else if(client.purchaseValue < 500){
      console.log(`Parabéns pela sua compra sr(a) ${client.clientName}! O valor total da sua compra foi de 
      ${client.purchaseValue}. Foi gerado um cupom de desconto para a próxima compra de ${Math.floor(Math.random() * (20 - 10) + 10)}%.`)
    }else{
      console.log(`Parabéns pela sua compra sr(a) ${client.clientName}! O valor total da compra era de 
      ${client.purchaseValue}, com o desconto de 5% ficou ${(client.purchaseValue * 0.95).toFixed(2)}. Obrigado e volte sempre!!!`)
    }
  }
}

discountCoupon(client[0])