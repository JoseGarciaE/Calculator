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


    left = parseInt(left);

  
    right = parseInt(right);


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

    document.getElementById("solution").innerHTML = solution;


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

    $("#mult").click(function(){input = input + "x"; addString(input); math = true; });
    $("#div").click(function(){input = input + "/"; addString(input); math = true;  });
    $("#plus").click(function(){input = input + "+"; addString(input); math = true; });
    $("#minus").click(function(){input = input + "-"; addString(input); math = true;});

    $("#period").click(function(){input = input + "."; addString(input);});

    $("#equals").click(function(){

        doMath(input);
    });




});
