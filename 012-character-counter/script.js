const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"js": "return `<div class=cards><div class=card>Characters<div class=big>${t.length}</div></div><div class=card>Without spaces<div class=big>${t.replace(/\\s/g,'').length}</div></div><div class=card>Lines<div class=big>${t?t.split('\\n').length:0}</div></div></div>`", "ph": "Type to count characters…", "k": "012-character-counter"};

const run=()=>{try{const r=new Function('t','u',CFG.js)($('#t').value,$('#t2')?$('#t2').value:'');CFG.frame?$('#out').srcdoc=r:$('#out').innerHTML=r}catch(e){$('#out').textContent=e.message}};
document.querySelectorAll('textarea').forEach(e=>e.oninput=run);
(CFG.btns||[]).forEach(([l,f])=>{const b=document.createElement('button');b.textContent=l;b.onclick=()=>{try{$('#t').value=new Function('t',f)($('#t').value)}catch(e){$('#out').textContent=e.message;return}run()};$('#btns').append(b)});
if(CFG.init)$('#t').value=CFG.init;run();