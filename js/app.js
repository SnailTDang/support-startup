
        const openMenu = document.querySelector('.js-open')
        const menu = document.querySelector('.js-menu')
        const closeBtns = document.querySelectorAll('.js-close')
        const menuBox = document.querySelector('.js-menu-box')
        const mess = document.querySelector('.js-mess')
        const openMess = document.querySelector('.js-openmess')
        const closeMess = document.querySelector('.js-closemess')
        const hidenmess = document.querySelector('.js-hidenmess')
        const hidens = document.querySelector('.js-hiden')
    
        function HidenMess() {
            hidenmess.classList.add('hiden')
        }
    
        function AppearMess() {
            hidenmess.classList.remove('hiden')
        }
    
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
            mess.classList.remove('openmess')
        }
       
        
    
        for (closeBtn of closeBtns) {
            closeBtn.addEventListener('click', CloseMenu)
        }
        openMenu.addEventListener('click', OpenMenu)
        menu.addEventListener('click', CloseMenu)
        menuBox.addEventListener('click', function (event) {
            event.stopImmediatePropagation()
        })
        closeMess.addEventListener('click',AppearMess)
        openMess.addEventListener('click',OpenMess)
        closeMess.addEventListener('click',CloseMess)
        hidenmess.addEventListener('click', HidenMess)
    
