/*рендеринг иконок соцсетей*/
const networkItems = [
	{
		title: 'Facebook',
		href: "https://www.facebook.com/tauquadra/",
		class: "fa fa-facebook-square",
	},
	{	
		title: 'Instagram',
		href: "https://www.instagram.com/taurusquadra/",
		class: "fa fa-instagram",
	},
	{	
		title: "LinkedIn",
		href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHTKxtNXBlueQAAAW2qbeHYnb2AhVa2xThXw4lPQbXFxeMHwOVzqqRWx9uYpezJM4XRKYCasbqeOf1kJjJWySlL518oKtcZ5FzWU-ypkBVzJu1X7AirGowOiXyLsFRq39P0iYI=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftq_ltd%2F",
		class: "fa fa-linkedin-square",
	}
];

const networks = document.querySelector('div.col-auto');

networks.innerHTML = `${
  networkItems.map(item => (`
    <a href="${item.href}">
      <i class="${item.class}" aria-hidden="true" data-toggle="tooltip" data-placement="right"
      title="${item.title}"></i>
    </a>
  `))
}`.replace(/,/g, '');