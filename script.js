if ("scrollRestoration" in history) history.scrollRestoration = "manual";

function resetInitialScroll() {
  if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

resetInitialScroll();
window.addEventListener("pageshow", resetInitialScroll);

const menu = [
  { category: "Pizza", note: "Preise: Ø28 cm / Ø32 cm / Ø40 cm · Käserand +1,50 € / +2,50 € / +4,00 €", items: [
    [1,"Pizza Margherita","Tomatensoße, Käse","7,90 € · 8,90 € · 12,50 €"],
    [2,"Pizza Salami","Tomatensoße, Käse, Salami","8,90 € · 9,90 € · 13,50 €"],
    [3,"Pizza Schinken","Tomatensoße, Käse, Putenschinken","8,90 € · 9,90 € · 13,50 €"],
    [4,"Pizza Funghi","Tomatensoße, Käse, Champignons","8,50 € · 9,50 € · 13,50 €"],
    [5,"Pizza Hawaii","Tomatensoße, Käse, Putenschinken, Ananas","9,50 € · 10,50 € · 15,50 €"],
    [6,"Pizza Veggie","Tomatensoße, Käse, Zucchini, Artischocken, Paprika, Brokkoli","9,50 € · 10,50 € · 15,50 €"],
    [7,"Pizza Mozzarella","Tomaten, Mozzarella","9,90 € · 10,90 € · 14,90 €"],
    [8,"Pizza Thunfisch","Thunfisch, Zwiebeln, Oregano","10,50 € · 11,50 € · 15,50 €"],
    [9,"Pizza Spinat","Schafskäse, milde Peperoni, Spinat","10,50 € · 11,50 € · 15,50 €"],
    [10,"Pizza Istanbul","Zwiebeln, milde Peperoni, Sucuk","10,50 € · 11,50 € · 15,50 €"],
    [11,"Pizza Pollo","Hähnchen, Zwiebeln, Knoblauch","11,50 € · 12,50 € · 17,50 €"],
    [12,"Pizza Amigo Spezial","Tomatensoße, Käse, Hähnchen, Zwiebeln, Jalapeños, Mais, Sauce Hollandaise","11,90 € · 12,90 € · 16,90 €"],
    [13,"Pizza Amore","Salami, Champignons, Schinken, Artischocken, Knoblauch","11,90 € · 12,90 € · 16,90 €"],
    [14,"Pizza Meeresfrüchte","Meeresfrüchte, Knoblauch, Zwiebeln","12,50 € · 13,50 € · 16,90 €"]
  ]},
  { category: "Pizzabrötchen", items: [
    [15,"Salami","","6,00 €"],[16,"Schinken","","6,00 €"],[17,"Sucuk","","6,00 €"],[18,"Spinat Schafskäse","","6,00 €"],[19,"Veggie","Champignons, Paprika, Brokkoli, Zwiebeln","6,00 €"]
  ]},
  { category: "Pasta", note: "Spaghetti, Penne oder Tagliatelle · Überbacken +1,90 € · Pizzabrötchen inklusive", items: [
    [20,"Napoli","Klassische Tomatensoße","7,50 €"],[21,"Bolognese","Rinderhackfleisch, Zwiebeln, Karotten, Tomatensoße, Kräuter","8,80 €"],[22,"Carbonara","Putenschinken, Eier, Sahnesoße, Parmesan","8,90 €"],[23,"Spinat","Spinat, Zwiebeln, Tomaten, Sahnesoße","8,90 €"],[24,"Veggie","Brokkoli, Champignons, Spinat, Sahnesoße","10,90 €"],[25,"Salmon","Lachs, Mais, Zwiebeln, Knoblauchsoße, Tomatensahnesoße","10,90 €"],[26,"Tonno","Thunfisch, Zwiebeln, Knoblauch, Sahnesoße, Tomaten","11,90 €"],[27,"Pasta Amigo Spezial","Hähnchenbrust, Zwiebeln, Brokkoli, Tomatensahnesoße","12,50 €"]
  ]},
  { category: "Lasagne & Schnitzel", items: [
    [28,"Lasagne Bolognese","Rinderhackfleisch, Spinat, Knoblauch","11,90 €"],[29,"Lasagne Veggie","Zucchini, Mais, Auberginen, Tomaten- oder Sahnesauce","12,90 €"],[30,"Hähnchenschnitzel (120 g)","Mit Sauce, Kroketten und Salat · Hollandaise, Champignon- oder Sahnesoße","12,50 €"]
  ]},
  { category: "Burger", note: "Alle Pattys 100 g · Menü inklusive Pommes und Getränk · Preise: Einzel / Menü", items: [
    [31,"Hamburger","Rindfleischpatty, Salat, Tomaten, Burgersoße","6,50 € · 11,50 €"],[32,"Cheeseburger","Rindfleischpatty, Salat, Tomaten, Burgersoße, Cheddar","7,90 € · 12,90 €"],[33,"Double Cheeseburger","Doppel-Patty, Salat, Tomaten, Burgersoße, Cheddar","10,50 € · 14,50 €"],[34,"Crispy Chicken Burger","Crispy Chicken, Salat, Burgersoße","7,50 € · 12,50 €"],[35,"BBQ Burger","Rindfleischpatty, BBQ-Soße, Gewürzgurken, Salat, Rinderbacon","8,50 € · 13,50 €"],[36,"Chili Burger","Rindfleischpatty, Käse, Salat, Tomaten, Chili-Mayo, Jalapeños","8,50 € · 13,50 €"],[37,"Crispy Fish Burger","Fischpatty, Burgersoße, Salat, Tomaten","7,50 € · 12,90 €"],[38,"Veggie Burger","Veggie-Patty, Veggie-Mayo, Salat, Tomaten, Gurken","7,90 € · 12,50 €"]
  ]},
  { category: "Bowls", items: [
    [39,"Crispy Chicken Pommes Bowl","Pommes, Crispy Chicken, Chipotle-Soße, Krautsalat, Gewürzgurken","10,90 €"],[40,"Crispy Fish Pommes Bowl","Pommes, Crispy Fish, Samurai-Soße, Krautsalat, Gewürzgurken","11,90 €"],[41,"Crispy Chicken Salat Bowl","Salat, Crispy Chicken, Joghurt-Soße, Gewürzgurken","9,50 €"],[42,"Crispy Fish Salat Bowl","Salat, Crispy Fish, Sweet-Chili-Soße, Gewürzgurken","10,50 €"],[43,"Crispy Chicken Rice Bowl","Reis, Crispy Chicken, Mexican-Soße, Eisbergsalat, Mayo, Ketchup","10,90 €"],[44,"Crispy Fish Rice Bowl","Reis, Crispy Fish, Mexican-Soße, Eisbergsalat, Mayo, Knoblauch","11,90 €"]
  ]},
  { category: "Salat", note: "Joghurt-, Knoblauch- oder French-Dressing · Ein Pizzabrötchen inklusive", items: [
    [45,"Gemischter Salat","Tomaten, Zwiebeln, Eisbergsalat, milde Peperoni, Oliven","5,50 €"],[46,"Insalata Tonno","Gemischter Salat, Thunfisch, Ei","6,90 €"],[47,"Salat Mozzarella","Tomaten, Basilikum, Mozzarella, Olivenöl","7,50 €"],[48,"Spezial Salat","Gemischter Salat, Pute, Schafskäse","7,50 €"],[49,"Salat Amigo Spezial","Gemischter Salat, Hähnchen, Ei, Mais","8,50 €"]
  ]},
  { category: "Indisch", note: "Mit Basmatireis oder Fladenbrot und Salat", items: [
    [50,"Rind Curry","Zartes Rindfleisch, indische Gewürze","13,50 €"],[51,"Chicken Curry","Hähnchenfilet, indische Gewürze","13,50 €"],[52,"Chicken Spinat","Hähnchen, Spinat, indische Gewürze","13,50 €"],[53,"Aloo Gobi (veggie)","Kartoffeln, Blumenkohl, indische Gewürze","10,50 €"],[54,"Aloo Palak (veggie)","Kartoffeln, Spinat, indische Gewürze","10,50 €"],[55,"Chana Curry (veggie)","Kichererbsen, Zwiebeln, Tomatensoße, indische Gewürze","10,50 €"]
  ]},
  { category: "Dessert", items: [
    [56,"Tiramisu","","4,50 €"],[57,"Churros mit Kit-Kat-Soße (6 Stk.)","","4,50 €"],[58,"Churros mit Pistaziensoße (6 Stk.)","","4,50 €"],[59,"Choco Lava Kuchen","Warm serviert mit flüssigem Schokokern","3,50 €"]
  ]},
  { category: "Beilagen", items: [
    [60,"Chicken Wings","6 / 9 / 12 Stück","5,50 € · 8,50 € · 10,50 €"],[61,"Chicken Nuggets (6 Stk.)","","4,50 €"],[62,"Mozzarella Sticks (6 Stk.)","","4,50 €"],[63,"Wedges mit Salat & Zaziki","","6,50 €"],[64,"Pommes","","3,50 €"],[65,"Kroketten (6 Stk.)","","3,50 €"],[66,"Krautsalat","","2,50 €"],[67,"Oliven","Schwarz & grün, 16 Stück","2,50 €"]
  ]},
  { category: "Getränke & Dips", items: [
    ["","Softdrinks","Coca-Cola, Cola Light, Cola Zero, Fanta, Sprite, Mezzo Mix · zzgl. 0,25 € Pfand","2,50 € (0,33 l) · 3,50 € (1 l)"],["","Wasser","Still oder sprudel · zzgl. 0,25 € Pfand","2,50 € (0,33 l) · 3,50 € (1 l)"],["","Eistee Pfirsich / Zitrone","","2,50 €"],["","Apfelschorle","","2,50 €"],["","Red Bull","","2,75 €"],["","Cheese-Soße","","2,50 €"],["","Premium-Dips","Knoblauch-Mayo, Chili-Mayo, Chutney, Samurai, Chili-Ketchup, Zaziki und Dressings","1,50 €"],["","Mayo / Ketchup","","0,90 €"]
  ]}
];

const tabs = document.querySelector("#category-tabs");
const grid = document.querySelector("#menu-grid");
const note = document.querySelector("#menu-note");
const noResults = document.querySelector("#no-results");
const search = document.querySelector("#menu-search");
let activeCategory = "Pizza";

function renderTabs() {
  tabs.innerHTML = menu.map(({ category }) => `<button class="category-tab" role="tab" aria-selected="${category === activeCategory}" data-category="${category}">${category}</button>`).join("");
}

function renderMenu() {
  const query = search.value.trim().toLocaleLowerCase("de");
  const section = menu.find(group => group.category === activeCategory);
  const visible = section.items.filter(item => item.slice(1).join(" ").toLocaleLowerCase("de").includes(query));
  note.textContent = section.note || "";
  grid.innerHTML = visible.map((item, index) => `
    <article class="menu-item" style="animation-delay:${Math.min(index * 25, 250)}ms">
      <span class="menu-number">${item[0] || "•"}</span>
      <div><h3>${item[1]}</h3>${item[2] ? `<p>${item[2]}</p>` : ""}</div>
      <span class="menu-price">${item[3]}</span>
    </article>`).join("");
  noResults.hidden = visible.length > 0;
}

tabs.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderTabs();
  renderMenu();
});
search.addEventListener("input", renderMenu);
document.querySelectorAll("[data-category-link]").forEach(link => link.addEventListener("click", () => {
  activeCategory = link.dataset.categoryLink;
  renderTabs(); renderMenu();
}));

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", () => { nav.classList.remove("open"); navToggle.setAttribute("aria-expanded", "false"); });

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

function updateOpenStatus() {
  const now = new Date();
  const hour = now.getHours() + now.getMinutes() / 60;
  const isOpen = hour >= 16 || hour < 2;
  const status = document.querySelector("#open-status");
  status.textContent = isOpen ? "Jetzt geöffnet" : "Heute ab 16 Uhr";
  status.style.color = isOpen ? "var(--green-2)" : "inherit";
}

const toast = document.querySelector("#toast");
let toastTimer;
document.querySelectorAll(".pending-link").forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  toast.textContent = `${link.dataset.service}: Der direkte Bestelllink folgt in Kürze.`;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}));

const modal = document.querySelector("#opening-modal");
const offerEnd = new Date(2026, 8, 21, 0, 0, 0); // exklusiv: sichtbar bis einschließlich 20.09.
function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}
function maybeShowOpeningOffer() {
  const now = new Date();
  const preview = new URLSearchParams(window.location.search).get("offer") === "1";
  if ((preview || now < offerEnd) && (preview || sessionStorage.getItem("amigo-offer-seen") !== "1")) {
    window.setTimeout(() => {
      modal.hidden = false;
      document.body.classList.add("modal-open");
      modal.querySelector(".modal-close").focus();
      if (!preview) sessionStorage.setItem("amigo-offer-seen", "1");
    }, 850);
  }
}
modal.addEventListener("click", event => { if (event.target.closest("[data-close-modal]")) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !modal.hidden) closeModal(); });

document.querySelector("#year").textContent = new Date().getFullYear();
renderTabs();
renderMenu();
updateOpenStatus();
maybeShowOpeningOffer();
