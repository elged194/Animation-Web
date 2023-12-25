let stars1 = document.getElementById("stars1");
let moon2 = document.getElementById("moon2");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let mountains7 = document.getElementById("mountains7");
let huss = document.querySelector(".hussein");

window.onscroll = () => {
  let value = scrollY;
  stars1.style.left = value * 3 + "px";
  moon2.style.top = value * 3 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value + "px";
  river5.style.top = value + "px";

  boat6.style.top = value + "px";
  boat6.style.left = value + "px";
  huss.style.fontSize = value + "px";

  //
  if (window.innerWidth < 426) {
    //
    if (scrollY >= 47) {
      huss.style.fontSize = "47px";
      huss.style.position = "fixed";
      //
      if (scrollY >= 376) {
        huss.style.display = "none";
      } else {
        huss.style.display = "block";
      }
      //
      if (scrollY >= 105) {
        document.querySelector(".head").style.background =
          "linear-gradient( #376281,#10001f )";
      } else {
        document.querySelector(".head").style.background =
          "linear-gradient( #200016,#10001f )";
      }
    }
  } else {
    //
    if (scrollY >= 98) {
      huss.style.fontSize = "80px";
      huss.style.position = "fixed";
      //
      if (scrollY >= 407) {
        huss.style.display = "none";
      } else {
        huss.style.display = "block";
      }
      //
      if (scrollY >= 150) {
        document.querySelector(".head").style.background =
          "linear-gradient( #376281,#10001f )";
      } else {
        document.querySelector(".head").style.background =
          "linear-gradient( #200016,#10001f )";
      }
    }
  }
};
