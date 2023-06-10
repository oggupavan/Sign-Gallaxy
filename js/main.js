(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    $('.client-carousel').slick({
        slidesToShow: 4, // Number of logos to show at once
        slidesToScroll: 1,
        autoplay: true, // Set to false if you don't want automatic scrolling
        autoplaySpeed: 2000, // Delay between slides in milliseconds
        dots: false, // Set to true if you want to show navigation dots
        arrows: false // Set to true if you want to show navigation arrows
    });
    
})(jQuery);

$(document).ready(function() {
    $('.client-carousel').slick({
        slidesToShow: 4, // Number of logos to show at once
        slidesToScroll: 1,
        autoplay: true, // Set to false if you don't want automatic scrolling
        autoplaySpeed: 2000, // Delay between slides in milliseconds
        dots: false, // Set to true if you want to show navigation dots
        arrows: false // Set to true if you want to show navigation arrows
    });

    var logos = [
        "img/Logos/logo 1.jpg",
        "img/Logos/logo 2.jpg",
        "img/Logos/logo 3.jpg",
        "img/Logos/logo 4.jpg",
        "img/Logos/logo 5.jpg",
        "img/Logos/logo 6.jpg",
        "img/Logos/logo 8.jpg",
        
        // Add more logo URLs as needed
    ];
    
    var logoContainer = $('.client-carousel');
    
    $.each(logos, function(index, logo) {
        var logoElement = $('<img>').attr('src', logo);
        logoContainer.append(logoElement);
    });
});


function redirectToWhatsApp() {
    var service=["Interior","Exterior","Singage"]
    // Replace the phone number and message with your desired values
    var phoneNumber = "+919663318125"; // Replace with the phone number you want to send the message to
    const custName= document.getElementById('NameofCustomer').value;
    const custEmail=document.getElementById("EmailIdOfCustomer").value;
    const custTypeofService=document.getElementById("OptionSelected").value;
    const custDateofService=document.getElementById("Date_of_Service").value;

    var message = "*Service Alert*: Hi I'm,*"+custName+ "* looking for *"+ service[custTypeofService-1]+"* service on *"+custDateofService+"*"; // Replace with the message you want to send
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url)
}

function redirectToWhatsAppForEnquery() {
    // Replace the phone number and message with your desired values
    var phoneNumber = "+919663318125"; // Replace with the phone number you want to send the message to
    
    var message = "*Enquiry Alert*: Hi there, I'm looking for a service and have a query."; // Replace with the message you want to send
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url)
}
