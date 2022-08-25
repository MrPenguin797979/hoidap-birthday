const createCard = (cardWrapper, username, imageName, text) => {
  const cardTemplate = `
    <div class="modal-card">
      <div class="modal-border top">
        <img src="./assets/image/${imageName}.png" alt="${imageName}" />
      </div>
      <div class="modal-card-content">
        <div
          class="modal-username"
          >${username}</div
        >
        <p class="modal-text">${text}</p>
      </div>
      <div class="modal-border bottom">
        <img src="./assets/image/${imageName}.png" alt="${imageName}" />
      </div>
    </div>
  `;
  cardWrapper?.insertAdjacentHTML("beforeend", cardTemplate);
};

export default createCard;
