
const songs = document.querySelectorAll(".song");
console.log(songs);

songs.forEach(song => {
  song.addEventListener("click", () => moreInfo(song))
})
function moreInfo(song) {
  
}

// create a card flip animmation to show song link //