const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CFG={"c": "nav", "k": "027-responsive-navigation-bar"};
$('#hb').onclick=()=>$('#lk').classList.toggle('open')