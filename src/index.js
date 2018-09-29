// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

let result = {};

if (currency === 0) {
    return result;
    }
    else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {

        const valuesList = {"H":50, "Q":25, "D":10,"N":5, "P":1};
        result = {"H":0, "Q":0, "D":0,"N":0, "P":0};
        let restAmount  = currency;

        for (let key in valuesList) {

            let numCoins  = takeWholes(restAmount/valuesList[key]);
            if (numCoins > 0) {     
                restAmount = restAmount - valuesList[key] * numCoins   
                result[key] = numCoins; 

            } else delete result[key];
        }        
        return result;  
    }    
}

function takeWholes(number) {return  Math.trunc(number);}

