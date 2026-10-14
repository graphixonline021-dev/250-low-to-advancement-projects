const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"js": "const w=t.trim()?t.trim().split(/\\s+/).length:0;return `<div class=cards><div class=card>Words<div class=big>${w}</div></div><div class=card>Sentences<div class=big>${(t.match(/[.!?]+/g)||[]).length}</div></div><div class=card>Reading time<div class=big>${Math.ceil(w/200)} min</div></div></div>`", "ph": "Paste text to count words…", "k": "013-word-counter"};

const run=()=>{try{const r=new Function('t','u',CFG.js)($('#t').value,$('#t2')?$('#t2').value:'');CFG.frame?$('#out').srcdoc=r:$('#out').innerHTML=r}catch(e){$('#out').textContent=e.message}};
document.querySelectorAll('textarea').forEach(e=>e.oninput=run);
(CFG.btns||[]).forEach(([l,f])=>{const b=document.createElement('button');b.textContent=l;b.onclick=()=>{try{$('#t').value=new Function('t',f)($('#t').value)}catch(e){$('#out').textContent=e.message;return}run()};$('#btns').append(b)});
if(CFG.init)$('#t').value=CFG.init;run();