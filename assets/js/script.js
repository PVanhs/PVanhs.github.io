//  txt typing
 var typed = new Typed(".typing",{
      strings:["Designer","Frontend dev","UI/UX Design"],
      typeSpeed : 100,
      backSpeed : 60,
      loop : true
  }
  )

  var typed = new Typed(".typing2",{
      strings:["Designer","Frontend dev","UI/UX Design"],
      typeSpeed : 100,
      backSpeed : 60,
      loop : true
  }
  )

//  loader window

 window.addEventListener("load",function(){
     this.document.querySelector(".preloader").classList.add("fade-out")
     setTimeout(function(){
         document.querySelector(".preloader").style.display="none"
     },1000)
 })

//  portfolio item filter
 const filterContainer=document.querySelector(".portfolio-filter"),
         filterBtns=filterContainer.children,
         totalFilterBtn=filterBtns.length,
         portfolioItems=document.querySelectorAll(".portfolio-item"),
         totalPortfolioItem=portfolioItems.length
        

         for(let i=0; i<totalFilterBtn; i++){
             filterBtns[i].addEventListener("click",function(){
                 filterContainer.querySelector(".active").classList.remove("active")
                 this.classList.add("active")

                 const filterValue=this.getAttribute("data-filter") 
                 for(let k=0; k<totalPortfolioItem; k++){

                     if(filterValue === portfolioItems[k].getAttribute("data-category")){
                         portfolioItems[k].classList.add("show")
                         portfolioItems[k].classList.remove("hide")
                     }
                     else{
                         portfolioItems[k].classList.add("hide")
                         portfolioItems[k].classList.remove("show")

                     }
                     if(filterValue === "all"){
                         portfolioItems[k].classList.add("show")
                         portfolioItems[k].classList.remove("hide")

                     }
                   
                 }
             })
         }
 
//   portfolio lightbox

 const lightbox=document.querySelector(".lightbox"),
         lightboxImg=lightbox.querySelector(".lightbox-img"),
         lightboxClose=lightbox.querySelector(".lightbox-close")
     let itemIndex=0
     for(let i=0;i<totalPortfolioItem;i++){
         portfolioItems[i].addEventListener("click", function(){
             itemIndex=i
             changeItem();
             toggleLightbox()
         })   
     }
     function toggleLightbox(){
         lightbox.classList.toggle("open")
     }
     function changeItem(){
         imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img ").getAttribute("src")
         lightboxImg.src=imgSrc
     }


     
 // close lightbox
 lightbox.addEventListener("click",function(event){
     if(event.target === lightboxClose){
         toggleLightbox()
     }
 })

//  Aside Navbar
const nav=document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList=navList.length,
    allSection=document.querySelectorAll(".section"),
    totalSection=allSection.length

    for(let i=0 ;i<totalNavList;i++){
     const a=navList[i].querySelector("a")
     a.addEventListener("click", function(){

        //  remove back section class
        for(let i=0; i<totalSection;i++){
            allSection[i].classList.remove("back-section")
        }

         for(let j=0; j<totalNavList;j++){
    if(navList[j].querySelector("a").classList.contains("active")){
        allSection[j].classList.add("back-section") 
        }
          navList[j].querySelector("a").classList.remove("active")

            }
           this.classList.add("active")
          showSection(this);
        
        if(window.innerWidth < 1200){
            asideSectionTongglerBtn();
        }  
        })
    }
    
function showSection(element){
    for(let i=0; i<totalSection;i++){
        allSection[i].classList.remove("active")
    }
    const target=element.getAttribute("href").split("#")[1]
    document.querySelector("#"+target).classList.add("active")


}

const navTogglerBtn=document.querySelector(".nav-toggler"),
        aside=document.querySelector(".aside")
    
navTogglerBtn.addEventListener("click", () =>{
    asideSectionTongglerBtn()

})

function asideSectionTongglerBtn(){
    aside.classList.toggle("open")
    navTogglerBtn.classList.toggle("open")
    for(let i=0; i<totalSection;i++){
        allSection[i].classList.toggle("open")
    }
}

