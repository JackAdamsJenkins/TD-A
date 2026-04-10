// // //  Variables
// // let maVar = "true" // valeur qui est amenée à changer
// // const maConst = "Autre valeur" // Ne changera jamais

// // // Structures conditionnelles
// // // if(condition et condition ou (condition et condition))
// // if(maVar == "true"){
// //     console.log("C'est vrai !")
// // } else if(maVar == "titi"){
// //     console.log("titi")
// // } else {
// //     console.log("On est dans le else")
// // }

// // switch(maVar){
// //     case "true":
// //         console.log("C'est ok")
// //     break
// //     case "titi":
// //         console.log("titi")
// //     break
// //     default:
// //         console.log("On est dans le cas par défaut")
// // }

// // // Ternaire
// // // variable = (condition) ? valeur si vrai : valeur si faux
// // let age = 19
// // let information = age >= 18 ? "Majeur" : "Mineur"
// // if(age >= 18){
// //     information = "Majeur"
// // } else {
// //     information = "Mineur"
// // }

// // if(age > 16 && age < 18){
// //     console.log("Pas encore majeur")
// // } else if (age > 18 && age < 30){
// //     console.log("jghjkl")
// // }
// // // Boucles
// // // while → Structure iterative universelle
// // //  for
// //     // for(compteur; condition; incrémentation/décrémentation)
// //     // for in
// //     // for of
// // // forEach

// // age = 25
// // const prenom = "Jean-Louis"
// // const nom = "Errante"
// // console.log("Bonjour je m'appelle "+prenom+" et mon nom de famille c'est "+nom+", j'ai "+age+" ans")
// // console.log("Bonjour je m'appelle "+prenom+" "+nom+", j'ai "+age+" ans")
// // console.log(`Bonjour je m'appelle ${prenom} ${nom}, j'ai ${age} ans`) 

// // // for(compteur; condition; incrémentation/décrémentation)
// // for(let i; i < 100; i = i + 2){
// //     console.log("Nombre pair : "+ i)
// // }

// // // Boucle while
// // // Amorçage, la variable de boucle
// // let i = 1
// // while(i < 100){
// //     console.log(`Nombre impair ${i}`)
// //     // Modification de la condition
// //     // i = i + 2 → équivalent à la ligne au dessous
// //     i += 2
// // }

// // let valeur = "huhu"
// // while (valeur != "ahah"){
// //     console.log("La valeur est différente")

// //     valeur = "ahah"
// // }

// // // DRY = Don't Repeat Yourself
// // // Fonctions
// // function direBonjour(prenom){
// //     console.log(`Bonjour ${prenom}`)
// // }
// // direBonjour("Jean-Louis")
// // direBonjour("Gérard")

// // const sayHello = (prenom) => {
// //     console.log(`Bonjour ${prenom}`)
// // }
// // sayHello("Jean-Louis")
// // sayHello("Gérard")

// // const h1 = document.querySelector("h1")
// // // h1.innerHTML = "Toto <br/> fghjkl"
// // h1.textContent = "Titi <br/> ghjk"

// const monPremierArticle = `
//         <article>
//             <div>
//                 <h2>fdghjkl</h2>
//                 <ul>
//                     <li>A</li>
//                     <li>B</li>
//                     <li>C</li>
//                     <li>D</li>
//                     <li>E</li>
//                 </ul>
//             </div>
//         </article>
// `
// // beforebegin
// // afterbegin
// // beforeend
// // afterend
// //  insertAdjacentHTML(position, le html)
// document.querySelector("body > section:nth-child(2)").insertAdjacentHTML("beforeend", monPremierArticle)


// const h1 = document.querySelector('h1')
// let count = 0
// const title = h1.textContent
// // h1.addEventListener('type événement à observer', fonction à lancer)
// h1.addEventListener('click', () => {
//     count++
//     h1.textContent = `${title}, Vous avez cliqué ${count} fois`
// })

// localStorage.setItem("clé", valeur au format STRING)
localStorage.setItem("prenom", "Jean-Louis")
// localStorage.getItem("clé")
const prenom = localStorage.getItem("prenom")
console.log(prenom)

const person = {
    prenom: "Jean-Louis",
    nom: "Errante",
    age: 29
}


console.log(person.nom)
const strPerson = JSON.stringify(person)
localStorage.setItem('person', strPerson)
const parsePerson = JSON.parse(localStorage.getItem('person'))

console.log(parsePerson)
console.log(localStorage.getItem('person'))

const fruits = ["tomate", "pomme", "banane", "orange"]

const ul = document.querySelector('ul')

fruits.forEach((el) => {
    ul.insertAdjacentHTML("beforeend", `<li>${el}</li>`)
})

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', (el) => {
        console.log("Tu as cliqué sur le bouton")
    })
})