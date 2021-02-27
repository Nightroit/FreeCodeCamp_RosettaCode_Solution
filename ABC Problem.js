function canMakeWord(word) {

    word = word.toUpperCase(); 
    let arr = [['B', 'O'],
        ['X', 'K'],
        ['D', 'Q'],
        ['C', 'P'],
        ['N', 'A'],
        ['G', 'T'],
        ['R', 'E'],
        ['T', 'G'],
        ['Q', 'D'], 
        ['F', 'S'],
        ['J', 'W'],
        ['H', 'U'],
        ['V', 'I'],
        ['A', 'N'],
        ['O', 'B'],
        ['E', 'R'],
        ['F', 'S'],
        ['L', 'Y'],
        ['P', 'C'],
        ['Z', 'M']
    ]
    for(let i = 0; i < word.length; i++) {
        let flag = 0; 
        for(let j = 0; j < arr.length; j++) {
            if(word[i] == arr[j][0] || word[i] == arr[j][1]) {
                flag = 1; 
                arr.splice(j, 1)
                break; 
            }
  
        }
        if(flag == 0) return false; 
        flag = 0; 
    }
    return true; 
}

