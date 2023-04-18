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
