

let serviceEl = document.getElementById('services-menu')
console.log(serviceEl)
let serviceList = document.getElementById('services-list')
console.log(serviceList)
let navContainer = document.getElementById('navigation-container')


// change navbar colours on downward scroll past 280px
window.onscroll = () =>{
if(window.scrollY > 320){
  navContainer.classList.add('nav_dark')
  navContainer.style.animation = 'darkNav 0.9s ease-in-out 1'

}else{
  navContainer.classList.remove('nav_dark')
  navContainer.style.animation = ''

}
}


// animate dropdown menu when service menu is hovered over
serviceEl.addEventListener('mouseover', (event) =>{
  event.preventDefault()
  serviceList.style.animation = 'slideDown 0.7s ease-in-out 1'
  serviceList.classList.add('transform-menu')
 })

 // keep dropdown menu visible on dropdown mouseover
 serviceList.addEventListener('mouseover', (event) =>{
  serviceList.classList.add('transform-menu')
 })

 // hide dropdown menu on dropdown mouseout
 serviceList.addEventListener('mouseout', (event) =>{
  serviceList.classList.remove('transform-menu')
 })
 // hide dropdown menu on service menu mouseout
 serviceEl.addEventListener('mouseout', (event) =>{
  serviceList.classList.remove('transform-menu')
 })

