function mode(arr) {
    let max = 0;
    let result = [];
    const rel = {};
    // for (const i in arr) {
    arr.forEach(e => {
      if (rel[e] == undefined) {
        rel[e] = 0;
      }
      rel[e]++;
  
      if (rel[e] === max) {
        result.push(e);
      }
      else if (rel[e] > max) {
        max = rel[e];
        result = [e];
      }
    });
    return result;
  }
  
