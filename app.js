import { db } from "./firebase-config.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const grid = document.getElementById("gamesGrid");

async function loadGames() {

  const querySnapshot = await getDocs(collection(db, "games"));

  querySnapshot.forEach((doc) => {

    const game = doc.data();

    grid.innerHTML += `
      <div class="game-card">

        <img src="${game.icon}">

        <h3>${game.title}</h3>

        <p>${game.version}</p>

        <p>${game.downloads} Downloads</p>

      </div>
    `;
  });
}

loadGames();
