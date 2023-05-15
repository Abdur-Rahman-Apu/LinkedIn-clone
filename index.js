const profileMenu = document.querySelector(".profile-menu-wrap");
const sideBarActivity = document.querySelector(".sidebar-activity");
const showMoreActivity = document.querySelector("#show-more-activity");

function toggleMenu() {
  profileMenu.classList.toggle("open-menu");
}

function toggleActivity() {
  sideBarActivity.classList.toggle("open-activity");
  if (sideBarActivity.classList.contains("open-activity")) {
    showMoreActivity.innerHTML = "Show less <b>-</b>";
  } else {
    showMoreActivity.innerHTML = "Show more <b>+</b>";
  }
}
