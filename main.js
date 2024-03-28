let accesKey = "-LFss3Put8k1Os1JfVQu9jA1_aDdbTZCTV-TNlVDQEQ";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const btn = document.getElementById("btn");

let keyword = "";

let page = 1;
showMoreBtn.addEventListener("click", () => {
  page++;
  console.log(page);
  searchImages();
});
async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;
  results.map((result) => {
    let card = document.createElement("div");
    card.className = "card";
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.style.textDecoration = "none";
    imageLink.href = result.links.html;
    const p = document.createElement("p");
    p.textContent = result.alt_description;
    const p1 = document.createElement("p");
    p1.textContent = result.description;
    p.className = "p";
    p1.className = "p1";

    imageLink.append(image, p1, p);
    card.append(imageLink);
    searchResult.append(card);
  });
  console.log(data);
}

btn.addEventListener("click", (e) => {
  showMoreBtn.classList.add("active");
  e.preventDefault();
  page = 1;
  searchImages();
});
