let menuIsOpen = false
function toggleMenu(){
    if(menuIsOpen){
        document.querySelector('.bars').classList.add('fade-in')
        document.querySelector('.bars').classList.remove('fade-out')
        document.querySelector('.links').classList.remove('slide-in')
        document.querySelector('.links').classList.add('slide-out')
    }
    else{
        document.querySelector('.bars').classList.remove('fade-in')
        document.querySelector('.bars').classList.add('fade-out')
        document.querySelector('.links').classList.remove('slide-out')
        document.querySelector('.links').classList.add('slide-in')
    }
    menuIsOpen = !menuIsOpen
}

document.querySelector('header nav').addEventListener('click', toggleMenu)