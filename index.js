// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = ((ver1) => {
    return ver1.slice(0, 2);
})
console.log(returnFirstTwoDrivers(drivers));

//
const returnLastTwoDrivers = function(ver1){
    return ver1.slice(2, 4)
}
console.log(returnLastTwoDrivers(drivers));

//
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//
const createFareMultiplier = function(multiplier){
    return function(num1) {
      return multiplier * num1;
    }
}
function fareQuintupler(num1) {
    const quintupler = createFareMultiplier(5);
    return quintupler(num1);
}

//
function fareDoubler(num2) {
    const doubler = createFareMultiplier(2);
    return doubler(num2);
}

//
function fareTripler(num3) {
    const tripler = createFareMultiplier(3);
    return tripler(num3);
}
console.log(fareTripler(12));

//
function selectDifferentDrivers(array, func) {
    return func(array);
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));


/*
describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
    it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
      expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Antonia', 'Nuru']);
    });

    it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
      expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Amari', 'Mo']);
    });
  });
});
  */
