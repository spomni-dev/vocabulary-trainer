;(function(){
  includeStylesheet( "./css/style.css" );
  includeScript( "./js/mocha.js" );
  includeScript( "./js/chai.js" );
  includeScript( "./js/include-mocha-setup.js" );

  var specs = [
    "./tests/lototron-spec.js",
    "./tests/vocabulary-db-spec.js",
    "./tests/vocabulary-trainer-spec.js"
  ]
  specs.forEach(function(specPath, i, specs){
    includeScript( specPath );
  });

  function includeStylesheet( href ){
    var cssNode = document.createElement('link');
    cssNode.setAttribute("rel", "stylesheet");
    cssNode.setAttribute("href", "./css/mocha.css");
    document.querySelector("head").appendChild(cssNode);
  }
  function includeScript( src ){
    var scriptNode =document.createElement('script');

    scriptNode.setAttribute("type", "text/javascript");
    scriptNode.setAttribute("src", src);
    scriptNode.async = false;

    document.querySelector("head").appendChild( scriptNode );
  }
})();