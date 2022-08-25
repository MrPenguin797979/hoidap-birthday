import countdown from "./countdown/countdown.js";
import createCalendar from "./calendar/createCalendar.js";
import removeCalendar from "./calendar/removeCalendar.js";
import createTooltip from "./tooltip/createTooltip.js";
import removeTooltip from "./tooltip/removeTooltip.js";
import createGift from "./gift/createGift.js";
import externalLink from "./externalLink/externalLink.js";
import createModal from "./modal/createModal.js";
import deleteModal from "./modal/deleteModal.js";

window.addEventListener("load", function () {
  createCalendar();

  const calendarBirthday = document.querySelector(".calendar-birthday");
  calendarBirthday?.addEventListener("mouseenter", createTooltip);
  calendarBirthday?.addEventListener("mouseleave", removeTooltip);
  calendarBirthday?.addEventListener("click", handleClickBirthday);

  function handleClickBirthday() {
    removeTooltip();
    removeCalendar();

    countdown();
    createGift();
  }

  document.body.addEventListener("click", function () {
    externalLink();

    const giftImage = document.querySelector(".gift-image");
    giftImage && giftImage.addEventListener("click", createModal);

    const modal = document.querySelector(".modal");
    modal && modal.addEventListener("click", deleteModal);
  });
});
