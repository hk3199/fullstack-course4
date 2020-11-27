(function(window){
var speakword= "Hello";
var helloSpeaker= {
  name:function(x){
  console.log(speakword+" "+ x);
}
	// body...
}
window.helloSpeaker=helloSpeaker;
})(window);