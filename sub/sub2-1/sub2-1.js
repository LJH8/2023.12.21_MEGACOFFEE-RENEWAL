const checkBoxs = document.querySelectorAll('input[name="drink"]');
const drinkList = document.querySelector(".sub-menu-list-item");
const all = document.querySelector('input[value="all"]');
const newItem = document.querySelector('input[value="newItem"]');

function clickList() {
  drinkList.querySelectorAll('li').forEach((li) => {
    li.addEventListener("click", (e) => {
      // console.log(e.target);
      // console.log(e.currentTarget);
      let detailPop = li.querySelector(".item-detailPage");
      if (e.target == li.querySelector(".close-btn")) {
        detailPop.classList.remove('show');
      } else {
        detailPop.classList.add('show');
      }
    });
  });
}

window.addEventListener("load", () => {
  fetch('/2023.12.21_MEGACOFFEE-RENEWAL/sub/sub2-1/sub2-1data.json')
    .then((respon) => respon.json())
    .then((json) => {
      json.drink.forEach((item) => {
        drinkList.innerHTML += `
          <li class="${item.item}" id="${item.id}">
            <img src="${item.img}" alt="메뉴 사진">
            <h4>${item.name}</h4>
            <span>${item.eName}</span>
            <p>${item.desc}</p>
            <div class="item-detailPage">
              <div class="item-detailPage-header">
                <h5 class="detail-name">${item.name}</h5>
                <span class="detail-Ename">${item.eName}</span>
                <button type="button" class="close-btn"></button>
              </div>
              <div class="item-detailPage-body">
                <em>${item.oz}oz</em>
                <span>1회 제공량 ${item.Kcal}Kcal</span>
                <p>${item.desc}</p>
              </div>
            </div>
          </li>
        `;
      });
      clickList();
    });
});

function filterDrink() {
  all.checked = false;
  newItem.checked = false;
  const checkedDrink = [];
  checkBoxs.forEach((checkBox) => {
    if (checkBox.checked) {
      checkedDrink.push(checkBox.value);
    }
  });
  drinkList.querySelectorAll('li').forEach((li) => {
    if (checkedDrink.includes(li.className)) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });

}

checkBoxs.forEach((checkBox) => {
  checkBox.addEventListener("change", filterDrink);
});

all.addEventListener("change", () => {
  checkBoxs.forEach((checkBox) => {
    checkBox.checked = false;
  });
  newItem.checked = false
  drinkList.querySelectorAll('li').forEach((li) => {
    li.style.display = "block";
    if (all.checked == false) {
      li.style.display = "none";
    }
  });
});

newItem.addEventListener("change", () => {
  checkBoxs.forEach((checkBox) => {
    checkBox.checked = false;
  });
  all.checked = false;
  drinkList.querySelectorAll('li').forEach((li) => {
    if(li.id == "newItem") {
      li.style.display = "block"
    }
    else {
      li.style.display = "none"
    }
    if (newItem.checked == false) {
      li.style.display = "none";
    }
  });
});




