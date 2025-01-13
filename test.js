const {fromDollarToYen, fromEuroToDollar, fromYenToPounds} = require ("./app.js");


test ("1 euro should be 1.2 dollars", ()=>{
    expect( fromEuroToDollar(1)).toBe(1.2);
});

test ("1 dollar should be 110 yens", () =>{
    expect(fromDollarToYen(1)).toBe(110);
});

test ( "1000 yen es igual 6.9 libras", () => {
    expect(fromYenToPounds(1000)).toBeCloseTo(6.9);
});

