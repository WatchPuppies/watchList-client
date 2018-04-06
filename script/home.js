let imgSrc = localStorage.getItem('picture')
let nameuser = localStorage.getItem('name')
console.log(nameuser)
document.querySelector("#imgsrc").src = imgSrc
document.querySelector("#name").textContent = nameuser