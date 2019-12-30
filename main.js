function addString(input){
    document.getElementById("solution").innerHTML = input;
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



$(document).ready(function(){

    var input = "";

    $("#0").click(function(){input = input + "0"; addString(input);});
    $("#1").click(function(){input = input + "1"; addString(input);});
    $("#2").click(function(){input = input + "2"; addString(input);});
    $("#3").click(function(){input = input + "3"; addString(input);});
    $("#4").click(function(){input = input + "4"; addString(input);});
    $("#5").click(function(){input = input + "5"; addString(input);});
    $("#6").click(function(){input = input + "6"; addString(input);});
    $("#7").click(function(){input = input + "7"; addString(input);});
    $("#8").click(function(){input = input + "8"; addString(input);});
    $("#9").click(function(){input = input + "9"; addString(input);});

    $("#mult").click(function(){input = input + "x"; addString(input); });
    $("#div").click(function(){input = input + "/"; addString(input); });
    $("#plus").click(function(){input = input + "+"; addString(input); });
    $("#minus").click(function(){input = input + "-"; addString(input);});

    $("#period").click(function(){input = input + "."; addString(input);});

  


    $("#sin").click(function(){
        input = "sin(" + input + ")";
        document.getElementById("solution").innerHTML = input;
    });
    $("#cos").click(function(){
        input = "cos(" + input + ")";
        document.getElementById("solution").innerHTML = input;
    });
    $("#tan").click(function(){
        input = "tan(" + input + ")";
        document.getElementById("solution").innerHTML = input;
    });


    $("#equals").click(function(){
        document.getElementById("solution").innerHTML = doMath(input);
        input = doMath(input).toString()
    });

    $("#clear").click(function(){ 
        document.getElementById("solution").innerHTML = "Calculator";
        input = "";
    });




});
