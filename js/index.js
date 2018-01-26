const a = parseInt(prompt('Enter A'));
const b = parseInt(prompt('Enter B'));
const c = parseInt(prompt('Enter C'));

document.write(quadraticEquation(a,b,c));

function quadraticEquation(a,b,c){    
    const desc = discriminant(a,b,c);

    let x1;
    let x2;
    
    if (desc > 0){
        x1 = (-b+Math.sqrt(desc))/(2*a);
        x2 = (-b-Math.sqrt(desc))/(2*a);
    }

    else if (desc === 0){
        x1 = -b/(2*a);
        return "x = " + x1;
    }

    else if (desc < 0){
        return "Error! <br>Discriminant < 0";
    }

    else{
        return "Some Error";
    }
    
    return "<b>" + "x1 = " + "</b>" + x1 + "<br>" + "<b>" + " x2 = " + "</b>" + x2;
}


function discriminant(a,b,c){
    let result = Math.pow(b,2)-4*a*c;
    return result;
}
