let i = 0

while(localStorage.getItem(`work${i}`)){
    let work = JSON.parse(localStorage.getItem(`work${i}`))
    document.getElementById('work-list').innerHTML += `<div class="work-frame-wrapper"><div class="work-data-container"><h3 class="work-title title" id="title">${work.title}</h3><p class="work-subject subtitle" id="subject">${work.subject}</p><p class="work-date-display subtitle" id="">${'Para '+work.date}</p></div></div>`
    i++
}