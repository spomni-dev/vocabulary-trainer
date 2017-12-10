try {

/* Construct an object that return unique random numbers from defined set.
 * Обьект лототрон предназначен для выдачи в произвольном порядке целых чисел из заданного интервала. 
 * Число не может повториться, пока не будут выданы все числа из заданного интераала.
 * @constructor
 
 * @param {number} maxNumber
 
 * @method {number|string} getNextNumber - Retern next number from numbet array. Delete returned numbet from number array.
 * @method {void} reload - Put all deleted numbers into number array.
 * @method {array} getRestNumbers - Return array of the numbars that didn't be returned from method #getNextNumber.
 
 * @return {object}
*/
function Lototron(maxNumber){
  //-- Validate input params
    if ( typeof(maxNumber) != 'number' ){
      throw new Error("Wrong input param. maxNumber must be number.")
    }
    
  var self = this;
  var numbersArray = createNumbersArray(maxNumber);
  var restNumbersArray = createNumbersArray(maxNumber);
  
  /* @method getNextNumber - return next random number
   * @description - Return next random number and delete a returned number from arrau of numbers that will can be used on the futured callings of this function. If numbets is ended on previos callings then return string "Lototron is empty".
   * @return {number|string}
  */
  self.getNextNumber = function (){
    if (restNumbersArray.length <= 0){
      return "Lototron is empty";
    } else {
      var numberIndx = randomInteger(0, restNumbersArray.length-1);
      return restNumbersArray.splice(numberIndx, 1);
    }
  }
  
  /* @method reload - refresh restNumberArray to inital array.*/
  self.reload = function(){
    for ( var i=0; i<numbersArray.length; i++ ){
      restNumbersArray[i] = i;
    }
  }
  /* @method getRestNumbers - return numbers from set that didn't be returned from method getNextNumber*/
  self.getRestNumbers = function(){
    return restNumbersArray;
  }
  
  /* @function createNumbersArray - return array filled of the integer numbers from 0 to maxNumber. */
    function createNumbersArray( maxNumber ){
      var res = [];
      for ( var i=0; i<=maxNumber; i++ ){
        res[i] = i;
      }
      return res;
    }
  
  /* @function randomInteger - return randon number from min to max*/
    function randomInteger(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    } // randomInteger 

}

// testLototron();
function testLototron(){
  var _loto;
  //-- test wrong input params
    log("Test Lototron(): Wrong input params;");
    // _loto = new Lototron();
    log("\tSkip this test.");
    log("----------------------");
  //-- test method #getNextNumber()
    log("Test Lototron.getNextNumber()");
    var maxNumber = 9;
    log("\tMaxNumber ="+ maxNumber);
    _loto = new Lototron( maxNumber );
    var temp = "";
    for (var indx=0; indx < maxNumber + 3; indx++){
      temp += _loto.getNextNumber()+", ";
    }
    log("\tAll numbers: "+temp);
    log("----------------------");
  //-- Test Lototron.reload()
    log("Test Lototron.reload()\n");
        log("\tMaxNumber ="+ maxNumber+"\n");
    _loto.reload();
    for (var i=0; i<6; i++){
      _loto.getNextNumber();
    }
    log("\trestNumbersArray before reload:");
    log("\t"+_loto.getRestNumbers()+"\n");
    _loto.reload();
    log("\trestNumbersArray after reload:");
    log("\t"+_loto.getRestNumbers()+"\n");
}

} catch(e){
  log(e.stack);
} finally {
  // alert("          log.viewportBufer:\n\n"+log.viewportBufer);
}