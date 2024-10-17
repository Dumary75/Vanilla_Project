"use strict"

// Check first if User is logged in //
let acc_token = JSON.parse(localStorage.getItem("loginToken"))

// --- Header Click Event --- //

let header_default = document.querySelector('header');
let main_container = document.querySelector('.main_container');
let main_container_game = document.querySelector('.main_container_game');
let header_blocks = document.querySelectorAll('.header_blocks_default');
let header_headline = document.querySelector('.header_headline');
let footer = document.querySelector('footer');

if(acc_token){
    header_headline.addEventListener('click', () => {
        header_default.classList.toggle('pressed');
        header_headline.classList.toggle('header_headline_pressed');
 
        header_blocks.forEach(header_block => {
               header_block.classList.toggle('pressed_header_blocks');
        });
 
        if(main_container_game){
            main_container_game.classList.toggle('pressed_blurry_effect');
        } else if(main_container){
            main_container.classList.toggle('pressed_blurry_effect');
        };

        footer.classList.toggle('pressed_blurry_effect');
    });
}

// > Account_current_state Logic < //  

let account_state = document.querySelector('.login_state');
let account_state_clicked = document.querySelector('.login_state_clicked');
let ausloggen = document.querySelector('.ausloggen');
let ausloggen_abrechen = document.querySelector('.abrechen');

let logged_site_blocker = document.querySelector('.login_checker');
let logged_site_blocker_boxes = document.querySelectorAll('.login_checker_boxes');

window.addEventListener('load', () => {
       if(acc_token){
              account_state.classList.add('login_state_loggedIn');
              account_state.innerText = 'eingeloggt';
       } else {
        logged_site_blocker.classList.add('login_checker_active');
        header_headline.classList.add('pressed_blurry_effect');
        main_container.classList.add('pressed_blurry_effect');
        logged_site_blocker_boxes.forEach(box => {
            box.addEventListener('click', () => {
                window.location.href = 'account.html';
            });
        });
       };
});
 

account_state.addEventListener('click', () => {
              account_state_clicked.classList.toggle('login_state_clicked_active');
              header_headline.classList.toggle('pressed_blurry_effect');
              header_blocks.forEach(header_block => {
              header_block.classList.toggle('pressed_blurry_effect'); });     
              if(main_container_game){
                main_container_game.classList.toggle('pressed_blurry_effect');
            } else if(main_container){
                main_container.classList.toggle('pressed_blurry_effect');
            };
            footer.classList.toggle('pressed_blurry_effect');
                                    
       });

ausloggen.addEventListener('click', () => {
       let acc_token = JSON.parse(localStorage.getItem("loginToken"))
       if(acc_token){
              account_state.classList.remove('login_state_loggedIn');
              account_state.innerText = 'ausgeloggt'; 
              ausloggen.innerText = 'einloggen';
              ausloggen.style.backgroundColor = '#0cb11a';
              localStorage.removeItem('loginToken');
              alert('Erfolgreich ausgeloggt!');
              account_state_clicked.classList.remove('login_state_clicked_active');
              header_headline.classList.remove('pressed_blurry_effect');
              header_blocks.forEach(header_block => {
              header_block.classList.remove('pressed_blurry_effect'); });                              
       } else {
              window.location.href = 'account.html';
       };
   });       

ausloggen_abrechen.addEventListener('click', () => {
              account_state_clicked.classList.remove('login_state_clicked_active');
              header_headline.classList.remove('pressed_blurry_effect');
              header_blocks.forEach(header_block => {
              header_block.classList.remove('pressed_blurry_effect');
                                                 });
                                                 if(main_container_game){
                                                    main_container_game.classList.toggle('pressed_blurry_effect');
                                                } else if(main_container){
                                                    main_container.classList.toggle('pressed_blurry_effect');
                                                };
              footer.classList.toggle('pressed_blurry_effect');
                                        
       });  

//-----------------------MAIN_CONTENT-------------------------------------------//

// Acc_CREATE site Logic //
let acc_create_field = document.querySelector('.acc_create');
let acc_create_form = document.querySelector('.acc_create_form');

// > Create Icons below //
let info_icon = document.querySelector('.pw_infos');
let info_box = document.querySelector('.info_box');
let info_checked_button = document.querySelector('.infos_checked_button');

let pw_generator_icon = document.querySelector('.pw_generator');
let pw_eye_icon = document.querySelector('.pw_auge');

acc_create_field.addEventListener('click', () => {
       acc_login_field.style.display = 'none';
       // delete the headline //
       let pElement = acc_create_field.querySelector('p'); 
       pElement.textContent = ''; 

       acc_create_form.style.display = 'flex';
       acc_create_form_button.style.display = 'block';
       acc_create_field.classList.add('mainblocks_responsive');
       document.querySelector('.mainblocks_responsive').style.backgroundColor = '#066f8b';
       acc_create_field.classList.remove('acc_create');
       acc_create_field.classList.remove('hover_effect');
});

// Acc_LOGIN site Logic //
let acc_login_field = document.querySelector('.acc_login');
let acc_login_form = document.querySelector('.acc_login_form');
let form_login_button = document.querySelector('.form_login_button');

acc_login_field.addEventListener('click', () => {
       acc_create_field.style.display = 'none';
       // delete the headline //
       let pElement = acc_login_field.querySelector('p'); 
       if (pElement) {
           pElement.textContent = ''; 
       }

       acc_login_form.style.display = 'flex';
       form_login_button.style.display = 'block';
       acc_login_field.classList.add('mainblocks_responsive');
       document.querySelector('.mainblocks_responsive').style.backgroundColor = '#10a2f2';
       acc_login_field.classList.remove('acc_login');
       acc_login_field.classList.remove('hover_effect');
});
//-----------------------------------------------------------------------//

// --- ICONS --- //
// Info_Icon Event 

info_icon.addEventListener('click', () => {
       main_container.classList.toggle('pressed_blurry_effect');
       // footer.classList.toggle('pressed_blurry_effect');
       header_default.classList.toggle('pressed_blurry_effect');
       info_box.classList.toggle('info_box_active');
});

info_checked_button.addEventListener('click', () => {
       main_container.classList.toggle('pressed_blurry_effect');
       // footer.classList.toggle('pressed_blurry_effect');
       header_default.classList.toggle('pressed_blurry_effect');
       info_box.classList.toggle('info_box_active');
});

// PW Generator 
pw_generator_icon.addEventListener('click', () => {
       const length = 4; 
       const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
       let password = "";

            for (let i = 0, n = charset.length; i < length; ++i) {
                password += charset.charAt(Math.floor(Math.random() * n));
            }

       document.querySelector('#password').value = password;
});


// > Passwort (o) Eye < //

let klicked = 0;
// CREATE_page_version 
pw_eye_icon.addEventListener('click', () => {

       const password_input = document.querySelector('#password');
       const currentType = password_input.type;

       password_input.type = currentType === "password" ? "text" : "password";

       if(klicked === 0){
              pw_eye_icon.textContent = '👁';
              klicked++;
              return;
       } else{
              pw_eye_icon.textContent = '👁‍🗨'
              klicked--;
              return;
       };

});

// LOGIN_page_version 
let pw_auge_login = document.querySelector('.pw_auge_login');

pw_auge_login.addEventListener('click', () => {

       const password_input_login = document.querySelector('#password_login');
       const currentType_login = password_input_login.type;

       password_input_login.type = currentType_login === "password" ? "text" : "password";

       if(klicked === 0){
              pw_auge_login.textContent = '👁';
              klicked++;
              return;
       } else{
              pw_auge_login.textContent = '👁‍🗨'
              klicked--;
              return;
       };

});

// > Account CREATE Button < //
let acc_create_form_button = document.querySelector('.form_create_button');

acc_create_form_button.addEventListener('click', (event) => {

       let username = document.querySelector('#name').value;
       let password = document.querySelector('#password').value; 

       if (!username || !password) {
              event.preventDefault();
              alert("Bitte Benutzername und Passwort eingeben.");
              return;
          } else {
              let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
              const newAccount = { username: username, password: password };
              accounts.push(newAccount);
              localStorage.setItem("accounts", JSON.stringify(accounts));
              alert("Account gespeichert!");
          }
});

// > Account LOGIN Button < //

let acc_login_form_button = document.querySelector('.form_login_button');

acc_login_form_button.addEventListener('click', (event) => {

       let username_login = document.querySelector('#name_login').value;
       let password_login = document.querySelector('#password_login').value; 

       if (!username_login || !password_login) {
              event.preventDefault();
              alert("Bitte Benutzername und Passwort eingeben.");
              return;
          } else {
              // check if the datas are correct 
              let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
              const account = accounts.find(account => account.username === username_login && account.password === password_login);
              if (account) {
                     // check if the login-token already exists
                     if (!isAlreadyLoggedIn(username_login)) {
                         alert('Login erfolgreich!');
                         setLoginToken(username_login);
                         return true;
                     } else {
                         event.preventDefault();
                         alert('Dieser Benutzer ist bereits eingeloggt.');
                         return false;
                     }
                 } else {
                     event.preventDefault();
                     alert('Login fehlgeschlagen: Benutzername oder Passwort ist falsch.');
                     return false;
                 }
          }
});

// Account LOGIN-TOKEN logic //
function setLoginToken(username_login) {
       const token = {
              username: username_login,
       };
   
       // will be saved in localstorage for the other pages 
       localStorage.setItem('loginToken', JSON.stringify(token));
       console.log('Token gesetzt:', token);
   }

//------------

   function isAlreadyLoggedIn(username_login) {
       const token = JSON.parse(localStorage.getItem('loginToken'));
       return token && token.username === username_login;
   }