///Feladat 1 
var sum = 0;

for (var i = 1; i < 1000; i++) {
    if ((i % 3 == 0) || (i % 5 == 0)) {
        sum += i;
    }
}

document.getElementById("megoldas1").innerHTML = sum;

///Feladat 2

var oszto = 2;
var szam = 600851475143; 

while(szam > 1){
    if(szam % oszto === 0){
        szam /= oszto; 
    }
    else{
        oszto ++;
        
    }
    //console.log('oszto: ' + oszto);
    //console.log('szam: ' + szam);
}
document.getElementById("megoldas2").innerHTML = oszto;

///Feladat 3

function szamol(num){
    var i = 1;
    var number = 0;
    var prime = 2;

    while(i <= num){
        for(var j = 2; prime % j != 0;j++);
        if(prime == j){
            i++;
            number++;
            console.log('prime: ' + prime);
            if(number == num)
                document.getElementById("megoldas3").innerHTML = prime;
                
        }
        prime++;
        //console.log('j: ' + j);
        //console.log('i: ' + i);
        //console.log('prime: ' + prime);
        //console.log('number: ' + number);
    }
}
szamol(10001);