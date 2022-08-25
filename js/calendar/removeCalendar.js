const removeCalendar = () => {
  const calendar = document.querySelector(".calendar");
  calendar?.parentNode.removeChild(calendar);
};

export default removeCalendar;
