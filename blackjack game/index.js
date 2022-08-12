let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function getRandomCard() {
    let random = Math.floor( Math.random() * 13) + 1
    if (random > 10) {
        return 10
    } else if (random === 1) {
        return 11
    } else {
        return random
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard
    renderGame()
}

 function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = ("Do you want to Draw a card? ")
    } 
    else if (sum === 21) {
        message = ("Black jack")
        hasBlackjack = true
    } 
    else {
        message = ("You lose")
        isAlive = false
    }
    messageEl.textContent = message
 }

 function newCard() {
     if ( isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
     }
}


// learning codes
