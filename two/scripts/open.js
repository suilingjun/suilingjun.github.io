function popUp(winURL){
window.open(winURL,"popup","width=auto,height=auto");
}
window.onload = prepareLinks;
function prepareLinks(){
var links=document.getElementsByTagName("a");
for(var i=0; i<links.length;i++){
if(links[i].getAttribute("class")=="popup"){
links[i].onclick=function(){
popUp(this.getAttribute("href"));
return false;
}
}
}
}