//-- vocabularyDB
  //-- vocabularyDB should be array
  //-- Each element of vocabularyDB should be array
  //-- Each element of vocabularyDB subarrays should be string or array of strings
describe( "vocabularyDB", function(){
  it( "vocabularyDB should be array", function(){
    assert.isArray( vocabularyDB );
  });

  it( "Each element of vocabularyDB should be array", function(){
    vocabularyDB.forEach(function(vocItem, i, array){
      assert.isArray( vocItem );
    });
  });

  it( "Each element of vocabularyDB subarrays should be string or array of strings", function(){
    vocabularyDB.forEach(function(vocItem, i, vocabularyDB){
      vocItem.forEach(function(fieldValue, j, vocItem){
        var isValid = false;
        if ( typeof(fieldValue) == 'string' ){
          isValid = true;
        } else if ( fieldValue instanceof Array ){
          fieldValue.forEach(function(translation, k, fieldValue){
            assert.isString( translation );
          });
          isValid = true;
        }
        assert( isValid );
      });
    });
  });
});