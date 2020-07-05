function openMenu(){
  var b1=document.getElementById("bar1");
  var b2=document.getElementById("bar2");
  var b3=document.getElementById("bar3");
  var m=document.getElementById("menu");
 b1.classList.toggle("nbar1");
 b2.classList.toggle("nbar2");
 b3.classList.toggle("nbar3");
 m.classList.toggle("extended");  
}