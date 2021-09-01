const handleMenuBar = () => {
  document.getElementById('mobile-nav').style.display = 'flex';
  const elementsToHide = Array.from(document.querySelectorAll('.hide-nav-menu-mobile'))
  elementsToHide.forEach((x) => x.style.display = 'none')
}
const handleReverse = () => {
  document.getElementById('mobile-nav').style.display = 'none';
  const elementsToHide = Array.from(document.querySelectorAll('.hide-nav-menu-mobile'))
  elementsToHide.forEach((x) => x.style.display = 'flex')
}