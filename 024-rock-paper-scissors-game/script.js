const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"g": "rps", "k": "024-rock-paper-scissors-game"};
const m=['✊','✋','✌️'];let s=[0,0];$('#game').className='grid3';$('#game').innerHTML=m.map((x,i)=>`<button class=cell onclick=pl(${i})>${x}</button>`).join('');
function pl(i){const c=Math.floor(Math.random()*3),r=(i-c+3)%3;if(r==1)s[0]++;if(r==2)s[1]++;$('#out').textContent=`You ${m[i]} vs ${m[c]} — ${r==0?'Draw':r==1?'You win':'You lose'} (You ${s[0]} : ${s[1]} CPU)`}