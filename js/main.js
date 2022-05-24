function activeTheme() {
  addClassTheme()
  toggleIconTheme()
}

function onScroll() {
  backToTop()
  activeMenu(home__desktop)
  activeMenu(about)
  activeMenu(sectionTechnologies)
  activeMenu(sectionProjects)
  activeMenu(contact)
}

function backToTop() {
  if (window.scrollY > 800) {
    btnTop.classList.add('show')
  } else {
    btnTop.classList.remove('show')
  }
}

function showAbout() {
  const infosShow = document.querySelectorAll('.infos-show')
  infosShow.forEach(element => {
    element.classList.toggle('d-none')
  })
}

function addClassTheme() {
  if (inputTheme.checked) {
    body.classList.remove('theme')
  } else {
    body.classList.add('theme')
  }
}

function toggleIconTheme() {
  iconTheme.forEach(element => {
    element.classList.toggle('visually-hidden')
  })
}

function activeMenu(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndReachOrPassedTargetLine = sectionEndsAt <= targetLine
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndReachOrPassedTargetLine
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(
    `.iconsHome li a[href*=${sectionId}]`
  )
  menuElement.classList.remove('activeMenu')
  if (sectionBoundaries) {
    menuElement.classList.add('activeMenu')
  }
}

// ------------------SCROLL-REVEAL------------------

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '750',
  reset: TextTrackCue
})
scrollReveal.reveal(
  `#home__desktop, #about,
  #sectionTechnologies, #sectionProjects,
  #contact
`,
  { interval: 100 }
)

const theme = document.querySelector('#box-theme')
const iconTheme = theme.querySelectorAll('i')
const inputTheme = theme.querySelector('input')
const link = document.querySelector('.link-about')

inputTheme.addEventListener('click', activeTheme)
link.addEventListener('click', showAbout)
window.addEventListener('scroll', onScroll)
