
window.onload= ()=>{
var post1= document.getElementById("c1") ;
var post2= document.getElementById("c2") ;
var post3= document.getElementById("c3") ;
var post4= document.getElementById("c4") ;
var post5= document.getElementById("c5") ;



post1.addEventListener('click', function(){
    document.getElementById("capitulo1").style.display='block';
    document.getElementById("capitulo2").style.display='none';
    document.getElementById("capitulo3").style.display='none';
    document.getElementById("capitulo4").style.display='none';
    document.getElementById("capitulo5").style.display='none';
  
});

post2.addEventListener('click', function(){
  document.getElementById("capitulo2").style.display='block';
  document.getElementById("capitulo1").style.display='none';
  document.getElementById("capitulo3").style.display='none';
  document.getElementById("capitulo4").style.display='none';
  document.getElementById("capitulo5").style.display='none';
});

post3.addEventListener('click', function(){
  document.getElementById("capitulo3").style.display='block';
  document.getElementById("capitulo1").style.display='none';
  document.getElementById("capitulo2").style.display='none';
  document.getElementById("capitulo4").style.display='none';
  document.getElementById("capitulo5").style.display='none';
});

post4.addEventListener('click', function(){
  document.getElementById("capitulo4").style.display='block';
  document.getElementById("capitulo1").style.display='none';
  document.getElementById("capitulo2").style.display='none';
  document.getElementById("capitulo3").style.display='none';
  document.getElementById("capitulo5").style.display='none';
});

post5.addEventListener('click', function(){
  document.getElementById("capitulo5").style.display='block';
  document.getElementById("capitulo1").style.display='none';
  document.getElementById("capitulo2").style.display='none';
  document.getElementById("capitulo3").style.display='none';
  document.getElementById("capitulo4").style.display='none';
});

}