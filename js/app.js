
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



        let messages = [
            {
                id: 1,
                role: 'server',
                name: 'Support',
                avatar: './assets/image/avatar_server.jpg',  
                message: 'Hiiii b???n'
            },
            {
                id: 2,
                role: 'client',
                name: 'You',
                avatar: './assets/image/avatar_client.jpg',
                message: 'nonoasdasdas b???n'
            },
            {
                id: 3,
                role: 'server',
                name: 'Support',
                avatar: './assets/image/avatar_server.jpg',
                message: 'Hiiii ??dasdasdasb???n'
            },
            {
                id: 4,
                role: 'client',
                name: 'You',
                avatar: './assets/image/avatar_client.jpg',
                message: 'Hellooasssssssssssssssssssssssssssssssssssss b???n'
            },
            {
                id: 5,
                role: 'server',
                name: 'Support',
                avatar: './assets/image/avatar_server.jpg',
                message: 'Hiiiiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa b???n'
            },
            {
                id: 6,
                role: 'client',
                name: 'You',
                avatar: './assets/image/avatar_client.jpg',
                message: 'Helloo b???aaaaaaaaaaaaaaaaaaaaaaaaaaaaan'
            },
            {
                id: 7,
                role: 'server',
                name: 'Support',
                avatar: './assets/image/avatar_server.jpg',

                message: 'Hiiigggggggggggggggggggggggggggggggggggggggggi b???n'
            },
            {
                id: 8,
                role: 'client',
                name: 'You',
                avatar: './assets/image/avatar_client.jpg',
                message: 'Helloofffffffffffffffffffffffffff b???n'
            },
            {
                id: 9,
                role: 'server',
                name: 'Support',
                avatar: './assets/image/avatar_server.jpg',

                message: 'Hiiffffaaaaaaaaaaaaaaaaaaaaaii b???n'
            },
            {
                id: 10,
                role: 'client',
                name: 'You',
                avatar: './assets/image/avatar_client.jpg',
                message: 'Hellooaaatttttttttttttttttttttttttttttttttttttttttttttttttttttttt b???n'
            },
            {
                id: 11,
                role: 'server',
                name: 'Support',
                avatar: './assets/image/avatar_server.jpg',

                message: '  Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec ac viverra in scelerisque leo.'
            },
            {
                id: 12,
                role: 'client',
                name: 'You',
                avatar: './assets/image/avatar_client.jpg',
                message: '               Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec.'
            },
            {
                id: 13,
                role: 'server',
                name: 'Support',
                avatar: './assets/image/avatar_server.jpg',

                message: 'Hiiii b???n'
            },
            {
                id: 14,
                role: 'client',
                name: 'You',
                avatar: './assets/image/avatar_client.jpg',
                message: 'Helloo b???n'
            },
            {
                id: 15,
                role: 'server',
                name: 'Support',
                avatar: './assets/image/avatar_server.jpg',

                message: 'Hiiii b???n'
            },
            {
                id: 16,
                role: 'client',
                name: 'You',
                avatar: './assets/image/avatar_client.jpg',
                message: 'Helloo b???n'
            },
            {
                id: 17,
                role: 'client',
                name: 'You',
                avatar: './assets/image/avatar_client.jpg',
                message: 'Helloo b???n'
            },
            {
                id: 18,
                role: 'server',
                name: 'Support',
                avatar: './assets/image/avatar_server.jpg',

                message: 'Hiiii b???n'
            },
            {
                id: 19,
                role: 'client',
                name: 'You',
                avatar: './assets/image/avatar_client.jpg',
                message: 'Helloo b???n'
            },
            {
                id: 18,
                role: 'server',
                name: 'Support',
                avatar: './assets/image/avatar_server.jpg',

                message: 'Hiiii b???n'
            },
            {
                id: 19,
                role: 'client',
                name: 'You',
                avatar: './assets/image/avatar_client.jpg',
                message: 'Helloo b???n'
            },

        ];
        var newMess = messages.map((message)=> {
            if (message.role === 'server') {
                return `
                <div class="mess-text server">
                    <img src="${message.avatar}" class="avatar">
                    <span class="messtext mess-server">${message.message}
                        <div class="name name-server">${message.name}</div>
                    </span>
                    <div class="space"></div>
                    <div class="space"></div>
                </div>
                `
            } else if (message.role === 'client') {
                return `
                <div class="mess-text client">
                    <span class="messtext mess-client">${message.message}
                        <div class="name name-client">${message.name}</div>
                    </span>
                    <div class="space"></div>
                    <div class="space"></div>
                </div>
                `
            }
        })
        console.log(newMess)
        document.getElementById("messages").innerHTML = newMess.join('');