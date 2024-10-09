function checkForSpam(message) {
    const messageToLowerCase = message.toLowerCase();

    return messageToLowerCase.includes("spam") || messageToLowerCase.includes("sale");

}


//
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true



//////NOT CORRECT CODE


// function checkForSpam(message) {
//     const messageToLowerCase = message.toLowerCase();

//     //the mistake is here
//     if (messageToLowerCase.includes("spam" || "sale", 0)) {
//         return true;
//     } else {
//         return false
//     }
//     /*У твоєму коді є одна помилка: ти неправильно використовуєш умову в messageToLowerCase.includes("spam" || "sale", 0). Оператор || не працює всередині методу includes так, як ти очікуєш. Потрібно перевірити кожне слово окремо.

// Виправлення полягає в тому, щоб зробити дві окремі перевірки за допомогою методу includes:

// function checkForSpam(message) {
//     const messageToLowerCase = message.toLowerCase();
//     return messageToLowerCase.includes("spam") || messageToLowerCase.includes("sale");
// }
// Тут кожна умова includes("spam") і includes("sale") перевіряється окремо, і якщо хоча б одна з них буде істинною, функція поверне true. */
// }


// //
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
