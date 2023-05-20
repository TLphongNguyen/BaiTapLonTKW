window.addEventListener("load", function(){
    const slider = document.querySelector(".banner-sliner");
    const sliderList = document.querySelector(".sliner-list");
    const sliderItems = document.querySelectorAll(".banner__link");
    const headeritems = document.querySelectorAll(".header-item")
    const nextBtn = document.querySelector(".control-sliner-next");
    const prevBtn = document.querySelector(".control-sliner-prev");
    const slinderItemWidth = sliderItems[0].offsetWidth;
    const slinderLength = sliderItems.Length;
    const boundingUl = document.querySelector(".sliner-list").getBoundingClientRect().width
    const tabItem = document.querySelectorAll(".container-tab__item")
    let positionX = 0;
    let index = 0;
    nextBtn.addEventListener("click", function() {
        positionX+=boundingUl
        if(positionX==sliderItems.length*boundingUl){
            positionX=0;
        }
        document.querySelector(".slinder-wrapper").scrollLeft = positionX;

    });

    prevBtn.addEventListener("click", function() {
        if(positionX<=0){
            positionX=sliderItems.length*boundingUl
        }
        positionX-=boundingUl
        document.querySelector(".slinder-wrapper").scrollLeft = positionX;
       
    });
    
    tabItem.forEach((item,indexs)=>{
        
        item.addEventListener("click",()=>{
            if(indexs === 0){
                document.querySelector('.content-tap__plane').style.display = "flex";
                document.querySelector('.content-tap__hotel').style.display = "none"
                document.querySelector('.content-tap__golf').style.display = "none"
            }else if(indexs === 1){
                document.querySelector('.content-tap__plane').style.display = "none"
                document.querySelector('.content-tap__hotel').style.display = "block"
                document.querySelector('.content-tap__golf').style.display = "none"
            }else{
                document.querySelector('.content-tap__plane').style.display = "none"
                document.querySelector('.content-tap__hotel').style.display = "none"
                document.querySelector('.content-tap__golf').style.display = "flex"
            }
            item.classList.add("container-tab__item-active")  
            index = indexs
            tabItem.forEach((items,flag)=>{
                if(flag!==index){
                    items.classList.remove('container-tab__item-active')
                } 
            })
            
        })
        
    })

    // headeritems.forEach((item,index)=>{
    //     item.addEventListener("click",(e)=>{
    //         e.target.classList.toggle("header-item__active")
    //     })
    // })

    // test
   





})