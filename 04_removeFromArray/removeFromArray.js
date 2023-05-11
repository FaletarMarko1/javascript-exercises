const removeFromArray = function(arraj, ...element) {

    let newArr = [];

    arraj.forEach((item) => {
        if(!element.includes(item)){
            newArr.push(item);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
