const projectDetails = document.getElementById('projectDetails')

function projectDetailsButton() {
  const activeImage = document.querySelector('.carousel-item.active img')
  if (activeImage.src.endsWith('listify.png')) {
    projectDetails.href = 'https://github.com/eduazevedo2000/CalculatorIOS'
    console.log('hello')
  } else if (activeImage.src.endsWith('calculatorIOS.png')) {
    projectDetails.href = 'https://github.com/eduazevedo2000/Listify'
    console.log('world')
  } else if (activeImage.src.endsWith('portfolio.jpeg')) {
    projectDetails.href = 'https://github.com/eduazevedo2000/Portfolio'
    console.log('world')
  } else if (activeImage.src.endsWith('vilaDoConde.jpeg')) {
    projectDetails.href = 'https://tiwm23tig06.netlify.app/'
    console.log('world')
  }
}

document
  .getElementById('prevButton')
  .addEventListener('click', projectDetailsButton)
document
  .getElementById('nextButton')
  .addEventListener('click', projectDetailsButton)
