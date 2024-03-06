$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
{
    breakpoint: 768, 
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
},
{
    breakpoint: 480, 
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
}
]

});
$('.prevBtn').click(function () {
    $('.slider').slick('slickPrev');
});

$('.nextBtn').click(function () {
    $('.slider').slick('slickNext');
});


var accordionBtns = document.querySelectorAll(".my-btn");
var accardion=document.querySelectorAll(".accordion .accordion-content")
accardion[0].classList.add('block');
accordionBtns.forEach(function (btn) {
btn.addEventListener("click", function (e) {
const mes = this.parentNode.parentNode.querySelectorAll('.accordion .accordion-content');
const blockId=e.target.dataset.id;
console.log("mes",mes,e.target.dataset.id);
mes[blockId]?.classList?.add('block');
mes[blockId]?.classList?.add('transfors');
accordionBtns.forEach(function (otherBtn,index) {
    if (otherBtn !== btn) {
        console.log("e",mes[index]);
        mes[index]?.classList?.remove("block");
        mes[index]?.classList?.remove("transfors");
        otherBtn?.classList?.remove("active");
    }
});

this.classList.toggle("active");
this.style.transition="0.4s";

});
});


const openModal = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const overlay =document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', function() {
    openModal.style.display="none";
    modal.classList.add('block');
    overlay.classList.add('block');
    
});



closeModal.addEventListener('click', function() {
    openModal.style.display="block";
    modal.classList.remove('block');
    overlay.classList.remove('block');
   
});

