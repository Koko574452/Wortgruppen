const levels = [
  {
    title: "Level 1",
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
    groups: [
      {
        name: "Elemente der 1. Hauptgruppe",
        color: "#66aa64",
        words: ["Lithium","Natrium","Kalium","Caesium"]
      },
      {
        name: "Baut man in Bergwerken ab",
        color: "#f2b705",
        words: ["Kohle","Erz","Uran","Edelsteine"]
      },
      {
        name: "Ausgangs- und Endstoffe der Photosynthese",
        color: "#1d7bff",
        words: ["Kohlenstoffdioxid","Wasser","Glukose","Sauerstoff"]
      },
      {
        name: "Koch___",
        color: "#cb4cf5",
        words: ["Salz","Topf","Schinken","Buch"]
      }
    ]
  },
  {
    title: "Level 3",
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
        name: "Wird mit Wasser assoziiert",
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
    groups: [
      {
        name: "Damit kommt man hoch und runter",
        color: "#6aaa64",
        words: ["Fahrstuhl","Treppe","Lift","Leiter"]
      },
      {
        name: "Geisteswissenschaften",
        color: "#f2b705",
        words: ["Romanistik","Kunstgeschichte","Theologie","Germanistik"]
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
  },
  {
    title: "Level 5",
    groups: [
      {
        name: "Hausanschlüsse",
        color: "#6aaa64",
        words: ["Strom","Wasser","Gas","Internet"]
      },
      {
        name: "Diese Dinge leuchten",
        color: "#f2b705",
        words: ["Sonne","Kerze","Lampe","Glühwürmchen"]
      },
      {
        name: "Abkürzungen für technische Begriffe",
        color: "#5a9bd5",
        words: ["LED","DVD","PC","WLAN"]
      },
      {
        name: "Kreisförmige Sachen",
        color: "#b565d9",
        words: ["Reifen","Münze","Teller","Schallplatte"]
      }
    ]
  },
  {
    title: "Level 6",
    groups: [
      {
        name: "Gartengeräte",
        color: "#6aaa64",
        words: ["Spaten","Gießkanne","Harke","Astschere"]
      },
      {
        name: "geometrische Körper",
        color: "#f2b705",
        words: ["Würfel","Kugel","Pyramide","Kegel"]
      },
      {
        name: "Monopoly-Figuren",
        color: "#5a9bd5",
        words: ["Schuh","Schubkarre","Rennwagen","Zylinder"]
      },
      {
        name: "Dinge mit Löchern",
        color: "#b565d9",
        words: ["Nase","Golfplatz","Emmentaler","Bowlingkugel"]
      }
    ]
  },
  {
    title: "Level 7",
    groups: [
      {
        name: "Farbe mit einem Wort davor",
        color: "#6aaa64",
        words: ["Eigelb","Abendrot","Blutorange","Himmelblau"]
      },
      {
        name: "In die Biotonne",
        color: "#f2b705",
        words: ["Eierschale","Blumen","Teebeutel","Obstreste"]
      },
      {
        name: "Kann man abschließen",
        color: "#5a9bd5",
        words: ["Vertrag","Tür","Versicherung","Ausbildung"]
      },
      {
        name: "___Bett",
        color: "#b565d9",
        words: ["Gleis","Hoch","Ehe","Fluss"]
      }
    ]
  },
  {
    title: "Level 8",
    groups: [
      {
        name: "Auf der Autobahn",
        color: "#6aaa64",
        words: ["Leitplanke","Blitzer","Seitenstreifen","Notrufsäule"]
      },
      {
        name: "Olympische Sportarten",
        color: "#f2b705",
        words: ["Rudern","Turmspringen","Segeln","Wasserball"]
      },
      {
        name: "Boote, Schiffe",
        color: "#5a9bd5",
        words: ["Yacht","Katamaran","Kanu","Schlauchboot"]
      },
      {
        name: "Palindrome",
        color: "#b565d9",
        words: ["Radar","Rentner","Kajak","Neben"]
      }
    ]
  },
  {
    title: "Level 9",
    groups: [
      {
        name: "Im Werkzeugkasten",
        color: "#6aaa64",
        words: ["Hammer","Wasserwaage","Schraubenschlüssel","Maßband"]
      },
      {
        name: "Schusswaffen",
        color: "#f2b705",
        words: ["Armbrust","Gewehr","Revolver","Flinte"]
      },
      {
        name: "Rund um die Geige",
        color: "#5a9bd5",
        words: ["Bogen","Saite","Schnecke","Steg"]
      },
      {
        name: "Mordwerkzeuge bei Cluedo",
        color: "#b565d9",
        words: ["Pistole","Seil","Kerzenleuchter","Rohrzange"]
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
const openLevelsBtn = document.getElementById("open-levels");
const closeLevelsBtn = document.getElementById("close-levels");
const levelGrid = document.getElementById("level-grid");
const gameScreen = document.getElementById("game-screen");
const levelScreen = document.getElementById("level-screen");


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

  // 🔥 ALLE WÖRTER AUTOMATISCH AUS DEN KATEGORIEN SAMMELN
  const allWords = level.groups.flatMap(group => group.words);

  shuffle(allWords).forEach(word => {
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

openLevelsBtn.onclick = () => {
  renderLevelModal();
  gameScreen.classList.add("hidden");
  levelScreen.classList.remove("hidden");
};

closeLevelsBtn.onclick = () => {
  levelScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
};

function renderLevelModal() {
  levelGrid.innerHTML = "";

  levels.forEach((level, index) => {
    const square = document.createElement("div");
    square.className = "level-square";
    square.textContent = index + 1;

    if (index === currentLevel) {
      square.classList.add("current");
    }

    square.onclick = () => {
      currentLevel = index;
      localStorage.setItem("level", currentLevel);
      levelScreen.classList.add("hidden");
      gameScreen.classList.remove("hidden");
      loadLevel();
    };

    levelGrid.appendChild(square); 
  });
}




loadLevel();
