var btnA = document.querySelector('.btnA');
var btnB = document.querySelector('.btnB');
var btnC = document.querySelector('.btnC');
var wallA = document.querySelector('.wallA');
var wallB = document.querySelector('.wallB');
var wallC = document.querySelector('.wallC');

btnA.addEventListener("click",wallAr);
function wallAr(){
    wallA.style.display='block';
    wallB.style.display='none';
    wallC.style.display='none';
}
btnB.addEventListener("click",wallBr);
function wallBr(){
    wallA.style.display='none';
    wallB.style.display='block';
    wallC.style.display='none';
}
btnC.addEventListener("click",wallCr);
function wallCr(){
    wallA.style.display='none';
    wallB.style.display='none';
    wallC.style.display='block';
}
