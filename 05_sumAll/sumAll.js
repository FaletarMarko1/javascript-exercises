const sumAll = function(b1, b2) {
    let sum = 0;
    let br1 = b1;
    let br2 = b2;

    if(br1 < 0 || br2 < 0 || !Number.isFinite(br1) || !Number.isFinite(br2)){
        return "ERROR";
    }else if(br1 < br2){
        for (let i = b1; i <= b2; i++){
            sum += i;
        }
        return sum;
    }else{
        for (let i = b2; i <= b1; i++){
            sum += i;
        }
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
