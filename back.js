

let buttons=document.querySelectorAll(".button");
console.log(buttons);

let text=document.querySelector(".text");

function reset_button_color(){
    buttons[0].style.backgroundColor="#1d1e24";
    buttons[1].style.backgroundColor="#1d1e24";
    buttons[2].style.backgroundColor="#1d1e24";
    buttons[3].style.backgroundColor="#1d1e24";
};
    
buttons[0].addEventListener("click", function clicked(){
    reset_button_color();
    buttons[0].style.backgroundColor="#D80032";
    text.textContent="Python ★★★⚝⚝ HTML ★★★★⚝  CSS  ★★★⚝⚝  Java ★★★⚝⚝ English  ★★★★⚝";
    text.style.width="140";
   
    
})
buttons[1].addEventListener("click", function clicked(){
    reset_button_color();
    buttons[1].style.backgroundColor="#D80032";
    text.textContent="English YOKDIL-C1  German A1 (developing) Turkish Native";
    text.style.width="175 ";
})
buttons[2].addEventListener("click", function clicked(){
    reset_button_color();
    buttons[2].style.backgroundColor="#D80032";
    text.textContent="Balıkesir University - Mechanical Engineering   Udemy-Python Bootcamp Full-Stack Bootcamp by Angela Yu";
    text.style.width="350";
})
buttons[3].addEventListener("click", function clicked(){
    reset_button_color();
    buttons[3].style.backgroundColor="#D80032";
    text.textContent=".Net for web and mobile and cloud based security. ";
    text.style.width="auto";
})
