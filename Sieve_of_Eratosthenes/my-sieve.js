/** @param {number} limit */
function eratosthenes(limit) {
    /** @type {number[]} */
    var primes = [];
    /** @type {number} */
    var squarePosition = -1;
    /** @type {number} */
    var square = 0;
    /** @type {number[]} */
    var counters = [];
    /** @type {number} */
    var current = 2;
    if (limit >= 2){
        primes = [2];
        counters[2] = 0;
        squarePosition = 0;
        square = 4;
    }
    while(++current <= limit) {
        /** @type {boolean} */
        let knowIfHasAnotherDivisor = false;
        for(var i=0; i<squarePosition; i++){
            let prime = primes[i];
            counters[prime]++;
            if(counters[prime]==prime){
                counters[prime]=0;
            }
            knowIfHasAnotherDivisor = knowIfHasAnotherDivisor || !counters[prime]
        }
        if(current == square){
            let prime = primes[squarePosition];
            counters[prime] = 0;
            squarePosition++;
            let nextPrime = primes[squarePosition];
            square = nextPrime * nextPrime;
        }else if(!knowIfHasAnotherDivisor){
            primes.push(current);
        }
    }
    return primes;
}


var start=new Date();
var last=new Date();
var limit=1024;
var result;
var counter=0;
var acum=0;
var now;
while(last-2000 < start){
    now=new Date();
    if(now-last<1000){
        limit*=2;
    }
    counter++;
    result=eratosthenes(limit);
    acum+=limit;
    last=now;
}
console.log(result);
console.log(now-start,limit,counter,acum, acum/(now-start))
// lineal:  4129   131072   8    391168 94.73674013078227
// squares: 2766 2097152   13   8386560 3032.0173535791755
// rosetta: 3520 268435456 19 805304320 228779.63636363635

