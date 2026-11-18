const stories = [
  {
    category: "Mountains",
    place: "ITALY",
    title: "The art of getting a little lost",
    description: "Quiet trails, alpine huts, and no particular place to be.",
    image: "dolomites",
    time: "8 MIN READ",
  },
  {
    category: "Coast",
    place: "PORTUGAL",
    title: "Following the Atlantic light",
    description: "Salt in the air. A notebook full of tiny seaside towns.",
    image: "coast",
    time: "6 MIN READ",
  },
  {
    category: "Desert",
    place: "MOROCCO",
    title: "Where the silence has a color",
    description: "Finding stillness in the shifting dunes of the south.",
    image: "desert",
    time: "5 MIN READ",
  },
];
let filter = "All";
const search = document.querySelector("#search");
function render() {
  const visible = stories.filter(
    (s) =>
      (filter === "All" || s.category === filter) &&
      (s.title + " " + s.place + " " + s.description)
        .toLowerCase()
        .includes(search.value.toLowerCase()),
  );
  document.querySelector("#cards").innerHTML = visible
    .map(
      (s) =>
        `<a class="card" href="story.html?place=${s.image}"><img src="assets/${s.image}.svg" alt="Illustration of ${s.category.toLowerCase()}"><small>${s.place} / ${s.category.toUpperCase()}</small><h3>${s.title}</h3><p>${s.description}</p><div class="meta"><span>${s.time}</span><span>Read fieldnote ↗</span></div></a>`,
    )
    .join("");
  document.querySelector("#empty").hidden = visible.length > 0;
}
document.querySelectorAll("[data-filter]").forEach(
  (b) =>
    (b.onclick = () => {
      filter = b.dataset.filter;
      document
        .querySelectorAll("[data-filter]")
        .forEach((x) => x.classList.toggle("active", x === b));
      render();
    }),
);
search.oninput = render;
document.querySelector("#subscribe").onsubmit = (e) => {
  e.preventDefault();
  localStorage.setItem("fieldnotes-subscribed", "true");
  document.querySelector("#message").textContent =
    "You’re on the list. Demo subscription saved locally.";
  e.target.reset();
};
render();
