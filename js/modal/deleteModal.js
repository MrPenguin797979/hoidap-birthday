const deleteModal = (e) => {
  if (e.target.matches(".modal-action")) {
    const modal = document.querySelector(".modal");
    modal?.parentNode.removeChild(modal);

    const scrollToTopElement = document.querySelector(".scroll-to-top");
    scrollToTopElement?.parentNode.removeChild(scrollToTopElement);
  }
};

export default deleteModal;
