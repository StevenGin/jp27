/* ================================================================
   data.js — All trip data for Japan · Korea 2027
   Edit this file to update the itinerary, profiles, or packing.
   ================================================================ */

/* ─── PROFILES ────────────────────────────────────────────────── */
var PROFILES=[
  {id:'steven',name:'Steven Gin',init:'SG',col:'#c0395b',role:'SF · Trip lead',tags:[{c:'lead',t:'Trip lead'},{c:'sf',t:'San Francisco'}],group:'sfo',isKnee:false,isGloria:false,isGolf:false},
  {id:'esther',name:'Esther Nam',init:'EN',col:'#e87095',role:'SF · Travelling with Steven',tags:[{c:'sf',t:'San Francisco'}],group:'sfo',isKnee:false,isGloria:false,isGolf:false},
  {id:'rick',name:'Rick Tucker',init:'RT',col:'#0f7a65',role:'Winnipeg · Bad knees · Golfer',tags:[{c:'ywg',t:'Winnipeg'},{c:'knee',t:'Bad knees'},{c:'golf',t:'Golfer'}],group:'ywg',isKnee:true,isGloria:false,isGolf:true},
  {id:'rose',name:'Rose Rucker',init:'RR',col:'#5c6bc0',role:'Winnipeg · Golfer',tags:[{c:'ywg',t:'Winnipeg'},{c:'golf',t:'Golfer'}],group:'ywg',isKnee:false,isGloria:false,isGolf:true},
  {id:'sally',name:'Sally Gin',init:'SG',col:'#b8860b',role:'Winnipeg',tags:[{c:'ywg',t:'Winnipeg'}],group:'ywg',isKnee:false,isGloria:false,isGolf:false},
  {id:'gloria',name:'Gloria Nam',init:'GN',col:'#0f7a65',role:'Seoul · Korea local',tags:[{c:'seoul',t:'Seoul local'},{c:'conf',t:'Confirmed ✓'}],group:'gloria',isKnee:false,isGloria:true,isGolf:false}
];

/* ─── IMAGES ──────────────────────────────────────────────────── */
var IMG={
  tokyo:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=75',
  kamakura:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=75',
  magome:'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=800&q=75',
  shirakawa:'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=75',
  kanazawa:'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=75',
  kyoto:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=75',
  uji:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=75',
  hiroshima:'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=75',
  miyajima:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=75',
  seoul:'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=75',
  gwangjang:'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=75',
  dmz:'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=75'
};

/* ─── DAYS ────────────────────────────────────────────────────── */
/* Each day: { n, date, label, c (jp/kr), title, sub, tags, img,
              wt (weather), activities[], split[] }
   Activity: { time, timeKo, desc, ko, knee, gloriaNote }
   ---------------------------------------------------------------- */
var DAYS=[
  // ─ DAY 1 ─────────────────────────────────
  {n:1,date:'Fri Apr 3',label:'Tokyo',c:'jp',title:'Tokyo — Arrive',sub:'Shinjuku hotel · Izakaya welcome dinner',tags:['travel','night'],img:IMG.tokyo,
   wt:{t:'14°C',cond:'Partly cloudy, cool evening',icon:'🌤️'},
   activities:[
    {time:'Afternoon',timeKo:'오후',
     desc:'Arrive <strong>HND (Haneda Airport)</strong> (preferred — 30 min to centre via monorail) or NRT (Narita, 60 min via N\'EX). Pick up <a href="https://www.jreast.co.jp/e/pass/suica.html" target="_blank"><strong>Suica IC cards</strong></a> at the airport — works on every train, bus, and convenience store in Japan.',
     ko:'<strong>하네다 공항(HND)</strong>(선호 — 모노레일로 시내 30분) 또는 나리타 공항(NRT, N\'EX 60분) 도착. 공항에서 <a href="https://www.jreast.co.jp/e/pass/suica.html" target="_blank"><strong>스이카 IC 카드</strong></a>를 받으세요.'},
    {time:'Evening',timeKo:'저녁',
     desc:'Check in to <strong>Shinjuku hotel</strong> (central or south Shinjuku, near JR station). Welcome dinner at an <strong>izakaya</strong> nearby — order everything, share everything. Short neon wander after if anyone has energy. Early night.',
     ko:'신주쿠 호텔 체크인. 근처 <strong>이자카야</strong>에서 환영 저녁 식사. 에너지가 있으면 짧은 네온 거리 산책. 일찍 주무세요.'},
    {time:'Tonight',timeKo:'오늘 밤',
     desc:'Put a ¥5,000 note in your wallet — you\'ll need cash tomorrow.',
     ko:'지갑에 5,000엔 지폐를 넣어두세요 — 내일 필요합니다.'}
  ]},

  // ─ DAY 2 ─────────────────────────────────
  {n:2,date:'Sat Apr 4',label:'Tokyo',c:'jp',title:'Tokyo — Asakusa + Ueno + Shibuya Night',sub:'Old Tokyo · Cherry blossoms · Iconic crossing',tags:['night'],img:IMG.tokyo,
   activities:[
    {time:'Early Morning',timeKo:'이른 아침',
     desc:'Head to <a href="https://maps.google.com/?q=Asakusa,Tokyo" target="_blank"><strong>Asakusa</strong></a> early — before 8am on a Saturday it\'s magical, by 9:30am it\'s mobbed. Direct JR Chuo-Sobu Line from Shinjuku.',
     ko:'<a href="https://maps.google.com/?q=아사쿠사,도쿄" target="_blank"><strong>아사쿠사</strong></a>에 일찍 도착하세요 — 토요일 오전 8시 이전은 마법 같고, 9시 30분이면 관광객이 넘칩니다. 신주쿠에서 JR 주오-소부선 직행.'},
    {time:'Asakusa',timeKo:'아사쿠사',
     desc:'<a href="https://www.senso-ji.jp/english/" target="_blank"><strong>Senso-ji Temple</strong></a> (Tokyo\'s oldest, 628 AD) through the Kaminarimon Thunder Gate. Nakamise-dori for snacks: ningyo-yaki cakes, kaminari-okoshi rice crackers. <a href="https://maps.google.com/?q=Kappabashi+Street+Tokyo" target="_blank"><strong>Kappabashi knife street</strong></a> (10 min walk) — 100+ shops, professional Japanese knives make excellent gifts. Sumida Park along the river for cherry blossoms.',
     ko:'<a href="https://www.senso-ji.jp/english/" target="_blank"><strong>센소지 절</strong></a>(628년 도쿄 최고령 사원) 가미나리몬을 통해 입장. 나카미세도리에서 간식. <a href="https://maps.google.com/?q=갓파바시+도쿄" target="_blank"><strong>갓파바시 칼 거리</strong></a>(도보 10분) — 전문 일본 칼. 스미다 공원에서 벚꽃.'},
    {time:'Mid-Morning',timeKo:'오전 중반',
     desc:'Subway to <a href="https://maps.google.com/?q=Ueno+Park+Tokyo" target="_blank"><strong>Ueno Park</strong></a> (~10 min). Tokyo\'s most famous cherry blossom park — locals picnicking under the trees in big numbers on a Saturday in April.',
     ko:'지하철로 <a href="https://maps.google.com/?q=우에노공원+도쿄" target="_blank"><strong>우에노 공원</strong></a>(약 10분). 도쿄 최고의 벚꽃 명소 — 4월 토요일에 현지인들이 피크닉을 즐깁니다.'},
    {time:'Lunch',timeKo:'점심',
     desc:'Lunch near Asakusa or Ueno. Options: <a href="https://maps.google.com/?q=Daikokuya+Tempura+Asakusa" target="_blank">Daikokuya</a> (tempura since 1887, expect a queue), Sometaro (DIY okonomiyaki), or graze Nakamise snacks.',
     ko:'아사쿠사 또는 우에노 근처에서 점심. 추천: <a href="https://maps.google.com/?q=다이코쿠야+아사쿠사" target="_blank">다이코쿠야</a>(1887년 텐푸라, 줄 서야 함), 소메타로(직접 굽는 오코노미야키).'},
    {time:'Afternoon',timeKo:'오후',
     desc:'Free afternoon — return to Shinjuku, rest, explore the neighbourhood, or head to <a href="https://maps.google.com/?q=Harajuku+Tokyo" target="_blank">Harajuku</a> if curious (Takeshita Street for street fashion, one stop from Shinjuku on the Yamanote).',
     ko:'자유 오후 — 신주쿠로 돌아가 휴식하거나 <a href="https://maps.google.com/?q=하라주쿠+도쿄" target="_blank">하라주쿠</a> 탐방(다케시타 거리, 야마노테선으로 신주쿠에서 한 정거장).'},
    {time:'Evening',timeKo:'저녁',
     desc:'<a href="https://maps.google.com/?q=Shibuya+Crossing+Tokyo" target="_blank"><strong>Shibuya Crossing at night</strong></a> — stand on the corner, watch one full cycle of 3,000 people crossing simultaneously, then cross it yourself. One of the great urban spectacles in the world. Then Shinjuku for dinner: <a href="https://maps.google.com/?q=Golden+Gai+Shinjuku" target="_blank">Golden Gai</a> (tiny 6-seat bars, incredible atmosphere) or <a href="https://maps.google.com/?q=Omoide+Yokocho+Shinjuku" target="_blank">Omoide Yokocho</a> (yakitori under the train tracks).',
     ko:'<a href="https://maps.google.com/?q=시부야+스크램블교차로" target="_blank"><strong>야간 시부야 스크램블 교차로</strong></a> — 3,000명이 동시에 건너는 광경을 보세요. 신주쿠로 돌아와 저녁: <a href="https://maps.google.com/?q=골든가이+신주쿠" target="_blank">골든 가이</a>(작은 바) 또는 <a href="https://maps.google.com/?q=오모이데요코초+신주쿠" target="_blank">오모이데 요코초</a>(야키토리 골목).'}
  ]},

  // ─ DAY 3 ─────────────────────────────────
  {n:3,date:'Sun Apr 5',label:'Tokyo',c:'jp',title:'Tokyo — Shinjuku Gyoen + Nakameguro + Shimokitazawa',sub:'Garden · Canal · Vintage neighbourhoods',tags:['night'],img:IMG.tokyo,
   activities:[
    {time:'Morning',timeKo:'오전',
     desc:'<a href="https://maps.google.com/?q=Shinjuku+Gyoen+Tokyo" target="_blank"><strong>Shinjuku Gyoen</strong></a> — 10-min walk from the hotel. Japan\'s most refined cherry blossom garden: Japanese, French, and English landscape sections in one park. No alcohol, so it\'s calm rather than party-like. ¥500 entry. Allow 1–1.5h. <strong>Closes 4:30pm</strong> — only need the morning here.',
     ko:'<a href="https://maps.google.com/?q=신주쿠교엔" target="_blank"><strong>신주쿠 교엔</strong></a> — 호텔에서 도보 10분. 일본, 프랑스식, 영국식 정원이 한 곳에. 음주 금지라 조용합니다. 입장료 500엔. 1~1.5시간 소요.'},
    {time:'Late Morning',timeKo:'오전 늦게',
     desc:'Subway to <a href="https://maps.google.com/?q=Nakameguro+Tokyo" target="_blank"><strong>Nakameguro</strong></a> (~20 min via Tokyu Toyoko Line from Shibuya, one stop from Shinjuku on the Yamanote). The canal is lined with hundreds of cherry trees — walk both banks slowly, stop at cafes that spill onto the canal terrace. Tokyo\'s most photogenic spring spot.',
     ko:'지하철로 <a href="https://maps.google.com/?q=나카메구로+도쿄" target="_blank"><strong>나카메구로</strong></a>로 이동(야마노테선으로 시부야에서 환승, 약 20분). 수백 그루의 벚나무가 운하를 따라 늘어서 있습니다. 도쿄에서 가장 아름다운 봄 풍경.'},
    {time:'Lunch',timeKo:'점심',
     desc:'<a href="https://maps.google.com/?q=Daikanyama+Tokyo" target="_blank"><strong>Daikanyama</strong></a> (10-min walk uphill from Nakameguro). Nakameguro\'s refined older sibling — <a href="https://maps.google.com/?q=Tsutaya+Books+Daikanyama" target="_blank"><strong>Tsutaya Books</strong></a> (three wooden pavilions, considered Japan\'s most beautiful bookshop), curated boutiques, excellent coffee. Lunch in one of the neighbourhood cafes or restaurants.',
     ko:'<a href="https://maps.google.com/?q=다이칸야마+도쿄" target="_blank"><strong>다이칸야마</strong></a>(나카메구로에서 도보 10분). <a href="https://maps.google.com/?q=츠타야+서점+다이칸야마" target="_blank"><strong>츠타야 북스</strong></a>(일본에서 가장 아름다운 서점). 카페나 레스토랑에서 점심.'},
    {time:'Afternoon',timeKo:'오후',
     desc:'<a href="https://maps.google.com/?q=Shimokitazawa+Tokyo" target="_blank"><strong>Shimokitazawa</strong></a> (~15 min on the Keio Line from Shinjuku, or taxi from Daikanyama). Tokyo\'s bohemian hub — dense lanes packed with <strong>vintage clothes shops, record stores, live music venues, tiny theatres</strong>. No chains, everything independent. Best for wandering with no plan. Great for shopping.',
     ko:'<a href="https://maps.google.com/?q=시모키타자와+도쿄" target="_blank"><strong>시모키타자와</strong></a>(신주쿠에서 게이오선으로 15분). 빈티지 의류, 레코드 가게, 라이브 공연장. 계획 없이 걷기에 최고.'},
    {time:'Evening',timeKo:'저녁',
     desc:'Dinner in Shimokitazawa (excellent standing ramen bars, tiny izakayas, live venues) or back to Shinjuku. Golden Gai for drinks if skipped last night.',
     ko:'시모키타자와에서 저녁(라멘, 이자카야, 라이브 공연) 또는 신주쿠로 귀환. 어젯밤에 빠졌다면 골든 가이에서 한 잔.'}
  ]},

  // ─ DAY 4 ─────────────────────────────────
  {n:4,date:'Mon Apr 6',label:'Tokyo',c:'jp',title:'Tokyo — Tsukiji + Akihabara + TeamLab',sub:'Market breakfast · Arcades · Digital art',tags:['night'],img:IMG.tokyo,
   activities:[
    {time:'Early Morning',timeKo:'이른 아침',
     desc:'<a href="https://maps.google.com/?q=Tsukiji+Outer+Market+Tokyo" target="_blank"><strong>Tsukiji Outer Market</strong></a> — arrive by 8–9am, stalls wind down by 10–11am. One of the great food experiences in Japan: fresh uni on rice, tamagoyaki (sweet omelette) on sticks, the best sushi breakfast of the trip from tiny stalls. No reservation, just arrive and eat.',
     ko:'<a href="https://maps.google.com/?q=츠키지외시장+도쿄" target="_blank"><strong>츠키지 외시장</strong></a> — 오전 8~9시 도착, 11시면 마감. 일본 최고의 음식 경험 중 하나: 우니 덮밥, 계란말이, 최고의 아침 스시.'},
    {time:'Mid-Morning',timeKo:'오전 중반',
     desc:'JR Chuo-Sobu Line to <a href="https://maps.google.com/?q=Akihabara+Tokyo" target="_blank"><strong>Akihabara</strong></a> (~15 min from Tsukiji direction). The electronics and anime district: 8-storey electronics shops, <a href="https://maps.google.com/?q=@home+maid+cafe+Akihabara" target="_blank">@home maid cafe</a> (fun and kitsch, ~45 min — girls in French maid costumes, themed drinks and food), arcade floors packed with <strong>claw machines</strong>. Taito Station and SEGA arcades have the best machines.',
     ko:'JR로 <a href="https://maps.google.com/?q=아키하바라+도쿄" target="_blank"><strong>아키하바라</strong></a>로 이동(약 15분). 전자 상가, <a href="https://maps.google.com/?q=앳홈카페+아키하바라" target="_blank">@home 메이드 카페</a>(약 45분, 귀엽고 재미있음), 크레인 게임 아케이드.'},
    {time:'Afternoon',timeKo:'오후',
     desc:'<a href="https://teamlab.art/e/planets/" target="_blank"><strong>TeamLab Planets</strong></a> in Toyosu (~30–40 min from Akihabara by subway). Book a <strong>2pm or 3pm slot online in advance — it sells out.</strong> ~1.5–2h experience: walk through water, immersive digital art rooms, one of the most extraordinary sensory experiences in Japan. Rick-friendly — flat throughout.',
     ko:'도요스 <a href="https://teamlab.art/e/planets/" target="_blank"><strong>팀랩 플래닛</strong></a>(아키하바라에서 지하철 30~40분). <strong>오후 2~3시 슬롯 사전 예약 필수 — 매진됩니다.</strong> 1.5~2시간 체험: 물 위를 걷고, 몰입형 디지털 아트.'},
    {time:'Evening',timeKo:'저녁',
     desc:'<a href="https://maps.google.com/?q=Kurazushi+Tokyo" target="_blank"><strong>Revolving sushi at Kurazushi</strong></a> — every 5 plates you eat earns a spin of a capsule toy dispenser. Fun for the whole group. Near any major station. Then Shinjuku for final Tokyo night.',
     ko:'<a href="https://maps.google.com/?q=쿠라스시+도쿄" target="_blank"><strong>쿠라즈시 회전 초밥</strong></a> — 5접시마다 캡슐 장난감 뽑기. 그룹 모두 즐길 수 있음. 도쿄 마지막 밤은 신주쿠에서.'}
  ]},

  // ─ DAY 5 ─────────────────────────────────
  {n:5,date:'Tue Apr 7',label:'Magome',c:'jp',title:'Travel → Magome Ryokan',sub:'Tokyo → Nagoya → Nakatsugawa → Magome',tags:['travel','night'],img:IMG.magome,
   activities:[
    {time:'Morning',timeKo:'오전',
     desc:'Hikari shinkansen Tokyo Station→Nagoya (~1h 55min, <a href="https://www.jrpass.com/" target="_blank">JR Pass</a> covered — take Hikari not Nozomi). Limited express Nagoya→Nakatsugawa (~45 min). Bus to Magome (~25–30 min, ¥800pp, runs hourly) or taxi from Nakatsugawa (~¥2,500 whole group).',
     ko:'히카리 신칸센 도쿄역→나고야(약 1시간 55분, JR패스). 특급 열차 나고야→나카츠가와(약 45분). 마고메행 버스(약 25~30분, 800엔) 또는 택시(그룹 전체 약 2,500엔).'},
    {time:'Afternoon',timeKo:'오후',
     desc:'<strong>Magome ryokan check-in by 3pm. CASH ONLY.</strong> Change into yukata, drop bags. Short stroll up Magome-juku — beautifully preserved Edo-era post town, stone-paved slope with waterwheel mills and old inns. About 20–30 min end to end.',
     ko:'<strong>오후 3시까지 마고메 료칸 체크인. 현금만 가능.</strong> 유카타로 갈아입기. 마고메주쿠 산책 — 아름다운 에도 시대 역참 마을.',
     knee:'Magome-juku is a sloped stone street — short and manageable. Take it slow, use the wooden posts.'},
    {time:'Evening',timeKo:'저녁',
     desc:'Kaiseki dinner at the ryokan (~6–7pm) — seasonal small dishes served in procession. Then the private baths. The village after dark is completely silent.',
     ko:'료칸 가이세키 저녁(오후 6~7시). 이후 전용 욕탕. 밤에는 마을이 완전히 고요해집니다.'}
  ]},

  // ─ DAY 6 ─────────────────────────────────
  {n:6,date:'Wed Apr 8',label:'Magome',c:'jp',title:'Magome — Nakasendo Hike Day',sub:'Magome → Tsumago trail · Ryokan Night 2',tags:['split','knee'],img:IMG.magome,
   split:[
    {who:'Walkers (8km, ~3h)',whoKo:'도보 참가자 (8km, 약 3시간)',whoFor:['steven','esther','rose','sally','gloria'],
     text:'The <a href="https://maps.google.com/?q=Nakasendo+Trail+Magome+Tsumago" target="_blank">Nakasendo trail</a> from Magome to Tsumago — gentle descent through cedar forest, past waterfalls and Edo-era milestones. Leave by 9am. One of the best easy hikes in Japan.',
     ko:'마고메→츠마고 <a href="https://maps.google.com/?q=나카센도+마고메+츠마고" target="_blank">나카센도 트레일</a> — 삼나무 숲, 폭포, 에도 시대 이정표를 지나는 완만한 내리막길(약 3시간). 오전 9시 출발.'},
    {who:'Rick → bus to Tsumago',whoKo:'Rick → 버스로 츠마고',whoFor:['rick'],
     text:'Direct bus or taxi Magome to <a href="https://maps.google.com/?q=Tsumago+Nagiso" target="_blank">Tsumago</a> (~20 min). Arrive before walkers, explore the flat village at your own pace.',
     ko:'마고메→<a href="https://maps.google.com/?q=츠마고+나기소" target="_blank">츠마고</a> 버스 또는 택시(약 20분). 도보 팀보다 먼저 도착해 평탄한 마을을 여유롭게 구경.',
     knee:'Tsumago village is entirely flat and easy. The bus is perfectly fine.'}
   ],
   activities:[
    {time:'Tsumago',timeKo:'츠마고',
     desc:'Rejoin in <a href="https://maps.google.com/?q=Tsumago+Nagiso" target="_blank"><strong>Tsumago</strong></a> — arguably more authentic than Magome. Lunch at a preserved Edo-era teahouse (soba or bento). Browse lacquerware, washi paper, local sake.',
     ko:'<a href="https://maps.google.com/?q=츠마고+나기소" target="_blank"><strong>츠마고</strong></a>에서 재합류. 에도 시대 찻집에서 점심. 옻칠 공예품, 화지, 지역 사케 쇼핑.'},
    {time:'Afternoon',timeKo:'오후',
     desc:'Bus back to Magome (~30 min). Rest, baths, quiet afternoon.',
     ko:'버스로 마고메 귀환(약 30분). 휴식, 욕탕 이용.'},
    {time:'Evening',timeKo:'저녁',
     desc:'Second kaiseki dinner + more baths. Both nights here are genuinely restorative.',
     ko:'두 번째 가이세키 저녁 + 욕탕. 이틀 밤 모두 진정한 회복의 시간입니다.'}
  ]},

  // ─ DAY 7 ─────────────────────────────────
  {n:7,date:'Thu Apr 9',label:'Shirakawa-go',c:'jp',title:'Travel → Shirakawa-go Farmhouse',sub:'via Nagoya + Toyama · Check in by 5pm',tags:['travel','night'],img:IMG.shirakawa,
   activities:[
    {time:'Morning',timeKo:'오전',
     desc:'Check out. Forward large bags to Kanazawa via <a href="https://www.kuronekoyamato.co.jp/en/" target="_blank"><strong>Yamato Transport</strong></a> (ask ryokan staff — ~¥2,000–2,500/bag, arrives next day). Carry overnight bag only. Train→Nagoya→Toyama.',
     ko:'체크아웃. <a href="https://www.kuronekoyamato.co.jp/en/" target="_blank"><strong>야마토 운송</strong></a>으로 큰 짐을 가나자와 호텔로 발송(직원에게 부탁, 짐당 약 2,000~2,500엔, 다음날 도착). 작은 짐만 들고 이동.'},
    {time:'Afternoon',timeKo:'오후',
     desc:'<a href="https://www.japanbusonline.com/" target="_blank"><strong>Express bus Toyama→Shirakawa-go</strong></a> (~90 min, ¥2,800pp). Only 3 buses/day — <strong>pre-booked.</strong> Check in before 5pm. <strong>CASH ONLY.</strong>',
     ko:'<a href="https://www.japanbusonline.com/" target="_blank"><strong>도야마→시라카와고 직행 버스</strong></a>(약 90분, 1인 2,800엔). 하루 3편만 — <strong>사전 예약 완료.</strong> 오후 5시 전 체크인. <strong>현금만 가능.</strong>'},
    {time:'Evening',timeKo:'저녁',
     desc:'Farmhouse dinner included — home-style mountain cooking with river fish and mountain vegetables. After dinner, all day-trippers leave by 7–8pm. The <a href="https://maps.google.com/?q=Shirakawa-go+UNESCO" target="_blank">gassho-zukuri farmhouses</a> glow from within at night. Most atmospheric night of the trip.',
     ko:'가정식 저녁 식사 포함 — 강생선과 산나물 요리. 오후 7~8시가 되면 당일 관광객이 떠나고 <a href="https://maps.google.com/?q=시라카와고+유네스코" target="_blank">갓쇼즈쿠리 초가집들</a>이 내부 불빛으로 빛납니다. 여행 중 가장 분위기 있는 밤.'}
  ]},

  // ─ DAY 8 ─────────────────────────────────
  {n:8,date:'Fri Apr 10',label:'Kanazawa',c:'jp',title:'Shirakawa-go → Kanazawa',sub:'Geisha district afternoon · Katamachi dinner',tags:['night'],img:IMG.kanazawa,
   activities:[
    {time:'Late Morning',timeKo:'오전 늦게',
     desc:'Bus to <a href="https://maps.google.com/?q=Kanazawa+Japan" target="_blank"><strong>Kanazawa</strong></a> (~1h 15min). Hotel check-in. Large bags from Magome should be waiting.',
     ko:'버스로 <a href="https://maps.google.com/?q=가나자와+일본" target="_blank"><strong>가나자와</strong></a> 이동(약 1시간 15분). 호텔 체크인. 마고메에서 보낸 짐이 도착해 있을 겁니다.'},
    {time:'Afternoon',timeKo:'오후',
     desc:'<a href="https://maps.google.com/?q=Higashi+Chaya+District+Kanazawa" target="_blank"><strong>Higashi Chaya District</strong></a> — Kanazawa\'s beautifully preserved geisha quarter. Flat walk, much less crowded than Kyoto Gion. <a href="https://maps.google.com/?q=Kaikaro+Kanazawa" target="_blank">Kaikaro teahouse</a> interior open to visitors (¥700), gold-leaf shops, matcha cafes. Also nearby: Nishi Chaya (smaller, quieter) and Kazuemachi canal district.',
     ko:'<a href="https://maps.google.com/?q=히가시차야+가나자와" target="_blank"><strong>히가시 차야 거리</strong></a> — 아름답게 보존된 게이샤 거리. 교토 기온보다 한적합니다. <a href="https://maps.google.com/?q=가이카로+가나자와" target="_blank">가이카로 찻집</a>(700엔 입장), 금박 공예품 가게, 말차 카페.'},
    {time:'Evening',timeKo:'저녁',
     desc:'Katamachi area for dinner. Look for: <em>jibu-ni</em> (duck + wheat gluten stew, Kanazawa\'s signature dish) and <em>nodoguro</em> (blackthroat sea perch — the city\'s prized fish, hard to find outside this region).',
     ko:'가타마치 지역에서 저녁. 추천: <em>지부니</em>(오리고기 조림, 가나자와 명물)와 <em>노도구로</em>(흑목가자미 — 이 지역에서만 맛볼 수 있는 생선).'}
  ]},

  // ─ DAY 9 ─────────────────────────────────
  {n:9,date:'Sat Apr 11',label:'Kanazawa',c:'jp',title:'Kanazawa — Gardens + Market + Samurai District',sub:'Kenrokuen · Omicho Market · Nagamachi',tags:['night'],img:IMG.kanazawa,
   activities:[
    {time:'Morning',timeKo:'오전',
     desc:'<a href="https://maps.google.com/?q=Kenrokuen+Garden+Kanazawa" target="_blank"><strong>Kenrokuen Garden</strong></a> — one of Japan\'s top 3 gardens. Allow 1.5–2h. Adjacent: <a href="https://maps.google.com/?q=Kanazawa+Castle+Park" target="_blank"><strong>Kanazawa Castle Park</strong></a> (free grounds). Both flat and accessible.',
     ko:'<a href="https://maps.google.com/?q=겐로쿠엔+가나자와" target="_blank"><strong>겐로쿠엔 정원</strong></a> — 일본 3대 정원 중 하나. 1.5~2시간 소요. 옆에 <a href="https://maps.google.com/?q=가나자와성+공원" target="_blank"><strong>가나자와 성 공원</strong></a>(무료 입장). 두 곳 모두 평탄.'},
    {time:'Lunch',timeKo:'점심',
     desc:'<a href="https://maps.google.com/?q=Omicho+Market+Kanazawa" target="_blank"><strong>Omicho Market</strong></a> — the city\'s covered seafood market since 1721. Fresh crab, uni, snow crab sushi, live shellfish. Go hungry. Allow 1.5–2h freely browsing and eating. One of the best meals on the entire trip.',
     ko:'<a href="https://maps.google.com/?q=오미초시장+가나자와" target="_blank"><strong>오미초 시장</strong></a> — 1721년부터 이어온 가나자와 어시장. 신선한 게, 성게, 눈 게 스시. 배고픈 상태로 가세요. 여행 전체에서 가장 맛있는 식사 중 하나.'},
    {time:'Afternoon',timeKo:'오후',
     desc:'<a href="https://maps.google.com/?q=Nagamachi+Samurai+District+Kanazawa" target="_blank"><strong>Nagamachi Samurai District</strong></a> — flat walk through preserved earthen walls, drainage channels, narrow lanes. <a href="https://maps.google.com/?q=Nomura+Clan+House+Kanazawa" target="_blank">Nomura clan house</a> (¥550): beautiful garden, lacquerware collection, sword display. Worth 30 min inside.',
     ko:'<a href="https://maps.google.com/?q=나가마치+무사거리+가나자와" target="_blank"><strong>나가마치 무사 거리</strong></a> — 흙담과 배수로가 있는 평탄한 산책로. <a href="https://maps.google.com/?q=노무라가+가나자와" target="_blank">노무라가</a>(550엔): 정원, 옻칠 컬렉션, 검 전시.'},
    {time:'Evening',timeKo:'저녁',
     desc:'Final Kanazawa evening. Katamachi for izakaya or Hakuza Bar in the Higashi Chaya area. Pack well for tomorrow\'s train to Kyoto.',
     ko:'가나자와 마지막 저녁. 가타마치 이자카야 또는 히가시 차야의 하쿠자 바. 내일 교토행 기차를 위해 잘 챙겨두세요.'}
  ]},

  // ─ DAY 10 ─────────────────────────────────
  {n:10,date:'Sun Apr 12',label:'Kyoto',c:'jp',title:'Travel → Kyoto',sub:'Kanazawa → Tsuruga → Kyoto · Settle in',tags:['travel','night'],img:IMG.kyoto,
   activities:[
    {time:'Morning',timeKo:'오전',
     desc:'Hokuriku Shinkansen Kanazawa→Tsuruga (~45 min). Transfer to Thunderbird limited express→Kyoto (~55 min). Total ~1h 45min, one transfer. Have reserved seat tickets ready. Taxi to hotel.',
     ko:'호쿠리쿠 신칸센 가나자와→쓰루가(약 45분). 썬더버드로 환승→교토(약 55분). 총 약 1시간 45분, 환승 1회.'},
    {time:'Afternoon',timeKo:'오후',
     desc:'Check in, drop bags. <a href="https://maps.google.com/?q=Kamo+River+Kyoto" target="_blank"><strong>Kamo River stroll</strong></a> — flat, cherry blossoms likely in mid-April, locals picnicking on the riverbanks. Keep it gentle — arriving Sunday in peak cherry blossom season means Kyoto is at maximum crowding.',
     ko:'체크인. <a href="https://maps.google.com/?q=가모가와+교토" target="_blank"><strong>가모가와 강변 산책</strong></a> — 평탄, 4월 중순 벚꽃 가능. 일요일 벚꽃 시즌에 교토는 매우 붐빕니다 — 여유롭게.'},
    {time:'Evening',timeKo:'저녁',
     desc:'<a href="https://maps.google.com/?q=Pontocho+Alley+Kyoto" target="_blank"><strong>Pontocho</strong></a> for dinner — narrow lantern-lit alley running parallel to the Kamo River. First Kyoto dinner. Relaxed.',
     ko:'<a href="https://maps.google.com/?q=폰토초+교토" target="_blank"><strong>폰토초</strong></a>에서 저녁 — 가모가와와 나란히 이어지는 등불 켜진 좁은 골목. 교토 첫 저녁 식사.'}
  ]},

  // ─ DAY 11 ─────────────────────────────────
  {n:11,date:'Mon Apr 13',label:'Kyoto',c:'jp',title:"Kyoto — Philosopher's Path + Higashiyama + Gion",sub:'Full day in the historic east · Geisha district evening',tags:['night'],img:IMG.kyoto,
   activities:[
    {time:'Morning',timeKo:'오전',
     desc:"<a href='https://maps.google.com/?q=Philosophers+Path+Kyoto' target='_blank'><strong>Philosopher's Path</strong></a> — start at <a href='https://maps.google.com/?q=Ginkakuji+Kyoto' target='_blank'>Ginkaku-ji (Silver Pavilion)</a> and walk south. 2km, completely flat, canal lined with cherry trees. Detour: <a href='https://maps.google.com/?q=Honen-in+Kyoto' target='_blank'>Honen-in temple</a> (walled gate, moss-covered sand mounds, almost no crowds). South end: <a href='https://maps.google.com/?q=Nanzenji+Kyoto' target='_blank'><strong>Nanzen-ji complex</strong></a> (enormous Sanmon gate + unexpected aqueduct through the grounds).",
     ko:"<a href='https://maps.google.com/?q=철학의길+교토' target='_blank'><strong>철학의 길</strong></a> — <a href='https://maps.google.com/?q=긴카쿠지+교토' target='_blank'>긴카쿠지(은각사)</a>에서 시작해 남쪽으로. 2km, 완전 평탄. 들를 곳: <a href='https://maps.google.com/?q=호넨인+교토' target='_blank'>호넨인 절</a>(조용, 거의 비어있음). 남쪽 끝: <a href='https://maps.google.com/?q=난젠지+교토' target='_blank'><strong>난젠지</strong></a>(거대한 삼문 + 경내를 가로지르는 수로).",
     knee:"Philosopher's Path is flat and paved. Easy and beautiful — perfect for Rick."},
    {time:'Midday',timeKo:'정오',
     desc:'<a href="https://maps.google.com/?q=Higashiyama+Kyoto" target="_blank"><strong>Higashiyama</strong></a> for lunch — <a href="https://maps.google.com/?q=Ninenzaka+Kyoto" target="_blank">Ninenzaka and Sannenzaka</a> stone-paved lanes, most photographed streets in Kyoto. Food: yudofu (silken tofu), matcha soft-serve, kaiseki lunch sets, skewers. Good for shopping too: ceramics, lacquerware, fans, fabric goods.',
     ko:'<a href="https://maps.google.com/?q=히가시야마+교토" target="_blank"><strong>히가시야마</strong></a>에서 점심 — <a href="https://maps.google.com/?q=니넨자카+교토" target="_blank">니넨자카·산넨자카</a> 돌길. 교토에서 가장 많이 사진 찍히는 거리. 쇼핑도 좋음: 도자기, 옻칠, 부채, 직물.'},
    {time:'Afternoon',timeKo:'오후',
     desc:'<strong>Optional:</strong> <a href="https://maps.google.com/?q=Fushimi+Inari+Shrine+Kyoto" target="_blank"><strong>Fushimi Inari</strong></a> (Keihan Line south, ~10 min) — thousands of vermilion torii gates. Lower section is flat and spectacular on its own (~20 min). Or: browse Higashiyama more, find a cafe, rest before the evening.',
     ko:'<strong>선택 사항:</strong> <a href="https://maps.google.com/?q=후시미이나리+교토" target="_blank"><strong>후시미 이나리</strong></a>(게이한선 남쪽, 약 10분) — 수천 개의 주홍색 도리이. 또는: 히가시야마 쇼핑 더 즐기거나 저녁 전 휴식.',
     knee:'Rick does flat lower section only (~20 min). Skip if tired — already a full day.'},
    {time:'Evening',timeKo:'저녁',
     desc:'<a href="https://maps.google.com/?q=Gion+Kyoto" target="_blank"><strong>Gion</strong></a> — best geisha-spotting time is 5–7pm on <a href="https://maps.google.com/?q=Hanamikoji+Street+Kyoto" target="_blank"><strong>Hanamikoji Street</strong></a>. Also: <a href="https://maps.google.com/?q=Shinbashi+Dori+Kyoto" target="_blank">Shinbashi-dori canal</a> (willow trees, most beautiful street in Japan), antique shops on <a href="https://maps.google.com/?q=Shinmonzen+Street+Kyoto" target="_blank">Shinmonzen Street</a>. Dinner in Gion or back to Pontocho.',
     ko:'<a href="https://maps.google.com/?q=기온+교토" target="_blank"><strong>기온</strong></a> — <a href="https://maps.google.com/?q=하나미코지+교토" target="_blank"><strong>하나미코지 거리</strong></a> 오후 5~7시 게이샤 목격 최적 시간. <a href="https://maps.google.com/?q=신바시도리+교토" target="_blank">신바시도리 운하</a>(버드나무, 교토 최고의 거리). 기온 또는 폰토초에서 저녁.'}
  ]},

  // ─ DAY 12 ─────────────────────────────────
  {n:12,date:'Tue Apr 14',label:'Kyoto',c:'jp',title:'Nishiki Market + Kinkaku-ji · Rick & Rose: Golf',sub:'Split day · Golden Pavilion · Michelin dinner',tags:['split','golf','splurge'],img:IMG.kyoto,
   split:[
    {who:'Rick + Rose 🏌️',whoKo:'Rick + Rose 🏌️',whoFor:['rick','rose'],cls:'golf',
     text:'<a href="https://maps.google.com/?q=Seta+Golf+Course+Otsu+Shiga" target="_blank"><strong>Seta Golf Course North</strong></a> (Shiga, ~30 min from Kyoto). Caddied. Hosted USLPGA Tour 14 times. Green fee ~¥20,000–30,000pp. Book via hotel concierge — Japanese courses rarely take English bookings directly.',
     ko:'<a href="https://maps.google.com/?q=세타골프장+오쓰+시가" target="_blank"><strong>세타 골프장 노스 코스</strong></a>(시가현, 교토에서 약 30분). 캐디 포함. 그린피 약 20,000~30,000엔. 호텔 컨시어지를 통해 예약.'},
    {who:'Non-golf group',whoKo:'골프 미참여 그룹',whoFor:['steven','esther','sally','gloria'],
     text:'<a href="https://maps.google.com/?q=Nishiki+Market+Kyoto" target="_blank"><strong>Nishiki Market</strong></a> (400-year-old covered food market — pickles, tofu skin, fresh skewers, sake tastings, matcha sweets, 1.5–2h) then taxi/bus to <a href="https://maps.google.com/?q=Kinkakuji+Golden+Pavilion+Kyoto" target="_blank"><strong>Kinkaku-ji (Golden Pavilion)</strong></a> — gold-leaf covered temple on a mirror pond, one of the most iconic images in Japan (~45 min walk-through). Go early before the crowds build.',
     ko:'<a href="https://maps.google.com/?q=니시키시장+교토" target="_blank"><strong>니시키 시장</strong></a>(400년 역사 실내 시장, 절임 반찬·두부피·꼬치·사케 시음·말차 과자, 1.5~2시간) 후 <a href="https://maps.google.com/?q=킨카쿠지+교토" target="_blank"><strong>킨카쿠지(금각사)</strong></a>(금박 사원, 거울 연못 반영, 약 45분).'}
   ],
   activities:[
    {time:'Afternoon',timeKo:'오후',
     desc:'Rest and prepare for the evening. Smart-casual dress for dinner — no trainers, no shorts.',
     ko:'저녁 준비를 위해 휴식. 스마트 캐주얼 복장 — 운동화와 반바지는 안 됩니다.'},
    {time:'Evening 6pm',timeKo:'저녁 6시',
     desc:'⭐ <strong>Michelin kaiseki dinner.</strong> Private room for all 6. 8–12 courses, allow 2.5–3h. Book via <a href="https://www.omakaseje.com/" target="_blank"><strong>omakaseje.com</strong></a> or <a href="https://www.pocketconcierge.jp/en/" target="_blank">pocketconcierge.jp</a> — <strong>do this immediately.</strong> Top picks: <a href="https://maps.google.com/?q=Kyoyamato+Kyoto" target="_blank">Kyoyamato</a> (historic ryotei since 1877), <a href="https://maps.google.com/?q=Noguchi+Tsunagu+Kyoto" target="_blank">Noguchi Tsunagu</a> (1★, kappo-style), <a href="https://maps.google.com/?q=Miyawaki+Kyoto" target="_blank">Miyawaki</a> (1★, omakase).',
     ko:'⭐ <strong>미슐랭 가이세키 저녁.</strong> 6인 전용 룸. 8~12코스, 2.5~3시간. <a href="https://www.omakaseje.com/" target="_blank"><strong>omakaseje.com</strong></a> 또는 <a href="https://www.pocketconcierge.jp/en/" target="_blank">pocketconcierge.jp</a>에서 <strong>즉시 예약.</strong>'}
  ]},

  // ─ DAY 13 ─────────────────────────────────
  {n:13,date:'Wed Apr 15',label:'Kyoto',c:'jp',title:'Arashiyama + ⭐ Michelin Dinner Evening',sub:'Bamboo grove · Bridge · Stroll garden · Big dinner',tags:['splurge','night'],img:IMG.kyoto,
   activities:[
    {time:'Morning',timeKo:'오전',
     desc:'Bus or taxi to <a href="https://maps.google.com/?q=Arashiyama+Bamboo+Grove+Kyoto" target="_blank"><strong>Arashiyama</strong></a> (~30 min from central Kyoto). Go early — it fills up by 10am. Three things right next to each other: <strong>bamboo grove</strong> (flat, dramatic 10-min walk through towering green columns — one of the most photographed spots in Japan), <a href="https://maps.google.com/?q=Togetsukyo+Bridge+Arashiyama" target="_blank"><strong>Togetsukyo bridge</strong></a> over the Oi River (wide, scenic, beautiful in spring light), and <a href="https://maps.google.com/?q=Tenryuji+Temple+Arashiyama" target="_blank"><strong>Tenryu-ji stroll garden</strong></a> (¥500, walk through rather than sit-down, cherry blossoms and central pond). Allow 2–3h total. Craft shops and food along the main street.',
     ko:'버스 또는 택시로 <a href="https://maps.google.com/?q=아라시야마+대나무숲+교토" target="_blank"><strong>아라시야마</strong></a>(약 30분). 일찍 가세요 — 오전 10시면 붐빕니다. 세 곳이 나란히: <strong>대나무 숲</strong>(평탄, 10분 걷기), <a href="https://maps.google.com/?q=토게츠교+아라시야마" target="_blank"><strong>토게츠교</strong></a>(넓고 아름다운 다리), <a href="https://maps.google.com/?q=텐류지+아라시야마" target="_blank"><strong>텐류지 정원</strong></a>(500엔, 걸으며 감상). 총 2~3시간.',
     knee:'Bamboo grove, bridge, and Tenryu-ji garden are all flat. Easy for Rick.'},
    {time:'Afternoon',timeKo:'오후',
     desc:'Return to central Kyoto. Rest, spa, or wander Gion at leisure before the big dinner.',
     ko:'교토 중심부로 귀환. 저녁 큰 식사 전에 휴식, 스파, 또는 기온 산책.'},
    {time:'Evening',timeKo:'저녁',
     desc:'⭐ <strong>Michelin kaiseki dinner</strong> — the big night. Private room, full group, allow the whole evening. Smart-casual.',
     ko:'⭐ <strong>미슐랭 가이세키 저녁</strong> — 최고의 밤. 전용 룸, 전원 참석, 저녁 전체를 여유롭게.'}
  ]},

  // ─ DAY 14 ─────────────────────────────────
  {n:14,date:'Thu Apr 16',label:'Hiroshima',c:'jp',title:'Travel → Hiroshima',sub:'Peace Park + Museum · Okonomiyaki night',tags:['travel','night'],img:IMG.hiroshima,
   activities:[
    {time:'Morning',timeKo:'오전',
     desc:'Hikari shinkansen Kyoto→Hiroshima (~1h 44min, JR Pass — <strong>do not take Nozomi</strong>). Hotel check-in.',
     ko:'히카리 신칸센 교토→히로시마(약 1시간 44분, JR패스 — <strong>노조미는 타지 마세요</strong>). 호텔 체크인.'},
    {time:'Afternoon',timeKo:'오후',
     desc:'<a href="https://maps.google.com/?q=Hiroshima+Peace+Memorial+Park" target="_blank"><strong>Hiroshima Peace Memorial Park</strong></a> — flat, spacious, profound. Allow 2–3h. The <a href="https://maps.google.com/?q=Atomic+Bomb+Dome+Hiroshima" target="_blank">A-Bomb Dome (Genbaku Domu)</a> is visible from the river at all hours. <a href="https://maps.google.com/?q=Hiroshima+Peace+Memorial+Museum" target="_blank">Peace Memorial Museum</a> (allow 1.5h — harrowing and essential, group goes at their own pace, no obligation to do every floor). <a href="https://maps.google.com/?q=Children+Peace+Monument+Hiroshima" target="_blank">Children\'s Peace Monument</a> with origami cranes.',
     ko:'<a href="https://maps.google.com/?q=히로시마평화기념공원" target="_blank"><strong>히로시마 평화 기념 공원</strong></a> — 평탄, 넓고, 깊은 감동. 2~3시간 소요. <a href="https://maps.google.com/?q=원폭돔+히로시마" target="_blank">원폭 돔</a>, <a href="https://maps.google.com/?q=히로시마평화기념관" target="_blank">평화 기념 박물관</a>(1.5시간, 각자 페이스에 맞게), <a href="https://maps.google.com/?q=어린이평화기념비+히로시마" target="_blank">어린이 평화 기념비</a>.'},
    {time:'Evening',timeKo:'저녁',
     desc:'<a href="https://maps.google.com/?q=Okonomi-mura+Hiroshima" target="_blank"><strong>Hiroshima-style okonomiyaki at Okonomi-mura</strong></a> — 3-floor building of individual stalls. Hiroshima style layers noodles inside the pancake. Sit at a counter, watch the cook. ~¥1,200–1,500pp. Short walk after — the <a href="https://maps.google.com/?q=Atomic+Bomb+Dome+Hiroshima" target="_blank">A-Bomb Dome is illuminated at night</a>.',
     ko:'<a href="https://maps.google.com/?q=오코노미무라+히로시마" target="_blank"><strong>오코노미무라 히로시마식 오코노미야키</strong></a> — 3층 포장마차 건물. 카운터에 앉아 요리사가 만드는 것을 구경. 1인당 약 1,200~1,500엔.'}
  ]},

  // ─ DAY 15 ─────────────────────────────────
  {n:15,date:'Fri Apr 17',label:'Miyajima',c:'jp',title:'Miyajima Island Day Trip',sub:'Floating torii · Oysters · Ropeway optional',tags:['split','night'],img:IMG.miyajima,
   activities:[
    {time:'Morning',timeKo:'오전',
     desc:'JR to <a href="https://maps.google.com/?q=Miyajimaguchi+Station" target="_blank">Miyajimaguchi</a> (~30 min, JR Pass) + JR ferry (~10 min, JR Pass included). Arrive before 9am — busy by 10am. Check tide table before going: <a href="https://www.miyajima.or.jp/english/information/info_tide.html" target="_blank">high tide</a> = floating torii, low tide = walk to its base. Both worth seeing.',
     ko:'JR로 <a href="https://maps.google.com/?q=미야지마구치역" target="_blank">미야지마구치</a>(약 30분) + JR 페리(약 10분). 오전 9시 전 도착 목표. 가기 전 <a href="https://www.miyajima.or.jp/english/information/info_tide.html" target="_blank">조석표</a> 확인: 만조 = 물 위에 뜬 도리이.'},
    {time:'Midday',timeKo:'정오',
     desc:'<a href="https://maps.google.com/?q=Itsukushima+Shrine+Miyajima" target="_blank"><strong>Itsukushima Shrine</strong></a> + floating torii. Lunch: <strong>fresh grilled oysters</strong> from a waterfront stall (Hiroshima Prefecture produces some of Japan\'s finest) and <strong>anago-meshi</strong> (conger eel rice — the island\'s signature dish). Momiji manju (maple-leaf red bean cakes) for dessert. <strong>Note: deer roam freely and will try to eat your map, bag, anything.</strong>',
     ko:'<a href="https://maps.google.com/?q=이쓰쿠시마신사+미야지마" target="_blank"><strong>이쓰쿠시마 신사</strong></a> + 물 위의 도리이. 점심: 해변에서 <strong>신선한 구운 굴</strong>과 <strong>아나고메시</strong>(붕장어 밥). 모미지 만주. <strong>주의: 사슴이 자유롭게 돌아다니며 지도, 가방 등 뭐든 먹으려 합니다.</strong>',
     knee:'Shrine waterfront and main village are entirely flat. Easy for Rick.'},
    {time:'Afternoon',timeKo:'오후',
     desc:'<strong>Split:</strong> Active → <a href="https://maps.google.com/?q=Miyajima+Ropeway" target="_blank">ropeway to Mt. Misen</a> (~¥2,000pp, panoramic Inland Sea views). Relaxed → waterfront cafes, <a href="https://maps.google.com/?q=Senjokaku+Pavilion+Miyajima" target="_blank">Senjokaku Pavilion</a> (enormous wooden hall, free), souvenir shopping.',
     ko:'<strong>선택:</strong> 활동적 → <a href="https://maps.google.com/?q=미야지마+로프웨이" target="_blank">미센산 로프웨이</a>(약 2,000엔, 세토내해 전망). 여유로운 → 해변 카페, <a href="https://maps.google.com/?q=센조카쿠+미야지마" target="_blank">센조카쿠 누각</a>(무료), 기념품 쇼핑.',
     knee:'Rick stays at the shrine and waterfront level — entirely flat.'},
    {time:'Evening',timeKo:'저녁',
     desc:'Return to Hiroshima by 5–6pm. <strong>Farewell Japan dinner</strong> — okonomiyaki again or a nicer sit-down restaurant. Pack tonight for the Korea flight tomorrow.',
     ko:'오후 5~6시 히로시마로 귀환. <strong>일본 마지막 저녁 식사</strong> — 오코노미야키 또는 고급 레스토랑. 내일 한국 비행을 위해 짐을 챙기세요.'}
  ]},

  // ─ DAY 16 ─────────────────────────────────
  {n:16,date:'Sat Apr 18',label:'Seoul',c:'jp',title:'Hiroshima → Seoul',sub:'Japan ends · Korea begins · Gloria at ICN',tags:['travel'],img:IMG.seoul,
   activities:[
    {time:'Morning',timeKo:'오전',
     desc:'Check out. Ship heavy bags home via post office if needed. Travel light to Korea.',
     ko:'체크아웃. 필요하면 우체국에서 무거운 짐을 집으로. 한국에는 가볍게.'},
    {time:'Flight',timeKo:'비행',
     desc:'<a href="https://www.jejuair.net/en/main.do" target="_blank"><strong>Jeju Air HIJ→ICN</strong></a> direct, ~1h 50min, ~$80–150pp. Same timezone (UTC+9). Gloria meets at ICN.',
     ko:'<a href="https://www.jejuair.net/ko/main.do" target="_blank"><strong>제주항공 히로시마(HIJ)→인천(ICN)</strong></a> 직항, 약 1시간 50분. 인천 공항에서 글로리아가 기다립니다!',
     gloriaNote:'Gloria: 인천 공항에서 그룹을 만나거나 직접 합류하세요. 미리 호텔 주소 공유해 주세요.'},
    {time:'Evening',timeKo:'저녁',
     desc:'Arrive Seoul. <a href="https://www.arex.or.kr/en/" target="_blank"><strong>AREX all-stop train</strong></a> to city centre (~51 min, ~₩4,150 with T-money). Buy Korean T-money cards at airport convenience store. Hotel in <a href="https://maps.google.com/?q=Myeongdong+Seoul" target="_blank">Myeongdong</a> or <a href="https://maps.google.com/?q=Hongdae+Seoul" target="_blank">Hongdae</a>. Welcome-to-Korea dinner: Korean BBQ — Gloria picks.',
     ko:'서울 도착. <a href="https://www.arex.or.kr/ko/" target="_blank"><strong>AREX 일반열차</strong></a>로 시내(약 51분, T-머니 약 4,150원). 공항 편의점에서 T-머니 구입. 첫날 저녁은 한국 BBQ — 글로리아가 식당을 고릅니다!'}
  ]},

  // ─ DAY 17 ─────────────────────────────────
  {n:17,date:'Sun Apr 19',label:'Seoul',c:'kr',title:'Seoul — Palaces + Korean BBQ',sub:'Gyeongbokgung · Insadong · N Seoul Tower · BBQ dinner',tags:['night','korea'],img:IMG.seoul,
   activities:[
    {time:'Morning',timeKo:'오전',
     desc:'<a href="https://maps.google.com/?q=Gyeongbokgung+Palace+Seoul" target="_blank"><strong>Gyeongbokgung Palace</strong></a> — grandest of Seoul\'s five royal palaces (1395). Changing of the guard at 10am + 2pm. Free entry with rented hanbok (~₩20,000/2h at east gate). All flat, paved, spacious.',
     ko:'<a href="https://maps.google.com/?q=경복궁+서울" target="_blank"><strong>경복궁</strong></a> — 서울 5대 궁궐 중 가장 웅장(1395년). 수문장 교대식 오전 10시 + 오후 2시. 한복 대여 시 무료 입장(동문, 2시간 약 20,000원).',
     knee:'Gyeongbokgung is flat and very accessible. One of the best days on the trip for Rick.'},
    {time:'Lunch',timeKo:'점심',
     desc:'<a href="https://maps.google.com/?q=Insadong+Seoul" target="_blank"><strong>Insadong</strong></a> — traditional craft neighbourhood. <a href="https://maps.google.com/?q=Ssamziegil+Insadong" target="_blank">Ssamziegil market</a> (indie boutiques, food stalls), traditional tea houses, street food: hotteok (sweet pancakes), bungeoppang (fish-shaped pastry).',
     ko:'<a href="https://maps.google.com/?q=인사동+서울" target="_blank"><strong>인사동</strong></a> — 전통 공예 동네. <a href="https://maps.google.com/?q=쌈지길+인사동" target="_blank">쌈지길</a>(독립 부티크, 음식 포장마차), 찻집, 호떡, 붕어빵.',
     gloriaNote:'Gloria: 인사동에서 좋아하는 숨겨진 명소 소개해 주세요! 인근 추천 맛집도 부탁드려요.'},
    {time:'Afternoon',timeKo:'오후',
     desc:'<a href="https://maps.google.com/?q=N+Seoul+Tower+Namsan" target="_blank"><strong>N Seoul Tower</strong></a> — cable car up from Myeongdong (no walking required, ~₩9,000 return). Panoramic city views. Gloria leads.',
     ko:'<a href="https://maps.google.com/?q=N서울타워+남산" target="_blank"><strong>N서울타워</strong></a> — 명동에서 케이블카(도보 불필요, 왕복 약 9,000원). 전망. 글로리아가 이끕니다.'},
    {time:'Evening',timeKo:'저녁',
     desc:'<strong>Korean BBQ dinner</strong> — galbi (beef short ribs) and samgyeopsal (pork belly), group grills their own over charcoal. Banchan side dishes keep coming (refillable, free). Mapo or Hongdae for authentic spots.',
     ko:'<strong>한국 BBQ 저녁</strong> — 갈비와 삼겹살, 숯불에 직접 구워 먹기. 반찬은 계속 리필(무료). 마포 또는 홍대 지역 맛집.'}
  ]},

  // ─ DAY 18 ─────────────────────────────────
  {n:18,date:'Mon Apr 20',label:'Seoul',c:'kr',title:'Seoul — Markets + Han River',sub:"Gwangjang Market · Gloria's day to lead",tags:['night','korea'],img:IMG.gwangjang,
   activities:[
    {time:'Morning',timeKo:'오전',
     desc:'<a href="https://maps.google.com/?q=Gwangjang+Market+Seoul" target="_blank"><strong>Gwangjang Market</strong></a> — Seoul\'s oldest traditional market (1905). Must try: <em>bindaetteok</em> (crispy mung bean pancakes), <em>mayak gimbap</em> (tiny addictive rice rolls), <em>yukhoe</em> (raw beef tartare with pear and egg yolk).',
     ko:'<a href="https://maps.google.com/?q=광장시장+서울" target="_blank"><strong>광장시장</strong></a> — 서울 최고령 전통 시장(1905년). 필수: <em>빈대떡</em>, <em>마약 김밥</em>, <em>육회</em>.',
     gloriaNote:'Gloria: 광장시장에서 좋아하는 음식 소개해 주세요! 맛집 추천 부탁드려요.'},
    {time:'Afternoon',timeKo:'오후',
     desc:'<strong>Gloria leads.</strong> She shows everyone somewhere she loves in Seoul. Options: <a href="https://maps.google.com/?q=Hangang+Park+Seoul" target="_blank">Han River Park</a> by hire bike (flat, ~₩3,000/h) or <a href="https://maps.google.com/?q=Myeongdong+Seoul" target="_blank">Myeongdong</a> for K-beauty shopping.',
     ko:'<strong>글로리아가 이끄는 시간!</strong> 자신이 좋아하는 서울의 명소를 소개해 주세요. 선택: <a href="https://maps.google.com/?q=한강공원+서울" target="_blank">한강 공원</a> 자전거(평탄, 시간당 약 3,000원) 또는 <a href="https://maps.google.com/?q=명동+서울" target="_blank">명동</a> K-뷰티 쇼핑.'},
    {time:'Evening',timeKo:'저녁',
     desc:'<a href="https://maps.google.com/?q=Itaewon+Seoul" target="_blank"><strong>Itaewon</strong></a> or <a href="https://maps.google.com/?q=Gangnam+Seoul" target="_blank"><strong>Gangnam</strong></a> for dinner. Optional: <a href="https://maps.google.com/?q=Noraebang+Seoul" target="_blank"><strong>noraebang</strong></a> (private karaoke room, ~₩15,000–20,000pp/h) — great for a group of 6, strongly recommended.',
     ko:'저녁은 <a href="https://maps.google.com/?q=이태원+서울" target="_blank"><strong>이태원</strong></a> 또는 <a href="https://maps.google.com/?q=강남+서울" target="_blank"><strong>강남</strong></a>에서. 선택: <a href="https://maps.google.com/?q=노래방+서울" target="_blank"><strong>노래방</strong></a>(전용 룸, 시간당 약 15,000~20,000원) — 강력 추천.'}
  ]},

  // ─ DAY 19 ─────────────────────────────────
  {n:19,date:'Tue Apr 21',label:'Seoul',c:'kr',title:'Seoul — DMZ or Busan or Free Day',sub:'Final full day · Farewell dinner · Gloria picks',tags:['split','korea'],img:IMG.dmz,
   split:[
    {who:'Option A: DMZ',whoKo:'선택 A: DMZ',whoFor:['all'],
     text:'<a href="https://maps.google.com/?q=DMZ+South+Korea" target="_blank"><strong>DMZ day tour</strong></a> — North Korean border, ~1h from Seoul. Guided tour (<a href="https://www.klook.com/" target="_blank">Klook</a>, ~$60–80pp). 3rd Tunnel, Dora Observatory, Dorasan Station. Deeply moving after Hiroshima.',
     ko:'<a href="https://maps.google.com/?q=비무장지대+한국" target="_blank"><strong>DMZ 당일 투어</strong></a> — 북한 경계선, 서울에서 약 1시간. 가이드 투어(<a href="https://www.klook.com/" target="_blank">클룩</a>, 약 $60~80). 히로시마 방문 후 더욱 깊은 감동.'},
    {who:'Option B: Busan',whoKo:'선택 B: 부산',whoFor:['all'],
     text:'<a href="https://www.letskorail.com/" target="_blank"><strong>KTX</strong></a> to Busan (~2h 30min, ~₩60,000). Gamcheon Culture Village + Jagalchi Fish Market + Haeundae Beach. Return evening KTX.',
     ko:'<a href="https://www.letskorail.com/" target="_blank"><strong>KTX</strong></a>로 부산(약 2시간 30분, 약 60,000원). 감천 문화마을 + 자갈치 시장 + 해운대.'},
    {who:'Option C: Free Seoul',whoKo:'선택 C: 자유 서울',whoFor:['all'],
     text:'Hongdae creative district or a morning <a href="https://maps.google.com/?q=Jjimjilbang+Seoul" target="_blank"><strong>jjimjilbang</strong></a> (Korean bathhouse). Gloria leads.',
     ko:'홍대 창작 거리 또는 오전에 <a href="https://maps.google.com/?q=찜질방+서울" target="_blank"><strong>찜질방</strong></a>. 글로리아가 이끕니다.',
     knee:'Jjimjilbang heated floor rooms are excellent for bad knees. Ideal for Rick.',
     gloriaNote:'Gloria: 좋아하는 서울 명소로 안내해 주세요.'}
   ],
   activities:[
    {time:'Evening',timeKo:'저녁',
     desc:'Farewell dinner — <strong>Gloria picks.</strong> Hanjeonsik (Korean full-course with 20+ dishes), Gangnam rooftop, or a personal favourite. Last group dinner of the whole 20-night trip.',
     ko:'작별 저녁 — <strong>글로리아가 선택합니다.</strong> 한정식(20가지 이상 반찬), 강남 루프탑, 또는 글로리아 최애 맛집. 20박 여행의 마지막 그룹 식사.'}
  ]},

  // ─ DAY 20 ─────────────────────────────────
  {n:20,date:'Wed Apr 22',label:'Depart',c:'kr',title:'Depart Seoul — Everyone Flies Home',sub:'AREX to Incheon · Allow 3h for international flights',tags:['travel'],img:IMG.seoul,
   activities:[
    {time:'Morning',timeKo:'오전',
     desc:'Check out. <a href="https://www.arex.or.kr/en/" target="_blank"><strong>AREX Express</strong></a> to Incheon Airport (43 min from Seoul Station, ~₩9,500). Allow 3h before international departure.',
     ko:'체크아웃. <a href="https://www.arex.or.kr/ko/" target="_blank"><strong>AREX 직통열차</strong></a>로 인천 공항(서울역에서 43분, 약 9,500원). 국제선 출발 3시간 전 도착.'},
    {time:'Steven + Esther',timeKo:'스티븐 + 에스더',
     desc:'ICN → SFO direct. Korean Air, Asiana, or United. ~10h.',
     ko:'인천(ICN) → 샌프란시스코(SFO) 직항. 대한항공, 아시아나, 또는 유나이티드. 약 10시간.'},
    {time:'Rick, Rose, Sally',timeKo:'Rick, Rose, Sally',
     desc:'ICN → YWG via Vancouver (Air Canada). ~17–19h total.',
     ko:'인천(ICN) → 위니펙(YWG) 밴쿠버 경유(에어캐나다). 총 약 17~19시간.'},
    {time:'Gloria',timeKo:'글로리아',
     desc:'Already home in Seoul! 🎉 The city is hers.',
     ko:'글로리아는 이미 집에 있습니다! 🎉 서울은 당신의 도시입니다. 모두 수고했어요!'}
  ]}
];

/* ─── PACKING ─────────────────────────────────────────────────── */
/* Each category: { id, icon, name, items[] }
   Item: { id, label, tags[], note }
   Tags: 'essential', 'knee', 'golf', 'gloria', 'korea'
   ---------------------------------------------------------------- */
/* ─── PACKING DATA ─────────────────────────────────── */
var PACK_CATS=[
  {id:'docs',icon:'📄',name:'Documents & Money',items:[
    {id:'p1',label:'Passport (valid 6+ months past Apr 21)',tags:['essential'],note:'Check expiry now'},
    {id:'p2',label:'JR Pass (printed or on phone)',tags:['essential'],note:'Activate in Tokyo — jrpass.com'},
    {id:'p3',label:'Travel insurance cards',tags:['essential']},
    {id:'p4',label:'Yen cash — ¥80,000+ per person',tags:['essential'],note:'ATMs unreliable in rural Magome + Shirakawa-go'},
    {id:'p5',label:'Korean Won — ₩100,000+ per person',tags:['korea'],note:'For arrival day, ATMs everywhere in Seoul'},
    {id:'p6',label:'Credit cards (Visa/Mastercard)',tags:[]},
    {id:'p7',label:'Emergency contacts written down',tags:['essential']}
  ]},
  {id:'clothes',icon:'👕',name:'Clothing',items:[
    {id:'c1',label:'Light jacket or fleece',tags:[],note:'Spring nights are cool (8–14°C in mountains)'},
    {id:'c2',label:'Slip-on shoes',tags:['essential'],note:'Removing shoes constantly at temples — essential'},
    {id:'c3',label:'Comfortable walking shoes',tags:['essential'],note:'Expect 6–10km on active days'},
    {id:'c4',label:'Smart-casual outfit for Michelin dinner (Apr 14)',tags:['essential'],note:'No trainers or shorts'},
    {id:'c5',label:'Clothes you can kneel in for tea ceremony',tags:['essential'],note:'Apr 13 — no tight trousers'},
    {id:'c6',label:'Lightweight rain layer / compact umbrella',tags:[],note:'April has occasional showers'},
    {id:'c7',label:'Warm layers for Magome + Shirakawa-go',tags:[],note:'Mountain areas, Apr 6–9, can be 8–10°C at night'},
    {id:'c8',label:'Comfortable loose clothes for jjimjilbang (Seoul)',tags:['korea'],note:'Provided at bathhouse but bring underwear'},
    {id:'c9',label:'Golf attire — collared shirt + trousers',tags:['golf'],note:'Rick + Rose only — Apr 13 Seta Golf Course'}
  ]},
  {id:'tech',icon:'📱',name:'Tech & Transport',items:[
    {id:'t1',label:'Phone + charger',tags:['essential']},
    {id:'t2',label:'Universal adapter (Japan uses Type A)',tags:['essential']},
    {id:'t3',label:'Portable battery / powerbank',tags:[],note:'Long days out, stations have few plugs'},
    {id:'t4',label:'Download Google Maps offline — Japan + Seoul',tags:['essential'],note:'Works without data in Japan'},
    {id:'t5',label:'Download this app to home screen (works offline)',tags:['essential']},
    {id:'t6',label:'Japan eSIM or pocket WiFi — book in advance',tags:[],note:'Pocket WiFi: pick up at airport'},
    {id:'t7',label:'Korea eSIM or T-money card',tags:['korea'],note:'T-money for Seoul subway + buses'}
  ]},
  {id:'health',icon:'💊',name:'Health & Comfort',items:[
    {id:'h1',label:'Prescribed medications (full supply)',tags:['essential']},
    {id:'h2',label:'Knee support brace or bandage',tags:['knee'],note:'Rick — walking surfaces are varied'},
    {id:'h3',label:'Anti-inflammatory tablets (ibuprofen etc)',tags:['knee'],note:'Rick — long days on feet'},
    {id:'h4',label:'Blister plasters',tags:[],note:'New shoes + stone streets'},
    {id:'h5',label:'Hand sanitiser + tissues',tags:[],note:'Public toilets sometimes lack paper'},
    {id:'h6',label:'Travel sickness tablets if needed',tags:[],note:'Mountain bus roads can be winding'},
    {id:'h7',label:'Sunscreen',tags:[],note:'April sun can be strong, especially Miyajima'}
  ]},
  {id:'etiquette',icon:'🎌',name:'Japan Etiquette Reminders',items:[
    {id:'e1',label:'IC card charged (Suica — collect at airport)',tags:['essential'],note:'Works on all Tokyo trains + convenience stores'},
    {id:'e2',label:'No eating while walking in Japan',tags:[]},
    {id:'e3',label:'Cash for rural stops (Magome, Shirakawa-go)',tags:['essential'],note:'ATMs close at night — get cash before leaving cities'},
    {id:'e4',label:'Luggage forwarding booked for rural legs',tags:[],note:'Yamato Transport — book at hotel desk or conbini'},
    {id:'e5',label:'Small towel for onsen/baths',tags:[],note:'Ryokans provide yukata but small towels handy'},
    {id:'e6',label:'Quiet voice on trains',tags:[]},
    {id:'e7',label:'No tipping anywhere in Japan or Korea',tags:[]}
  ]},
  {id:'gloria',icon:'🇰🇷',name:'Gloria — Korea Extras',items:[
    {id:'g1',label:'Korean ID / passport',tags:['gloria','essential']},
    {id:'g2',label:'Group WhatsApp set up before Apr 3',tags:['gloria'],note:'Help coordinate arrival at Tokyo hotel'},
    {id:'g3',label:'Restaurant shortlist for Apr 19 afternoon lead',tags:['gloria'],note:'Show the group somewhere you love in Seoul'},
    {id:'g4',label:'Farewell dinner reservation (Apr 20)',tags:['gloria'],note:'Gloria picks — book in advance if upscale'},
    {id:'g5',label:'T-money card topped up for group Seoul days',tags:['gloria','korea']}
  ]}
];
