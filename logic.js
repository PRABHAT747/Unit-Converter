const inputEl = document.getElementById("inp");
const unitEl =document.getElementsByClassName("units")
const buttonEl =document.getElementById("btn")
const lenEl = document.getElementById("len")
const volEl = document.getElementById("vol")
const massEl =document.getElementById("mass")

buttonEl.addEventListener("click",function(){
    let val = inputEl.value;
    let meter = val*3.28 ;
    let foot = val/3.28 ;
    let litre =val*3.78 ;
    let gallon = val/3.78 ;
    let kilo =val/0.45;
    let poun = val*0.45 ;

    lenEl.innerHTML=` 
    <h3>
    Length (Meter/Feet)
    </h3>  
    <p class = "style">
    ${val} meters equals ${meter.toFixed(2)} foots | ${val} feets equals ${foot.toFixed(2)} meters
    </p>`
    volEl.innerHTML=`
    <h3>
    Volume (Litres/Gallons)
    </h3>
    <p class = "style">
    ${val} litres equals ${gallon.toFixed(2)} gallons | ${val} gallons equals ${litre.toFixed(2)} litres
    </p>`
    massEl.innerHTML=`
    <h3>
    Mass (Kilograms/Pounds)
    </h3>
    <p class= "style">
    ${val} kilo equals ${kilo.toFixed(2)} pounds | ${val} pounds equals ${poun.toFixed(2)} kilos
    </p>
    `

    
})