## Dom Related Projects

### 1. Color scheme changer

```js
const greybox = document.querySelector("#grey")
const whitebox = document.querySelector("#white")
const bluebox = document.querySelector("#blue")
const yellowbox = document.querySelector("#yellow")
const msg = document.querySelector("h2 span")


const body = document.querySelector("body")

greybox.addEventListener("click", ()=>{
  body.style.backgroundColor = "grey"
  msg.innerText = "bg color changed to grey"
})

whitebox.addEventListener("click", ()=>{
  body.style.backgroundColor = "white"
  msg.innerText = "bg color changed to white"
})

bluebox.addEventListener("click", ()=>{
  body.style.backgroundColor = "blue"
  msg.innerText = "bg color changed to blue"
})

yellowbox.addEventListener("click", ()=>{
  body.style.backgroundColor = "yellow"
  msg.innerText = "bg color changed to yellow"
})

```
### 2. BMI Calculator

```javascript
const form = document.querySelector("form")

form.addEventListener("submit", function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('.height').value);
  const weight = parseInt(document.querySelector('.weight').value);
  const results = document.querySelector('#results')

  if(height === '' || height <= 0 || isNaN(height)){
    results.innerHTML = "Give a valid height"
  }
  else if(weight === '' || weight <= 0 || isNaN(weight)){
    results.innerHTML = "Give a valid weight"
  }
  else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2)
    if(bmi < 18.6){
      results.innerText = `underweight: ${bmi}`
    }
    else if(bmi > 24.9){
      results.innerText = `overweight: ${bmi}`
    }
    else{
      results.innerText = `healthy: ${bmi}`
    }
  }

})

```

### 3. Digital Clock

```javascript
const clock = document.getElementById("clock")


setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```
### 4. Number Guessing Game

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener("click", function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number")
  }
  else if(guess < 1){
    alert("Please enter a valid number")
  }
  else if(guess > 100){
    alert("Please enter a valid number")
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`Number is too low`)
  }
  else if(guess > randomNumber){
    displayMessage(`Number is too high`)
  }

}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener("click", (e)=> {
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    
    playGame = true
  })
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id= "newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

```
