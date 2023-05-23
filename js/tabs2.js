document.addEventListener("DOMContentLoaded", function() {
  const tabButtons = document.querySelectorAll(".tab_button");
  const tabItems = document.querySelectorAll(".tab_item");

  function changeTab(event) {
    const selectedTab = event.target.dataset.tab;

    tabItems.forEach(function(item) {
      if (item.id === selectedTab) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    tabButtons.forEach(function(button) {
      if (button.dataset.tab === selectedTab) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  tabButtons.forEach(function(button) {
    button.addEventListener("click", changeTab);

    const icon = button.querySelector("span");
    icon.addEventListener("click", function(event) {
      event.stopPropagation();
      const parentButton = event.target.closest(".tab_button");
      if (parentButton) {
        const selectedTab = parentButton.dataset.tab;
        const correspondingTab = document.getElementById(selectedTab);

        if (correspondingTab) {
          tabItems.forEach(function(item) {
            if (item === correspondingTab) {
              item.classList.add("active");
            } else {
              item.classList.remove("active");
            }
          });

          tabButtons.forEach(function(button) {
            if (button.dataset.tab === selectedTab) {
              button.classList.add("active");
            } else {
              button.classList.remove("active");
            }
          });
        }
      }
    });
  });
});

var acc = document.getElementsByClassName("acc");
var i;
for (i = 0; i < acc.length; i++) {
  var panel = acc[i].nextElementSibling;
  panel.style.display = "none";
  if (i === 0) {
    acc[i].classList.add("active");
    panel.style.display = "block";
  }
  acc[i].addEventListener("click", function() {
    var allPanels = document.getElementsByClassName("panell");
    for (j = 0; j < allPanels.length; j++) {
      if (allPanels[j] !== this.nextElementSibling) {
        allPanels[j].style.display = "none";
        allPanels[j].previousElementSibling.classList.remove("active");
      }
    }
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
