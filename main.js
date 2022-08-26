// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// someElement.addEventListener(
//   "mouseup",
//   handleMouseUp,
//   passiveSupported ? { passive: true } : false
// );
document.querySelectorAll("like-glyph").addEventListener("click",myFunction)

let myFunction=(e)=>{
  let heart = e.target;
}
mimicServerCall()
.then((response)=> {
                   if(response.ok){
                   heart.innerText=FULL_HEART[heart.innerText]
                   heart.className="activated-heart"
                  }
                  else {
                    heart.innerText=EMPTY_HEART[heart.innerText]
                    heart.className=" "
                 }
})

.catch((error)=> {
     const errorModal=document.getElementById("modal")
     errorModal.textContent= error;
     setTimeout(() => errorModal.className ="hidden", 3000)
});

 


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
