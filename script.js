
    function checkAnswer() {
      const answer = document.getElementById('answer-input').value.trim().toLowerCase();
      const result = document.getElementById('result');
      const nextBtn = document.getElementById('nextBtn');
      if (answer.toLowerCase() == '30') {
        document.getElementById('result').innerHTML = `✅ Betul! Awak Hebat! <br>
        <img src="comel.JPG" alt="" width="120"/>`;
        nextBtn.style.display = "inline-block";
      } else {
        document.getElementById('result').innerHTML = `❌ Salah... Cuba lagi! <br>
        <img src="comel2.JPG" alt="" width="120"/>` ;
        nextBtn.style.display = "none";
      }
    } 
    function goNext1() {
      window.location.href = "page2.html";
      }

  

    function checkAnswer2() {
      const answer = document.getElementById('answer-input-2').value.trim().toLowerCase();
      const result = document.getElementById('result');
      const nextBtn = document.getElementById('nextBtn');
      if (answer.toLowerCase() == '93') {
      document.getElementById('result-2').innerHTML = `✅ Betul! Awak Hebat! <br>
      <img src="comel.JPG" alt="" width="120"/>`;
      nextBtn.style.display = "inline-block";
    } else {
      document.getElementById('result-2').innerHTML = `❌ Salah... Cuba lagi! <br>
      <img src="comel2.JPG" alt="" width="120"/>`;
      nextBtn.style.display = "none";
    }
    }
  function goNext2() {
    window.location.href = "page3.html";
  }
    
  function checkAnswer3() {
    const answer = document.getElementById('answer-input-3').value.trim().toLowerCase();
    const result = document.getElementById('result');
    const nextBtn = document.getElementById('nextBtn');

  if (answer.toLowerCase() == '60') {
    document.getElementById('result-3').innerHTML = `✅ Betul! Awak Hebat! <br>
    <img src="comel.JPG" alt="" width="120"/>`;
    nextBtn.style.display = "inline-block";
  } else {
    document.getElementById('result-3').innerHTML = `❌ Salah... Cuba lagi! <br>
    <img src="comel2.JPG" alt="" width="120"/>`;
    nextBtn.style.display = "none";
  }
  }
function goNext3() {
  window.location.href = "page4.html";
}
  

// --- Timer setup ---
let startTime;
let timerInterval;
let elapsedTime = 0;

// Semak kalau dah ada masa tersimpan dalam localStorage
if (localStorage.getItem("examElapsedTime")) {
  elapsedTime = parseInt(localStorage.getItem("examElapsedTime"));
}

// Mula timer bila page dibuka
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  localStorage.setItem("examElapsedTime", elapsedTime); // Simpan masa terkini

  let totalSeconds = Math.floor(elapsedTime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  document.getElementById("timer").textContent =
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Hentikan timer (bila pelajar habis jawab)
function stopTimer() {
  clearInterval(timerInterval);
  localStorage.setItem("examElapsedTime", elapsedTime);
}

// Bila halaman ditutup atau bertukar, hentikan timer
window.addEventListener("beforeunload", stopTimer);

// Mula timer automatik bila page load
window.onload = startTimer;

