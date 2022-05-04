const resolveBtn = document.querySelector(".resolve-btn")
const aArr = []
const dArr = []

let aDiceNum = ""
let dDiceNum = ""

resolveBtn.disabled = true

// Dice quantity selection
document.querySelector("div.army-quantity").addEventListener("click", setQuantity)

// Dice rollAndDisplay function on Resolve onclick event
resolveBtn.addEventListener("click", rollAndDisplay)

// Functions
function setQuantity(e) {
    // Check if a radio button triggered the event
    if (e.target.name === "attack-dice-quantity") {
        aDiceNum = parseInt(e.target.value)
    } else if (e.target.name === "defence-dice-quantity") {
        dDiceNum = parseInt(e.target.value)
    }

    if (aDiceNum && dDiceNum) {
        resolveBtn.disabled = false
    }
}

function rollAndDisplay() {
    aArr.length = 0
    dArr.length = 0

    document.querySelector(".attack").innerHTML = `<h3>Attacker's army</h3>`
    document.querySelector(".defence").innerHTML = `<h3>Defender's army</h3>`

    resolveBtn.disabled = true

    for (let i = 0; i < aDiceNum; i++) {
        aArr.push(Math.floor(Math.random() * 6) + 1)
        aArr.sort(function(a, b){return b - a})

        document.querySelector(`#attack${aDiceNum}`).checked = false
    }
    for (let i = 0; i < dDiceNum; i++) {
        dArr.push(Math.floor(Math.random() * 6) + 1)
        dArr.sort(function(a, b){return b - a})
        
        document.querySelector(`#defence${dDiceNum}`).checked = false
    }
    
    for (let i = 0; i < aArr.length; i++) {
        document.querySelector(".attack").innerHTML += 
        `<img src="/images/a${aArr[i]}.png" id= "a${aArr[i]}" class="dice-images" alt="red dice with number ${aArr[i]}">`
    }
    for (let i = 0; i < dArr.length; i++) {
        document.querySelector(".defence").innerHTML += 
        `<img src="/images/d${dArr[i]}.png" id= "a${dArr[i]}" class="dice-images" alt="blue dice with number ${dArr[i]}">`
    }
    
    aDiceNum = ""
    dDiceNum = ""
}
