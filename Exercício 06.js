/*
    A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e 
    número de filhos. A prefeitura deseja saber: 
    - média do salário da população; 
    - média do número de filhos; 
    - maior salário; 
    - O final da leitura de dados se dará com a entrada de um salário negativo. 
    - Faça isso usando uma função!
*/

    // while(peopleInformation[i].salary >= 0){
        //     averageSalary += peopleInformation[i].salary
        //     averageChildren += peopleInformation[i].children
        //     peopleInformation[i].salary > highestSalary ? highestSalary = peopleInformation[i].salary : highestSalary = highestSalary
        //     i++
        // }

        // console.log(`Média salarial: ${(averageSalary / i).toFixed(0)}`)
        // console.log(`Média de filhos: ${(averageChildren / i).toFixed(1)}`)
        // console.log(`Salário mais alto: ${highestSalary}`)

const peopleInformation = [
    {
        name: 'João Sabino',
        age: 49,
        children: 3,
        salary: 2000
    },
    
    {
        name: 'Eduardo de Almeida',
        age: 28,
        children: 1,
        salary: 1800
    },
    
    {
        name: 'Maria Inês',
        age: 37,
        children: 5,
        salary: 3200
    },
    
    {
        name: 'Jean Souza de Aquino',
        age: 32,
        children: 7,
        salary: 2500
    },
    
    {
        name: 'Alana Lima dos Santos',
        age: 20,
        children: 2,
        salary: 2100    
    },

    // {
    //     name: 'Zé ninguem',
    //     age: 0,
    //     children: 0,
    //     salary: -1000
    // }
    ]

    let allSalarySum = 0
    let allChildrenSum = 0
    let highestSalary = 0

    peopleInformation.forEach ( function(person, index) {
        

        if(person.salary > highestSalary) highestSalary = person.salary
        allSalarySum += person.salary
        allChildrenSum += person.children
        
    })

    const averageSalary = allSalarySum / peopleInformation.length
    const averageChildren = allChildrenSum / peopleInformation.length

    console.log(`A média salarial é de ${averageSalary}, a média de filhos é de ${averageChildren} e o maior salário é ${highestSalary} `)

// for(let i = 0; i < peopleInformation.length; i++){

    //     const salary = peopleInformation[i].salary
    //     const children = peopleInformation[i].children

    //     if(salary > highestSalary) highestSalary = salary
        
    //     if(salary < 0){

    //         console.log(`A média salarial é: ${(averageSalary / i).toFixed(0)}`)
    //         console.log(`A média de filhos é: ${(averageChildren / i).toFixed(1)}`)
    //         console.log(`O maior salário é: ${highestSalary}`)
    //         break
    //     }

    //     else{
    //         averageSalary = averageSalary + salary
    //         averageChildren += children
    //     }   
        
    // }