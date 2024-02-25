const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector('.gallery');

const imgList = images.map(img => {
  const imgElem = document.createElement('img');
  imgElem.classList.add('images');
  imgElem.src = img.url;
  imgElem.alt = img.alt;

  const liElem = document.createElement('li');
  liElem.classList.add('list');

  liElem.append(imgElem);
  return liElem;
});

console.log(imgList);
gallery.append(...imgList);

console.log(gallery);
