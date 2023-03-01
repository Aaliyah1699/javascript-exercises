// takes 2 arguments
const repeatString = function (word, num) {
    // create a variable to hold the sting that will be returned
    let text = '';
    
    if (num < 0) return 'ERROR';
    
//create a loop that repeats the given number of times
    for (i = 0; i < num; i++) {
       // add the given string to the result on each loop 
        text += word;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
