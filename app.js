window.addEventListener('load', () => {
  const handleMenuBar = () => {
    document.getElementById('mobile-nav').style.display = 'flex';
    const elementsToHide = Array.from(document.querySelectorAll('.hide-nav-menu-mobile'));
    elementsToHide.forEach((x) => { x.style.display = 'none'; });
  };

  const handleReverse = () => {
    document.getElementById('mobile-nav').style.display = 'none';
    const elementsToHide = Array.from(document.querySelectorAll('.hide-nav-menu-mobile'));
    elementsToHide.forEach((x) => { x.style.display = 'flex'; });
  };

  document.getElementById('menu-btn').addEventListener('click', handleMenuBar);
  document.getElementById('nav-btn1').addEventListener('click', handleReverse);
  document.getElementById('nav-btn2').addEventListener('click', handleReverse);
  document.getElementById('nav-btn3').addEventListener('click', handleReverse);
  document.getElementById('exit-btn').addEventListener('click', handleReverse);
});