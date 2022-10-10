primearray = [];
function checkValid(form){
    if(isNaN(Num.value)== true|| Num.value < 0)
    {
        alert("Statement entered is not a Valid Number")
        document.getElementbyId("Num").style.borderColor="red";
        return false;
    }
    return true;

}
function Calculatenum(form){
var Numinput = Num.value;
    if(checkValid()== true)
    {
        ifprime(Numinput);
    }
    else{
        document.getElementById("solution").innerHTML = " ";
    }
}
function ifprime(N){
    
    primearray.splice(0);
    for(var i= 2; i <N; i++) {
        prime(i);
    }
    document.getElementById("solution").innerHTML = primearray;  
}
function prime(a)
{
    var j,flag = 0;
    for(j =1; j<=a; j++){
        if(a%j == 0){
            flag++;
        }
    }
    
    if(flag == 2){
        
        primearray.push(a);
    }
    else{
        console.log("not prime " +a);
    }

}
