// Иконка профиля, нажать.
const iconProfile = document.querySelector('.icon-profile');
const menuProfile = document.querySelector('.menu-profile');
iconProfile.addEventListener('click', () => {
  menuProfile.classList.toggle('open')
})
//CLICK LOGIN
const clickLogin = document.querySelector('.login');
const openModalLogin = document.querySelector('.modal-login');
clickLogin.addEventListener('click', () => {
  openModalLogin.classList.toggle('hidden')
})
//CLICK REGISTER
const clickRegister = document.querySelector('.register');
const openModalregister = document.querySelector('.modal-register');
clickRegister.addEventListener('click', () =>{
    openModalregister.classList.toggle('hidden')
})
//OPEN MY PROFILE 
const buttomOpenModalMyProfile = document.querySelectorAll('.open-myprofile');
const openModalMyProfile = document.querySelector('.modal-my-profile');
buttomOpenModalMyProfile.forEach(button=>{
  button.addEventListener('click', () =>{
    openModalMyProfile.classList.toggle('hidden')
  })})
//CLOSE MODAL
const closeButton =  document.querySelectorAll('.bttn-close');
closeButton.forEach(img =>{
  img.addEventListener('click', () =>{
    Element.style.display='none';
  })
})



//КАРУСЕЛЬ, КАРУСЕЛЬ//
/* этот код помечает картинки, для удобства разработки */

let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}


/* конфигурация */
let width = 450; // ширина картинки
let count = 2; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.onedot').onclick = function() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.twodot').onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};






console.log(carousel);
/*
const (e)hedericon = document.querySelector(".header__icon");
const (t)dropmenu = document.querySelector(".drop-menu");
       hedericon .addEventListener("click", (()=>{
            dropmenu.classList.toggle("open")
       
            modals, modals open
const B = e=>{    LOGIN
        const (t) dropmenu = document.querySelector(".modals")
          , o = document.querySelector(e);
        t.classList.add("overlay"),
        o.classList.add("open"),
        document.body.classList.add("noscroll")
    }
      , E = e=>{ REGISTER
        const t = document.querySelector(".modals")
          , o = document.querySelector(e);
        t.classList.remove("overlay"),
        o.classList.remove("open"),
        document.body.classList.remove("noscroll")
    }
      , x = (e,t,o)=>{
        const n = document.querySelectorAll(".modal")
          , a = document.querySelector(".drop-menu");
        document.addEventListener("click", (o=>{
            o.target.closest(e) && (n.forEach((e=>e.classList.remove("open"))),
            B(t),
            a.classList.remove("open"))
        }
        ));
        document.querySelector(o).addEventListener("click", (()=>E(t)))
    }

    */