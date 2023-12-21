const custormerDesc = document.querySelector("#customer-desc");
const textConunt = document.querySelector("#textCount");


custormerDesc.addEventListener("keydown", () => {
  // console.log(custormerDesc.value.length);
  const text = custormerDesc.textLength;
  textConunt.textContent = `${text}/3900byte(한글 1300자, 영어 4000자)`;
});