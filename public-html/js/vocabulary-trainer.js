/* BEM structure
  vocabulary
    vocabulary__field field field_hidden-value_true/_false
      field__name
      field__value
    vocabulary__next-field-button
    vocabulary__next-item-button
*/

/** @class VocabularyTrainer - Construct an object that control vocabulary-trainer module
 *
 * @param {array} vocabularyDB - Database array that contains subarrays. Each subarray contains values of vocabulary field.
 *
 * @method showNextField() - Show value of next vocabulary field
 * @method changeItem() - Replace values of all fields for next vocabulary item and hide some fields value
 *
 * @returns {VocabularyTrainer|Error}
 *
 * @requires Lototron - Construct an object that return unique random numbers from defined set
 * @requires BEM v0.1p as var bem - object-library for working on BEM methodology
*/
function VocabularyTrainer( vocabularyDB ){
  //-- Check input params and DOM structure
    //-- vocabularyDB should be array
    //-- Count of .vocabulary__field nodes should equal to 3
    //-- Each .vocabulary__field node should contain .field__value node
    //-- Document should contain .vocabulary__next-field-button node
    //-- Document should contain .vocabulary__next-item-button node
    var checkResult = checkBeforeConstruct();
    if ( checkResult instanceof Error) return checkResult;
  //
  /** @private @var {VocabularyTrainer} self - Symlink for this */
    var self = this;
  /** @private @var {array} _vocabularyDB - array of vocabulary database*/
    var _vocabularyDB = vocabularyDB;
  /** @private @var _fieldsNodes - List of vocabulary fields nodes. */
    var _fieldsNodes = document.querySelectorAll( ".vocabulary__field" );
  /** @private @var _loto - Instance of Lototron. Use for generate next item. */
    var _loto = new Lototron( _vocabularyDB.length - 1 );
  //
  /** @method showNextField() - .vocabulary__next-field-button handler
   * @description Show value of next vocabulary field
   * @returns {void}
   */
    self.showNextField = showNextField;
    function showNextField(){
      for (var i=1; i<_fieldsNodes.length; i++){
        var modifierValue = bem.lib.getModifierValue( _fieldsNodes[i], "field_hidden-value" );
        if ( modifierValue === "true"){
          bem.lib.setModifier( _fieldsNodes[i], "field_hidden-value_false" );
          break;
        }
      }
    }
  //
  /** @method changeItem() - .vocabulary__next-item-button handler
   * @description Hide some fields value and replace values of all fields for next vocabulary item.
   * @returns {void}
   */
    self.changeItem = changeItem;
    function changeItem(){
      //-- getItemNumber
        var itemNumber = _loto.getNextNumber();
        if ( typeof(itemNumber) != "number" ){
          alert('loop is ended')
          _loto.reload();
          itemNumber = _loto.getNextNumber();
        }
      //-- hideFieldsValues
        [].forEach.call(_fieldsNodes, function(elem, indx, array){
          if (indx > 0) {
            bem.lib.setModifier(elem, "field_hidden-value_true");
          }
        });
      //-- replaceFieldsValues
        var fieldsValuesDB = _vocabularyDB[itemNumber];
        [].forEach.call(_fieldsNodes, function(elem, indx, array){
          var fieldValueNode = elem.querySelector(".field__value");
          fieldValueNode.innerHTML = fieldsValuesDB[indx];
        });
    }
  //
  //-- Fill html nodes of fields
    changeItem();
  //-- Attach handlers to buttons
    document.querySelector(".vocabulary__next-field-button").addEventListener("click", self.showNextField);
    document.querySelector(".vocabulary__next-item-button").addEventListener("click", self.changeItem);
  //
  function checkBeforeConstruct(){
    var fieldsNodeList = document.querySelectorAll( ".vocabulary__field" );
    //-- vocabularyDB should be array
      if ( !(vocabularyDB instanceof Array) ){
        return new Error("Wrong input param. VocabularyDB must be instanceof Array");
      }
    //-- Count of .vocabulary__field nodes in document should equal to 3.
      if ( fieldsNodeList.length != 3){
        return new Error("Wrong DOM structure. Count of field nodes should equal to 3.");
      }
    //-- Each .vocabulary__field node should contain .field__value node
      for (var i=0; i<fieldsNodeList.length; i++){
        var valueNode = fieldsNodeList[i].querySelector( ".field__value" );
        if ( !valueNode ){
          return new Error("Wrong DOM structure. Each .vocabulary__field node should contain .field__value node.")
        }
      }
    //-- Document should contain .vocabulary__next-field-button node
      var buttonNode = document.querySelector(".vocabulary__next-field-button");
      if ( !buttonNode ){
        return new Error("Wrong DOM structure. Document should contain .vocabulary__next-field-button node.")
      }
    //-- Document should contain .vocabulary__next-item-button node
      var buttonNode = document.querySelector(".vocabulary__next-item-button");
      if ( !buttonNode ){
        return new Error("Wrong DOM structure. Document should contain .vocabulary__next-item-button node.")
      }
    //
    return true;
  }
}