function addString(input){
    document.getElementById("solution").innerHTML = input;
}

function doMath(input){

    
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


    if(input[count] == "x"){
        solution = left * right;
    }
    if(input[count] == "/"){
        solution = left / right;
    }
    if(input[count] == "+"){
        solution = left + right;
    }
    if(input[count] == "-"){
        solution = left - right;
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

    $("#equals").click(function(){
        document.getElementById("solution").innerHTML = doMath(input);
        input = doMath(input).toString()
    });




});
