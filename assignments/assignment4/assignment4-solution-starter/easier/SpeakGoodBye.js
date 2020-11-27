(function(window){
var speakword= "Good Bye";
var  byeSpeaker = {
	name: function (x) {
  console.log(speakword+" "+ x);
}
	// body...
}
window.byeSpeaker=byeSpeaker;
})(window);