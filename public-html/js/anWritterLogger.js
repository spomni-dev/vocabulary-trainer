/*
  Конструктор объекта для логгированияя данных на 
*/

/*  
    @param string|htmlElement viewport - The string css selector of the html
                element or a html element node for display log.
    @retutn function - the function containing AnWritterLogger.prototype in
                the __proto__ property
 */
function AnWritterLogger(viewport) {
  var self = function () {
    var inputArray = Array.prototype.slice.call(arguments);
    self.log.apply(self, inputArray);
  }

  self.__proto__ = AnWritterLogger.prototype;
  self.__proto__.constructor = AnWritterLogger;

  self.viewport = undefined;
  self.viewportBufer = '';

  if (viewport.nodeType){
    self.viewport = viewport;
  } else if (typeof viewport == 'string'){
    document.addEventListener('DOMContentLoaded', function () {
      self.viewport = document.querySelector(viewport);
      self.viewport.insertAdjacentHTML('beforeEnd', '<pre>'+self.viewportBufer)+'</pre>';
      self.viewportBufer = '';
    });
  }
  
  self.getArrayString = function (arr, indLevel){
    if (!(arr instanceof Array)) throw new Error("Invalid input param. Arr must be instance of Array");
    indLevel = indLevel || 0;
    if (!(typeof(indLevel) == 'number')) throw new Error("Invalid input param. IndLevel must be type of number");
    var ind = "  ";
    var preInd = "";
    for (var i=0; i<indLevel; i++ ){ preInd = preInd + ind; };
    var res = preInd + "[\n";
    arr.forEach(function(item, i, arr){
      if (item instanceof Array){
        res = res + self.getArrayString(item, ++indLevel);
      } else {
        res = res + preInd + ind + item;
      }
      if (arr.length != i+1){
        res = res + ',\n';
      } else {
        res = res + '\n'+preInd+']';
      }
    });
    return res;
  }
  
  function getObjectString(obj, indLevel){
    if (!(obj instanceof Object)) throw new Error("Invalid input param. Obj must be instance of Object");
    indLevel = indLevel || 0;
    if (!(typeof(indLevel) == 'number')) throw new Error("Invalid input param. IndLevel must be type of number");
    var ind = "  ";
    var preInd = "";
    for (var i=0; i<indLevel; i++ ){ preInd = preInd + ind; };
    var res = "{\n";
    for (var key in obj){
      if (obj[key] instanceof Array){
        res = res +preInd +ind +key +" : " +self.getArrayString(obj[key], ++indLevel);
      } else if ( (typeof(obj[key]) == 'object')
               && obj[key] != undefined) {
        res = res +preInd +ind +key +" : " +self.getObjectString(obj[key], ++indLevel);
      } else {
        res = res +preInd +ind +key +" : " +obj[key];
      }
      res = res +",\n";
    };
    res = res.replace(/,\n$/i, "");
    res = res +'\n' +preInd +"}";
    return res;
  }
  
  self.dump = function(param){
    log(getDumpString(param));
  }
  
  function getDumpString(param){
  // alert("getDumpString(). param = "+param);
    switch (typeof(param)){
      case "object":
        if (param == undefined){
          return "{null} "+param;
        } else if (param instanceof Array){
          return self.getArrayDumpString(param);
        } else {
          return self.getObjectDumpString(param);
        }
        break;
      case "number":
      case "string":
      case "undefined":
      default:
        return "{"+typeof(param)+"} "+param;
    }
  }
  
  self.getArrayDumpString = function (arr, indLevel){
    if (!(arr instanceof Array)) throw new Error("Invalid input param. Arr must be instance of Array");
    indLevel = indLevel || 0;
    if (!(typeof(indLevel) == 'number')) throw new Error("Invalid input param. IndLevel must be type of number");
    var ind = "  ";
    var preInd = "";
    for (var i=0; i<indLevel; i++ ){ preInd = preInd + ind; };
    var res = preInd + "{object Array} [\n";
    arr.forEach(function(item, i, arr){
      if (item instanceof Array){
        res = res + self.getArrayDumpString(item, ++indLevel);
      } else if( (typeof(item) == "object") 
              && item != undefined){
        res = res +preInd +ind + self.getObjectDumpString(item, ++indLevel);
      } else {
        res = res + preInd + ind + getDumpString(item);
      }
      if (arr.length != i+1){
        res = res + ',\n';
      } else {
        res = res + '\n'+preInd+']';
      }
    });
    return res;
  }
  
  self.getObjectDumpString = function (obj, indLevel, recLevel){
  // alert('getObjectDumpString(). obj = '+obj);
    if (!(obj instanceof Object)) throw new Error("Invalid input param. Obj must be instance of Object");
    indLevel = indLevel || 0;
    recLevel = recLevel || 0;
    if (!(typeof(indLevel) == 'number')) throw new Error("Invalid input param. IndLevel must be type of number");
    if (!(typeof(recLevel) == 'number')) throw new Error("Invalid input param. RecLevel must be type of number");
    var ind = "  ";
    var preInd = "";
    for (var i=0; i<indLevel; i++ ){ preInd = preInd + ind; };
    var res = "{object Object} {\n";
    for (var key in obj){
      if (obj[key] instanceof Array){
        res = res +preInd +ind +key +" : " +self.getArrayDumpString(obj[key], ++indLevel);
      } else if ( (typeof(obj[key]) == 'object')
               && obj[key] != undefined) {
        if (recLevel > 0){
          res = res +preInd +ind +key +" : " +self.getObjectDumpString(obj[key], ++indLevel, --recLevel);
        } else {
          res = res +preInd +ind +key +" : {object} {...}" ;
        }
      } else {
        res = res +preInd +ind +key +" : " +getDumpString(obj[key]);
      }
      res = res +",\n";
    };
    alert('end for getObjectDumpString(). obj = '+obj);
    res = res.replace(/,\n$/i, "");
    res = res +'\n' +preInd +"}";
    return res;
  }

  return self;
} // AnWritterLogger
AnWritterLogger.prototype.printl = function(logString) {
  if (this.viewport !== undefined){
    this.viewport.insertAdjacentHTML('beforeEnd', '<pre>'+logString+'</pre>');
  } else {
    this.viewportBufer = this.viewportBufer + logString;
  }
};
AnWritterLogger.prototype.log = function() {
  var logString = '';
  var inputArray = Array.prototype.slice.call(arguments);
  inputArray.forEach(function (item, i, arr) {
    logString = logString + item;
    if (arr.length != i+1){
      logString = logString + ', ';
    } else {
      logString =logString + '\n';
    }
  });
  this.printl(logString);
};
AnWritterLogger.prototype.clean = function(){
  if (this.viewport) this.viewport.innerHTML = "";
}

if ( typeof( log) != 'undefined'){
  throw new Error('Trying redefine variable named "log"');
}
log = new AnWritterLogger(".log-viewport");
