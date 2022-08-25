const countdown = () => {
  const wrapper = document.querySelector(".wrapper");

  const countdownElement = document.createElement("div");
  countdownElement.classList.add("countdown");
  wrapper.appendChild(countdownElement);

  const audioTemplate = `
    <audio controls autoplay style="display: none">
      <source src="./assets/audio/audio.mp3" type="audio/mpeg" />
    </audio>
  `;

  let seconds = 5;
  const timer = setInterval(() => {
    countdownElement.textContent = seconds;
    --seconds;
    if (seconds < -1) {
      clearInterval(timer);
      countdownElement.parentNode.removeChild(countdownElement);
      wrapper.insertAdjacentHTML("beforeend", audioTemplate);
    }
  }, 1000);
};

export default countdown;
