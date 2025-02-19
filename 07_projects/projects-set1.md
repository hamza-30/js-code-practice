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
