let userAge = 12;
let isCitizen = true;
let isRegistered = true;


if (userAge >= 18){
    if (isCitizen){
        if (isRegistered){
            console.log("You are eligible to vote.");
        }
             else{
                console.log("You are not eligible due to registration status.");
        }
    }
        else{
            console.log("You are not eligible due to citizenship status.");
        }
    
    }
    else{
        console.log("You are not eligible to vote.");
    }






