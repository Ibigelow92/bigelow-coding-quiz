const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const clearHighScores = document.querySelector('#clearHighScores')

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')


clearHighScores.addEventListener('click', event => {
        var confirmed = confirm("Are you sure you want to clear all of your saved scores?")
        if (confirmed) {
            event.preventDefault()
            localStorage.setItem('highScores', "[]")
            location.reload()
        }
    })
