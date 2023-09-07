const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

//how to create a variable and changed it below
let selectedRating = "";


ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click", (event) => {
    //    console.log(event.target.innerText || event.target.parentNode.innerText);
       //adding class to the ratings
       removeActive();
       selectedRating = event.target.innerText || event.target.parentNode.innerText;
       event.target.classList.add("active");
       event.target.parentNode.classList.add("active");
    });
});
 // br means empty line  
btnEl.addEventListener("click", () => {
    if(selectedRating !== ""){
        containerEl.innerHTML =`
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feeback to improve our costomer support.</p>
        `

    }
      
       
});
// to inactive the rating after clicking one we create a function or removing a class using forEach method
function removeActive(){
    ratingEls.forEach((ratingEl) =>{
        ratingEl.classList.remove("active");
    });
}