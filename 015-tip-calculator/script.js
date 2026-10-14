const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"f": [["bill", "Bill amount", 50], ["tip", "Tip %", 15], ["n", "People", 1]], "js": "const tip=v.bill*v.tip/100;return `Tip: <b>$${tip.toFixed(2)}</b><br>Total: <b>$${(v.bill+tip).toFixed(2)}</b><br>Per person: <b>$${((v.bill+tip)/Math.max(1,v.n)).toFixed(2)}</b>`", "k": "015-tip-calculator"};

$('#form').innerHTML=CFG.f.map(([i,l,d,o])=>`<label>${l}${Array.isArray(o)?`<select id=${i}>${o.map(x=>`<option>${x}</option>`).join('')}</select>`:`<input id=${i} type=${o||'number'} value="${d}">`}</label>`).join('');
const run=()=>{const v={};CFG.f.forEach(([i,,,o])=>{const e=$('#'+i);v[i]=o?e.value:+e.value});try{$('#out').innerHTML=new Function('v',CFG.js)(v)}catch(e){$('#out').textContent='Check your inputs'}};
$('#form').oninput=run;run();