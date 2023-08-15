let langs = document.querySelector('.langs');
let link = document.querySelectorAll('.a');
let title = document.getElementById('title');
let home = document.getElementById('home');
let product = document.getElementById('product');
let ourDealer = document.getElementById('our-dealer');
let projectReferences = document.getElementById('project-references');
let contactUs = document.getElementById('contact-us');
let aboutUs = document.getElementById('about-us');

link.forEach((el) => {
  el.addEventListener('click', () => {
    langs.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    let attr = el.getAttribute('language');

    home.textContent = data[attr].home;
    product.textContent = data[attr].product;
    ourDealer.textContent = data[attr].ourDealer;
    projectReferences.textContent = data[attr].projectReferences;
    contactUs.textContent = data[attr].contactUs;
    aboutUs.textContent = data[attr].aboutUs;
  });
});

let data = {
  english: {
    home: 'Home',
    product: 'Product',
    ourDealer: 'Our Dealer',
    projectReferences: 'Project References',
    contactUs: 'Contact Us',
    aboutUs: 'About us',
  },
  khmer: {
    home: 'ទំព័រដើម',
    product: 'ផលិតផល',
    ourDealer: 'តំណាងចែកចាយ',
    projectReferences: 'ការងារគំរោង',
    contactUs: 'ទំនាក់ទំនង',
    aboutUs: 'អំពីយើង',
  },
};
