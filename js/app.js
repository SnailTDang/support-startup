    const openMenu = document.querySelector('.js-open')
    const menu = document.querySelector('.js-menu')
    const closeBtns = document.querySelectorAll('.js-close')
    const menuBox = document.querySelector('.js-menu-box')
    const mess = document.querySelector('.js-mess')
    const openMess = document.querySelector('js-openmess')


    function OpenMenu() {
        menu.classList.add('open')
    }

    function CloseMenu() {
        menu.classList.remove('open')
    }
    function OpenMess() {
        mess.classList.add('openmess')
    }
    function CloseMess() {
        mess.classList.removes('openmess')
    }
    

    for (closeBtn of closeBtns) {
        closeBtn.addEventListener('click', CloseMenu)
    }
    openMenu.addEventListener('click', OpenMenu)
    menu.addEventListener('click', CloseMenu)
    menuBox.addEventListener('click', function (event) {
        event.stopImmediatePropagation()
    })
    // mess.addEventListener('click',OpenMess)