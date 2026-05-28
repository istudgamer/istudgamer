import { db } from "./firebase-config.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const gamesGrid = document.getElementById("gamesGrid");

const popup = document.getElementById("popup");

const closeBtn = document.getElementById("closeBtn");

const popupIcon = document.getElementById("popupIcon");

const popupTitle = document.getElementById("popupTitle");

const popupThumb = document.getElementById("popupThumb");

const popupVersion = document.getElementById("popupVersion");

const popupFeatures = document.getElementById("popupFeatures");

const popupDownloads = document.getElementById("popupDownloads");

const downloadBtn = document.getElementById("downloadBtn");

const tutorialBtn = document.getElementById("tutorialBtn");

async function loadGames() {

  gamesGrid.innerHTML = "Loading...";

  const querySnapshot = await getDocs(collection(db, "games"));

  gamesGrid.innerHTML = "";

  querySnapshot.forEach((doc) => {

    const game = doc.data();

    const card = document.createElement("div");

    card.className = "game-card";

    card.innerHTML = `

      <img src="${game.icon}" alt="${game.title}">

      <h3>${game.title}</h3>

      <p>${game.version}</p>

      <p>${game.downloads} Downloads</p>

    `;

    // CLICK EVENT
    card.addEventListener("click", () => {

      popup.classList.remove("hidden");

      popupIcon.src = game.icon;

      popupTitle.innerText = game.title;

      popupThumb.src = game.thumbnail;

      popupVersion.innerText = "Version: " + game.version;

      popupFeatures.innerText =
        "MOD Features: " + game.modFeatures;

      popupDownloads.innerText =
        "Downloads: " + game.downloads;

      downloadBtn.href = game.downloadLink;

      tutorialBtn.href = game.youtubeLink;
    });

    gamesGrid.appendChild(card);
  });
}

// CLOSE POPUP
closeBtn.addEventListener("click", () => {

  popup.classList.add("hidden");

});

// CLOSE WHEN CLICK OUTSIDE
popup.addEventListener("click", (e) => {

  if (e.target === popup) {

    popup.classList.add("hidden");

  }

});

loadGames();
