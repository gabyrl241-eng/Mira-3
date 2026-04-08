document.addEventListener("DOMContentLoaded", () => {

// =======================
// 🌍 CONFIG IDIOMA
// =======================
const nombre = "Vero";
let idioma = "es";
let yesScale = 1;

const textos = {
es: {
  titulo: `¿Quieres ir al cine conmigo, ${nombre}? 🍿🎬`,
  aceptar: "¡Sabía que dirías que sí! 🍿💖",
  fecha: "Elige fecha y hora 📅",
  confirmar: "Confirmar cita 🎬",
  compartir: "📲 Compartir boleto",
  secreto: "🌙 Modo secreto desbloqueado",
  errorFecha: "Selecciona fecha y hora 😠",

  // 🔥 NUEVO
  noFrases: [
    "¿Segura? 😢",
    "No puedes escapar 😈",
    "Inténtalo otra vez 💔"
  ]
},

jp: {
  titulo: "一緒に映画を見に行きませんか？🎬💖",
  aceptar: "やっぱり「はい」って言うと思った！💖",
  fecha: "日付と時間を選んでください 📅",
  confirmar: "予約する 🎬",
  compartir: "📲 チケットを共有",
  secreto: "🌙 シークレットモード解除",
  errorFecha: "日付と時間を選んでください 😠",

  // 🔥 NUEVO
  noFrases: [
    "本当に？😢",
    "逃げられないよ 😈",
    "もう一回試して 💔"
  ]
}
};

// =======================
// 💬 CHAT EXTENDIDO PRO
// =======================
const mensajesLang = {
  es: [
    { texto: "Hola Vero 💖", lado: "left" },
    { texto: "He estado pensando en ti... ✨", lado: "left" },
    { texto: "No sé cómo decirlo sin ponerme nervioso 😳", lado: "left" },
    { texto: "Pero cada vez que hablo contigo me haces muy feliz 💕", lado: "left" },
    { texto: "¿Te gustaría salir conmigo? 🥺", lado: "left" },

    { texto: "Siii 😳💖", lado: "right" },
    { texto: "Yo también quería decírtelo 🫣", lado: "right" },

    { texto: "¿De verdad? 😭💖", lado: "left" },
    { texto: "Entonces hagamos que sea especial ✨", lado: "left" },

    { texto: "¿A dónde vamos? 🎬", lado: "right" },

    { texto: "Ir al cine juntos 🍿🎬", lado: "left" },
    { texto: "Ver una peli, compartir palomitas... 😏", lado: "left" },
    { texto: "Y pasar tiempo contigo 💖", lado: "left" },

    { texto: "Suena perfecto 😍", lado: "right" },
    { texto: "Ya quiero que sea ese día 💕", lado: "right" },

    { texto: "Entonces es una cita oficial 😎✨", lado: "left" }
  ],

  jp: [
    { texto: "こんにちはベロ 💖", lado: "left" },
    { texto: "ずっと君のこと考えてた… ✨", lado: "left" },
    { texto: "どう言えばいいか分からないけど…😳", lado: "left" },
    { texto: "君と話すとすごく幸せなんだ 💕", lado: "left" },
    { texto: "僕とデートしてくれる？ 🥺", lado: "left" },

    { texto: "うん…いいよ 😳💖", lado: "right" },
    { texto: "私も言いたかったの 🫣", lado: "right" },

    { texto: "本当！？😭💖", lado: "left" },
    { texto: "じゃあ特別な日にしよう ✨", lado: "left" },

    { texto: "どこに行くの？ 🎬", lado: "right" },

    { texto: "一緒に映画を見よう 🍿🎬", lado: "left" },
    { texto: "ポップコーンを食べながら… 😏", lado: "left" },
    { texto: "君と一緒に過ごしたい 💖", lado: "left" },

    { texto: "いいね！😍", lado: "right" },
    { texto: "その日が楽しみ 💕", lado: "right" },

    { texto: "じゃあ正式なデートだね 😎✨", lado: "left" }
  ]
};

// =======================
// ELEMENTOS
// =======================
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const openBtn = document.getElementById("open-letter-btn");
const secretLetter = document.getElementById("secret-letter");
const closeBtn = document.getElementById("close-letter-btn");

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");
const themeBtn = document.getElementById("theme-toggle");
const langBtn = document.getElementById("lang-toggle");

const chatBox = document.getElementById("chat-box");

const movieSection = document.getElementById("movie-selection");
const movieBtns = document.querySelectorAll(".movie-card");
const confirmBtn = document.getElementById("confirm-btn");

const saveDateBtn = document.getElementById("save-date-btn");
const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");
const dateMsg = document.getElementById("date-msg");

const shareBtn = document.getElementById("share-btn");

// =======================
// 🌍 APLICAR IDIOMA
// =======================
function aplicarIdioma() {
  title.textContent = textos[idioma].titulo;

  const fechaLabel = document.querySelector("#final-text h3");
  if (fechaLabel) fechaLabel.textContent = textos[idioma].fecha;

  saveDateBtn.textContent = textos[idioma].confirmar;
  shareBtn.textContent = textos[idioma].compartir;

  document.body.classList.toggle("jp", idioma === "jp");
}

document.querySelector(".ticket-bottom").textContent =
  idioma === "jp" ? "デートを楽しんで 💖" : "Disfruta tu cita 💖";

// =======================
// CAMBIAR IDIOMA
// =======================
langBtn?.addEventListener("click", () => {
  idioma = idioma === "es" ? "jp" : "es";
  langBtn.textContent = idioma === "es" ? "🇯🇵" : "🇲🇽";
  aplicarIdioma();
});

// =======================
// ABRIR CARTA
// =======================
envelope?.addEventListener("click", () => {

  setTimeout(() => {
    music?.play().catch(() => {});
  }, 500);

  envelope.style.display = "none";
  letter.style.display = "flex";

  aplicarIdioma();

  setTimeout(() => {
    document.querySelector(".letter-window")?.classList.add("open");
  }, 50);
});

// =======================
// BOTÓN NO
// =======================
const ninjaSound = document.getElementById("ninja-sound");

noBtn?.addEventListener("mouseover", () => {
  try {
    const rect = document.querySelector(".letter-window").getBoundingClientRect();

    const moveX = (Math.random() - 0.5) * rect.width * 0.8;
    const moveY = (Math.random() - 0.5) * rect.height * 0.8;

    const btnRect = noBtn.getBoundingClientRect();

    for (let i = 0; i < 8; i++) {
      crearChakra(
        btnRect.left + Math.random() * btnRect.width,
        btnRect.top + Math.random() * btnRect.height
      );
    }

    ninjaSound.currentTime = 0;
    ninjaSound.play().catch(() => {});

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // hacer crecer el botón SI
    yesScale += 0.2; // 🔥 aumenta cada vez
    yesBtn.style.transform = `scale(${yesScale})`;

    const frases = textos[idioma].noFrases;
    title.innerHTML = frases[Math.floor(Math.random() * frases.length)];

  } catch (e) {
    console.error("Error botón NO:", e);
  }
});

// =======================
// YES
// =======================
yesBtn?.addEventListener("click", () => {
  title.textContent = textos[idioma].aceptar;
  catImg.src = "cat_dance.gif";

  buttons.style.display = "none";
  finalText.style.display = "block";
  openBtn.style.display = "block";

  lanzarCorazones();
});

// =======================
// CORAZONES
// =======================
function lanzarCorazones() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

function crearChakra(x, y) {
  const particle = document.createElement("div");
  particle.className = "chakra-particle";

  particle.style.left = x + "px";
  particle.style.top = y + "px";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 800);
}

// =======================
// CHAT DINÁMICO
// =======================
function iniciarChat() {
  chatBox.innerHTML = "";
  let i = 0;
  const mensajes = mensajesLang[idioma];

  function mostrarMensaje() {
    if (i >= mensajes.length) {
      movieSection.style.display = "block";
      return;
    }

    const msg = document.createElement("div");
    msg.className = `msg ${mensajes[i].lado}`;
    chatBox.appendChild(msg);

    escribirTexto(msg, mensajes[i].texto, () => {
      i++;
      setTimeout(mostrarMensaje, 800);
    });
  }

  mostrarMensaje();
}

function escribirTexto(el, texto, cb) {
  let i = 0;
  function escribir() {
    if (i < texto.length) {
      el.textContent += texto[i++];
      setTimeout(escribir, 30);
    } else cb();
  }
  escribir();
}

// =======================
// MODAL
// =======================
openBtn?.addEventListener("click", () => {
  secretLetter.classList.add("show");
  openBtn.style.display = "none";
  iniciarChat();
});

closeBtn?.addEventListener("click", () => {
  secretLetter.classList.remove("show");
  openBtn.style.display = "block";
});

// =======================
// PELÍCULA
// =======================
let selectedMovie = "";

movieBtns.forEach(card => {
  card.addEventListener("click", () => {
    movieBtns.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedMovie = card.dataset.movie;
  });
});

confirmBtn?.addEventListener("click", () => {
  if (!selectedMovie) {
    alert("Elige una película 😠");
    return;
  }
  movieSection.style.display = "none";
});

// =======================
// QR
// =======================
saveDateBtn?.addEventListener("click", () => {
  const fecha = dateInput.value;
  const hora = timeInput.value;

  if (!fecha || !hora) {
    dateMsg.textContent = textos[idioma].errorFecha;
    return;
  }

  dateMsg.textContent = `📅 ${fecha} ⏰ ${hora}`;
  generarQR(fecha, hora);
});
 // =======================
// QR creacion
// =======================
function generarQR(fecha, hora) {
  const qrContainer = document.getElementById("qr-container");
  const ticket = document.getElementById("ticket");

  const movieText = selectedMovie || "Película sorpresa 🎬";

  document.getElementById("ticket-movie").textContent = movieText;
  document.getElementById("ticket-date").textContent = fecha;
  document.getElementById("ticket-time").textContent = hora;

  document.getElementById("ticket-id").textContent =
    "ID: CINEMA-" + Math.floor(Math.random() * 999999);

  ticket.style.display = "block";

  // 🔥 limpiar solo canvas, no chakra
  qrContainer.querySelectorAll("canvas").forEach(c => c.remove());

  const data = ` https://gabyrl241-eng.github.io/sorpresa-cita/?fecha=${fecha}&hora=${hora}&peli=${encodeURIComponent(movieText)}`;

  const canvas = document.createElement("canvas");

    QRCode.toCanvas(canvas, data, {
      width: 220,
      margin: 3, // 🔥 más margen = mejor lectura
      color: {
        dark: "#000000",
        light: "#ffffff" // 🔥 fondo blanco SIEMPRE para escaneo
      },
      errorCorrectionLevel: "H"
    }, function (error) {
    if (error) console.error(error);

    qrContainer.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.src = "naruto2.png";

    img.onload = () => {
      const size = 60;
      const x = (canvas.width - size) / 2;
      const y = (canvas.height - size) / 2;

      // 🔥 círculo limpio detrás (mejor que cuadro blanco)
      ctx.beginPath();
      ctx.arc(canvas.width/2, canvas.height/2, size/2 + 8, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff"; // 🔥 blanco para no romper QR
      ctx.fill();

      // imagen encima
      ctx.drawImage(img, x, y, size, size);
    };
  });
}
// =======================
// COMPARTIR
// =======================
shareBtn?.addEventListener("click", async () => {
  const ticket = document.getElementById("ticket");

  // 🔥 guardar estilos originales
  const originalStyle = ticket.style.cssText;

  // 🔥 FORZAR ESTILO LIMPIO
  ticket.style.background = "#ffffff";
  ticket.style.opacity = "1";
  ticket.style.filter = "none";
  ticket.style.boxShadow = "none";

  const canvas = await html2canvas(ticket, {
    scale: 3,
    useCORS: true,
    backgroundColor: "#ffffff",
    logging: false
  });

  // 🔥 restaurar estilos
  ticket.style.cssText = originalStyle;

  const link = document.createElement("a");
  link.download = "boleto_hd.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});

// =======================
// MÚSICA
// =======================
musicBtn?.addEventListener("click", async () => {
  if (music.paused) {
    await music.play();
    musicBtn.textContent = "🔊";
  } else {
    music.pause();
    musicBtn.textContent = "🔇";
  }
});

// =======================
// DARK MODE
// =======================
themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// aplicar idioma inicial
aplicarIdioma();

});

