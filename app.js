import mydata from "./data.json" assert {type:'json'}

const datarepresent = document.querySelectorAll(".datarepresent")
const total = document.querySelector("#totalspending")
let i = 0
let amount 
let totalamount = 0
datarepresent.forEach((representeddata)=>{
    totalamount = totalamount + mydata[i].amount
    amount = mydata[i].amount/10
    representeddata.style.height = `${amount}rem`
i++
})
total.innerHTML = `$${totalamount}` ;


