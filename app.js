/* ================================================================
   app.js — Rendering logic for Japan · Korea 2027
   Data lives in data.js. HTML structure in index.html.
   ================================================================ */

var currentProfile = null;
var curIdx = 0;

/* ─── PROFILE ──────────────────────────────────────────────────── */
function buildProfileGrid(){
  var g=document.getElementById('profile-grid');
  PROFILES.forEach(function(p){
    var btn=document.createElement('button');
    btn.className='profile-btn';
    btn.innerHTML='<div class="pavatar" style="background:'+p.col+'">'+p.init+'</div><div class="pname">'+p.name.split(' ')[0]+'</div><div class="prole">'+p.role.split(' · ')[0]+'</div>';
    btn.onclick=function(){selectProfile(p.id);};
    g.appendChild(btn);
  });
}

function selectProfile(id){
  currentProfile=PROFILES.find(function(p){return p.id===id;});
  try{localStorage.setItem('jp27_profile',id);}catch(e){}
  document.getElementById('profile-screen').style.display='none';
  applyProfile();
}

function showProfilePicker(){
  document.getElementById('profile-screen').style.display='flex';
}

function applyProfile(){
  var p=currentProfile;
  if(!p)return;
  // Update header pill
  document.getElementById('pp-av').style.background=p.col;
  document.getElementById('pp-av').textContent=p.init;
  document.getElementById('pp-name').textContent=p.name.split(' ')[0];
  // Show/hide knee section
  document.getElementById('knee-section').style.display=p.isKnee?'block':'block'; // always show
  // Show/hide gloria section
  document.getElementById('gloria-section').style.display=p.isGloria?'block':'block';
  // Update accent colour based on group
  if(p.group==='gloria'){
    document.documentElement.style.setProperty('--accent','var(--teal)');
    document.documentElement.style.setProperty('--accent-l','var(--teal-l)');
  }else{
    document.documentElement.style.setProperty('--accent','var(--cherry)');
    document.documentElement.style.setProperty('--accent-l','var(--cherry-l)');
  }
  // Re-render crew highlighting this member
  buildCrew();
  // Re-render packing with profile tags
  buildPacking();
  // Re-render today
  buildToday(curIdx);
}

/* ─── PACKING ──────────────────────────────────────────────────── */
/* ─── BUILD PACKING ─────────────────────────────────── */
function buildPacking(){
  var p=currentProfile;
  var el=document.getElementById('pack-categories');
  el.innerHTML='';
  PACK_CATS.forEach(function(cat,ci){
    // Filter items relevant to profile
    var items=cat.items.filter(function(item){
      if(!p)return true;
      // Show knee items only if Rick
      if(item.tags.indexOf('knee')>=0&&!p.isKnee)return false;
      // Show golf items only if golfer
      if(item.tags.indexOf('golf')>=0&&!p.isGolf)return false;
      // Show gloria items only if Gloria
      if(item.tags.indexOf('gloria')>=0&&!p.isGloria)return false;
      return true;
    });
    if(items.length===0)return;
    var div=document.createElement('div');
    div.className='pack-cat';
    var hdr=document.createElement('div');
    hdr.className='pack-cat-hdr';
    hdr.innerHTML='<span class="picon">'+cat.icon+'</span><span class="pname">'+cat.name+'</span><span class="pcount" id="pcount-'+ci+'">'+items.length+' items</span><span class="pchev">›</span>';
    hdr.onclick=function(){togglePackCat(hdr,ci);};
    div.appendChild(hdr);
    var list=document.createElement('div');
    list.className='pack-items';
    list.id='pack-items-'+ci;
    items.forEach(function(item){
      var row=document.createElement('div');
      row.className='pack-item';
      var tagHtml=item.tags.filter(function(t){return t!=='essential';}).map(function(t){
        var labels={knee:'Rick',golf:'Golf',korea:'Korea',gloria:'Gloria'};
        return'<span class="pack-tag '+t+'">'+(labels[t]||t)+'</span>';
      }).join('');
      var essTag=item.tags.indexOf('essential')>=0?'<span class="pack-tag essential">essential</span>':'';
      row.innerHTML='<div class="pack-cb'+(item.tags.indexOf('essential')>=0?' warn':'')+'" id="pcb-'+item.id+'"></div><div style="flex:1"><div class="pack-label" id="pcl-'+item.id+'">'+item.label+'</div>'+(item.note?'<div class="pack-note">'+item.note+'</div>':'')+'</div>'+tagHtml+essTag;
      row.onclick=function(){togglePackItem(item.id,ci,items.length);};
      list.appendChild(row);
    });
    div.appendChild(list);
    el.appendChild(div);
    // restore state
    items.forEach(function(item){
      try{var s=JSON.parse(localStorage.getItem('jp27_pack')||'{}');if(s[item.id]){document.getElementById('pcb-'+item.id).classList.add('done');document.getElementById('pcl-'+item.id).classList.add('done');}}catch(e){}
    });
  });
  updatePackProgress();
}

function togglePackCat(hdr,ci){
  hdr.classList.toggle('open');
  var items=document.getElementById('pack-items-'+ci);
  if(items)items.classList.toggle('open');
}

function togglePackItem(id,ci,total){
  var cb=document.getElementById('pcb-'+id),lbl=document.getElementById('pcl-'+id);
  if(!cb)return;
  var done=cb.classList.toggle('done');
  lbl.classList.toggle('done',done);
  try{var s=JSON.parse(localStorage.getItem('jp27_pack')||'{}');s[id]=done;localStorage.setItem('jp27_pack',JSON.stringify(s));}catch(e){}
  updatePackProgress();
}

function updatePackProgress(){
  var all=document.querySelectorAll('.pack-cb'),done=document.querySelectorAll('.pack-cb.done');
  var pct=all.length?Math.round(done.length/all.length*100):0;
  document.getElementById('pack-count').textContent=done.length+' / '+all.length+' packed';
  document.getElementById('pack-bar').style.width=pct+'%';
}

/* ─── CREW ─────────────────────────────────────────────────────── */
/* ─── BUILD CREW ─────────────────────────────────── */
function buildCrew(){
  document.getElementById('crew-list').innerHTML=PROFILES.map(function(m){
    var isYou=currentProfile&&currentProfile.id===m.id;
    return'<div class="crew-m'+(isYou?' you-m':'')+'"><div class="crew-av" style="background:'+m.col+'">'+m.init+'</div><div><div class="crew-nm">'+m.name+(isYou?' <span style="font-size:10px;color:var(--cherry)">← you</span>':'')+'</div><div class="crew-rl">'+m.role+'</div><div class="crew-tags">'+m.tags.map(function(t){return'<span class="ctag '+t.c+'">'+t.t+'</span>';}).join('')+(isYou?'<span class="ctag you">You</span>':'')+'</div></div></div>';
  }).join('');
}

/* ─── TODAY ────────────────────────────────────────────────────── */
/* ─── TODAY ─────────────────────────────────────── */
function getTodayIdx(){var start=new Date('2027-04-03'),now=new Date(),d=Math.floor((now-start)/86400000);return(d<0||d>=DAYS.length)?0:d;}

function buildToday(idx){
  var d=DAYS[idx],p=currentProfile,isKr=d.c==='kr',prev=idx>0,next=idx<DAYS.length-1;
  var h='<div class="today-hero"><img src="'+d.img+'" alt="'+d.label+'" loading="lazy" onerror="this.style.opacity=0"><div class="today-hero-ov"></div><div class="today-hero-content"><div class="tday-badge'+(isKr?' kr':'')+'"><span>Day '+d.n+'</span></div><h2>'+d.title+'</h2><div class="tdate">'+d.date+' · '+d.label+'</div></div></div>';
  h+='<div class="today-nav"><button class="tnav-btn" onclick="goDay('+(idx-1)+')" style="opacity:'+(prev?1:0.3)+'" '+(prev?'':'disabled')+'>‹ Prev</button><div class="tnav-center">Day '+d.n+' of '+DAYS.length+'<small>'+d.date+'</small></div><button class="tnav-btn" onclick="goDay('+(idx+1)+')" style="opacity:'+(next?1:0.3)+'" '+(next?'':'disabled')+'>Next ›</button></div>';
  h+='<div class="today-body">';
  var wt=d.wt||{t:isKr?'12–18°C':'13–18°C',cond:'Spring weather · light jacket recommended',icon:'🌸'};
  h+='<div class="weather-b"><div style="flex:1"><div class="wloc">'+d.label+'</div><div class="wcond">'+wt.cond+'</div></div><div class="temp">'+wt.t+'</div><span style="font-size:28px">'+wt.icon+'</span></div>';

  // Split options
  if(d.split){
    h+='<div class="act-card"><div class="split-wrap"><div class="split-lbl">Today\'s split options</div><div class="split-row">';
    d.split.forEach(function(s){
      var isYouSplit=!p||!s.whoFor||(s.whoFor.indexOf('all')>=0)||(s.whoFor.indexOf(p?p.id:'')>=0);
      var useKo=p&&p.isGloria&&s.ko;
      var splitText=useKo?s.ko:s.text;
      var splitWho=useKo&&s.whoKo?s.whoKo:s.who;
      h+='<div class="split-opt'+(isYouSplit?' you-opt':'')+'"><div class="who'+(s.cls?' '+s.cls:'')+'">'+splitWho+(isYouSplit&&p?' ← 나':'')+'</div><p>'+splitText+'</p>'+(s.knee&&p&&p.isKnee?'<div class="knee-mini">🦵 '+s.knee+'</div>':'')+'</div>';
    });
    h+='</div></div></div>';
  }

  var isGloria=p&&p.isGloria;
  h+='<div class="t-sec">'+(isGloria?'오늘 일정':'Schedule')+'</div>';
  d.activities.forEach(function(a){
    var showKnee=a.knee&&p&&p.isKnee;
    var desc=isGloria&&a.ko?a.ko:a.desc;
    var timeLabel=isGloria&&a.timeKo?a.timeKo:a.time;
    h+='<div class="act-card"><div class="act-inner"><div class="act-time'+(isKr?' kr':'')+'">'+timeLabel+'</div><div class="act-desc">'+desc+'</div></div>';
    if(showKnee)h+='<div class="knee-alert"><span>🦵</span><span>Rick — '+a.knee+'</span></div>';
    h+='</div>';
  });
  h+='</div>';
  document.getElementById('today-content').innerHTML=h;
}
function goDay(i){if(i<0||i>=DAYS.length)return;curIdx=i;buildToday(i);document.getElementById('tab-today').scrollTop=0;}

/* ─── TIMELINE ─────────────────────────────────────────────────── */
/* ─── TIMELINE ─────────────────────────────────────── */
function buildTimeline(){
  var jp=document.getElementById('tl-jp'),kr=document.getElementById('tl-kr');
  var tagMap={night:'Night',travel:'Transit',golf:'Golf',split:'Split',knee:'Rick flag',splurge:'Splurge',korea:'Korea'};
  DAYS.forEach(function(d){
    var el=d.c==='kr'?kr:jp,isKr=d.c==='kr';
    var tags=d.tags.map(function(t){return'<span class="dtag '+t+'">'+(tagMap[t]||t)+'</span>';}).join('');
    var body='';
    if(d.split)d.split.forEach(function(s){body+='<div class="db-act"><div class="db-time'+(isKr?' kr':'')+'" style="'+(s.cls==='golf'?'color:#2e7d32':'')+'">'+(s.cls==='golf'?'🏌️ Golf':s.who)+'</div><div class="db-desc">'+s.text+(s.knee?'<div class="knee-note">🦵 '+s.knee+'</div>':'')+'</div></div>';});
    d.activities.forEach(function(a){body+='<div class="db-act"><div class="db-time'+(isKr?' kr':'')+'">'+a.time+'</div><div class="db-desc">'+a.desc+(a.knee?'<div class="knee-note">🦵 '+a.knee+'</div>':'')+'</div></div>';});
    el.innerHTML+='<div class="day-card"><div class="day-card-hdr" onclick="toggleDay(this)"><img class="day-card-img" src="'+d.img+'" alt="'+d.label+'" loading="lazy" onerror="this.style.display=\'none\'"><div class="day-card-nfo"><div class="day-num-lbl">Day '+d.n+' · '+d.date+'</div><div class="day-title-t">'+d.title+'</div><div class="day-sub-t">'+d.sub+'</div><div class="day-tags-t">'+tags+'</div></div><div class="day-chev">›</div></div><div class="day-body">'+body+'</div></div>';
  });
}
function toggleDay(h){var b=h.nextElementSibling,ch=h.querySelector('.day-chev'),o=b.classList.toggle('open');ch.classList.toggle('open',o);}

/* ─── UTILS ────────────────────────────────────────────────────── */
/* ─── UTILS ─────────────────────────────────────── */
function toggleBlk(hdr){var b=hdr.nextElementSibling,ch=hdr.querySelector('.bchev'),o=b.classList.toggle('open');if(ch){ch.style.transform=o?'rotate(90deg)':'';ch.style.color=o?'var(--cherry)':'var(--border)';}}
function switchTab(id,btn){document.querySelectorAll('.tab-pane').forEach(function(p){p.classList.remove('active');});document.querySelectorAll('.nav-btn').forEach(function(b){b.classList.remove('active');});document.getElementById('tab-'+id).classList.add('active');btn.classList.add('active');document.getElementById('tab-'+id).scrollTop=0;}

/* ─── INIT ─────────────────────────────────────────────────────── */
buildProfileGrid();
try {
  var saved = localStorage.getItem('jp27_profile');
  if (saved) { selectProfile(saved); }
} catch(e) {}
curIdx = getTodayIdx();
buildTimeline();
if (!currentProfile) {
  buildToday(curIdx);
  buildPacking();
  buildCrew();
}
