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
                i = input.length;
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

function disableMath(){
    const arithmetic = document.querySelectorAll(".arithmetic");
    for(const elem of arithmetic)
        elem.disabled = true;
}
function enableMath(){
    const arithmetic = document.querySelectorAll(".arithmetic");
    for(const elem of arithmetic)
        elem.disabled = false;
}

document.addEventListener("DOMContentLoaded", function() {

    let input = "";

    const basicMath = document.querySelectorAll(".basicMath");

    for(const elem of basicMath){
        elem.addEventListener("click", function() {
            if(elem.textContent == "x" || elem.textContent == "/" || elem.textContent == "+")
                disableMath();
            input += elem.textContent;
            document.querySelector("#solution").textContent = input;
        });
    }
    
    const trig = document.querySelectorAll(".trig");

    for(const elem of trig){
        elem.addEventListener("click", function(){
            disableMath();
            if(document.querySelector("#solution").textContent != "Calculator"){
                input = elem.textContent + "(" + input + ")";
                document.querySelector("#solution").textContent = input;
            }
        });
    }

    document.querySelector("#equals").addEventListener("click", function(){
            document.querySelector("#solution").textContent = doMath(input);
            input = doMath(input).toString()
            enableMath();
    });

    document.querySelector("#clear").addEventListener("click", function(){
            document.querySelector("#solution").textContent = "Calculator";
            input = "";
            enableMath();
    });

});