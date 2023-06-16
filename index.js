const inputBox = document.querySelector(".wrapper input");
const nums = document.querySelectorAll(".nums");

let operator = ["/","+","-","%","*"];

nums.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let operMatch = false;
        let inputBlock = false;
        let btnVal = btn.textContent;

        if(btnVal != "C" && btnVal != "←" && btnVal != "="){

            if(inputBox.value == "0"){
                inputBox.value = "";
            }
            if(btnVal == "/" || btnVal == "+" || btnVal == "-" || btnVal == "*" || btnVal == "%"){
                let inputLastVal = inputBox.value[inputBox.value.length -1];
                for(let i=0; i<operator.length; i++){
                    if(operator[i] == inputLastVal){
                        operMatch = true;
                        break;
                    }
                }

                if(operMatch){
                   if(btnVal == inputLastVal){
                        inputBlock = true;
                   }
                   else{
                    let tempStr = inputBox.value;
                    let modStr = tempStr.substring(0,tempStr.length - 1);
                    inputBox.value = modStr;
                   }
                }
            }

            if(!inputBlock){
                inputBox.value += btnVal;
            }

        }
         
        if(btnVal == "="){
            if(inputBox.value){
                calVal();
            }
         }   

        //clear the text one by one
        if(btnVal == "←"){
            let inputStr = inputBox.value;
            let modifiedStr = inputStr.substring(0,inputStr.length-1);
            inputBox.value = modifiedStr;
            if(inputBox.value == ""){
                inputBox.value = "0";
            }
        }

        if(btnVal == "C"){
            inputBox.value = "";
        }
   
    })
        
})
            
       
function calVal(){
    let opt = "";
    let fNum = "";
    let secNum = "";
    let second = false;
    let first = true;

    for(let num of inputBox.value){
        if(second){
            secNum += num
        }
        if(isNaN(num)){
            opt = num;
            second = true;
            first = false;
        }
        if(first){
            fNum += num;
        }
    
    }
    
    
   
    let result = eval(fNum + opt + secNum);
    
    inputBox.value = result;
}
    

