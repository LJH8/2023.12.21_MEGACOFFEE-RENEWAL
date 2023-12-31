const checkBoxs = document.querySelectorAll('input[name="food"]');
const itemList = document.querySelector(".sub-menu-list-item");
const all = document.querySelector('input[value="all"]');
const newItem = document.querySelector('input[value="newItem"]');

function clickList() {
  itemList.querySelectorAll('li').forEach((li) => {
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
  fetch('/2023.12.21_MEGACOFFEE-RENEWAL/sub/sub2-3/sub2-3data.json')
    .then((respon) => respon.json())
    .then((json) => {
      json.item.forEach((item) => {
        itemList.innerHTML += `
          <li class="${item.itemName}">
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
                <em>${item.ml}</em>
                <p>${item.desc}</p>
              </div>
            </div>
          </li>
        `;
      });
      clickList();
    });
});

function filterItem() {
  all.checked = false;
  const checkedFood = [];
  checkBoxs.forEach((checkBox) => {
    if (checkBox.checked) {
      checkedFood.push(checkBox.value);
    }
  });
  itemList.querySelectorAll('li').forEach((li) => {
      if (checkedFood.includes(li.className)) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });

}

checkBoxs.forEach((checkBox) => {
  checkBox.addEventListener("change", filterItem);
});

all.addEventListener("change", () => {
  checkBoxs.forEach((checkBox) => {
    checkBox.checked = false;
  });
  itemList.querySelectorAll('li').forEach((li) => {
    li.style.display = "block";
    if (all.checked == false) {
      li.style.display = "none";
    }
  });
});





