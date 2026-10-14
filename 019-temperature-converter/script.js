const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"f": [["x", "Value", 25], ["a", "From", 0, ["C", "F", "K"]]], "js": "const c=v.a=='C'?v.x:v.a=='F'?(v.x-32)*5/9:v.x-273.15;return `<div class=big>${c.toFixed(2)} °C</div>${(c*9/5+32).toFixed(2)} °F · ${(c+273.15).toFixed(2)} K`", "k": "019-temperature-converter"};

$('#form').innerHTML=CFG.f.map(([i,l,d,o])=>`<label>${l}${Array.isArray(o)?`<select id=${i}>${o.map(x=>`<option>${x}</option>`).join('')}</select>`:`<input id=${i} type=${o||'number'} value="${d}">`}</label>`).join('');
const run=()=>{const v={};CFG.f.forEach(([i,,,o])=>{const e=$('#'+i);v[i]=o?e.value:+e.value});try{$('#out').innerHTML=new Function('v',CFG.js)(v)}catch(e){$('#out').textContent='Check your inputs'}};
$('#form').oninput=run;run();