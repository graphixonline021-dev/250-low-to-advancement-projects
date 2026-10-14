const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"f": [["x", "Value", 1], ["a", "From", 0, ["m", "km", "cm", "mi", "ft", "in"]], ["b", "To", 0, ["in", "ft", "mi", "cm", "km", "m"]]], "js": "const f={m:1,km:1000,cm:.01,mi:1609.344,ft:.3048,in:.0254};return `<div class=big>${(v.x*f[v.a]/f[v.b]).toLocaleString(undefined,{maximumFractionDigits:6})} ${v.b}</div>`", "k": "018-unit-converter"};

$('#form').innerHTML=CFG.f.map(([i,l,d,o])=>`<label>${l}${Array.isArray(o)?`<select id=${i}>${o.map(x=>`<option>${x}</option>`).join('')}</select>`:`<input id=${i} type=${o||'number'} value="${d}">`}</label>`).join('');
const run=()=>{const v={};CFG.f.forEach(([i,,,o])=>{const e=$('#'+i);v[i]=o?e.value:+e.value});try{$('#out').innerHTML=new Function('v',CFG.js)(v)}catch(e){$('#out').textContent='Check your inputs'}};
$('#form').oninput=run;run();