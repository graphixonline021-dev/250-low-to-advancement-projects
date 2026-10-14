const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"g": "guess", "k": "025-number-guessing-game"};
let n=1+Math.floor(Math.random()*100),k=0;$('#game').innerHTML='<div class=row><input id=gv type=number placeholder="1-100"><button onclick=gs()>Guess</button></div>';
function gs(){const v=+$('#gv').value;k++;$('#out').textContent=v==n?`Correct in ${k} tries! 🎉`:v<n?'Higher ⬆️':'Lower ⬇️'}