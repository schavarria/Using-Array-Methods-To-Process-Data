var avg = items.reduce(function(a,b){
	return a + b.price
}, 0) / items.length 
document.querySelector("#answer1").innerHTML= `The average price is ${avg.toFixed(2)}` 


 
 var newarr= items.filter(function(item){

 	return item.price >= 14 && item.price <= 18

 }).map(function(title){
 	return title.title
 }).join('\n')
document.querySelector("#answer2").innerHTML=newarr



var newarr2 = ''
 items.filter(function(item){
	if (item.currency_code === "GBP"){
		return newarr2 += item.title + 'cost &pound;' + item.price 
	}

})
document.querySelector("#answer3").innerHTML= newarr2



var newarr3 = items.filter(function(a){
	return a.materials.indexOf('wood') !== -1	
}).map(function(a){
	return a.title + " is made of wood"
}).join('\n')
document.querySelector("#answer4").innerHTML= newarr3



var newarr4=''
items.filter(function(m){
	return m.materials.length >= 8
}).forEach(function(m){
	newarr4 += `${m.title} has ${m.materials.length} materials\n`
	newarr4 += m.materials.join('\n')
	newarr4 += '\n\n'
})
document.querySelector("#answer5").innerHTML= newarr4




var newarr5 = items.filter(function(c){
	return  c.who_made ==="i_did" 
}).length
document.querySelector("#answer6").innerHTML= `${newarr5} were made by their sellers`




















