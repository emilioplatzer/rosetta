/** @param {number} limit */
function eratosthenes(limit) {
    /** @type {number[]} */
    var prms = [];
    if (limit >= 2) prms = [2];
    if (limit >= 3) {
        var sqrtlmt = (Math.sqrt(limit) - 3) >> 1;
        var lmt = (limit - 3) >> 1;
        var bfsz = (lmt >> 5) + 1
        var buf = [];
        for (var i = 0; i < bfsz; i++)
            buf.push(0);
        for (var i = 0; i <= sqrtlmt; i++)
            if ((buf[i >> 5] & (1 << (i & 31))) == 0) {
                var p = i + i + 3;
                for (var j = (p * p - 3) >> 1; j <= lmt; j += p)
                    buf[j >> 5] |= 1 << (j & 31);
            }
        for (var i = 0; i <= lmt; i++)
            if ((buf[i >> 5] & (1 << (i & 31))) == 0)
                prms.push(i + i + 3);
    }
    return prms;
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
// 3520 268435456 19 805304320 228779.63636363635

