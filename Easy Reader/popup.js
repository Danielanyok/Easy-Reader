console.log('Hey Shubham,This is popup.js');


document.getElementById('fontsize').addEventListener('input', (e) => {
  let params = {
    active: true,
    currentWindow: true,
  };
  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let message = {
      txt: e.target.value,
      msg: 'fontsize',
    };
    chrome.tabs.sendMessage(tabs[0].id, message);
  }
});

if (document.querySelector(".popup")) {
  const button = document.querySelector(".button");
  const circle = document.querySelector(".circle")
  let buttonOn = false;
  function invert() {
      alert("hi")
      document.body.style.filter = "invert(1) hue-rotate(180deg)";
      let media = document.querySelectorAll("img, picture, video");
      media.forEach((mediaItem) => {
          mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
      })
  }
  button.addEventListener("click", () => {
      if (!buttonOn) {
          buttonOn = true;

          button.style.animation = "transformToBlue 1s ease-in-out 0s forwards"
          circle.style.animation = "moveCircleRight 1s ease-in-out 0s forwards"
          chrome.tabs.executeScript({
              file: 'appOn.js'
          })
      }
      else {
          buttonOn = false;
          button.style.animation = "transformToYellow 1s ease-in-out 0s forwards"
          circle.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards"
          chrome.tabs.executeScript({
              file: 'appOff.js'
          })
      }
  })

}
