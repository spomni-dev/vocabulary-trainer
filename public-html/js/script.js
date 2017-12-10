var log = new AnWritterLogger(".log-viewport");
var bem = new BEM();
document.addEventListener("DOMContentLoaded", function(){
  try {
    var vocabulary = new VocabularyTrainer( vocabularyDB );
  } catch (exception) {
    // log(exception.message);
    if (exception.stack) log( exception.stack );
  }
});