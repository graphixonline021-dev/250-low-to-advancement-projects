const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"f": [["w", "Weight (kg)", 70], ["h", "Height (cm)", 170]], "js": "const b=v.w/((v.h/100)**2);return `BMI <div class=big>${b.toFixed(1)}</div>${b<18.5?'Underweight':b<25?'Normal range':b<30?'Overweight':'Obese'} (general guide only)`", "k": "017-bmi-calculator"};

$('#form').innerHTML=CFG.f.map(([i,l,d,o])=>`<label>${l}${Array.isArray(o)?`<select id=${i}>${o.map(x=>`<option>${x}</option>`).join('')}</select>`:`<input id=${i} type=${o||'number'} value="${d}">`}</label>`).join('');
const run=()=>{const v={};CFG.f.forEach(([i,,,o])=>{const e=$('#'+i);v[i]=o?e.value:+e.value});try{$('#out').innerHTML=new Function('v',CFG.js)(v)}catch(e){$('#out').textContent='Check your inputs'}};
$('#form').oninput=run;run();