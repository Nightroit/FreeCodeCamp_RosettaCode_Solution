function ack(m, n) {
    let arr = []; 
    arr.push(n+1); 
    for(let i = 1; i <= n; i++) {
        arr.push(arr[i-1] + 1); 
    }
    return arr[n];
}

console.log(ack(1, 1)); 