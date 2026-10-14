const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"c": "side", "k": "028-animated-sidebar-menu"};
$('#tg').onclick=()=>$('#sb').classList.toggle('c')