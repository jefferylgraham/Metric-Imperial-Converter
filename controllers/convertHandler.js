/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
  
      var firstChar = input.match('[a-zA-Z]');
      var index = input.indexOf(firstChar);

      var number = input.substring(0, index);
    
      if (number == '') {
        number = 1;
        return number;
      }

      var re = /\//ig;
      var found = (number.match(/\//g) || []).length;
      if (found > 1) {
        return 'invalid number';
      }
      else {
        return eval(number);
      }
    
  };
  
  this.getUnit = function(input) {
    var units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var firstChar = input.match('[a-zA-Z]');
    var index = input.indexOf(firstChar);

    var unit = input.substring(index);
    if (units.includes(unit)) {
      return unit;
    }
    else {
      return 'invalid unit';
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var conversions = {
      gal: "l",
      l: "gal",
      mi: "km",
      km: "mi",
      lbs: "kg",
      kg: "lbs"
    };
    
    return (conversions[initUnit.toLowerCase()]);
  };

  this.spellOutUnit = function(unit) {
    var fullUnit = {
      gal: "gallons",
      l: "liters",
      mi: "miles",
      km: "kilometers",
      lbs: "pounds",
      kg: "kilograms"
    };
    
    return (fullUnit[unit.toLowerCase()]);
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch(initUnit.toLowerCase()) {
      case "gal":
        return initNum * galToL;
        break;
      case "l":
        return initNum / galToL;
        break;
      case "lbs":
        return initNum * lbsToKg;
        break;
      case "kg":
        return initNum / lbsToKg;
        break;
      case "mi":
        return initNum * miToKm;
        break;
      case "km":
        return initNum / miToKm;
        break;
    }
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {    
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}` 
  };
  
}

module.exports = ConvertHandler;
