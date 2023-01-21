let lengthEl = document.getElementById("length-el")
let inputEl = document.getElementById("inputt")
let convertBtn = document.getElementById("btn")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

btn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet` 
})
btn.addEventListener("click", function() {
    let baseValuee = inputEl.value
    
    volumeEl.textContent = `${baseValuee} liter = ${baseValuee * literToGallon} gallon` 
})
btn.addEventListener("click", function() {
    let baseValueee = inputEl.value
    
    massEl.textContent = `${baseValueee} kilo = ${baseValueee * kiloToPound} pound` 
})
