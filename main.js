function addString(input){
    document.querySelector("#solution").textContent = input;
}

function doMath(input){

    var trig = input[0] + input[1] + input[2];

    if(trig !== "sin" && trig!== "cos" && trig!== "tan"){
        var left = "";
        var right = "";
        var solution = "";

        var count = -1;


        for(i=0; i<input.length; i++){
            left = left + input[i];
            count++;

            if(input[i] == "x" || input[i] == "/" || input[i] == "+" || input[i] == "-")
                i = 100;
        }

        for(i=count+1; i<input.length; i++){
            right = right + input[i];
        }


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
  

    else{
       
        var value = "";

        for(i=4; i<input.length-1; i++){
            value = value + input[i];
        }

        value = parseFloat(value);

        if(trig==="sin")
            value = Math.sin(value);
        else if (trig==="cos")
            value = Math.cos(value);
        else
            value = Math.tan(value);
        
        
        solution = value;

    }

    return solution; 



}



document.addEventListener("DOMContentLoaded", function() {

    var input = "";

    document.querySelector("#num0").addEventListener("click", function(){
        input += "0";
        addString(input);
    })
    document.querySelector("#num1").addEventListener("click", function(){
        input += "1";
        addString(input);
    })
    document.querySelector("#num2").addEventListener("click", function(){
        input += "2";
        addString(input);
    })
    document.querySelector("#num3").addEventListener("click", function(){
        input += "3";
        addString(input);
    })
    document.querySelector("#num4").addEventListener("click", function(){
        input += "4";
        addString(input);
    })
    document.querySelector("#num5").addEventListener("click", function(){
        input += "5";
        addString(input);
    })
    document.querySelector("#num6").addEventListener("click", function(){
        input += "6";
        addString(input);
    })
    document.querySelector("#num7").addEventListener("click", function(){
        input += "7";
        addString(input);
    })
    document.querySelector("#num8").addEventListener("click", function(){
        input += "8";
        addString(input);
    })
    document.querySelector("#num9").addEventListener("click", function(){
        input += "9";
        addString(input);
    })

    
    document.querySelector("#mult").addEventListener("click", function(){
        input += "x";
        addString(input);
    })
    document.querySelector("#div").addEventListener("click", function(){
        input += "/";
        addString(input);
    })
    document.querySelector("#plus").addEventListener("click", function(){
        input += "+";
        addString(input);
    })
    document.querySelector("#minus").addEventListener("click", function(){
        input += "-";
        addString(input);
    })
    document.querySelector("#period").addEventListener("click", function(){
        input += ".";
        addString(input);
    })




    document.querySelector("#sin").addEventListener("click", function(){
        input = "sin(" + input + ")";
        document.querySelector("#solution").textContent = input;
    });
    document.querySelector("#cos").addEventListener("click", function(){
        input = "cos(" + input + ")";
        document.querySelector("#solution").textContent = input;
    });
    document.querySelector("#tan").addEventListener("click", function(){
        input = "tan(" + input + ")";
        document.querySelector("#solution").textContent = input;
    });

    document.querySelector("#equals").addEventListener("click", function(){
        document.querySelector("#solution").textContent = doMath(input);
        input = doMath(input).toString()
    });

    document.querySelector(".clear").addEventListener("click", function(){
        document.querySelector("#solution").textContent = "Calculator";
        input = "";
    });

});
