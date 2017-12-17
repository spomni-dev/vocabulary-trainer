mocha.setup('bdd');

assert = chai.assert;
runner = null;

document.addEventListener('DOMContentLoaded', function(event){
  var runner = mocha.run();
});