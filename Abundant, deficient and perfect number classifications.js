function isPerfect(n) {
    let sum = 0; 
    let count = 0; 
    for(let i = 1; i < n; i++) {
        if(n % i == 0) {
            sum += i; 
        }
    }
    if(sum < n)
        return 0 
    if(sum == n && n != 1) 
        return 1;    
    if(sum > n) {
        return 2;
    }
    return 0; 
}
function getDPA(n) {
    let rel = [0, 0, 0]; 
    for(let i = 1; i <= 20000; i++) 
        rel[isPerfect(i)]++;
    return rel; 
}

console.log(getDPA(496)); 

