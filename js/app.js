var openElemnt = document.querySelector('.open');
var navlink = document.querySelector('.navlink');
var btn = document.querySelector('.btn');
var scrollingElement = (document.scrollingElement || document.body);
// scrollingElement.scrollTop = scrollingElement.scrollHeight;
btn.addEventListener('click', function () {
    window.scrollTo(0, 200);
});
openElemnt.addEventListener('click', function () {
    navlink === null || navlink === void 0 ? void 0 : navlink.classList.toggle('close');
});
