// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Add .hidden class to the error modal initially
const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden");

// Event listener for heart clicks
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("like-glyph")) {
    const heart = e.target;

    // Simulate server request
    mimicServerCall()
      .then(() => {
        // Success: toggle heart appearance
        if (heart.textContent === "♡") {
          heart.textContent = "♥";
          heart.classList.add("activated-heart");
        } else {
          heart.textContent = "♡";
          heart.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        // Failure: display error modal
        errorModal.classList.remove("hidden");
        const errorMessage = document.getElementById("modal-message");
        errorMessage.textContent = error;

      
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  }
});

// Mock server call function (already provided)
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.8 ? resolve("Pretend remote server notified of action!") : reject("Random server error. Try again.");
    }, 300);
  });
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
