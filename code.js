// indexOF and lastIndexOf
// const word = "banana"
// console.log(word.indexOf("a")); //2
// console.log(word.lastIndexOf("a")); //1

//toLowerCase()) and toUpperCase())
// const c = "hcjcPXC"
// console.log(c.toLowerCase())
// console.log(c.toUpperCase())

//REPLASE() ЗАМІНЯЄ РЕЧЕННЯ АБО СЛОВО І ПОВЕРТАЄ НОВИЙ МАСИВ
// const myName = "like banana"
// const newName = myName.replace("banana", "dogs")
// console.log(newName)

//SPLICE() ДІЛИТЬ СЛОВО НА КУСОЧКИ
// const word5 = "javascript"
// console.log(word5.slice(4)) // java

//SPLIT()
// const surname = "Kravchuk";
// console.log(surname.split("")); //['K', 'r', 'a', 'v', 'c', 'h', 'u', 'k']

// // const str = "The quick brown fox jumps over the lazy dog.";
// // const words = str.split(" ");
// // console.log(words[3]); // "fox"

// const chars = str.split("");
// console.log(chars[8]); //k

// const string = "1-!2-!3-!4-!5-!6-!7";
// console.log(string.split("!")); //['1-', '2-', '3-', '4-', '5-', '6-', '7']

// // JOIN() СТАВИТЬ В МАСИВ СИМОВЛ ЯКИЙ МИ ВСТАВИЛИ В СОНСОЛЬ.ЛОГ
// const allWords = [
//   "Яна",
//   "ненавидить",
//   "коли",
//   "ій",
//   "хтось",
//   "щось",
//   "забороняє",
// ];
// console.log(allWords.join("!")); //Яна!ненавидить!коли!ій!хтось!щось!забороняє
// console.log(allWords.join("-")); //Яна-ненавидить-коли-ій-хтось-щось-забороняє

// //INCLUDES() ПЕРЕВІРЯЄ ЧИ ВКЛЮЧАЄ В СЕБЕ МАСИВ ЗНАЧЕННЯ
// const newNames = ["moolly", "polly"];
// console.log(newNames.includes("moolly")); //true
// console.log(newNames.includes("yana")); //false

// //PUSH ДОДАЄ НА ПОЧАТОК МАСИВУ ЗНАЧЕННЯ
// const array = [1, 2];
// array.push(3, 4, 5);
// console.log(array); // 1 2 3 4 5

// const animals = ["pig", "monkey", "dog", "cat"];
// animals.push("frog", "bird");
// console.log(animals); //['pig', 'monkey', 'dog', 'cat', 'frog', 'bird']

// const array1 = [];
// array1.push(1, 2, 3, 4, 5);
// console.log(array1); //[1, 2, 3, 4, 5]

// //POP() ВИДАЛЯЄ ОСТАННІЙ ЕЛЕМЕНТ МАСИВУ
// const emptyArray = [1, 2, 3, 4, 5, 6];
// emptyArray.pop();
// console.log(); //[1, 2, 3, 4, 5]

// const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
// console.log(plants.pop()); //tomato

//ЛОГІЧНІ ОПЕРАТОРИ
// I - &&
// або - ||
// не - !

// IF ELSE
// const number1 = Number(prompt("enter a number"))
// console.log(number1)
// const number2 = Number(prompt("enter a number"))
// console.log(number2)

// if (number1 > number2) {
//     console.log("im here!")
// } else {
//     console.log("sorry!")
// }

// SWITCH
// const number6 = Number(prompt("Enter a num between 0 and 3"))

// switch (number6) {
//     case 0:
//         console.log('You entered 0')
//         break;
//     case 1:
//         console.log('You entered 1')
//         break;
//     case 2:
//         console.log('You entered 2')
//         break;
//     case 3:
//         console.log('You entered 3')
//         break;
//     case 4:
//         console.log('You entered 4')
//         break;
// }

// const name = prompt("Whats your name?")
// console.log("Hello " + name);

// const likeCats = confirm("Do you like cats?");
// if (likeCats) {
//   console.log("You are a cool cat!");
// } else {
//   console.log("Yeah,u are still cool");
// }
 
//ГРА ШИБЕНИЦЯ 
// const words = ["javascript", "monkey", "amazing", "puncake"];
// const word = words[Math.floor(Math.random()*words.length)];

// let answerArray = []
// for (let i = 0; i < words.length; i++ ) {
//   answerArray[i] = "_";
// }

// let remainingLetters = word.length;

// while (remainingLetters >0) {
//   alert (answerArray.join(" "))

// let guess = prompt("Guess a letter or click Cansel to stop playing.");
// if (guess === null){
//   break;
// } else if (guess.length !==1) {
//   alert ("Please enter a single letter") 
// } else {
//   for (let j = 0; j <word.length;j ++) {
//     if (word[j] === guess){
//       answerArray[j] = guess;
//       remainingLetters--;
//     }
//   }
// }

// }

// alert(answerArray.join(" "));
// alert("Good job. The answer was " + word);

6