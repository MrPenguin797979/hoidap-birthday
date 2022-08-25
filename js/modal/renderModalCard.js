import createCard from "../card/createCard.js";
import modalDatas from "./modalDatas.js";
import modalShowMore from "./modalShowMore.js";

const renderModalCard = () => {
  const modalCardsElement = document.querySelector(".modal-cards");
  if (modalCardsElement) {
    modalDatas.forEach((modalData) => {
      const { name, image, text } = modalData;
      createCard(modalCardsElement, name, image, text);
    });

    modalShowMore();
  }
};

export default renderModalCard;
