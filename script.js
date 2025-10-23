
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
  
