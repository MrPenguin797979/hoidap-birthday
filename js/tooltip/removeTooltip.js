const removeTooltip = () => {
  const tooltip = document.querySelector(".tooltip");
  if (!tooltip) return;
  tooltip.parentNode.removeChild(tooltip);
};

export default removeTooltip;
