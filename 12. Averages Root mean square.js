function rms(arr) {
    let last = arr[arr.length-1]; 
    let res = (last * (last + 1) * (2*last + 1)) / 6;
    console.log(Math.sqrt(res/last)); 
}

rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])