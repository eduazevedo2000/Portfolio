const projectDetails = document.getElementById('projectDetails')

// Function to update project details based on the active image
function updateProjectDetails() {
  const activeImage = document.querySelector('.carousel-item.active img')
  if (activeImage.src.endsWith('listify.png')) {
    projectDetails.href = 'https://github.com/eduazevedo2000/Listify'
    console.log('hello')
  } else if (activeImage.src.endsWith('calculatorIOS.png')) {
    projectDetails.href = 'https://github.com/eduazevedo2000/CalculatorIOS'
    console.log('world')
  } else if (activeImage.src.endsWith('portfolio.jpeg')) {
    projectDetails.href = 'https://github.com/eduazevedo2000/Portfolio'
    console.log('portfolio')
  } else if (activeImage.src.endsWith('vilaDoConde.jpeg')) {
    projectDetails.href = 'https://tiwm23tig06.netlify.app/'
    console.log('vilaDoConde')
  }
}

// Add event listener to the carousel for the 'slid.bs.carousel' event
const carousel = document.getElementById('carouselExampleControls')
carousel.addEventListener('slid.bs.carousel', updateProjectDetails)
