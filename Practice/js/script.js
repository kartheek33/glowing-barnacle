var message = "i'm in global level";
var message1 = "i'm in global level too";
console.log("a: message" + message);
var a = function(){
	var message="i'm in lexical space";
	console.log("a: message" + message);
    b();
}
var b = function(){
	console.log("a: message" + message);
}
a();