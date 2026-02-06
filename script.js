/* ===== SETTINGS ===== */
const COLLAGE_IMAGE_COUNT = 64;
const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/PASTE_YOUR_LINK_HERE";

/* ===== COLLAGE ===== */
const collage = document.getElementById("collage");
const tileCount = 160;

for (let i = 0; i < tileCount; i++) {
  const tile = document.createElement("div");
  tile.className = "tile";

  const img = document.createElement("img");
  const n = (i % COLLAGE_IMAGE_COUNT) + 1;
  img.src = `assets/images/${n}.jpg`;

  tile.appendChild(img);
  collage.appendChild(tile);
}

/* ===== SCREEN NAV ===== */
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelector(".modal").scrollTop = 0;
}

/* ===== START YES/NO ===== */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const startSubtitle = document.getElementById("startSubtitle");
const startBtnRow = document.getElementById("startBtnRow");

let noClicks = 0;

noBtn.addEventListener("click", () => {
  noClicks++;

  const maxX = startBtnRow.offsetWidth - noBtn.offsetWidth;
  const maxY = startBtnRow.offsetHeight - noBtn.offsetHeight;

  const x = Math.random() * Math.max(1, maxX);
  const y = Math.random() * Math.max(1, maxY);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.right = "auto";

  if (noClicks === 3) showSubtitle("Come on 😄");
  if (noClicks === 6) showSubtitle("Okay stop playing 😂");
  if (noClicks === 10) showSubtitle("You’re saying yes anyway ❤️");
});

function showSubtitle(text){
  startSubtitle.style.display = "block";
  startSubtitle.textContent = text;
}

yesBtn.addEventListener("click", () => {
  showSubtitle("I planned a small surprise for you 💖");
  showScreen("screen-why");
});

/* ===== NAV BUTTONS ===== */
document.getElementById("toWhyAnirudhBtn").addEventListener("click", () => showScreen("screen-why-anirudh"));
document.getElementById("toMemoriesBtn").addEventListener("click", () => showScreen("screen-memories"));
document.getElementById("toReadyBtn").addEventListener("click", () => showScreen("screen-ready"));
document.getElementById("toStoryBtn").addEventListener("click", () => showScreen("screen-story"));
document.getElementById("toSongsBtn").addEventListener("click", () => showScreen("screen-songs"));

/* ===== HOVER MEDIA SETUP ===== */
document.querySelectorAll(".hoverCard").forEach(card => {
  const type = card.getAttribute("data-type");
  const src = card.getAttribute("data-media");
  const holder = card.querySelector(".hoverMedia");
  if (!holder || !type || !src) return;

  if (type === "image") {
    holder.style.backgroundImage = `url('${src}')`;
  } else if (type === "video") {
    const v = document.createElement("video");
    v.src = src;
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.preload = "metadata";
    v.style.width = "100%";
    v.style.height = "100%";
    v.style.objectFit = "cover";
    holder.appendChild(v);

    card.addEventListener("mouseenter", () => v.play().catch(() => {}));
    card.addEventListener("mouseleave", () => v.pause());
  }
});

/* ===== SONGS ===== */
const playlistBtn = document.getElementById("playlistBtn");
playlistBtn.href = SPOTIFY_PLAYLIST_URL;

const player = document.getElementById("player");
const nowPlaying = document.getElementById("nowPlaying");
const favSongBtn = document.getElementById("favSongBtn");

favSongBtn.addEventListener("click", () => {
  const song = favSongBtn.getAttribute("data-song");
  if (!song) return;

  if (player.src.includes(song) && !player.paused) {
    player.pause();
    nowPlaying.textContent = "Paused";
    favSongBtn.textContent = "Play";
    return;
  }

  player.src = song;
  player.play().then(() => {
    nowPlaying.textContent = "Now playing: Anushka’s favorite song 💖";
    favSongBtn.textContent = "Pause";
  }).catch(() => {
    nowPlaying.textContent = "Could not play. Check file name/path.";
  });
});

player.addEventListener("ended", () => {
  favSongBtn.textContent = "Play";
  nowPlaying.textContent = "Not playing";
});

/* ===== RESTART ===== */
document.getElementById("restartBtn").addEventListener("click", () => {
  player.pause();
  player.currentTime = 0;
  nowPlaying.textContent = "Not playing";
  favSongBtn.textContent = "Play";
  showScreen("screen-start");
});
