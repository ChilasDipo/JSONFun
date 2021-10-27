JSONObejct = {
	"Folk": [{
		"name": "Gustav",
		"age": "old",
		"height": "Tall"
	}, {
		"name": "Chilas",
		"age": "Less Old",
		"height": "Less Tall"
	},{
		"name": "TallBoy",
		"age": "Not Old",
		"height": "Tallest"
	}]
}

for (let index = 0; index < JSONObejct.Folk.length; index++) {
    if(JSONObejct.Folk[index].height == "Tallest"){
        console.log("The tallest is " + JSONObejct.Folk[index].name)
    }
    
}

