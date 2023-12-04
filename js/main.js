
let counter =0;
let experianceCounterElement = document.getElementById("experianceCounter");
let clientCounterElement = document.getElementById("clientCounter");
let getCounterElement = document.getElementById("getCounter"); 
let projectsCounterElement = document.getElementById("projectsCounter");
let lis = document.querySelectorAll(".collapse ul li a");
 
 let colorBoxWdth = $("#colorBox").outerWidth();


  // add active class to clicked li  
lis.forEach(function(ele){
    ele.onclick =function(){
        lis.forEach(function(ele){
            ele.classList.remove("active");
        })
        this.classList.add("active");
    }
});
   

   
$(window).scroll(function(){
    let wScroll = $(window).scrollTop(); 
    // console.log(wScroll)
    if(wScroll > 30 ){
        
        $("#main-nav").css("backgroundColor", "black");
        $("#main-nav").addClass("pad");
        $("#upBtn").fadeIn(300);
       
    }
    else
    {
        $("#main-nav").css("backgroundColor", "transparent");
        $("#main-nav").removeClass("pad");
        $("#upBtn").fadeOut(300);
    }
    }
)






$("#upBtn").click(function(){
    $("html ,body").animate({scrollTop: 0} , 100)
})



$("a[href ='#']").click( function(e){
    

    let  aHref = $(e.target).attr('href');
   let sectionOffset = $(aHref).offset().top;
   $("html ,body").animate({scrollTop : sectionOffset} , 1000);
   
  
})


 
$(window).ready( function(){
    
    $('.owl-carousel').owlCarousel({
        items:2,
      
    });
   
   
    $("#colorBox").css("opacity","0") 
     $("#optionsBox").css("left", -colorBoxWdth)
   
      $(".loading").fadeOut(1000 ,()=>{
        
        $(".loading").remove();
       
      
        $("body ").css("overflow-y","auto");
      });
     

    
});


    

 $("#cogBtn").click(function(){
    
    
    $("#colorBox").css("opacity","1")
     if($("#optionsBox").css("left") == "0px")
    
      {
        $("#optionsBox").animate({left : `-${colorBoxWdth}`} ,1000)
        
      }
      else
      {
        $("#optionsBox").animate({left:"0px"} )
      }
 })


 let colorItem = $(".color-item")
 colorItem.eq(0).css("background-color" ,"#09c");
 colorItem.eq(1).css("background-color" ,"orange");
 colorItem.eq(2).css("background-color" ,"lightgreen");
 colorItem.eq(3).css("background-color" ,"yellow");
 colorItem.eq(4).css("background-color" ,"teal");
 colorItem.eq(5).css("background-color" ,"aqua");
 colorItem.eq(6).css("background-color" ,"crimson");
 colorItem.eq(7).css("background-color" ,"lightgray");



 colorItem.click(function(e){
    let bgColor = $(e.target).css("background-color") ;
    $("h4").css("color", bgColor)
 })




 
 function experianceCounting(){
    
    counter ++;
    experianceCounterElement.innerHTML = counter;
    
    if(counter == 10 )
    {
        clearInterval(experianceCounter)
    }
    

 };

  let experianceCounter =setInterval(()=>{
    experianceCounting()
       
 },100);
  



 let count =0;
 function clientCounting(){
    
    count ++;
    clientCounterElement.innerHTML = count;

    if(count == 250 )
    {
        clearInterval(clientCounter)
    }
    

 };

  let clientCounter =setInterval(()=>{
    clientCounting()
       
 },1);
 

 let cartoona=0;
 function projectsCounting(){
    cartoona ++;
    projectsCounterElement.innerHTML = cartoona;
    if(cartoona == 650)
    {
        clearInterval( projectsCounter)
    }
 };
 let projectsCounter = setInterval(()=>{
    projectsCounting()
 },.001)



 let container=0;
function getCounting()
{
    container++;
    getCounterElement.innerHTML=container;
    if(container == 38)
    {
        clearInterval(getCounter)
    }
};

let getCounter = setInterval(()=>{
    getCounting()
},100);



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
           
        },
        1000:{
            items:2,
          
        }
    }
})


//mitit up
var mixer = mixitup('.gallery');

$(".shuffle li").click( function(){
 $(this).addClass("active").siblings().removeClass("active")
});
