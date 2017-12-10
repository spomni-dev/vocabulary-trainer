/* BEM structure
  vocabulary
    vocabulary__field field field_hidden-value_true/_false
      field__name
      field__value
    vocabulary__next-field-button
    vocabulary__next-item-button
*/

/* @function VocabularyTrainer - Конструктор объекта, управляющего модулем vocabulary-trainer.
  * @constructor
  *
  * @param {array} vocabularyDB - Массив-БД, состоящий из подмассивов, каждый из которых содержит значения всех полей для конкретного слова(словосочетания)
  * 
  * @private {VacabularyTrainer} self - Simlink for variable "this".
  * @private {array} _vocabularyDB - Simlшnk for the input param "vocabularyDB"
  * @private {NodeList} _fieldsNodes - Instance of NodeList, содержащий список html-елементов, соответствующих полям модуля vocabulary-trainer.
  * @private {Lototron} _loto - Экземпляр класса Lototron.
  * 
  * @private {void} #_changeVocabularyItem - Обработчик нажатия кнопки .vocabulary__next-item-button. Скрывает значения некоторых полей и заменяет значения всех полей значениями, соответствующими очередному словосочетанию.
  * @private {void} #_showNextFieldValue - Обраьотчик нажатия кнопки .vocabulary__next-field-button. Делает видимым значение очередного поля модуля vocabulary-trainer.
  * 
  * @return {object}
  *
  * @require Lototron - Конструктор объекта, выдающего, по команде, случайное число из предопределенного диапазона. Возвращаемое значение не может повторяться.
  * @require BEM v1.0p в переменной bem - Объект-библиотека для работы с сущностями подчиненными методологии БЭМ.
*/
function VocabularyTrainer( vocabularyDB ){
  //-- Check input params
    if ( !(vocabularyDB instanceof Array) ){
      throw new Error("Wrong input param. VocabularyDB must be instanceof Array");
    }
  //-- Define private variables
    var self = this;
    var _vocabularyDB = vocabularyDB;
    var _fieldsNodes = document.querySelectorAll( ".vocabulary__field.field" );
    var _loto = new Lototron( _vocabularyDB.length - 1 );
  
  //-- Init nodes
    _changeVocabularyItem();
  
    document.querySelector(".vocabulary__next-field-button").addEventListener("click", _showNextFieldValue);
    document.querySelector(".vocabulary__next-item-button").addEventListener("click", _changeVocabularyItem);
  //
  /* @method _changeVocabularyItem - Обработчик нажатия кнопки .vocabulary__next-item-button.
   * @private
   *
   * @description - Скрывает значения некоторых полей и заменяет значения всех полей значениями, соответствующими очередному словосочетанию.
   *
   * @return {void}
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
  //
  /* @method _showNextFieldValue - Обработчик нажатия кнопки .vocabulary__next-field-button.
   * @private
   *
   * @description - Делает видимым значение очередного поля модуля vocabulary-trainer.
   * 
   * @return {void}
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
  
}