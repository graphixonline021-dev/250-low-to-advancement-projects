const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"c": "calc2", "k": "003-simple-calculator"};
const K='C ⌫ % /7 8 9 *4 5 6 -1 2 3 +0 . = '.replace('/',' / ').replace('*',' * ').replace('-',' - ').replace('+',' + ');
const keys=['C','⌫','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','=','00'];let e='';
$('#k').innerHTML=keys.map(k=>`<button>${k}</button>`).join('');
$('#k').onclick=ev=>{const k=ev.target.textContent;if(ev.target.tagName!='BUTTON')return;if(k=='C')e='';else if(k=='⌫')e=e.slice(0,-1);else if(k=='='){try{e=String(Function('"use strict";return ('+e.replace(/%/g,'/100')+')')())}catch(x){e='Error'}}else e+=k;$('#d').value=e}