let tabMenus = document.querySelectorAll(".tab-menu > li");
const eventList = document.querySelector(".event-list");


window.addEventListener("load", () => {
    fetch("/2023.12.21_MEGACOFFEE-RENEWAL/sub/sub5-2/sub5-2data.json")
        .then((respone) => respone.json())
        .then((data) => {
            for (const li of data.all) {
                eventList.innerHTML += `
                <li id=${li.id}>
                    <p><img src="${li.img}" alt="이벤트 이미지"></p>
                    <div class="event-list-txt">
                        <h4>${li.title}</h4>
                        <span>${li.writer}</span>
                    </div>
                </li>
                `;
            }
        });
});

for (const tabMenu of tabMenus) {
    tabMenu.addEventListener("click", (e) => {
        e.preventDefault();
        tabMenus.forEach((e) => {
            e.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        display(tabMenu);
    });
}

function display(tab) {
    eventList.querySelectorAll('li').forEach((li) => {
        if (tab.id == "tab1") {
            li.style.display = "block";
        }
        else if (tab.id == li.id) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    }
    );
}
