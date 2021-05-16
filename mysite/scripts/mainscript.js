
/*слайдер*/
$(document).ready(function(){
  $('.slider').slick({
		slidesToShow: 6,
  	slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ] 
	});
  $('.class-tooltip').tooltipster({
    theme: 'tooltipster-noir'
  });
});


/*всплывающие подсказки для иконок соцсетей*/
$(document).ready(function() {

});


/*второй слайдер*/
$(document).ready(function(){
  $('.slider_2').slick({
		slidesToShow: 5,
  	slidesToScroll: 1,
  	autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
	});
});




/*рендеринг*/


$(function () {
  var loc = window.location.href;
  var cur_url = loc.split('/').pop();

  $('ul.nav li a').each(function () {
      var link = $(this).attr('href');

      if (link == cur_url) {
          $(this).addClass("active");
      }
  });
});

// выделение пункта меню при изменении экрана браузера

$(window).resize(function(){
  if ($(window).width() <= 960) { 
    $('ul.nav li a').each(function () {
      if ($(this).hasClass("active")) {
        $(this).parent().css("background-color", "rgb(244,246,247)");
      }
    }); 
  } else {
    $('ul.nav li a').each(function () {
      if ($(this).hasClass("active")) {
        $(this).parent().css("background-color", "white");
      }
    });
  }
});

/*рендеринг меню*/
const navLinks = [
  {
    title: 'Home',
    ref: 'index.html',
  },
  {
    title: 'About us',
    ref: 'aboutUs.html',
  },
  {
    title: 'Servises',
    ref: 'Services.html',
  },
  {
    title: 'Events',
    ref: 'Events.html',
  },
  {
    title: 'Gallery',
    ref: 'Gallery.html',
  },
  {
    title: 'Careers',
    ref: 'Careers.html',
  },
  {
    title: 'Reviews',
    ref: 'Reviews.html',
  },
  {
    title: 'Contacts',
    ref: 'Contacts.html',
  },
  {
    title: 'Contacts2',
    ref: 'Contacts2.html',
  },
];
  
  const navList = document.querySelector('ul.nav');
  
  navList.innerHTML=`${
    navLinks.map(link => (`
      <li class="nav-item list-inline-item">
        <a href="${link.ref}">${link.title}</a>
      </li>
    `))
  }`.replace(/,/g, '');

/*рендеринг иконок соцсетей*/
const networkItems = [
	{
		title: 'Facebook',
		href: "https://www.facebook.com/tauquadra/",
		class: "fa fa-facebook-square class-tooltip",
	},
	{	
		title: 'Instagram',
		href: "https://www.instagram.com/taurusquadra/",
		class: "fa fa-instagram class-tooltip",
	},
	{	
		title: "LinkedIn",
		href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHTKxtNXBlueQAAAW2qbeHYnb2AhVa2xThXw4lPQbXFxeMHwOVzqqRWx9uYpezJM4XRKYCasbqeOf1kJjJWySlL518oKtcZ5FzWU-ypkBVzJu1X7AirGowOiXyLsFRq39P0iYI=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftq_ltd%2F",
		class: "fa fa-linkedin-square class-tooltip",
	}
];

const networks = document.querySelector('div.media');

 networks.innerHTML = `${
   networkItems.map(item => (`
     <a href="${item.href}">
       <i class="${item.class}" aria-hidden="true" title="${item.title}"></i>
     </a>
   `))
}`.replace(/,/g, '');





const technologiesList = [
  {
    name: 'angular',
    imageUrl: "imgs/tech/1.png",
  },
  {
    name: 'jquery',
    imageUrl: "imgs/tech/2.png",
  },
  {
    name: 'react',
    imageUrl: "imgs/tech/3.png",
  },
  {
    name: 'nintex',
    imageUrl: "imgs/tech/4.png",
  },
  {
    name: 'powerbi',
    imageUrl: "imgs/tech/5.png",
  },
  {
    name: 'xamarin',
    imageUrl: "imgs/tech/6.png",
  },
  {
    name: 'knockout',
    imageUrl: "imgs/tech/7.png",
  },
  {
    name: 'msdynamics365',
    imageUrl: "imgs/tech/8.png",
  },
  {
    name: 'powerapps',
    imageUrl: "imgs/tech/9.png",
  },
  {
    name: 'vuejs',
    imageUrl: "imgs/tech/10.png",
  },
  {
    name: 'powershell',
    imageUrl: "imgs/tech/11.png",
  },
  {
    name: 'sql',
    imageUrl: "imgs/tech/12.jpg",
  },
  {
    name: 'sharepoint',
    imageUrl: "imgs/tech/13.png",
  },
  {
    name: 'c#',
    imageUrl: "imgs/tech/14.png",
  },
  {
    name: 'msazure',
    imageUrl: "imgs/tech/15.png",
  },
  {
    name: 'office365',
    imageUrl: "imgs/tech/16.png",
  },
  {
    name: 'js',
    imageUrl: "imgs/tech/17.png",
  },
  {
    name: 'net',
    imageUrl: "imgs/tech/18.png",
  },
];

const technologies = document.querySelector('div.slider');

technologies.innerHTML = `${
  technologiesList.map(technology => (`
  	<div>
    	<img id="${technology.name}" src="${technology.imageUrl}" class="img-fluid">
    </div>
  `))
}`.replace(/,/g, '');



/*рендеринг второго слайдера*/

const clientsList = [
  {
    name: 'osvita_kyiv',
    imageUrl: "imgs/clients/book.jpg",
  },
  {
    name: 'slavutych',
    imageUrl: "imgs/clients/logo8.jpg",
  },
  {
    name: 'techexpert',
    imageUrl: "imgs/clients/logo9.jpg",
  },
  {
    name: 'kw',
    imageUrl: "imgs/clients/logo10.jpg",
  },
  {
    name: 'LeoConsul',
    imageUrl: "imgs/clients/LeoConsul-1.png",
  },
  {
    name: 'xtend',
    imageUrl: "imgs/clients/1-4-320x202.png",
  },
  {
    name: 'ddp',
    imageUrl: "imgs/clients/logo_b1.png",
  },
  {
    name: 'inteticts',
    imageUrl: "imgs/clients/intetics-2-320x202.png",
  },
  {
    name: 'vilatek',
    imageUrl: "imgs/clients/livatek-3-320x202.png",
  },
  {
    name: 'zep',
    imageUrl: "imgs/clients/logoZep.jpg",
  },
  {
    name: 'malone',
    imageUrl: "imgs/clients/logo4.jpg",
  },
  {
    name: 'db_best',
    imageUrl: "imgs/clients/logo5.jpg",
  },
];

const clients = document.querySelector('div.slider_2');

clients.innerHTML = `${
  clientsList.map(client => (`
  	<div>
    	<img id="${client.name}" src="${client.imageUrl}" class="img-fluid">
    </div>
  `))
}`.replace(/,/g, '');


// кнопка возврата наверх
if ($('#back-to-top').length) {
  var scrollTrigger = 100, 
    backToTop = function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    };
  backToTop();
  $(window).on('scroll', function() {
    backToTop();
  });
  $('#back-to-top').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 700);
  });
}


// счетчик 
$('.counter').counterUp({
  delay: 10,
  time: 1000,
});


