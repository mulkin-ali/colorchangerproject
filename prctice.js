let randomcolor=function(){
  const hex='0123456789ABCDEF';
  let color='#';
  for(let i=0; i<6; i++){
    color +=hex[Math.floor(Math.random()*16)];
  }
  
  return color;
}
let intervalid;
let startchngingcolor=function(){
intervalid=setInterval(changebgcolor,1000);

}
let stopchngincolor=function(){
  clearInterval(intervalid)
}
let changebgcolor=function(){
  document.body.style.backgroundColor=randomcolor();
}
document.querySelector(".strt").addEventListener("click",startchngingcolor);
document.querySelector(".stop").addEventListener("click",stopchngincolor)