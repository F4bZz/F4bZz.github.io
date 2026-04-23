const params = new URLSearchParams(window.location.search);
//if(!params.get('wi')){window.location.href = './'}

let data = localStorage.getItem(`work${wi}`)

document.title, document.querySelector('.header-title').innerText = `Visualizando ${data.title}`
