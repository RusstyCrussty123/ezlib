const ezlib={
	
	isElement: (element)=>{
		if( element&&typeof(element)=="object" ){ return true }else{ return false }
	},
	
	id: (id)=>{ return document.getElementById(id) },
	
	click: (element, callback)=>{
		if (this.isElement(element)){
			element.addEventListener("click", callback);
		}
	},
	
	math: {
		"+": (x, y)=>{return x+y},
		"-": (x, y)=>{return x-y},
		"*": (x, y)=>{return x*y},
		"/": (x, y)=>{return x/y},
		"to%": (x, y)=>{}
	},
	
	XHR: {
		"post": (url, data, requestHeaders, callback)=>{
			var xhr=new XMLHttpRequest();
			xhr.open("POST",url);
			
			if (requestHeaders) {
				for (var i=0; i<requestHeaders.length; i++) {
					xhr.setRequestHeader(requestHeaders[i][0], requestHeaders[i][1]);
				}
			}
			
			xhr.send(JSON.stringify(data));
			callback(xhr)
		}
	}
	
};

console.log("ezlib 2.0 loaded.") // Written by rustycrusty. simplicity.
