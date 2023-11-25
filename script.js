$(document).ready(function(){

$('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
});

$(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 0){
    $('.scroll-top').show();
    }else{
    $('.scroll-top').hide();
    }

    $('section').each(function(){

    let height = $(this).height();
    let offset = $(this).offset().top - 200;
    let id = $(this).attr('id');
    let top = $(window).scrollTop();

    if(top > offset && top < offset + height){
        $('.navbar ul li a').removeClass('active')
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
    }

    });

});

$('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

    scrollTop : $($(this).attr('href')).offset().top,

    },
    500,
    'linear'
    )

});

});

let btn = document.querySelector(".button"),
                spinIcon = document.querySelector(".spinner"),
                btnText = document.querySelector(".btn-text");
            btn.addEventListener("click", () => {
                btn.style.cursor = "wait";
                btn.classList.add("checked");
                spinIcon.classList.add("spin");
                btnText.textContent = "Loading";
            setTimeout(() => {
                btn.style.pointerEvents = "none";
                spinIcon.classList.replace("spinner", "check");
                spinIcon.classList.replace("fa-solid fa-spinner", "fa-solid fa-check");
                btnText.textContent = "Done";
            }, 2500)
});
function playSound() { 
    var audio = document.getElementById("myAudio"); 
    audio.play(); 
}
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {

console.log('Button clicked!');
});