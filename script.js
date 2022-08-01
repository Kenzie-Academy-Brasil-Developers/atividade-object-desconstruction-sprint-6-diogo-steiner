console.log(`Array orignal: `, itemArray);

const testMap  = (array = itemArray) => {
    const result = array.map((produto) => {
        let {id, price} = produto

        id > 2? price = 2.00 : false
        
        return {...produto, price}
    })
    return result
}
console.log(testMap());


const testFilter = (array = itemArray) => {
    const result = array.filter(({id}) => id <= 2)
    return result
}
console.log(testFilter());


const testFind = (array = itemArray) => {
    const result = array.find(({product}) => product.toLowerCase() == "leite")
    return result
}
console.log(testFind());


const testReduce = (array = itemArray) => {
    const totList = array.reduce((acumuladora, {price, quantity}, index) => {
        index == 1? acumuladora = acumuladora.price * acumuladora.quantity : false
        acumuladora += price * quantity
        return acumuladora
    })

    return totList
}
console.log(testReduce());







//Desafio
console.log("============ DESAFIO ===========");


//Crie um filtro onde o resultado traz apenas os itens que tem o price maior que 3.
const itensPriceMore3 = (array = itemArray) => {
    const result = array.filter (({price}) => price > 3)
    return result 
}
console.log(itensPriceMore3());


//Altere o valor do item leite para 4.
const priceLeite4 = (array = itemArray) => {
    const result = array.map((produto) => {
        let {product, price} = produto
        product == "Leite"? price = 4: false
        return {...produto, price}
    })
    return result
}
console.log(priceLeite4());


//Faça o total de todos os itens da section 'Padaria'.
const totalPadaria = (array = itemArray) => {
    
    let tot = 0 
    array.forEach(({price, quantity, section}) => {
        if (section.toLowerCase() == "padaria") {
            tot += quantity * price
        }
    })
    return tot
}
console.log(totalPadaria());

