var display = document.getElementById("display");
function num(num){
    display.value+=num;
}
function clearOll(){
    display.value==""
}
function delet(){
    display.value=display.value.slice(0,-1);
}
function equal(){
    display.value=eval(display.value);
}