let openElemnt = document.querySelector('.open')!;
let navlink = document.querySelector('.navlink')!;
let btn = document.querySelector('.btn')!;

const scrollingElement = (document.scrollingElement || document.body);
// scrollingElement.scrollTop = scrollingElement.scrollHeight;


btn.addEventListener('click',()=>{
    window.scrollTo(0,200);
})


openElemnt.addEventListener('click',()=>{
    navlink?.classList.toggle('close')
})