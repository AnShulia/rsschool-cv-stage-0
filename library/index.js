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
  openModalLogin.classList.toggle('hidden');
})
openModalLogin.addEventListener('click', (e) =>{
  if(e.target.className === 'modal-login hidden' || e.target.className === 'bttn-close'){
     openModalLogin.classList.toggle('hidden');}
  })
//CLICK REGISTER
const clickRegister = document.querySelector('.register');
const openModalregister = document.querySelector('.modal-register');
clickRegister.addEventListener('click', () =>{
    openModalregister.classList.toggle('hidden')
})
openModalregister.addEventListener('click', (e) => {
  if(e.target.className === 'modal-register hidden' || e.target.className === 'bttn-close'){
    openModalregister.classList.toggle('hidden')
  }
})
//OPEN MY PROFILE 
const buttomOpenModalMyProfile = document.querySelector('.open-myprofile');
const openModalMyProfile = document.querySelector('.modal-my-profile');
buttomOpenModalMyProfile.addEventListener('click', () => {
  openModalLogin.classList.remove('hidden');
  openModalregister.classList.remove('hidden');
  openModalMyProfile.classList.toggle('hidden')
})
openModalMyProfile.addEventListener('click', (e) => {
 if (e.target.className === 'modal-my-profile hidden' || e.target.className === 'bttn-close'){
  openModalMyProfile.classList.toggle('hidden')
  }
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
let width = 495; // ширина картинки
let count = 1; // видимое количество изображений
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let position = 0; // положение ленты прокрутки

document.querySelector(".onedot").onclick = function () {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};
document.querySelector('.twodot').onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
document.querySelector('.treedot').onclick = function() {
  position -= width * (count + count);
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
}

/*

    const activeBtn = document.querySelector('.show-modal');
const overlay = document.querySelector('.overlay');

activeBtn.addEventListener('click', (e) => {
  overlay.classList.toggle('hidden')
})

overlay.addEventListener('click', (e) => {
  if(e.target.className === 'overlay' || e.target.className === 'close') overlay.classList.toggle('hidden')
})
    */

window.addEventListener('click', (event) => {
  console.log(event)
})