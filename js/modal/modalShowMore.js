const modalShowMore = () => {
  const modalTexts = document.querySelectorAll(".modal-text");
  if (modalTexts) {
    const fontSize = 15;
    const lineHeight = 1.6;
    const lineClamp = 5;
    const maxModalTextHeight = fontSize * lineHeight * lineClamp;

    modalTexts.forEach((modalText) => {
      Object.assign(modalText.style, {
        fontSize: `${fontSize}px`,
        lineHeight: lineHeight,
      });

      const modalTextHeight = modalText.offsetHeight;
      if (modalTextHeight > maxModalTextHeight) {
        modalText.parentNode.insertAdjacentHTML(
          "beforeend",
          `<button class="modal-more">Xem thêm</button>`
        );
        modalText.style.height = `${maxModalTextHeight}px`;
      }
    });

    const modalMores = document.querySelectorAll(".modal-more");
    const showMoreText = "Xem thêm";
    const hideText = "Ẩn";
    let newMaxModalTextHeight = maxModalTextHeight;
    let isShow = true;

    modalMores?.forEach((modalMore) => {
      modalMore?.addEventListener("click", function () {
        const modalText = modalMore.previousElementSibling;
        const scrollHeight = modalText.scrollHeight;

        if (isShow) {
          newMaxModalTextHeight += maxModalTextHeight;

          if (newMaxModalTextHeight >= scrollHeight) {
            modalText.style.height = `${scrollHeight}px`;
            isShow = false;
          } else {
            modalText.style.height = `${newMaxModalTextHeight}px`;
          }
        } else {
          newMaxModalTextHeight = maxModalTextHeight;
          modalText.style.height = `${newMaxModalTextHeight}px`;
          isShow = true;
        }

        modalMore.textContent = isShow ? showMoreText : hideText;
      });
    });
  }
};

export default modalShowMore;
