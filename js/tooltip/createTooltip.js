const createTooltip = (e) => {
  const wrapper = document.querySelector(".wrapper");

  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = "Sinh nhật HD247";
  wrapper.appendChild(tooltip);

  const { top, left, width } = e.target.getBoundingClientRect();
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;
  const triangleHeight = 15;

  Object.assign(tooltip.style, {
    top: `${top - tooltipHeight - triangleHeight}px`,
    left: `${left - tooltipWidth / 2 + width / 2}px`,
  });
};

export default createTooltip;
