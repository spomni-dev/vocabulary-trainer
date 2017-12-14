/**
 * @requires chai.js
 */

//-- Lototron
  //-- new Lototron( maxNumber )
    //-- Should return an object of Error if:
      //-- maxNumber is not number
      //-- maxNumber < 0
    //-- Else should return an object of Lototron

  //-- #getNextNumber()
    //-- Each calling from 0 to maxNumber should returns:
      //-- a number of integer
      //-- a number that greater 0 and less maxNumber
      //-- an unique number
    //-- All next callings should return null

  //-- #getRestNumbers()
    //-- Should return an array of numbers that dudn't return from calls #getNextNumber()
      //-- #getRestNumbers() should be array
      //-- #getRestNumbers().length == maxNumber+1 - callsCount
      //-- #getRestNumbers()[i] should be integer
      //-- #getRestNumbers()[i] should be greater 0 and less maxNumber
      //-- #getRestNumbers()[i] should be unique
      //-- #getRestNumbers()[i] should be didn't return from #getNextNumber()

  //-- #reload()
    //-- Reload a Lototron object to the state that was after the constructor call.
      //-- #getRestNumbers() should be array
      //-- #getRestNumbers().length == maxNumber+1
      //-- #getRestNumbers()[i] should be integer
      //-- #getRestNumbers()[i] should be >= 0 and <= maxNumber
      //-- #getRestNumbers()[i] should be unique
describe("Lototron", function(){

  describe("new Lototron( maxNumber )", function(){
    describe("Should return an object of Error if:", function(){
      it("maxNumber is not number", function(){
        var res = new Lototron();
        assert.instanceOf(res, Error);
      });
      it("maxNumber < 0", function(){
        var res = new Lototron( -1 );
        assert.instanceOf(res, Error);
      });
    });
    describe("Else should return an object of Lototron", function(){
      it("Should return an object of Lototron", function(){
        var res = new Lototron( 1 );
        assert.instanceOf(res, Lototron);
      });
    });
  });

  describe("#getNextNumber()", function(){
    describe("Each calling from 0 to maxNumber should returns:", function(){
      var maxNumber = 9.5;

      it("a number of integer", function(){
        var loto = new Lototron( maxNumber );

        for (var i=0; i<=maxNumber; i++){
          var res = loto.getNextNumber();
          assert( isInteger(res) );
        }
      });

      it("a number that greater 0 and less maxNumber", function(){
        var loto = new Lototron( maxNumber );

        for (var i=0; i<=maxNumber; i++){
          var res = loto.getNextNumber();
          assert( 0<=res && res<=maxNumber );
        }
      });

      it("an unique number", function(){
        var loto = new Lototron( maxNumber );

        for (var i=0; i<=maxNumber; i++){
          var res = loto.getNextNumber();
          var resArr = [];

          assert.notInclude(resArr, res);
          resArr.push(res);
        }
      });
    });
    describe("All next callings should return null", function(){
      it("All next callings should return null", function(){
        var maxNumber = 9.5;
        var loto = new Lototron( maxNumber );
        for (var i=0; i<=maxNumber; i++){
          loto.getNextNumber();
        }
        for (var i=0; i<3; i++){
          var res = loto.getNextNumber();
          assert.isNull(res);
        }
      });
    });
  });

  describe("#getRestNumbers()", function(){
    describe("Should return an array of numbers that dudn't return from calls #getNextNumber()", function(){

      var maxNumber = 9;
      var loto = new Lototron(maxNumber);
      var resArr = [];
      var callsCount = 5;
      for (var i=0; i<callsCount; i++){
        resArr.push( loto.getNextNumber() );
      }
      var res = loto.getRestNumbers();

      it("#getRestNumbers() should be array", function(){
        assert.isArray(res);
      });
      it("#getRestNumbers().length == maxNumber+1 - callsCount", function(){
        assert( res.length == (maxNumber+1 - callsCount), "assert is false" );
      });
      it("#getRestNumbers()[i] should be integer", function(){
        for (var i=0; i<res.length; i++){
          assert( isInteger(res[i]), "res[i] is not integer" );
        }
      });
      it("#getRestNumbers()[i] should be greater 0 and less maxNumber", function(){
        for (var i=0; i<res.length; i++){
          assert( ( 0<=res[i] && res[i]<=maxNumber ), "assert is false" );
        }
      });
      it("#getRestNumbers()[i] should be unique", function(){
        var testArray = [];
        for (var i=0; i<res.length; i++){
          testArray.push( res[i] );
        }

        for (var i=0; i<res.length; i++){
          var number = testArray.splice(0, 1)[0];
          assert.notInclude(testArray, number);
        }
      });
      it("#getRestNumbers()[i] should be didn't return from #getNextNumber()", function(){
        for (var i=0; i<res.length; i++){
          assert.notInclude(resArr, res[i]);
        }
      });

    });
  });

  describe("#reload()", function(){
    describe("Reload a Lototron object to the state that was after the constructor call.", function(){

      var maxNumber = 9;
      var loto = new Lototron(maxNumber);
      var resArr = [];
      var callsCount = 5;
      for (var i=0; i<callsCount; i++){
        resArr.push( loto.getNextNumber() );
      }
      loto.reload();
      var res = loto.getRestNumbers();

      it("#getRestNumbers() should be array", function(){
        assert.isArray(res);
      });
      it("#getRestNumbers().length == maxNumber+1", function(){
        assert( res.length == (maxNumber+1), "assert is false" );
      });
      it("#getRestNumbers()[i] should be integer", function(){
        for (var i=0; i<res.length; i++){
          assert( isInteger(res[i]), "res[i] is not integer" );
        }
      });
      it("#getRestNumbers()[i] should be greater 0 and less maxNumber", function(){
        for (var i=0; i<res.length; i++){
          assert( ( 0<=res[i] && res[i]<=maxNumber ), "assert is false" );
        }
      });
      it("#getRestNumbers()[i] should be unique", function(){
        var testArray = [];
        for (var i=0; i<res.length; i++){
          testArray.push( res[i] );
        }

        for (var i=0; i<res.length; i++){
          var number = testArray.splice(0, 1)[0];
          assert.notInclude(testArray, number);
        }
      });
    });
  });

});