const scrollToTop = () => {
  const wrapper = document.querySelector(".wrapper");

  const scrollTemplate = `
    <div class="scroll-to-top">
      <i class="fa fa-arrow-up scroll-icon"></i>
    </div>
  `;
  wrapper.insertAdjacentHTML("beforeend", scrollTemplate);

  const modal = document.querySelector(".modal");
  modal?.addEventListener("scroll", function () {
    const scrollTop = this.scrollTop;
    const scrollToTopElement = document.querySelector(".scroll-to-top");

    scrollTop > 0
      ? scrollToTopElement.classList.add("show")
      : scrollToTopElement.classList.remove("show");

    scrollToTopElement.classList.contains("show") &&
      scrollToTopElement.addEventListener("click", function () {
        modal.scrollTo(0, 0);
      });
  });
};

export default scrollToTop;
