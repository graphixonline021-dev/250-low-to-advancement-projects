const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"c": "dd", "k": "029-dropdown-menu-system"};
$('#db').onclick=e=>{e.stopPropagation();$('#dm').hidden=!$('#dm').hidden};addEventListener('click',()=>$('#dm').hidden=true)