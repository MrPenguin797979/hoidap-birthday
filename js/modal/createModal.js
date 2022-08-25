import scrollToTop from "../scrollToTop/scrollToTop.js";
import renderModalCard from "./renderModalCard.js";

const createModal = () => {
  const wrapper = document.querySelector(".wrapper");

  const modalTemplate = `
    <div class="modal">
      <div class="container">
        <div class="modal-progress"></div>
        <div class="modal-action">
          <i class="fa fa-times"></i>
        </div>
        <h2 class="modal-title">Lời nhắn</h2>
        <div class="modal-cards"></div>
        <div class="modal-footer">
          <p class="modal-author">
            Content by
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">ledieuanhkaneki</a>
            with <i class="fa fa-heart modal-heart"></i>
          </p>
          <p class="modal-author">
            Development by
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Stupid Guy</a>
            with <i class="fa fa-heart modal-heart"></i>
          </p>
        </div>
      </div>
    </div>
  `;
  wrapper.insertAdjacentHTML("beforeend", modalTemplate);

  renderModalCard();
  scrollToTop();
};

export default createModal;
