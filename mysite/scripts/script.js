
/*всплывающие подсказки для иконок соцсетей*/
$(document).ready(function() {
  $('.class-tooltip').tooltipster({
    theme: 'tooltipster-noir'
  });
}); 


$(document).ready(function(){
    $('.slider').slick({
          appendArrows: $('div.slider div'),
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
      });
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
];
  
  const navList = document.querySelector('ul.nav');
  
  navList.innerHTML=`${
    navLinks.map(link => (`
      <li class="nav-item list-inline-item">
        <a id="${link.active ? 'active' : ''}" href="../${link.ref}">${link.title}</a>
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