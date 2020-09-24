// ####### Block where Project's images (monitor, tablet, mobile) are taken care of ###### 

// Select Project's image elements
const recipeMainImage = document.querySelector('.recipe-main-image');
const portfolioMainImage = document.querySelector('.portfolio-main-image');

const recipeMonitor = document.querySelector('.recipe-monitor');
const recipeTablet = document.querySelector('.recipe-tablet');
const recipeMobile = document.querySelector('.recipe-mobile');

const portfolioMonitor = document.querySelector('.portfolio-monitor');
const portfolioTablet = document.querySelector('.portfolio-tablet');
const portfolioMobile = document.querySelector('.portfolio-mobile');

// Event Functions
const handleMainImage = e => {
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
      recipeMainImage.src = './assets/tasty_recipes/mobile.jpg'
      break;

    case 'portfolio-monitor':
      portfolioMonitor.classList.add('isActive');
      portfolioTablet.classList.remove('isActive');
      portfolioMobile.classList.remove('isActive');
      portfolioMainImage.src = './assets/tasty_recipes/portfolio_monitor.jpg';
      break;

    case 'portfolio-tablet':
      portfolioMonitor.classList.remove('isActive');
      portfolioTablet.classList.add('isActive');
      portfolioMobile.classList.remove('isActive');
      portfolioMainImage.src = './assets/tasty_recipes/portfolio_tablet.jpg';
      break;

    case 'portfolio-mobile':
      portfolioMonitor.classList.remove('isActive');
      portfolioTablet.classList.remove('isActive');
      portfolioMobile.classList.add('isActive');
      portfolioMainImage.src = './assets/tasty_recipes/portfolio_mobile.jpg';
      break;

    default:
      return;
  }
}

// Event Listeners
recipeMonitor.addEventListener('click', handleMainImage);
recipeTablet.addEventListener('click', handleMainImage);
recipeMobile.addEventListener('click', handleMainImage);
portfolioMonitor.addEventListener('click', handleMainImage);
portfolioTablet.addEventListener('click', handleMainImage);
portfolioMobile.addEventListener('click', handleMainImage);


