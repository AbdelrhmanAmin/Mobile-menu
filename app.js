
window.addEventListener('load', () => {
  const handleMenuBar = () => {
    document.getElementById('mobile-nav').style.display = 'flex';
    const elementsToHide = Array.from(document.querySelectorAll('.hide-nav-menu-mobile'));
    elementsToHide.forEach((x) => x.style.display = 'none');
    return
  };

  const handleReverse = () => {
    document.getElementById('mobile-nav').style.display = 'none';
    const elementsToHide = Array.from(document.querySelectorAll('.hide-nav-menu-mobile'));
    elementsToHide.forEach((x) => x.style.display = 'flex');
    return
  };

  document.getElementById('menu-btn').addEventListener('click', handleMenuBar);
  document.getElementById('nav-btn').addEventListener('click', handleReverse);
  document.getElementById('exit-btn').addEventListener('click', handleReverse);
  return
})