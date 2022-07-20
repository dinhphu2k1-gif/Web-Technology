var leftframe;
function getCookie(name) {
    var cookieArr = document.cookie.split(";");

    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }

    return null;
    
}

function addBlog () {

	var data = document.myform.textarea.value;

	if(data == ""){
		return false;
	} else {
		var oldCookie = getCookie("cookie");
		var cookievalue = "";
		if(oldCookie != null){
			cookievalue= encodeURIComponent(oldCookie + "\n" + data); 
		} else {
			cookievalue = encodeURIComponent(data);
		}
		var maxAge = "; max-age=" + 1*24*60*60 + ";";
		document.cookie="cookie=" + cookievalue + maxAge;
        // console.log(document.cookie);
       	document.myform.textarea.value = "";
        var a = window.parent.document;
		a.getElementById("left").contentWindow.location.reload(true);
		// a.getElementById("left").contentWindow.scrollTo(0,a.getElementById("left").contentWindow.document.body.scrollHeight);
	} 
}

function loadCookie () {
	var allCookie = getCookie("cookie")
	console.log(document.cookie)
	let start = 0;
	let stop = allCookie.length;
	let i = 0;
	while(true){
		for (i=stop; i>start; i--){
			if(allCookie[i] == "\n") break;
		}

		var tmpCookie = allCookie.substring(stop + 1, i);
		
		console.log(tmpCookie.length)
		if(tmpCookie != ""){
			document.writeln( tmpCookie + "<hr>");
		}
		stop = i - 1;
		if(start >= stop) break;
	}
    // window.scrollTo(0,document.body.scrollHeight);
}
function changesizeta(){
	var tx = document.getElementById("textarea1");
	tx.setAttribute('style', 'height:' + (tx.scrollHeight) + 'px;overflow-y:hidden;');
  	tx.addEventListener("input", OnInput, false);
}
function OnInput() {
	this.style.height = 'auto';
	this.style.height = (this.scrollHeight) + 'px';
  }