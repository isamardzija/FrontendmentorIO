const allNotifications = document.querySelectorAll(".notification");
const readAll = document.querySelector(".readAll");
const allTimes = document.querySelectorAll(".notificationTime");
const allReadStatus = document.querySelectorAll(".readStatus");
const allDots = document.querySelectorAll(".dot");

// on page load, adds the red dots to all new notifications
onLoadCheck();

function onLoadCheck() {
  allNotifications.forEach((notification, i) => {
    if (!notification.classList.contains("new")) {
      allDots[i].style.visibility = "hidden";
    } else {
      allDots[i].style.visibility = "visible";
    }
  });
}

// toggles notification read/unread status when click on a single notification
allNotifications.forEach((notification, i) => {
  notification.addEventListener("click", () => {
    notification.classList.toggle("new");
    if (!notification.classList.contains("new")) {
      allDots[i].style.visibility = "hidden";
    } else {
      allDots[i].style.visibility = "visible";
    }
  });
});
