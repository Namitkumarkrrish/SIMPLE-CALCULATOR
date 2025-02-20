let digit=document.querySelector("p");
let ui;
function calculate(ui){
    if(ui=='='){
        let d=digit.innerText[digit.innerText.length-1];
        var k="";
        if(d=='+'|| d=='-'|| d=='*'|| d=='/'||d=='%'){
            for(let i=0;i<digit.innerText.length-1;i++){
                k=k+digit.innerText[i];
            }
            let val = eval(k.replace(/^0+(\d)/, '$1'));
            digit.innerHTML=val;
        }
        else{
            let val = eval(digit.innerText.replace(/^0+(\d)/, '$1'));
            digit.innerHTML=val;
        }
    }
    else if(ui=='AC'){
        digit.innerText=0;
    }
    else if(ui=='DEL'){
        let d="";
        for(let i=0;i<digit.innerText.length-1;i++){
            d=d+digit.innerText[i];
        }
        digit.innerText=d;
    }
    else{
        let d=digit.innerText[digit.innerText.length-1];
        if(d=='+'|| d=='-'|| d=='*'|| d=='/'||d=='%'){
            if(ui=='+'|| ui=='-'|| ui=='*'|| ui=='/'|| ui=='%'){
                digit.innerText=digit.innerText;
            }
            else{
                digit.innerText=digit.innerText+ui;
            }
        }
        else{
            digit.innerText=digit.innerText+ui;
        }
    }
}
console.log(digit.innerText);
//digit=5+4
