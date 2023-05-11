const repeatString = function(rijec, broj) {
    let string = rijec;
    let brojp = broj;
    if(brojp >= 0){
        return string.repeat(brojp);
    }else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
