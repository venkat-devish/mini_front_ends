let starsDiv = document.getElementById('stars')

for (let i = 1; i <= 5; i++) {
    let starSvg = document.createElement('img')
    starSvg.src = "/imgs/star-outline.svg"
    starSvg.className = 'starsContainer'
    starsDiv.appendChild(starSvg)

    starSvg.addEventListener('mouseover', (e) => {
        console.log(e)
    })
}