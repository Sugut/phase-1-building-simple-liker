// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// someElement.addEventListener(
//   "mouseup",
//   handleMouseUp,
//   passiveSupported ? { passive: true } : false
// );
const likes =document.querySelectorAll(".like-glyph");

function handleClick(e){
  let heart = e.target;

mimicServerCall()
.then(()=> { 
                   if(heart.innerText===FULL_HEART){
                   heart.innerText=EMPTY_HEART
                   heart.className=""
                  }
                  else {
                    heart.innerText=FULL_HEART
                    heart.className="activated-heart"
                 }
})

.catch(()=> {
     const errorModal=document.getElementById("modal")
     errorModal.removeAttribute("class")
     setTimeout(() => errorModal.className ="hidden", 3000)
});
}
for(let like of likes){
  like.addEventListener("click", handleClick);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
