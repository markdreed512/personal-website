let menuIsOpen = false
function fadeInBars(){
    document.querySelector('.bars').classList.add('fade-in')
    document.querySelector('.bars').classList.remove('fade-out')
}
function fadeOutBars(){
    document.querySelector('.bars').classList.remove('fade-in')
    document.querySelector('.bars').classList.add('fade-out')
}
function slideOutNavLinks(){
    document.querySelector('.links').classList.remove('slide-in')
    document.querySelector('.links').classList.add('slide-out')
}
function slideInNavLinks(){
    document.querySelector('.links').classList.remove('slide-out')
    document.querySelector('.links').classList.add('slide-in')
}
function toggleMenu(){
    if(menuIsOpen){
        fadeInBars()
        slideOutNavLinks()
    }
    else{
        fadeOutBars()
        slideInNavLinks()
    }
    menuIsOpen = !menuIsOpen
}

document.querySelector('button.close').addEventListener('click', toggleMenu)
document.querySelector('header .bars').addEventListener('click', toggleMenu)

function growImg(){
    document.querySelector('.about-img').classList.add('grow')
    document.querySelector('.about-img').classList.remove('shrink')
}
function shrinkImg(){
    document.querySelector('.about-img').classList.remove('grow')
    document.querySelector('.about-img').classList.add('shrink')
}

const aboutImg = document.querySelector('.about-img')
const options = {
    // threshold: 0.5
}
function slideParagraphsIn(){
    document.querySelectorAll('#about p').forEach(p => p.classList.add('p-slide-in'))
    document.querySelectorAll('#about p').forEach(p => p.classList.remove('p-slide-out'))
    document.querySelector('.about-img').classList.add('grow')
}
function slideParagraphsOut(){
    document.querySelectorAll('#about p').forEach(p => p.classList.add('p-slide-out'))
    document.querySelectorAll('#about p').forEach(p => p.classList.remove('p-slide-in'))
}
function aboutObserverCallback(entries, observer){
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting){
            slideParagraphsIn()
        }else{
            slideParagraphsOut()
        }
    })
}
const aboutSectionObserver = new IntersectionObserver(aboutObserverCallback, options)
aboutSectionObserver.observe(aboutImg)