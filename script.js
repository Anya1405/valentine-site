// ---------- LAYERS ----------
function showLayer(id){
  document.querySelectorAll(".layer").forEach(l => l.classList.remove("active"));
  const el = document.getElementById(id);
  if(!el){
    console.error("Layer not found:", id);
    return;
  }
  el.classList.add("active");

  const collage = document.getElementById("collageBg");
  const darkBg = document.getElementById("darkBg");

  if(id === "layer-ask"){
    collage.style.display = "block";
    darkBg.style.display = "block";
  } else {
    collage.style.display = "none";
    darkBg.style.display = "block";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------- COLLAGE (loads from collage-list.txt, supports jpg/jpeg/png mixed) ----------
async function buildCollage(){
  const container = document.getElementById("collageBg");
  if(!container) return;

  container.innerHTML = "";
  container.style.display = "block";
  container.style.background = "#000";
  container.style.position = "fixed";
  container.style.inset = "0";
  container.style.zIndex = "-3";

  let text = "";
  try{
    const res = await fetch("assets/collage/collage-list.txt", { cache: "no-store" });
    if(!res.ok) throw new Error("collage-list.txt not found");
    text = await res.text();
  } catch(e){
    console.error("ERROR loading collage-list.txt:", e);
    container.innerHTML = `<div style="color:white;padding:16px;font-family:system-ui">
      Could not load assets/collage/collage-list.txt<br/>
      Make sure it exists and is pushed to GitHub.
    </div>`;
    return;
  }

  const files = text
    .split("\n")
    .map(x => x.trim())
    .filter(Boolean)
    .filter(name => {
      const n = name.toLowerCase();
      return n.endsWith(".jpg") || n.endsWith(".jpeg") || n.endsWith(".png");
    });

  if(files.length === 0){
    console.error("No images inside collage-list.txt");
    return;
  }

  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gap = "2px";
  grid.style.height = "100%";
  grid.style.width = "100%";

  // Small tiles so lots fit
  const cols = 35; // make 40 if you want smaller tiles
  const rows = Math.ceil(files.length / cols);
  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  files.forEach((filename) => {
    const tile = document.createElement("div");
    tile.style.background = "#111";
    tile.style.overflow = "hidden";
    tile.style.display = "flex";
    tile.style.alignItems = "center";
    tile.style.justifyContent = "center";

    const img = document.createElement("img");
    img.src = `assets/collage/${encodeURIComponent(filename)}`;
    img.loading = "lazy";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "contain";  // no cropping
    img.style.background = "#111";

    tile.appendChild(img);
    grid.appendChild(tile);
  });

  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(0,0,0,.35)";

  container.appendChild(grid);
  container.appendChild(overlay);
}

// ---------- AUTO PICK MEDIA EXTENSIONS (jpg/jpeg/png + mp4/mov) ----------
async function pickExisting(basePathWithoutExt, exts){
  for(const ext of exts){
    const url = `${basePathWithoutExt}.${ext}`;
    try{
      const res = await fetch(url, { method: "HEAD" });
      if(res.ok) return url;
    } catch(e){}
  }
  return null;
}

async function wireMedia(){
  const imgExts = ["jpg","jpeg","png","JPG","JPEG","PNG"];
  const vidExts = ["mp4","mov","MP4","MOV"];

  // WHYME
  const whyme1 = await pickExisting("assets/whyme/card1", imgExts);
  const whyme3 = await pickExisting("assets/whyme/card3", imgExts);
  const whyme2 = await pickExisting("assets/whyme/card2", vidExts);
  const whyme4 = await pickExisting("assets/whyme/card4", vidExts);

  if(whyme1) document.getElementById("whyme-img1").src = whyme1;
  if(whyme3) document.getElementById("whyme-img3").src = whyme3;
  if(whyme2) document.getElementById("whyme-vid2").src = whyme2;
  if(whyme4) document.getElementById("whyme-vid4").src = whyme4;

  // WHYONLY
  const w1 = await pickExisting("assets/whyonly/c1", imgExts);
  const w3 = await pickExisting("assets/whyonly/c3", imgExts);
  const w5 = await pickExisting("assets/whyonly/c5", imgExts);
  const w2 = await pickExisting("assets/whyonly/c2", vidExts);
  const w4 = await pickExisting("assets/whyonly/c4", vidExts);
  const w6 = await pickExisting("assets/whyonly/c6", vidExts);

  if(w1) document.getElementById("whyonly-img1").src = w1;
  if(w3) document.getElementById("whyonly-img3").src = w3;
  if(w5) document.getElementById("whyonly-img5").src = w5;
  if(w2) document.getElementById("whyonly-vid2").src = w2;
  if(w4) document.getElementById("whyonly-vid4").src = w4;
  if(w6) document.getElementById("whyonly-vid6").src = w6;

  // STORY
  const s1 = await pickExisting("assets/story/s1", imgExts);
  const s3 = await pickExisting("assets/story/s3", imgExts);
  const s5 = await pickExisting("assets/story/s5", imgExts);
  const s7 = await pickExisting("assets/story/s7", imgExts);

  const s2 = await pickExisting("assets/story/s2", vidExts);
  const s4 = await pickExisting("assets/story/s4", vidExts);
  const s6 = await pickExisting("assets/story/s6", vidExts);
  const s8 = await pickExisting("assets/story/s8", vidExts);

  if(s1) document.getElementById("story-img1").src = s1;
  if(s3) document.getElementById("story-img3").src = s3;
  if(s5) document.getElementById("story-img5").src = s5;
  if(s7) document.getElementById("story-img7").src = s7;

  if(s2) document.getElementById("story-vid2").src = s2;
  if(s4) document.getElementById("story-vid4").src = s4;
  if(s6) document.getElementById("story-vid6").src = s6;
  if(s8) document.getElementById("story-vid8").src = s8;

  // FAV
  const fav = await pickExisting("assets/fav/fav1", imgExts);
  if(fav) document.getElementById("fav-img").src = fav;
}

// ---------- NO BUTTON ----------
let noClicks = 0;

function moveNoButton(btn){
  const padding = 14;
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  const rect = btn.getBoundingClientRect();
  const maxX = vw - rect.width - padding;
  const maxY = vh - rect.height - padding;

  const x = Math.floor(Math.random() * (maxX - padding + 1)) + padding;
  const y = Math.floor(Math.random() * (maxY - padding + 1)) + padding;

  btn.style.position = "fixed";
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
  btn.style.zIndex = "20";
}

function handleNoClick(){
  noClicks += 1;
  const btnNo = document.getElementById("btnNo");
  const hint = document.getElementById("noHint");

  moveNoButton(btnNo);

  if(noClicks === 2){
    hint.textContent = "Come on 😅";
  } else if(noClicks === 3){
    hint.textContent = "Stop playing 😤";
  } else if(noClicks >= 4){
    hint.textContent = "You are anyway saying yes ❤️";
    setTimeout(() => showLayer("layer-whyme"), 450);
  }
}

// ---------- HOVER VIDEO PLAY ----------
function setupHoverVideos(){
  document.querySelectorAll(".flip-card").forEach(card => {
    const video = card.querySelector("video");
    if(!video) return;

    card.addEventListener("mouseenter", () => video.play().catch(()=>{}));
    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
}

// ---------- BUTTONS ----------
function wireButtons(){
  const yes = document.getElementById("btnYes");
  const no = document.getElementById("btnNo");

  if(yes) yes.addEventListener("click", () => showLayer("layer-whyme"));
  if(no) no.addEventListener("click", handleNoClick);

  document.querySelectorAll("[data-next]").forEach(btn => {
    btn.addEventListener("click", () => showLayer(btn.getAttribute("data-next")));
  });

  const finalYes = document.getElementById("finalYes");
  const finishBtn = document.getElementById("finishBtn");
  if(finalYes) finalYes.addEventListener("click", () => showLayer("layer-final"));
  if(finishBtn) finishBtn.addEventListener("click", () => showLayer("layer-final"));
}

// ---------- START ----------
(async function init(){
  await buildCollage();
  await wireMedia();
  wireButtons();
  setupHoverVideos();
  showLayer("layer-ask");
})();
