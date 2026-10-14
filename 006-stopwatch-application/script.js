const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"m": "stop", "k": "006-stopwatch-application"};

const m=CFG.m,B=$('#big'),F=$('#form'),pad=n=>String(n).padStart(2,'0'),fmt=s=>`${pad(Math.floor(s/3600))}:${pad(Math.floor(s/60)%60)}:${pad(Math.floor(s%60))}`;
const btn=(l,f)=>{const b=document.createElement('button');b.textContent=l;b.onclick=f;F.append(b)};
if(m=='clock')setInterval(()=>{const d=new Date();B.textContent=d.toLocaleTimeString();$('#out').textContent=d.toDateString()},500);
if(m=='world'){const Z=['America/New_York','Europe/London','Asia/Karachi','Asia/Tokyo','Australia/Sydney','America/Los_Angeles'];B.className='cards';setInterval(()=>{B.innerHTML=Z.map(z=>`<div class=card>${z.split('/')[1].replace('_',' ')}<br><b>${new Date().toLocaleTimeString('en-GB',{timeZone:z})}</b></div>`).join('')},500)}
if(m=='stop'){let t=0,iv,laps=[];const sh=()=>B.textContent=fmt(t/1000)+'.'+pad(Math.floor(t%1000/10));sh();btn('Start',()=>{if(!iv){const s=Date.now()-t;iv=setInterval(()=>{t=Date.now()-s;sh()},30)}});btn('Stop',()=>{clearInterval(iv);iv=0});btn('Lap',()=>{laps.push(B.textContent);$('#out').innerHTML=laps.map((l,i)=>`Lap ${i+1}: ${l}`).join('<br>')});btn('Reset',()=>{clearInterval(iv);iv=0;t=0;laps=[];sh();$('#out').innerHTML=''})}
if(m=='count'){let s=CFG.min*60,iv;const sh=()=>{B.textContent=fmt(s);document.title=fmt(s)};sh();F.insertAdjacentHTML('afterbegin',`<input id=mn type=number value=${CFG.min} style="width:90px"> min `);
const go=()=>{clearInterval(iv);iv=setInterval(()=>{if(--s<=0){clearInterval(iv);s=0;$('#out').textContent='⏰ Time is up!'}sh()},1000)};
btn('Set',()=>{s=$('#mn').value*60;sh()});btn('Start',go);btn('Pause',()=>clearInterval(iv));if(CFG.pomo)btn('Break 5 min',()=>{s=300;sh();go()})}