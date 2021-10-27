const xhttp = new XMLHttpRequest()
function run() {
   xhttp.open("GET", "https://gist.githubusercontent.com/ChilasDipo/aa6e87d05dbb3d283bca417c6a48bdde/raw/a77867a6dd9d957a4f467a97683fac7d7033be30/JsonPlaying")
   xhttp.onload = function() {
	  
	  let JsonOBJ = JSON.parse(this.response)
	  for (let index = 0; index < JsonOBJ.Folk.length; index++) {
	   if(JsonOBJ.Folk[index].height == "Tallest"){
		   document.getElementById("data").innerHTML=("The tallest is " + JsonOBJ.Folk[index].name)
	   }

   }
	
}

xhttp.send()
}
  