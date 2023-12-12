

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150
// const defensBots = 50
// // 1
// const massage = companyName + ' has ' + (repairBots + defensBots) + ' bots in stock'
// console.log(massage)
// // 2
// const message = `${companyName} has ${repairBots + defensBots} bots in stock`
// console.log(message) //"Cyberdyne Systems has 200 bots in stock"




let weight = '88,3'
let height = '1.75'
weight = Number(weight.replace(',','.'))

height = Number(height)
// console.log(typeof height)

// const bmi = (weight / Math.pow(height, 2))
const bmi = Number((weight / height ** 2).toFixed(1))
console.log(bmi)