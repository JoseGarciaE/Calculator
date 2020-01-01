function doMath(input){

    const isTrig = input[0] + input[1] + input[2];

    let solution = "";

    if(isTrig === "sin" || isTrig === "cos" || isTrig === "tan"){
        let value = "";

        for(i=4; i<input.length-1; i++)
            value = value + input[i];

        value = parseFloat(value);

        if(isTrig==="sin")
            value = Math.sin(value);
        else if(isTrig==="cos")
            value = Math.cos(value);
        else
            value = Math.tan(value);
        
        solution = value;
    }
  
    else{

        let left = "";
        let right = "";
       
        var count = -1;

        for(i=0; i<input.length; i++){
            left = left + input[i];
            count++;

            if(input[i] == "x" || input[i] == "/" || input[i] == "+" || input[i] == "-")
                i = 100;
        }

        for(i=count+1; i<input.length; i++)
            right = right + input[i];

        left = parseFloat(left);
        
        right = parseFloat(right);

        if(input[count] == "x")
            solution = left * right;
        
        else if(input[count] == "/")
            solution = left / right;
        
        else if(input[count] == "+")
            solution = left + right;
        
        else 
            solution = left - right;

    }


    return solution; 

}

function CheckForBlock(input){
    let temp = "";
    temp = input.substring(0,input.length-1);
    for(const element of temp){
        if(element === "x" || element === "/" || element === "+" || element === "-" || element == "(")
            return true;
    }
    return false;
}

document.addEventListener("DOMContentLoaded", function() {

    let input = "";

    let block = false;

    const basicMath = document.querySelectorAll(".basicMath");

    for(const element of basicMath){
        element.addEventListener("click", function(){
            if(CheckForBlock(input) == false){
                input += element.textContent;
                document.querySelector("#solution").textContent = input;
            }
        });
    }
   
    const trig = document.querySelectorAll(".trig");

    for(const element of trig){
        element.addEventListener("click", function(){
            if(CheckForBlock(input) == false)
                if(document.querySelector("#solution").textContent != "Calculator"){
                    input = element.textContent + "(" + input + ")";
                    document.querySelector("#solution").textContent = input;
                }
        });
    }

    document.querySelector("#equals").addEventListener("click", function(){
        block = false;
        document.querySelector("#solution").textContent = doMath(input);
        input = doMath(input).toString()
    });

    document.querySelector("#clear").addEventListener("click", function(){
        block = false;
        document.querySelector("#solution").textContent = "Calculator";
        input = "";
    });

});
