const createGift = () => {
  const wrapper = document.querySelector(".wrapper");

  const giftTemplate = `
    <div class="gift">
      <div class="gift-text">
        Chúc mừng sinh nhật
        <a href="https://hoidap247.com/">
          <span>H</span>
          <span>O</span>
          <span>I</span>
          <span>D</span>
          <span>A</span>
          <span>P</span>
          <span>2</span>
          <span>4</span>
          <span>7</span>
        </a>
      </div>
      <div class="gift-image">
        <img src="./assets/image/hoidap247.png" alt="Hoidap247" />
      </div>
    </div>
  `;
  wrapper.insertAdjacentHTML("beforeend", giftTemplate);
};

export default createGift;
