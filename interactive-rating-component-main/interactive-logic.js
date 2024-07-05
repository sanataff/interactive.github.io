


const body = document.querySelector("body")
const component = document.querySelector("#component")
const rating = document.querySelector("#rating-div")



for (let i = 0;i<6; i++){
    const circle = document.createElement("div")
    circle.className = "number-circle"
    circle.textContent = `${i}`
   
    rating.appendChild(circle);

    


    
}
const circles = document.querySelectorAll(".number-circle")



