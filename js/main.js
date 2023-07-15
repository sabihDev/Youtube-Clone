const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// close section

function CloseFunc(target) {
  let head = document.querySelector('.data-close-' + target).parentElement;
  head.parentElement.classList.add('hidden');
}

// Drop down
const createDropDownBtn = document.getElementById('drop-downs-create');
const dropDownContent = document.querySelector('.drop-down-create');
let countButtonClicks = 0;
let create = false;
let notificationss = false;

createDropDownBtn.addEventListener('click', function () {
  countButtonClicks += 1;
  create = true;

  if (create === true) {
    if (countButtonClicks % 2 === 1)
      OpenCreateDropDown();

    else
      CloseCreateDropDown();

  }
})

function OpenCreateDropDown() {
  dropDownContent.classList.remove(dropDownContent.classList[2]);
  dropDownContent.style = 'transform:translateY(6px)';

}

function CloseCreateDropDown() {
  dropDownContent.classList.add('hidden');
}

// Notification 
let clicks = 0;
const notificationBtn = document.getElementById('drop-down-notifications-btn');
const notification = document.querySelector('.drop-down-notifications');

notificationBtn.addEventListener('click', function () {
  clicks += 1;
  if (clicks % 2 === 1)
    notification.classList.remove(notification.classList[2]);
  else
    notification.classList.add('hidden');

});

let accountClicks = 0;
let accountDropDown = document.querySelector('.drop-down-account');
let account = document.getElementById('your-account');
account.addEventListener('click', function () {
  accountClicks += 1;
  if (accountClicks % 2 === 1)
    accountDropDown.classList.remove(accountDropDown.classList[2]);
  else
    accountDropDown.classList.add('hidden');

});
