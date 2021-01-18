const dailyMenuGenerator = () => {
  const main_courses = [
    "Filet de turbot de la mer Noire",
    "Tablier de sapeur",
    "Gigot d'agneau",
    "Faisan de forêt",
    "Trio de quinoa, chou kale et pousses d'épinard",
  ];
  const techniques = [
    "à la cocotte",
    "minute",
    "avec sa sauce hollandaise",
    "façon sud-ouest",
    "comme chez ma grand-mère",
    "déglacé au saké",
    "maturé en fût de chêne",
  ];
  const sides = [
    "une purée de topinambour",
    "ses frites truffées",
    "des châtaignes croustillantes",
    "une brunoise carotte-cèleri",
    "un oeuf parfait",
    "sa crème veloutée de fromages affinés",
  ];
  const seasonings = [
    "au yuzu rouge",
    "au poivre vert de Sichuan",
    "et une pointe de safran",
    "à l'ail noir",
    "et un peu de sucre en poudre",
  ];

  const random_main_course =
    main_courses[Math.floor(Math.random() * main_courses.length)];
  const random_technique =
    techniques[Math.floor(Math.random() * techniques.length)];
  const random_side = sides[Math.floor(Math.random() * sides.length)];
  const random_seasoning =
    seasonings[Math.floor(Math.random() * seasonings.length)];

  const menu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`;

  return menu;
};

const dailyMenu = document.querySelector("#dailyMenu");
const buttonGenerator = document.querySelector("#menuGenerator");
dailyMenu.innerHTML = dailyMenuGenerator();
buttonGenerator.addEventListener("click", () => {
  dailyMenu.innerHTML = dailyMenuGenerator();
});
