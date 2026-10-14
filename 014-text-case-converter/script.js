const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"js": "return esc(t)", "ph": "Type text, then click a button…", "btns": [["UPPER", "return t.toUpperCase()"], ["lower", "return t.toLowerCase()"], ["Title Case", "return t.toLowerCase().replace(/\\b\\w/g,c=>c.toUpperCase())"], ["Sentence case", "return t.toLowerCase().replace(/(^\\s*|[.!?]\\s+)(\\w)/g,(m,a,b)=>a+b.toUpperCase())"], ["camelCase", "return t.toLowerCase().replace(/[^a-z0-9]+(.)/g,(m,c)=>c.toUpperCase())"]], "k": "014-text-case-converter"};

const run=()=>{try{const r=new Function('t','u',CFG.js)($('#t').value,$('#t2')?$('#t2').value:'');CFG.frame?$('#out').srcdoc=r:$('#out').innerHTML=r}catch(e){$('#out').textContent=e.message}};
document.querySelectorAll('textarea').forEach(e=>e.oninput=run);
(CFG.btns||[]).forEach(([l,f])=>{const b=document.createElement('button');b.textContent=l;b.onclick=()=>{try{$('#t').value=new Function('t',f)($('#t').value)}catch(e){$('#out').textContent=e.message;return}run()};$('#btns').append(b)});
if(CFG.init)$('#t').value=CFG.init;run();