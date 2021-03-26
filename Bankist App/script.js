let instantTransfersBtn = document.getElementById("instantTransfers");
let instantLoansBtn = document.getElementById("instantLoans");
let instantClosingBtn = document.getElementById("instantClosing");
let boxContent = document.getElementById("boxContent");

let instantTransfersContent = document.getElementById("instantTransfersContent");
let instantLoansContent = document.getElementById("instantLoansContent");
let instantClosingContent = document.getElementById("instantClosingContent");

instantLoansContent.style.visibility = "hidden";
instantClosingContent.style.visibility = "hidden";

instantTransfersBtn.addEventListener("click", () => {
    instantLoansContent.style.visibility = "hidden";
    instantClosingContent.style.visibility = "hidden";
    instantTransfersContent.style.visibility = "visible";
});

instantLoansBtn.addEventListener("click", () => {
    instantTransfersContent.style.visibility = "hidden";
    instantClosingContent.style.visibility = "hidden";
    instantLoansContent.style.visibility = "visible";
});

instantClosingBtn.addEventListener("click", () => {
    instantTransfersContent.style.visibility = "hidden";
    instantLoansContent.style.visibility = "hidden";
    instantClosingContent.style.visibility = "visible";
})


//To top btn
let btnToTop = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
}

btnToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})