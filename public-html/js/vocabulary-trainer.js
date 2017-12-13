/* BEM structure
  vocabulary
    vocabulary__field field field_hidden-value_true/_false
      field__name
      field__value
    vocabulary__next-field-button
    vocabulary__next-item-button
*/

/** @class VocabularyTrainer - Construct an object that control vocabulary-trainer module 
 * @requires Lototron - Construct an object that return unique random numbers from defined set
 * @requires BEM v0.1p as var bem - object-library for working on BEM methodology
 * @param {array} vocabularyDB - Database array that contains subarrays. Each subarray contains values of vocabulary field.
 * @returns {VocabularyTrainer|Error}
*/
function VocabularyTrainer( vocabularyDB ){
  //-- Check input params
    //-- If vocabularyDB is not array then return error
    if ( !(vocabularyDB instanceof Array) ){
      return new Error("Wrong input param. VocabularyDB must be instanceof Array");
    }
  //
  /** @private @var {VocabularyTrainer} self - Symlink for this */
    var self = this;
  /** @private @var {array} _vocabularyDB - array of vocabulary database*/
    var _vocabularyDB = vocabularyDB;
  /** @private @var _fieldsNodes - List of vocabulary fields nodes. */
    var _fieldsNodes = document.querySelectorAll( ".vocabulary__field.field" );
  /** @private @var _loto - Instance of Lototron. Use for generate next item. */
    var _loto = new Lototron( _vocabularyDB.length - 1 );
  //
  /** @method _changeVocabularyItem - .vocabulary__next-item-button handler
   * @description Hide some fields value and replace values of all fields for next vocabulary item.
   * @returns {void}
   */
    function _changeVocabularyItem(){
      //-- getItemNumber
        var itemNumber = _loto.getNextNumber();
        if ( typeof(itemNumber) != "number" ){
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

  /** @method _showNextFieldValue - .vocabulary__next-field-button handler
   * @description Show value of next vocabulary field
   * @returns {void}
   */
    function _showNextFieldValue(){
      for (var i=1; i<_fieldsNodes.length; i++){
        var modifierValue = bem.lib.getModifierValue( _fieldsNodes[i], "field_hidden-value" );
        if ( modifierValue === "true"){
          bem.lib.setModifier( _fieldsNodes[i], "field_hidden-value_false" );
          break;
        }
      }
    }
  //
  //-- Fill html nodes of fields
    _changeVocabularyItem();
  //-- Attach handlers to buttons
    document.querySelector(".vocabulary__next-field-button").addEventListener("click", _showNextFieldValue);
    document.querySelector(".vocabulary__next-item-button").addEventListener("click", _changeVocabularyItem);
  //  
}