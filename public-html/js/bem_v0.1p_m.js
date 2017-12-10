/** @namespace BEM */
function BEM(){
  var self = this;
  
  /** @namespace handlers
   * @memberof BEM
   * @desc Put instances of your BEM handlers in this namespace.
   */
  self.handlers = {};
  /** @namespace lib 
   * @memberof BEM
   * @desc This namespace is library of functions for working with BEM instances.
  */
  self.lib = {
    /** Set bem-modifier in the HTMLElement class
     * @function setModifier
     * @memberof lib {@link BEM.lib}
     
     * @param {HTMLElement} node
     * @param {string} className
     
     * @throw Invalid input param. Node is not HTMLElement.
     * @throw Invalid input param. Modifier must be a bem-selector string.
     */
    setModifier : function (node, modifier){
      if ( !node
        || !node.nodeName
      ) throw new Error("Invalid input param. Node is not HTMLElement.");
      if ( !( typeof(modifier) == "string" ) 
        || !( /^\s*[\-a-zA-Z0-9]+(__[\-a-zA-Z0-9]+){0,1}(_[\-a-zA-Z0-9]+){1,2}\s*$/i.test(modifier) )
      ) throw new Error("Invalid input param. Modifier must be a bem-selector string.");
      
      // delete old modifier
        var arrMatch = modifier.match(/((\s|^)([\-a-zA-Z0-9]+__[\-a-zA-Z0-9]+_[\-a-zA-Z0-9]+)(_|\s|$))|((^|\s)([\-a-zA-Z0-9]+_[\-a-zA-Z0-9]+)(_|\s|$))/i);
        var modifierSelector = arrMatch[3] || arrMatch[7];        var regExp = new RegExp("(\\s|^)+"+modifierSelector+"[_\-a-zA-Z0-9]*(\\s|$)", "gi");
        var newClassName = node.className.replace(regExp, "");
      // add new modifier
        node.className = newClassName + " " + modifier;
    },
    /** Get value of the bem modifier into HTMLElement
     * @function getModifier
     * @memberof lib {@link BEM.lib}
     * 
     * @param {HTMLElement} node
     * @param {string} modifier - The string of modifier selector.
     *
     * @returns {string|null} - Return a string value of the question modifier if it has a value. Return an empty string if the modifier is founded but dont has a value. Return null if the question modifier is not founded in the HTMLElement.
    */
    getModifierValue : function(node, modifier){
      if ( !node
        || !node.nodeName
      ) throw new Error("Invalid input param. Node is not HTMLElement.");
      if ( !( typeof(modifier) == "string" ) 
        || !( /^\s*[\-a-zA-Z0-9]+(__[\-a-zA-Z0-9]+){0,1}(_[\-a-zA-Z0-9]+){1,2}\s*$/i.test(modifier) )
      ) throw new Error("Invalid input param. Modifier must be a modifier bem-selector string.");

      var arrMatch = modifier.match(/((\s|^)([\-a-zA-Z0-9]+__[\-a-zA-Z0-9]+_[\-a-zA-Z0-9]+)(_|\s|$))|((^|\s)([\-a-zA-Z0-9]+_[\-a-zA-Z0-9]+)(_|\s|$))/i);
      var modifierSelector = arrMatch[3] || arrMatch[7];
      var regExp = new RegExp("(^|\\s)"+modifierSelector+"(_([\-a-zA-Z0-9]+)){0,1}(\\s|$)", "i");
      var resMatch = node.className.match(regExp);
      if (resMatch === null){
        return null;
      } else if (resMatch[3]){
        return resMatch[3];
      } else {
        return "";
      }
    },
    /** Convert a string formated as camelCode to the bem-selector format
     * @function convertCamelToBem
     * @memberof lib {@link BEM.lib}
     * 
     * @param {string} string - camelCode formated string
     * @returns {string} - bem-selector formated string
     *
     */
    convertCamelToBemSelector : function(string) {
      var regExp = new RegExp('([^A-Z]([A-Z]))|(([A-Z])[^A-Z])', 'g');
      while (res = regExp.exec(string)) {
        if (res[1]){
          string = string.replace( res[0], res[1][0]+'-'+res[2].toLowerCase() );
        } else if (res[3]){
          string = string.replace( res[0], '-'+res[4].toLowerCase()+res[3][1] );
        }

        regExp.lastIndex += 2;
      }
      return string.toLowerCase();
    },
    /** Convert a string formated as bem-selector to the camelCode format
     * @function convertBemSelectorToCamel
     * @memberof lib {@link BEM.lib}
     * 
     * @param {string} string - bem-selector formated string
     * @returns {string} - camelCode formated string
     *
     */
    convertBemSelectorToCamel : function(string) {
      var res = '';
      var pos = 0;
      var lastPos = 0;
      while (pos != -1){
        var pos = string.indexOf('-', lastPos);
        if (pos != -1){
          res = res + string.slice(lastPos, pos);
          if (pos < string.length-1){
            res = res + string[pos+1].toUpperCase();
            lastPos = pos+2;
          } else {
            lastPos = pos+1;
          }
        }
      }
      res = res + string.slice(lastPos);
      return res;
    }
  };
}