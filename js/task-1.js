const catList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${catList.length}`);

catList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemsCount}`);
});
