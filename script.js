

let serviceEl = document.getElementById('services-menu')
console.log(serviceEl)
let serviceList = document.getElementById('services-list')
console.log(serviceList)



serviceEl.addEventListener('mouseover', (event) =>{
  event.preventDefault()
  serviceList.classList.add('transform-menu')
 })

 serviceList.addEventListener('mouseover', (event) =>{
  serviceList.classList.add('transform-menu')
 })

 serviceList.addEventListener('mouseout', (event) =>{
  serviceList.classList.remove('transform-menu')
 })

 serviceEl.addEventListener('mouseout', (event) =>{
  serviceList.classList.remove('transform-menu')
 })