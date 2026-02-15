const levels = [
  {
    title: "Level 1",
    words: [
      "einfach","leicht","simpel","machbar",
      "schwierig","kompliziert","hart","anstrengend",
      "eins","zwei","drei","vier",
      "A","B","C","D"
    ],
    groups: [
  {
    name: "Einfach",
    color: "#6aaa64",
    words: ["einfach","leicht","simpel","machbar"]
  },
  {
    name: "Schwierig",
    color: "#f2b705",
    words: ["schwierig","kompliziert","hart","anstrengend"]
  },
  {
    name: "Zahlen",
    color: "#5a9bd5",
    words: ["eins","zwei","drei","vier"]
  },
  {
    name: "Buchstaben",
    color: "#b565d9",
    words: ["A","B","C","D"]
  }
    ]
  },
  {
    title: "Level 2",
    words: [
      "Lithium","Natrium","Kalium","Caesium",
      "Kohle","Erz","Uran","Edelsteine",
      "Kohlenstoffdioxid","Wasser","Glukose","Sauerstoff",
      "Salz","Topf","Schinken","Buch"
    ],
    groups: [
  {
    name: "Elemente der 1. Hauptgruppe",
    color: "#6aaa64",
    words: ["Lithium","Natrium","Kalium","Caesium"]
  },
  {
    name: "Baut man in Bergwerken ab",
    color: "#f2b705",
    words: ["Kohle","Erz","Uran","Edelsteine"]
  },
  {
    name: "Ausgangs- und Endstoffe der Photosynthese",
    color: "#5a9bd5",
    words: ["Kohlenstoffdioxid","Wasser","Glukose","Sauerstoff"]
  },
  {
    name: "Koch___",
    color: "#b565d9",
    words: ["Salz","Topf","Schinken","Buch"]
  }
    ]
  },
  {
    title: "Level 3",
    words: [
      "Des","Es","As","Fis",
      "der","die","ein","eine",
      "das","was","nass","blass",
      "und","oder","aber","denn"
    ],
    groups: [
  {
    name: "Artikel",
    color: "#6aaa64",
    words: ["Der","Die","Ein","Eine"]
  },
  {
    name: "Reimt sich",
    color: "#f2b705",
    words: ["Das","Was","Nass","Blass"]
  },
  {
    name: "wird mit Wasser assoziiert",
    color: "#5a9bd5",
    words: ["Feucht","Regen","Tau","Tropfen"]
  },
  {
    name: "Musiknoten",
    color: "#b565d9",
    words: ["Des","Es","As","Fis"]
  }
    ]
  },
  {
    title: "Level 4",
    words: [
      "Fahrstuhl","Treppe","Lift","Leiter",
      "Romanistik","Kunstgeschichte","Theologie","Germanistik",
      "Alt","Antik","Greis","Senil",
      "Alphabet","Etage","Betagt","Philosophie"
    ],
    groups: [
  {
    name: "Damit kommt man hoch und runter",
    color: "#6aaa64",
    words: ["Fahrstuhl","Treppe","Lift","Leiter"]
  },
  {
    name: "Geisteswissenschaften",
    color: "#f2b705",
    words: ["Kunstgeschichte","Romanistik","Theologie","Germanistik"]
  },
  {
    name: "In die Jahre gekommen",
    color: "#5a9bd5",
    words: ["Alt","Antik","Greis","Senil"]
  },
  {
    name: "Beginnend mit einem griechischen Buchstaben",
    color: "#b565d9",
    words: ["Alphabet","Etage","Betagt","Philosophie"]
  }
    ]
  }
];

let currentLevel = Number(localStorage.getItem("level")) || 0;
let selected = [];

const grid = document.getElementById("grid");
const message = document.getElementById("message");
const levelTitle = document.getElementById("level-title");
const nextBtn = document.getElementById("next-btn");
const foundCategories = document.getElementById("found-categories");

function loadLevel() {
  if (currentLevel < 0 || currentLevel >= levels.length) {
    currentLevel = 0;
    localStorage.setItem("level", currentLevel);
  }

  foundCategories.innerHTML = "";
  grid.innerHTML = "";
  selected = [];
  message.textContent = "";
  nextBtn.style.display = "none";

  const level = levels[currentLevel];
  levelTitle.textContent = level.title;

  shuffle(level.words).forEach(word => {
    const div = document.createElement("div");
    div.textContent = word;
    div.className = "tile";
    div.onclick = () => toggleSelect(div, word);
    grid.appendChild(div);
  });
}


function toggleSelect(tile, word) {
  if (tile.classList.contains("correct")) return;

  if (selected.includes(word)) {
    selected = selected.filter(w => w !== word);
    tile.classList.remove("selected");
  } else if (selected.length < 4) {
    selected.push(word);
    tile.classList.add("selected");
  }
}

document.getElementById("check-btn").onclick = () => {
  if (selected.length !== 4) {
    message.textContent = "Bitte genau 4 Wörter auswählen.";
    return;
  }

  const level = levels[currentLevel];

  for (const group of level.groups) {
    const matches = selected.filter(w => group.words.includes(w));

    if (matches.length === 4) {
      document.querySelectorAll(".tile").forEach(tile => {
        if (selected.includes(tile.textContent)) {
          tile.classList.remove("selected");
          tile.classList.add("correct");
          tile.style.backgroundColor = group.color;
          tile.style.color = "white";
        }
      });

      message.textContent = `✅ ${group.name}`;
      const tag = document.createElement("div");
      tag.className = "category-tag";
      tag.textContent = group.name;
      tag.style.backgroundColor = group.color;
      foundCategories.appendChild(tag);
      selected = [];

      if (document.querySelectorAll(".correct").length === 16) {
        message.textContent = "🎉 Level geschafft!";
        nextBtn.style.display = "block";
      }
      return;
    }

    if (matches.length === 3) {
      message.textContent = "😬 Fast! Eins passt nicht.";
      return;
    }
  }

  message.textContent = "❌ Leider falsch.";
};

nextBtn.onclick = () => {
  currentLevel++;
  localStorage.setItem("level", currentLevel);
  loadLevel();
};

function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}


loadLevel();
