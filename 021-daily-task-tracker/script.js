const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"f": [["t", "Task"], ["tm", "Time", "time"]], "done": true, "k": "021-daily-task-tracker"};

const C=CFG,K='p_'+C.k;let L=JSON.parse(localStorage.getItem(K)||'[]');
$('#form').innerHTML=C.f.map(([i,l,o])=>Array.isArray(o)?`<select id=${i}>${o.map(x=>`<option>${x}</option>`).join('')}</select>`:`<input id=${i} placeholder="${l}" type="${o||'text'}">`).join('')+'<button id=add>Add</button>';
function save(){localStorage.setItem(K,JSON.stringify(L));draw()}
function draw(){$('#list').innerHTML=L.map((x,n)=>`<li class="${x.d?'done':''}">${C.done?`<input type=checkbox ${x.d?'checked':''} onchange="L[${n}].d=this.checked;save()">`:''}<span ${C.flip?`data-a="${esc(x[C.f[0][0]])}" data-b="${esc(x[C.f[1][0]])}" style="cursor:pointer" title="Click to flip" onclick="this.textContent=this.textContent==this.dataset.a?this.dataset.b:this.dataset.a"`:''}>${C.flip?esc(x[C.f[0][0]]):C.f.map(([i])=>esc(x[i])).filter(Boolean).join(' — ')}</span><button onclick="L.splice(${n},1);save()">✕</button></li>`).join('')||'<p class=muted>Nothing here yet — add something above.</p>';
$('#out').textContent=C.sum?'Total: '+L.reduce((a,x)=>a+(+x[C.sum]||0),0):L.length+' item(s)'}
$('#add').onclick=()=>{const x={};C.f.forEach(([i])=>x[i]=$('#'+i).value);if(!Object.values(x).some(Boolean))return;L.push(x);C.f.forEach(([i,,o])=>{if(!Array.isArray(o))$('#'+i).value=''});save()};draw();