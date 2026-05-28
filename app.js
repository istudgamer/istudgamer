import { db } from "./firebase-config.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const gamesGrid = document.getElementById("gamesGrid");

async function loadGames() {

  gamesGrid.innerHTML = "Loading...";

  const querySnapshot = await getDocs(collection(db, "Games"));

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

    gamesGrid.appendChild(card);
  });
}

loadGames();
