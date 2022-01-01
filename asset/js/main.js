const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close'),
      navlink=document.querySelectorAll('.nav_link')  
  
      //check if constants existes
      if (navToggle) {
          navToggle.addEventListener('click',()=>{
              navMenu.classList.add('show-menu')//show menu
          }) 
      }
      //hiden the menu
      if(navClose){
          navClose.addEventListener('click',()=>{
              navMenu.classList.remove('show-menu')
          })
      }

      function linkAction(){
        const navMenu =document.getElementById('nav-menu')
        //when we click on each nav_link, we removr the show-menu class
        navMenu.classList.remove('show-menu')
    }  
    navlink.forEach(g=>g.addEventListener('click',linkAction)) 
    const skills_content=document.querySelectorAll('.skills_content');

    for (let i = 0; i < skills_content.length; i++){
        const arrow=skills_content[i].querySelector('.Skills_arrow');
        const list=skills_content[i].querySelector('.skills_list');
        arrow.addEventListener('click',()=>{
            arrow.classList.toggle('skills_close');
            if (arrow.classList.contains('skills_close')) {
                list.classList.add('skills_close');
                list.classList.remove('skills_open');
            }else{
                list.classList.add('skills_open')
                list.classList.remove('skills_close')
            }
        })
    }
    const workTab=document.getElementById('work_tab'),
    workTabbtn=document.getElementById('work');
    workTab.addEventListener('click',()=>{
        workTabbtn.classList.toggle('inactive');
        workTab.classList.toggle('tabcolor');
    });
    const educTab=document.getElementById('educ_tab'),
    educTabbtn=document.getElementById('education');
    educTab.addEventListener('click',()=>{
        educTabbtn.classList.toggle('inactive');
        educTab.classList.toggle('tabcolor');
    });

    /*--==================== services js ====================--*/
    let morebtn=document.querySelectorAll('.more')
    let moreCard=document.querySelectorAll('.service-container-more')
    let cancelbtn=document.querySelectorAll('.cancelbtn')
    for (let index = 0; index < morebtn.length; index++) {
        morebtn[index].addEventListener('click',()=>{
                moreCard[index].classList.add('active')
                cancelbtn[index].addEventListener('click',()=>{
                    moreCard[index].classList.remove('active')
                })
        })
    }
  
   
    /*--==================== services js end ====================--*/
     /*--====================portifolio section js start ====================--*/
    let prev=document.querySelector('.arrow-icon-left');
    let carousel=document.querySelector('.work-card-container');
    let next=document.querySelector('.arrow-icon-right');
    let content=document.querySelector('.work-card');
   const gap = 16;

   next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
      prev.style.display = "grid";
    }
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth){
      next.style.display = "none";
    }
  });
  prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
      prev.style.display = "none";
    }
    if (!carousel.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "grid";
    }
  });
  
  let width = content.clientWidth;
  window.addEventListener("resize", e => (width = content.clientWidth));
  
    /*--====================portifolio section js end ====================--*/
