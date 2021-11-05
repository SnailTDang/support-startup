
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
            menu.classList.remove('close')
        }
    
        function CloseMenu() {
            menu.classList.remove('open')
            menu.classList.add('close')
        }
    
        function OpenMess() {
            mess.classList.add('openmess')
            mess.classList.remove('closemess')
        }
    
        function CloseMess() {
            mess.classList.remove('openmess')  
            mess.classList.add('closemess')
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



        // let messages = [
        //     {
        //         id: 1,
        //         name: 'server',
        //         message: 'Hiiii bạn'
        //     },
        //     {
        //         id: 2,
        //         name: 'client',
        //         message: 'Helloo bạn'
        //     }
        // ];
        // var newMess = messages.map((message)=> {
        //     if (message.name === 'server') {
        //         return `
        //         <div>
        //             <span class="messtext mess-server">${message.mess}</span>
        //         </div>
        //         `
        //     } else if (message.name === 'client') {
        //         return `
        //         <div>
        //             span class="messtext mess-server">${message.mess}</span>
        //         </div>
        //         `
        //     }
        // })
        // console.log(newMess)
        // document.getElementsByClassName("server").innerHTML = newMess;
        // document.getElementsByClassName("client").innerHTML = newMess;