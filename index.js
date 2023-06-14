const inputBox = document.querySelector(".wrapper input");
const nums = document.querySelectorAll(".nums");

nums.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(inputBox.value == "0"){
            inputBox.value == ""
        }
        let btnVal = btn.textContent;
        if(btnVal != "C" && btnVal != '←' && btnVal != "="){
           
            inputBox.value += btn.textContent;
            
        }

        if(btnVal == "←"){
            let inputVal = inputBox.value;
            inputVal = Math.floor(inputVal / 10)
            inputBox.value = inputVal
            console.log(inputBox.value)
            console.log(typeof inputBox.value)
        }
    })
})