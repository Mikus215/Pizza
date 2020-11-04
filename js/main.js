const burgerBtn = document.querySelector('.burger-btn'); //Burger btn to open navigation
const nav = document.querySelector('nav'); // section navigation
const burgerBars = document.querySelector('.burger-bars'); //brugers btn
const allNavItem=document.querySelectorAll('.nav-item'); //all links in section nevigation
const smallMenuPizza=document.querySelector('.menu-small-pizza'); 
const mediumMenuPizza=document.querySelector('.menu-medium-pizza');
const largeMenuPizza=document.querySelector('.menu-large-pizza');
const all=document.querySelector('.all'); //all pizza to show
const small=document.querySelector('.small');
const medium=document.querySelector('.medium');
const large=document.querySelector('.large');
const footerYear=document.querySelector('.footer-year'); //current year 

// Current year for footer
const currentYear=()=>
{
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

// show navigation

const showNav = () => {
    nav.classList.toggle('active');
    allNavItem.forEach(item=>{
        item.addEventListener('click', () =>{
            nav.classList.remove('active');
        })
    })
    animationNavItem();
}

// animation every single item in navigation

const animationNavItem=()=>
{
    let delayTime = 0;
    allNavItem.forEach(item=>{
        item.classList.toggle('nav-items-animation');
        item.style.animationDelay = `.${delayTime}s`;
        delayTime++;
    })
}

// show all pizza 

const showAll=()=>
{
    if(all.checked)
    {
        smallMenuPizza.classList.add('activeDisplay');
        mediumMenuPizza.classList.add('activeDisplay');
        largeMenuPizza.classList.add('activeDisplay');
        smallMenuPizza.classList.remove('noActiveDisplay');
        mediumMenuPizza.classList.remove('noActiveDisplay');
        largeMenuPizza.classList.remove('noActiveDisplay');
    }
    
}
// show all small pizza
const showSmall=()=>
{
    if(small.checked){
        smallMenuPizza.classList.add('activeDisplay');
        mediumMenuPizza.classList.remove('activeDisplay');
        largeMenuPizza.classList.remove('activeDisplay');
        smallMenuPizza.classList.remove('noActiveDisplay');
        mediumMenuPizza.classList.add('noActiveDisplay');
        largeMenuPizza.classList.add('noActiveDisplay');
    }
}
// show all medium pizza
const showMedium=()=>
{
    if(medium.checked){
        smallMenuPizza.classList.remove('activeDisplay');
        mediumMenuPizza.classList.add('activeDisplay');
        largeMenuPizza.classList.remove('activeDisplay');
        smallMenuPizza.classList.add('noActiveDisplay');
        mediumMenuPizza.classList.remove('noActiveDisplay');
        largeMenuPizza.classList.add('noActiveDisplay');
    }
}
// show all large pizza
const showLarge=()=>
{
    if(large.checked){
        smallMenuPizza.classList.remove('activeDisplay');
        mediumMenuPizza.classList.remove('activeDisplay');
        largeMenuPizza.classList.add('activeDisplay');
        smallMenuPizza.classList.add('noActiveDisplay');
        mediumMenuPizza.classList.add('noActiveDisplay');
        largeMenuPizza.classList.remove('noActiveDisplay');
    }
}

// liseners
currentYear();
burgerBtn.addEventListener('click', showNav)

// GASP

//Arrow bounce in forst page

let ltArrow=new TimelineMax({repeat: -1});
ltArrow.to('.header-arrow',1,{y:60,ease: Bounce.easeOut})
.to('.header-arrow',.5,{y:0});

//Header apper 

let ltHeader=new TimelineMax();
ltHeader.from('.header-text h1', .5 , { y:200, opacity:0})
.from('.header-btn', .5 , { y:200, opacity:0})
.from('.header-arrow', .5 , {opacity:0})
.from('.burger-btn', .5,{x: 200, opacity: 0});
