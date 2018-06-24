function getRandomWord(words){
  return words[Math.floor(Math.random() * words.length)].toLowerCase().replace(/[^\w\s.]/,"")
}

words = fetch("https://raw.githubusercontent.com/dwyl/english-words/master/words.txt").then(data => data.text().then(function(d){
  words = d.split("\n")
  return words ? words : "Cant get words"
}));

words.then(() => window.requestAnimationFrame(loop))

function loop(){
  word = getRandomWord(words)
  document.getElementById("text").innerHTML ="<span>"+word+"</span>"
  currentLetter = 0
  document.onkeydown = function(e) {
    if (e.key.toLowerCase() == word[currentLetter]){
      currentLetter++
      document.getElementById("text").innerHTML = "<span style='color:#c4c2a9;text-shadow: .04em .04em 0 #809793;'>"+ word.substring(0,currentLetter) +"</span>" + "<span>"+word.substring(currentLetter,word.length)+"</span>"
    }
    if (currentLetter == word.length){
      window.requestAnimationFrame(loop)
    }
  }

}
