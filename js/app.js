// ####### Block where Project's images (monitor, tablet, mobile) are taken care of ###### 

// Select Project's main image elements
const recipeMainImage = document.querySelector('.recipe-main-image');
const portfolioMainImage = document.querySelector('.portfolio-main-image');

// Select device type buttons for each project
const recipeMonitor = document.querySelector('.recipe-monitor');
const recipeTablet = document.querySelector('.recipe-tablet');
const recipeMobile = document.querySelector('.recipe-mobile');

const portfolioMonitor = document.querySelector('.portfolio-monitor');
const portfolioTablet = document.querySelector('.portfolio-tablet');
const portfolioMobile = document.querySelector('.portfolio-mobile');

// Event Functions
const handleDeviceClick = e => {
  // Set active the current button pressed and disable the other ones
  // Change main image according to device type
  switch (e.target.dataset.name) {
    case 'monitor':
      recipeMonitor.classList.add('isActive');
      recipeTablet.classList.remove('isActive');
      recipeMobile.classList.remove('isActive');
      recipeMainImage.src = './assets/tasty_recipes/monitor.jpg';
      break;

    case 'tablet':
      recipeMonitor.classList.remove('isActive');
      recipeTablet.classList.add('isActive');
      recipeMobile.classList.remove('isActive');
      recipeMainImage.src = './assets/tasty_recipes/tablet.jpg';
      break;

    case 'mobile':
      recipeMonitor.classList.remove('isActive');
      recipeTablet.classList.remove('isActive');
      recipeMobile.classList.add('isActive');
      recipeMainImage.src = './assets/tasty_recipes/mobile.jpg';
      break;

    case 'portfolio-monitor':
      portfolioMonitor.classList.add('isActive');
      portfolioTablet.classList.remove('isActive');
      portfolioMobile.classList.remove('isActive');
      portfolioMainImage.src = './assets/portfolio/monitor_portfolio.jpeg';
      break;

    case 'portfolio-tablet':
      portfolioMonitor.classList.remove('isActive');
      portfolioTablet.classList.add('isActive');
      portfolioMobile.classList.remove('isActive');
      portfolioMainImage.src = './assets/portfolio/tablet_portfolio.jpeg';
      break;

    case 'portfolio-mobile':
      portfolioMonitor.classList.remove('isActive');
      portfolioTablet.classList.remove('isActive');
      portfolioMobile.classList.add('isActive');
      portfolioMainImage.src = './assets/portfolio/mobile_portfolio.jpeg';
      break;

    default:
      return;
  }
}

// Add Event Listeners for each button device type
recipeMonitor.addEventListener('click', handleDeviceClick);
recipeTablet.addEventListener('click', handleDeviceClick);
recipeMobile.addEventListener('click', handleDeviceClick);
portfolioMonitor.addEventListener('click', handleDeviceClick);
portfolioTablet.addEventListener('click', handleDeviceClick);
portfolioMobile.addEventListener('click', handleDeviceClick);



// ################# Go Top Button Functionality ###########
const topBtn = document.querySelector('#topBtn');

const goTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topBtn.addEventListener('click', goTop);

window.onscroll = () => handleWindowScroll();

const handleWindowScroll = () => {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}