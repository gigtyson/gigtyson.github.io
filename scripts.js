(function () {
  console.log("ready");
  let subDiv = document.querySelector(".sub-head-div");
  console.log(subDiv);

  subDiv.addEventListener("click", function () {
    window.location.href = "https://app.sandpit2.rapidai.com";
  });
})();
