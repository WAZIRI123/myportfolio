const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close'),
      active=document.querySelectorAll('.nav-link>a'),
      togglebar=document.querySelector('.toggle-bar'),
      navwrapper=document.querySelector('.nav-wrapper')
      //--==================== togglebar start ====================--//
      togglebar.addEventListener('click',()=>{
        navwrapper.classList.toggle('active')
      })
        //--==================== togglebar end ====================--//
        //--==================== navlinkscroll on click start ====================--//
        let navlinkscr=document.querySelectorAll('nav-link')
        navlinkscr.forEach(()=>{
          navlinkscr.addEventListener(('click',()=>{
            
          }))
        })
        //--==================== navlinkscroll on click end ====================--//
    /*--====================portifolio section js start ====================--*/
     let container=document.querySelector('.portifolio-container')
     let totalwidth=0;
   const controlitem=document.querySelector('.control')
     const itemsdiv=container.children,
     widthcontainer=container.offsetWidth;
    let items=0;
  let margin=30;
  let jumpslipe=0;
     let responsive=[
      {breakpoint:{width:200,items:1}},
      {breakpoint :{width:300,items:2}},
      {breakpoint : {width:768,items:3}},
      {breakpoint : {width:900,items:4}}
     ];
     function load() {
      for (let i = 0; i<responsive.length; i++) {
        if (window.innerWidth>responsive[i].breakpoint.width) {
           items=responsive[i].breakpoint.items
        }
      }
      start();
     
   }
   let totalitems=0
    function start(){
      let itemwidth=(widthcontainer/items);
      for (let i = 0; i <itemsdiv.length; i++) {
       itemsdiv[i].style.width=(itemwidth-margin) +'px'
       itemsdiv[i].style.margin=margin/2 +'px'
       totalwidth+=(widthcontainer/items)
       totalitems++
      }
      container.style.width=totalwidth +'px';
      control()
     }
     window.onload =load();
     
     function control(){
      let ul =document.createElement('ul')
      ul.classList.add('controlcontainer')
      controlitem.appendChild(ul);
      ///number of slides
       let slides=Math.ceil(totalitems/items)
       for (let i = 1; i <=slides; i++) {
        let li=document.createElement('li')
        let Textnode=document.createTextNode(i);
        li.id=i
        li.classList.add('controli')
        if (i==1) {
          li.classList.add('active')
        }
        li.setAttribute('onclick',"slide(this)")
        li.appendChild(Textnode);
        ul.appendChild(li);
       } 
     }
     function slide(ele){
      const controls=document.querySelector('.control')
      const ul=controls.children
      const li=ul[0].children
      let active=0;
      for (let i = 0; i < li.length; i++) {
        if(li[i].className=='controli active'){
          active=i
          li[i].className='controli'
          console.log(active)
        }
      }
        ele.className=('controli active')
        let numb=(ele.id-1)-active
        jumpslipe+=widthcontainer*numb
        container.style.marginLeft=-jumpslipe+'px'
     }

    /*--====================portifolio section js end ====================--*/
     /*--====================smooth scroll section js end ====================--*/
     const navlink=document.querySelectorAll('.nav-link>a')
     navlink.forEach((navlinks)=>{
      navlinks.addEventListener('click',(e)=>{
        e.preventDefault()
       let href=navlinks.getAttribute('href')
       document.querySelector(href).scrollIntoView({behavior: "smooth"});
       })
     })
     
      /*--====================smoothh scrol section js end ====================--*/

       /*--====================blue color of navlink section js start ====================--*/
  
      active.forEach((btn)=>{
        btn.addEventListener('click',()=>{
          document.querySelector('.link.active').classList.remove('active')
           btn.classList.add('active')
        })
       })
     /*--====================blue color of navlink section js start ====================--*/
  
      