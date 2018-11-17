/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    if (input) {
      var firstChar = input.match('[a-zA-Z]');
      var index = input.indexOf(firstChar);

      var number = input.substring(0, index);

      var re = /\//ig;
      var found = (number.match(/\//g) || []).length;
      if (found > 1) {
        return 'invalid number';
      }
      else {
        return number;
      }
    }
    else {
      return 1;
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
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
