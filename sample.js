"use strict";
function findi(selector){
return document.querySelector(selector);
}
let arr=[];
fetch("https://free.currconv.com/api/v7/currencies?apiKey=ce321a0e643974298bf8")
.then(function(res1){
	return res1.json();
})
.then(function(res2){
	for(const rela in res2.results)
		{
			arr.push({code:`${rela}`,name:`${res2.results[rela].currencyName}`});
		}convert(findi(".DestClass"));
		convert(findi(".sourceClass"));
})
.catch(function(err){
	console.log(err);
})
function convert(parent){
	for(var rel of arr)
	{
		let opT=document.createElement("option");
		opT.textContent=rel.name;
		opT.value=rel.code;
		parent.insertAdjacentElement("beforeend",opT);
	}
}
let form=findi("form");
let src=findi(".sourceClass");
let dest=findi(".DestClass");
let ori=findi("#origin");
let h3=findi("#h3");
let srccur="";
let descur="";
form.addEventListener("submit",function(event){
	event.preventDefault();
	h3.style.display="block";
	let val=ori.value;
	srccur=src.value;
	descur=dest.value;
	fetch(`https://free.currconv.com/api/v7/convert?q=${srccur}_${descur}&compact=ultra&apiKey=ce321a0e643974298bf8`)
.then(function(res1){
	 return (res1.json());
})
.then(function(res2){
	console.log(res2[`${srccur}_${descur}`]*val);
	h3.style.display="none";
	$("#result").text(`${res2[`${srccur}_${descur}`]*val}`);
})
.catch(function(err){
	console.log(err);
})
});
