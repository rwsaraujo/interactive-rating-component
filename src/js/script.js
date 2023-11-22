let optSelected = 0;
const ratingOptions = document.querySelectorAll(".rating-options");
const card = document.getElementById("card");
const divImg = document.getElementById("div-img");
const star = document.getElementById("star");
const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const rating = document.getElementById("IDrating");
const btn = document.getElementById("btn-rating");
const image = document.createElement("img");
const badge = document.createElement("p");
const newTitle = document.createElement("h1");
const newParagraph = document.createElement("p");

// Rating given by user
ratingOptions.forEach((opt) => {
  opt.addEventListener("click", () => {
    ratingOptions.forEach((opt) => {
      opt.setAttribute("class", "rating-options center");
    });
    optSelected = +opt.innerHTML;
    opt.setAttribute("class", "rating-options__selected center rounded");

    image.setAttribute("src", "./src/images/illustration-thank-you.svg");
    badge.innerHTML = `You selected ${optSelected} out of 5`;
    newTitle.innerHTML = "Thank You!";
    newParagraph.innerHTML =
      "We appreciate you taking the time to give a rating. <br> If you ever need more support, don't hesitate to get in touch!";
  });
});

// Submit button
btn.onclick = () => {
  if (optSelected !== 0) {
    star.remove();
    title.remove();
    paragraph.remove();
    rating.remove();
    btn.remove();

    divImg.append(image);
    card.append(badge, newTitle, newParagraph);

    card.setAttribute("class", "card__rated");
    divImg.setAttribute("class", "div-img__rated");
    badge.setAttribute("class", "badge rounded");
  }
};
