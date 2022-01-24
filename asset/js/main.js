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
       /*--====================Contact form start ====================--*/
       var form = document.getElementById("my-form");
    
       async function handleSubmit(event) {
         event.preventDefault();
         var status = document.getElementById("my-form-status");
         var data = new FormData(event.target);
         if (status.classList.contains('success')) {
           status.classList.remove('success');
         }
         fetch(event.target.action, {
           method: form.method,
           body: data,
           headers: {
               'Accept': 'application/json'
           }
         }).then(response => {
           status.classList.add('success');
           status.innerHTML = "Thanks for your submission!";
           form.reset()
         }).catch(error => {
           status.innerHTML = "Oops! There was a problem submitting your form"
         });
       }
       form.addEventListener("submit", handleSubmit)
      
        /*--====================Contact form end ====================--*/
        /*--======================skill start ====================-==-*/
        let skillcont=document.querySelectorAll('.skills_content')
        let SkillsArrow=document.querySelectorAll('.Skills_arrow')
        let skillslist=document.querySelectorAll('.skills_list')
        skillcont.forEach(element => {
          element.addEventListener('click',()=>{
            skillcont.forEach(content => {
              content.className="skills_content skills_close"
              content.addEventListener('click',()=>{
                if ( content.className==="skills_content skills_close") {
                  content.className="skills_content skills_open"
                }else{
                  content.className="skills_content skills_close"
                }
                
              })
            });
          })
        });
        
        /*-==-====================skill end =======================--=*/
             /*=========--======================services  start ====================-==-*/
             const morebtn=document.querySelectorAll('.services-desc') //cancelbtn
             const cancelbtn=document.querySelectorAll('.cancelbtn')
             morebtn.forEach(moreb => {
               moreb.addEventListener('click',()=>{
                moreb.parentElement.classList.add('popup')
                cancelbtn.forEach(cancelbt => {
                  cancelbt.addEventListener('click',()=>{
                    moreb.parentElement.classList.remove('popup')
                  })
                });
               })
             });
             /*-===========-====================services  end =======================--=*/
   /*=========--======================education and work experience  start ====================-==-*/
    const education_qualification=document.querySelector('.education_qualification')
    const educ_tab=document.querySelector('.educ_tab')
    const work_tab=document.querySelector('.work_tab')
    const work_qualification=document.querySelector('.work_qualification')
     educ_tab.addEventListener('click',()=>{
      education_qualification.classList.toggle('inactive')
       work_qualification.classList.add('inactive')
    })
     work_tab.addEventListener('click',()=>{
      work_qualification.classList.toggle('inactive')
      education_qualification.classList.add('inactive')
     })
      /*-===========-====================education and work experience  end =======================--=*/
    /*-===========-====================showep nav bar when scroll up  start =======================--=*/
    const headercontainer=document.querySelector('.header-container')
    let newvalue= 0;
    let oldvalue= 0;
   window.addEventListener('scroll',(e)=>{
     newvalue=window.pageYOffset;
     if ( oldvalue < newvalue) {
       headercontainer.style.position="relative"
     } 
     else if(newvalue===0){
      headercontainer.style.position="relative"
      headercontainer.style.background="red"
     }
     else if(oldvalue > newvalue){
      headercontainer.style.position="fixed"
      headercontainer.style.background="hsl(250, 69%, 61%)"
     }
     console.log(newvalue)
     console.log(oldvalue)
     oldvalue=newvalue;
   });
   
   /*=========--======================showep nav bar when scroll up  edn ====================-==-*/
    /*-===========-====================nav active class as scroll start ======================================-==--=*/
    const section=document.querySelectorAll('section')
    let activelin=document.querySelectorAll('.nav-link>a')
    window.addEventListener('scroll',()=>{
      let current=''
    section.forEach(sect => {
      let secscroll=sect.offsetTop
      let secheight=sect.clientHeight
      if ((secscroll-secheight/4)<=pageYOffset) {
         current=sect.getAttribute('id')
      }
      activelin.forEach(activel => {
        activel.classList.remove('active')
        if (activel.classList.contains(current)) {
          activel.classList.add('active')
        }
      });
    
    });
     
    })
   
   /*=========--======================nav active class as scroll  edn ====================-================-===-*/
    /*-===========-==================== scroll-up-arrow start ======================================-==--=*/
    const upbtn=document.querySelector('.upbtn')
    let homelin=document.querySelector('.about')
    let actualho=document.querySelector('.home')
    let homecroll=document.querySelector('.home_scroll')
    window.addEventListener('scroll',()=>{
      homescrol=homelin.offsetTop
      homeheight=homelin.clientHeight
      if ((homescrol-homeheight/4)<=pageYOffset) {
       upbtn.classList.add('active')
      }
      else{
        upbtn.classList.remove('active')
      }
    })
    upbtn.addEventListener('click',()=>{
      window.location=actualho
    })
   
   /*=========--======================nscroll -up-arrow edn ====================-================-===-*/
  
  
  
               
  
      