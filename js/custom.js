$(document).ready(function () {
    $(".slider-single").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'></button>",
        nextArrow: "<button type='button' class='slick-next'></button>",
        dotsClass: "button__bar",
        dots: true,
    });
    $('.testimonials').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dotsClass: "button__bar-2",
        dots: true,

    });
    $('.blog').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dotsClass: "button__bar-3",
        dots: true,

    });
    $('.company-name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,

    });




    $(".register").click(function () {
        $(".popup-bg").fadeIn();
        $(".overlay-two").fadeIn();
    });
    $(".close").click(function () {
        $(".popup-bg").fadeOut();
        $(".overlay-two").fadeOut();
    });




});



// const course =[
//     {
//         img: "images/photoshop.png",
//         tittle: "Adobe photoshop",
//     },
//     {
//         img: "images/illustrator.png",
//         tittle: "Adobe illustrator",
//     },
//     {
//         img: "images/figma.png",
//         tittle: "Figma",
//     },
//     {
//         img: "images/html.png",
//         tittle: "Html",
//     },
//     {
//         img: "images/jQuery.png",
//         tittle: "jQuery",
//     },
// ];
const items = [
    {
        img: "images/graghic-design.png",
        tittle: "Graphic Design",
        pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut maximus metus non velit porta, ut dapibus erat ornare.In necbibendum urna",
        anchor: "Read More"

    },
    {
        img: "images/website-design.png",
        tittle: "Website Design",
        pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut maximus metus non velit porta, ut dapibus erat ornare.In necbibendum urna",
        anchor: "Read More"

    },
    {
        img: "images/web-development.png",
        tittle: "Web Development",
        pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut maximus metus non velit porta, ut dapibus erat ornare.In necbibendum urna",
        anchor: "Read More",

    },
]
window.onload = function () {
    var buttons = document.getElementById("training-course");
    for (var i = 0; i < items.length; i++) {
        buttons.innerHTML +=
            "<li><img src=" +
            items[i].img +
            " alt='#'/><h3>" +
            items[i].tittle +
            "</h3><p>" +
            items[i].pera +
            "</p><a href='#'>" +
            items[i].anchor +
            "</a></li>";
    }
};