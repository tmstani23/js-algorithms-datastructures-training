

// convert binary digit array to real number.
// 321686421
//[0,1,1,0] = 6
//[1,1,1,1] = 15
// [0,1,1,1] = 7
// [1,0,1,1] = 11
// [1,1,0,1] = 13
// [1,1,1,0] = 14
// [1,1,1,1,1,0] = 62

decToReal = (arr) => {
    let accumulator = 1
    let result = arr.reverse()
    .map((val, index) => {
        index != 0 
        ? accumulator = accumulator * 2
        : accumulator = 1
        
        console.log(accumulator, index);
        return val*accumulator;
    })
    .reduce((acc, val) => acc + val )
    
    return console.log(result);

}

//decToReal([0,1,1,1]);
//decToReal([0,1,1,0]);
//decToReal([1,1,1,1]);
//decToReal([1,0,1,1]);
//decToReal([1,1,1,0]);
decToReal([1,1,1,1,1,0])