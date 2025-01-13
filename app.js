const dollars_yen = 110;
//un dollar es 110 yens

const yen_to_pounds = 0.0069;
// un yen es igual 0.0069 libras

const fromEuroToDollar = (euroAmount) => {
    const tasadecambio = 1.2;
    return euroAmount * tasadecambio;
};



const fromDollarToYen = (dollarAmount) => {
    return dollarAmount * dollars_yen;
};

const fromYenToPounds = (yenAmount) => {
    return yenAmount * yen_to_pounds;
};

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPounds}



