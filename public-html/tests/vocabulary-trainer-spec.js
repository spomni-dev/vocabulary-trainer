//-- VocabularyTrainer
  //-- new VocabularyTrainer( vocabularyDB )
    //-- Should return object of Error if:
      //-- vocabularyDB is not array
      //-- count of .vocabulary__field nodes not equal three
      //-- .vocabulary__field nodes don't contain .field__value nodes
      //-- not found .vocabulary__next-field-button node
      //-- not found .vocabulary__next-item-button node

  //-- #showNextField()
    //-- Should change class .field_hidden-value_true to .field_hidden-value_false to the first hidden field node

  //-- #changeItem()
    //-- Should hide values of the second and third vocabulary fields nodes
    //-- Should replace values of all fields
    //-- New values of fields should be in vocabularyDB

  //-- Common tests of VocabularyTrainer
    //-- Should output all elements from the database in the random order
    //-- Should output elements from the database without repeating while didn't be use all elements
    //-- When all the elements are output, the output starts anew.
//
describe("VocabularyTrainer", function(){

  var vocDB = [
    ["spelling_0", "transcription_0", "translation_0"],
    ["spelling_1", "transcription_1", "translation_1"],
    ["spelling_2", "transcription_2", "translation_2"],
    ["spelling_3", "transcription_3", "translation_3"],
    ["spelling_4", "transcription_4", "translation_4"]
  ];

  describe("new VocabularyTrainer( vocabularyDB )", function(){
    describe("Should return object of Error if:", function(){

      it("vocabularyDB is not array", function(){
        var testArr = [undefined, null, "", 1.5, {}, NaN];
        testArr.forEach(function( vocabularyDB, i, testArr){
          var voc = new VocabularyTrainer( vocabularyDB );
          assert.instanceOf( voc, Error );
        });
      });

      it("count of .vocabulary__field nodes not equal three", function(){
        var nodeList = document.querySelectorAll(".vocabulary__field");
        //-- make .vocabulary__field count not equal to three
          var needRemove = false;
          if ( nodeList.length == 3 ){
            needRemove = true;
            //-- create additional .vocabulary__field node
              document.body.insertAdjacentHTML("beforeEnd", "<div class='vocabulary-trainer-spec vocabulary__field'>.vocabulary__field</div>");
          }
        //
        var voc = new VocabularyTrainer( vocDB );
        assert.instanceOf( voc, Error );
        //
        //-- rallback changes
          if ( needRemove ){
            var node = document.body.lastChild;
            document.body.removeChild( node );
          }
      });

      it(".vocabulary__field nodes don't contain .field__value nodes", function(){
        var nodeList = document.querySelectorAll(".vocabulary__field");

        [].forEach.call( nodeList, function( fieldNode, i, nodeList ){
          var fieldValueNode = fieldNode.querySelector( ".field__value" );
          //-- Remove className from fieldValueNode
            if ( fieldValueNode ){
              var className = fieldValueNode.className;
              fieldValueNode.className = "";
            }
          //
          var voc = new VocabularyTrainer( vocDB );
          assert.instanceOf( voc, Error );
          //
          //-- rallback changes
            if ( fieldValueNode ){
              fieldValueNode.className = className;
            }
        });
      });

      it("not found .vocabulary__next-field-button node", function(){
        var buttonNodeList = document.querySelectorAll(".vocabulary__next-field-button");
        //-- remove className from button nodes
          if ( buttonNodeList.length != 0 ){
            var classNameArray = [];
            [].forEach.call( buttonNodeList, function( buttonNode, i, nodeList){
              classNameArray.push( buttonNode.className );
              buttonNode.className = "";
            });
          }
        //
        var voc = new VocabularyTrainer( vocDB );
        assert.instanceOf( voc, Error );
        //
        //-- rallback changes
          if ( buttonNodeList.length != 0 ){
            [].forEach.call( buttonNodeList, function( buttonNode, i, nodeList){
              buttonNode.className = classNameArray[i];
            });
          }
      });

      it("not found .vocabulary__next-item-button node", function(){
        var buttonNodeList = document.querySelectorAll(".vocabulary__next-item-button");
        //-- remove className from button nodes
          if ( buttonNodeList.length != 0 ){
            var classNameArray = [];
            [].forEach.call( buttonNodeList, function( buttonNode, i, nodeList){
              classNameArray.push( buttonNode.className );
              buttonNode.className = "";
            });
          }
        //
        var voc = new VocabularyTrainer( vocDB );
        assert.instanceOf( voc, Error );
        //
        //-- rallback changes
          if ( buttonNodeList.length != 0 ){
            [].forEach.call( buttonNodeList, function( buttonNode, i, nodeList){
              buttonNode.className = classNameArray[i];
            });
          }
      });
    });
  });

  describe("#showNextField()", function(){
    it("Should change class .field_hidden-value_true to .field_hidden-value_false to the first hidden field node", function(){
      var fieldNode = document.querySelector( ".field_hidden-value_true" );
      //-- get a next field node if fieldNode is null
        var needRallback = true;
        if ( !fieldNode ){
          needRallback = false;
          //-- toggle class .field_hidden-value_false/_true
            var fieldNodeList = document.querySelectorAll( ".vocabulary__field" );
            var fieldNode = fieldNodeList[ fieldNodeList.length-1 ];
            fieldNode.classList.remove( "field_hidden-value_false" );
            fieldNode.classList.add( "field_hidden-value_true" );
        }
      //
      var voc = new VocabularyTrainer( vocDB );
      voc.showNextField();
      assert( fieldNode.classList.contains("field_hidden-value_false"), "The fields node should contains class 'field_hidden-value_false'.");
      assert( !fieldNode.classList.contains("field_hidden-value_true"), "The fields node should doesn't contains class 'field_hidden-value_true'." );
      //
      //-- rallback changes
        if ( needRallback ){
          fieldNode.classList.remove( "field_hidden-value_false" );
          fieldNode.classList.add( "field_hidden-value_true" );
        }
        removeVocabularyTrainerHandlers( voc );
    });
  });

  describe( "#changeItem()", function(){
    it( "Should hide values of the second and third vocabulary fields nodes", function(){
      var fieldNodeList = document.querySelectorAll(".vocabulary__field");
      //-- show all fields
        var rallbackArray = [];

        [].forEach.call( fieldNodeList, function(fieldNode, i, fieldNodeList){
          rallbackArray.push( false );
          if ( i != 0){
            //-- if fields value is hidden
            if ( fieldNode.classList.contains( "field_hidden-value_true" ) ){
              //-- show fields value
              fieldNode.classList.remove( "field_hidden-value_true" );
              fieldNode.classList.add( "field_hidden-value_false" );
            } else { // if fields value is visible
              rallbackArray[i] = true;
            }
          }
        });
      //
      var voc = new VocabularyTrainer( vocDB );
      voc.changeItem();

      [].forEach.call( fieldNodeList, function( fieldNode, i, fieldNodeList ){
        if ( i != 0 ){
          assert( fieldNode.classList.contains("field_hidden-value_true"), "The fields node should contains class 'field_hidden-value_true'.");
          assert( !fieldNode.classList.contains("field_hidden-value_false"), "The fields node should doesn't contains class 'field_hidden-value_false'." );
        }
      });
      //
      //-- rallback changes
        rallbackArray.forEach(function(needRallback, i, array){
          if ( needRallback ){
            fieldNode.classList.remove( "field_hidden-value_true" );
            fieldNode.classList.add( "field_hidden-value_false" );
          }
        });
        removeVocabularyTrainerHandlers( voc );
      });

    it( "Should replace values of all fields", function(){
      //-- Save old values of fields
        var oldValues = [];
        var valueNodeList = document.querySelectorAll(".vocabulary__field field__value");
        [].forEach.call( valueNodeList, function( valueNode, i, valueNodeList){
          oldValues.push( valueNode.innerHTML );
        });
      //-- Save old hidden states
        var oldHiddenStates = [];
        var fieldNodeList = document.querySelectorAll(".vocabulary__field");
        [].forEach.call( fieldNodeList, function( fieldNode, i, fieldNodeList ){
          var hiddenClass = "field_hidden-value_true";
          var notHiddenClass = "field_hidden-value_false";

          if ( fieldNode.classList.contains( hiddenClass ) ){
            oldHiddenStates.push( hiddenClass );
          } else {
            oldHiddenStates.push( notHiddenClass );
          }
        });
      //
      var voc = new VocabularyTrainer( vocDB );
      voc.changeItem();

      [].forEach.call( valueNodeList, function( fieldValueNode, i, array ){
        assert( fieldValueNode.innerHTML != oldValues[i], "The new value of field should not equal to old value." );
      });
      //
      //-- rallback changes
        //-- rallback values of fields
          [].forEach.call( valueNodeList, function( valueNode, i, array ){
            valueNodeList.innerHTML = oldValues[i];
          });
        //-- rallback hidden states
          [].forEach.call( fieldNodeList, function( fieldNode, i, array ){
            var hiddenClass = "field_hidden-value_true";
            var notHiddenClass = "field_hidden-value_false";

            if ( fieldNode.classList.contains( hiddenClass ) ){
              if ( oldHiddenStates[i] != hiddenClass ){
                fieldNode.classList.remove( hiddenClass );
                fieldNode.classList.add( notHiddenClass );
              }
            } else {
              if ( oldHiddenStates[i] != notHiddenClass ){
                fieldNode.classList.remove( notHiddenClass );
                fieldNode.classList.add( hiddenClass );
              }
            }
          });
        removeVocabularyTrainerHandlers( voc );
    });

    it( "New values of fields should be in vocabularyDB", function(){
      var oldValues = getFieldsValues();
      var oldStates = getFieldsStates();

      var voc = new VocabularyTrainer( vocDB );
      //
      voc.changeItem();
      //
      //-- Create vocabulary item from new values
      //--   var newVocabularyItem
        var newVocabularyItem = getFieldsValues();
      //
      assert( isArrayInArray( newVocabularyItem, vocDB ), "Field values should be in vocabularyDB." );
      //
      rallbackFieldsValues( oldValues );
      rallbackFieldsStates( oldStates );
      removeVocabularyTrainerHandlers( voc );
    });
  });

  describe( "Common tests of VocabularyTrainer", function(){

    it( "Should output elements from the database in the random order", function(){
      var oldValues = getFieldsValues();
      var oldStates = getFieldsStates();

      var vocDB = [
        ["spelling_0", "transcription_0", "translation_0"],
        ["spelling_1", "transcription_1", "translation_1"],
        ["spelling_2", "transcription_2", "translation_2"],
        ["spelling_3", "transcription_3", "translation_3"],
        ["spelling_4", "transcription_4", "translation_4"]
      ];

      var array1 = getFirstFieldsValuesArray( vocDB );
      var array2 = getFirstFieldsValuesArray( vocDB );

      assert( !isEqualArrays( array1, array2 ) );

      rallbackFieldsValues( oldValues );
      rallbackFieldsStates( oldStates );

      function getFirstFieldsValuesArray( vocDb ){
        var voc = new VocabularyTrainer( vocDB );

        var firstFieldsValueArray = [];
        firstFieldsValueArray.push( getFirstFieldValue() );

        for (var i=0; i<vocDB.length-1; i++){
          voc.changeItem();
          firstFieldsValueArray.push( getFirstFieldValue() );
        }
        removeVocabularyTrainerHandlers( voc );
        return firstFieldsValueArray;
      }
      function getFirstFieldValue(){
        return document.querySelector(".vocabulary__field .field__value").innerHTML;
      }
    });

    it( "Should output elements from the database without repeating while didn't be use all elements", function(){
      //-- Prepare to rallback changes
        var oldValues = getFieldsValues();
        var oldStates = getFieldsStates();
      //
      //-- Prepare to assert
        var vocDB = [
          ["spelling_0", "transcription_0", "translation_0"],
          ["spelling_1", "transcription_1", "translation_1"],
          ["spelling_2", "transcription_2", "translation_2"],
          ["spelling_3", "transcription_3", "translation_3"],
          ["spelling_4", "transcription_4", "translation_4"]
        ];

        var voc = new VocabularyTrainer( vocDB );

        var outputElementsArray = [];
        outputElementsArray.push( getFieldsValues() );
        for (var i=0; i<vocDB.length-1; i++){
          voc.changeItem();
          outputElementsArray.push( getFieldsValues() );
        }
      //
      assert( containsOnlyUniqueArrays( outputElementsArray ) );
      //
      //-- Rallback changes
        rallbackFieldsValues( oldValues );
        rallbackFieldsStates( oldStates );
        removeVocabularyTrainerHandlers( voc );
    });

    it( "When all the elements are output, the output starts anew", function(){
      var oldValues = getFieldsValues();
      var oldStates = getFieldsStates();

      var vocDB = [
        ["spelling_0", "transcription_0", "translation_0"],
        ["spelling_1", "transcription_1", "translation_1"],
        ["spelling_2", "transcription_2", "translation_2"],
        ["spelling_3", "transcription_3", "translation_3"],
        ["spelling_4", "transcription_4", "translation_4"]
      ];

      var voc = new VocabularyTrainer( vocDB );
      for (var i=0; i<vocDB.length-1; i++){
        voc.changeItem();
      }

      var lastValuesOfFields = getFieldsValues();
      voc.changeItem();
      var currentValuesOfFields = getFieldsValues();

      assert( isArrayInArray(currentValuesOfFields, vocDB), "Values of fields should be in vocabularyDB" );

      rallbackFieldsValues( oldValues );
      rallbackFieldsStates( oldStates );
      removeVocabularyTrainerHandlers( voc );
    });
  });

  function removeVocabularyTrainerHandlers( voc ){
    document.querySelector(".vocabulary__next-field-button").removeEventListener("click", voc.showNextField);
    document.querySelector(".vocabulary__next-item-button").removeEventListener("click", voc.changeItem);
  }
  function containsOnlyUniqueArrays( array ){
    var arrayRest = [];
    array.forEach(function(elem, i, array){
      arrayRest.push(elem);
    });

    var subArray = [];
    while ( !!subArray ){
      var subArray = arrayRest.shift();
      if ( isArrayInArray( subArray, arrayRest ) ){
        return false;
      }
    }

    return true;
  }
  function isEqualArrays( array1, array2 ){
    if ( !(array1 instanceof Array) || !(array1 instanceof Array) ){
      return false
    }

    if ( array1.length != array2.length ){
      return false;
    }

    for (var i=0; i<array1.length; i++){
      if ( array1[i] != array2[i] ){
        return false;
      }
    }

    return true;
  }
  function isArrayInArray( needle, haystack ){
    if ( !(needle instanceof Array) ){
      return false;
    }

    if ( !(haystack instanceof Array)){
      return false;
    }

    for (var i=0; i<haystack.length; i++){
      if ( isEqualArrays( needle, haystack[i] ) ){
        return true;
      }
    }
  }
  function getFieldsValues(){
    var fieldsValuesArray = [];
    var valuesNodeList = document.querySelectorAll(".vocabulary__field .field__value");

    [].forEach.call( valuesNodeList, function( valueNode, i, array ){
      fieldsValuesArray.push( valueNode.innerHTML );
    });

    return fieldsValuesArray;
  }
  function getFieldsStates(){
    var fieldsStatesArray = [];
    var fieldsNodeList = document.querySelectorAll(".vocabulary__field");

    var hiddenClass = "field_hidden-value_true";
    var notHiddenClass = "field_hidden-value_false";

    [].forEach.call( fieldsNodeList, function( fieldNode, i, array ){
      if ( fieldNode.classList.contains( hiddenClass ) ){
        fieldsStatesArray.push( hiddenClass );
      } else {
        fieldsStatesArray.push( notHiddenClass );
      }
    });

    return fieldsStatesArray;
  }
  function rallbackFieldsValues( oldValues ){
    var valuesNodeList = document.querySelectorAll(".vocabulary__field .field__value");

    [].forEach.call( valuesNodeList, function( valueNode, i, array ){
      valueNode.innerHTML = oldValues[i];
    });
  }
  function rallbackFieldsStates( oldStates ){
    var fieldsNodeList = document.querySelectorAll(".vocabulary__field");

    var hiddenClass = "field_hidden-value_true";
    var notHiddenClass = "field_hidden-value_false";

    [].forEach.call( fieldsNodeList, function( fieldNode, i, array ){
      if ( fieldNode.classList.contains( hiddenClass ) ){
        if ( oldStates[i] != hiddenClass ){
          fieldNode.classList.remove( hiddenClass );
          fieldNode.classList.add( notHiddenClass );
        }
      } else {
        if ( oldStates[i] != notHiddenClass ){
          fieldNode.classList.remove( notHiddenClass );
          fieldNode.classList.add( hiddenClass );
        }
      }
    });
  }
});