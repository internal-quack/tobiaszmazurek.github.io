/* =========================================================================
   Tobiasz Mazurek — portfolio
   Shared behavior for index.html and every portfolio/<slug>/index.html page.
   ========================================================================= */

/* ---------------------------------------------------------- mobile menu */
(function(){
  const btn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  if(!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));
})();

/* ------------------------------------------------------- PL/EN language */
(function(){
  const EN = {
    'nav-start':'Home','nav-projects':'Projects','nav-about':'About','nav-career':'Career',
    'nav-contact':'Contact','nav-productions':'Productions','nav-tools':'Tools','nav-games':'Games',
    'nav-software':'Software','nav-roadmap':'Roadmap','back-to-projects':'← All projects',
    'filter-all':'All','projects-h2':'12 projects — from game jams to Steam',
    'show-more':'Show all projects',
    'projects-page-h1':'All<br>projects.',
    'projects-page-sub':'12 projects — from game jams to titles shipped on Steam.',

    'cap-kicker':'Freelance, scoped to the project',
    'cap-h2':'How I can help.',
    'cap-lead':'I can lead the multiplayer layer, join a team for the length of a project, or take full ownership of a build.',
    'cap-1-h':'Networking systems',
    'cap-1-p':'I add multiplayer to a new or existing game — Netcode for GameObjects, PurrNet, Photon, FishNet, Unity Game Services.',
    'cap-2-h':'Editor tooling',
    'cap-2-p':'Property Drawers, Interface Drawers, Source Generators, IL Weaving — tools that genuinely speed up the whole team.',
    'cap-3-h':'Full game development',
    'cap-3-p':'From first prototype to a Steam release — gameplay, systems, optimization, and platform requirements.',
    'cap-4-h':'Joining a team',
    'cap-4-p':'I’ve worked solo, in small crews, and in a 13-person production team — I get up to speed fast.',
    'about-page-kicker':'About','about-page-h1':'Not just <em>code</em>.',
    'about-page-sub':'What drives me at work, how I spend my free time, and what I play when I’m not coding.',

    'side-status-label':'Status','side-focus-label':'Focus','side-work-label':'Scope of work',
    'side-steam-btn':'View on Steam','next-project-eyebrow':'Next project',

    'side-status-1':'Released on Steam','side-focus-1':'Gameplay programming',
    'side-status-2':'Released on Steam','side-focus-2':'Gameplay & minigames',
    'side-status-8':'In development','side-focus-8':'Architecture / Source Generators',
    'side-status-9':'In development','side-focus-9':'Developer tooling',
    'side-status-10':'Internal use','side-focus-10':'Custom editor tools',
    'side-status-11':'Work in progress','side-focus-11':'Internal systems',
    'side-status-6':'Released (solo dev)','side-focus-6':'Full development',
    'side-status-blade':'Released (solo dev)','side-focus-blade':'Combat & gameplay systems',
    'side-status-4':'University project','side-focus-4':'Gameplay programming',
    'side-status-7':'Game jam','side-focus-7':'Full gameplay',
    'side-status-5':'Game jam','side-focus-5':'Lead programmer',
    'side-status-12':'Commercial project','side-focus-12':'App & navigation',

    'work-1-1':'Core gameplay systems','work-1-2':'Game architecture & state management','work-1-3':'Player onboarding & UX','work-1-4':'Optimization & Steam deployment',
    'work-2-1':'Job & minigame systems','work-2-2':'Character stats & state management','work-2-3':'Customization system & room architecture','work-2-4':'UX, save & UI architecture',
    'work-8-1':'Source Generator + Cecil split','work-8-2':'Editor window for declaring signals','work-8-3':'Combine modes without DynamicInvoke','work-8-4':'The Weaver’s safety rule',
    'work-9-1':'Two separate command spaces','work-9-2':'Reflection over IL weaving','work-9-3':'Async & Coroutine support','work-9-4':'Undo/Redo & nested calls',
    'work-10-1':'Anchor Converter','work-10-2':'Font Auto-Size Converter','work-10-3':'Interface Drawer',
    'work-11-1':'LScene — scene loader','work-11-2':'Storex — save system','work-11-3':'Config Injector','work-11-4':'Hermes — DI architecture',
    'work-6-1':'Solo gameplay programming','work-6-2':'External asset integration','work-6-3':'Difficulty levels & maps',
    'work-blade-1':'Combat system','work-blade-2':'Enemy waves & game flow','work-blade-3':'Skill set & damage system',
    'work-4-1':'Turret placement & upgrades','work-4-2':'SCRUM team of four','work-4-3':'Gameplay programming',
    'work-7-1':'Controls & collision','work-7-2':'Enemy wave logic','work-7-3':'Scoring & planet transitions',
    'work-5-1':'Mouse-collecting logic','work-5-2':'Map switching','work-5-3':'Round-end conditions',
    'work-12-1':'GPX route generation','work-12-2':'Point-by-point navigation','work-12-3':'Built for a waste-management client',

    'card-eyebrow-quickload':'Tool · Stable',
    'card-teaser-quickload':'Enter Play Mode from any scene without breaking your project’s startup flow.',
    'p-quickload-lead':'QuickLoad is a Unity editor tool that lets you enter Play Mode from any scene without breaking your project’s startup flow — Play Mode is routed through a dedicated Init Scene, where shared systems are initialized (managers, DontDestroyOnLoad objects, service bootstrapping), and only then is the scene you’re working on loaded.',
    'p-quickload-p2':'Open the scene you’re working on and click the QuickLoad Play button — everything else happens automatically. When you stop Play Mode, the editor returns to the scene you started from, along with the full set of scenes you had open before entering Play Mode.',
    'p-quickload-detail':'<li><strong>Automatic return to your working scene</strong>Unity remembers which scenes were open before entering Play Mode and restores them once it stops — no manual switching.</li><li><strong>Init Scene as the starting point</strong>Anything that needs to exist once at startup (managers, services) lives in the Init Scene and gets unloaded right after your target scene loads — only the objects moved to DontDestroyOnLoad survive.</li><li><strong>Multiplayer Play Mode support</strong>Virtual players (editor clones) also go through the Init Scene, so managers and DontDestroyOnLoad objects exist in every test window.</li><li><strong>Console diagnostics</strong>If the Init Scene isn’t set in the project settings, the console tells you exactly what to do instead of failing silently.</li>',
    'side-status-quickload':'Stable','side-focus-quickload':'Unity editor tooling',
    'side-github-btn':'View on GitHub',
    'work-quickload-1':'Automatic return to your working scene','work-quickload-2':'Init Scene as the starting point',
    'work-quickload-3':'Multiplayer Play Mode support','work-quickload-4':'Console diagnostics',

    'hero-loc':'open to remote / relocation',
    'hero-h1':'Hey!<br>Great to have <em>you</em> here.',
    'hero-sub':'This is my little corner of game dev — gameplay, networking systems, and custom editor tools, from game jams to titles shipped on Steam.',
    'about-stat1':'years in Unity','about-stat2':'completed projects','about-stat3':'titles on Steam',

    'roadmap-eyebrow':'Roadmap',
    'roadmap-h3':"What's next",
    'roadmap-p':"What I'm currently working on, or planning to pick up soon:",
    'roadmap-status-0':'In production',
    'roadmap-status-1':'Still developing — aiming for the Unity Asset Store',
    'roadmap-status-2':'Still developing — aiming for the Unity Asset Store',

    'about-eyebrow-0':'About me 01/03','about-eyebrow-1':'About me 02/03','about-eyebrow-2':'About me 03/03',
    'about-h-0':'This is my turf','about-h-1':'This is me','about-h-2':'What I play',
    'about-p-0':'I like simple solutions to hard problems. I don’t like code that only I understand.',
    'about-p-0b':'I stick to proven architecture principles and design patterns — and when I need to, I go deeper: Reflection, IL Weaving, Source Generators. I’ve built a fair number of dependency injection systems that the whole team uses, not just me.',
    'about-p-0b-split':'I get along well within a team — I’ve worked solo, in small teams (game jams, university projects), and in a production team of 13 people. Communication has never been a problem for me.',
    'about-p-1':'Calisthenics and running keep me in enough shape that the screen hasn’t fully absorbed me yet — winning, for now. I watch my diet too, though I don’t always beat the midnight pizza.',
    'about-p-1b':'Gaming has always been a passion of mine — not just downtime, but inspiration for my own projects. I pick up a squash racket sometimes, and whenever I get the chance, I pack a bag and disappear somewhere new — the best reset I know.',
    'about-p-2-lead':'Gaming has been with me forever, long before I ever thought about writing code.',
    'about-p-2-rest':'I’ve played a ton of titles across genres, from soulslikes to shooters. Lately I’m most into FPS games and extraction shooters. I’m still waiting for a properly finished version of The Day Before to come out — probably in a different universe.',
    'about-steam-link':'My Steam profile ↗',
    'testimonials-kicker':'References',
    'about-quote':'“An engaged, eager learner — open to feedback and consistently leveling up, from writing clean code, to problem-solving, to working with a repo. A reliable, ambitious, trustworthy collaborator.”',
    'about-quote-cite':'— reference, 2025',
    'about-quote2':'“You could always count on him — he was always happy to support other team members and share his knowledge. I can confidently recommend Tobiasz as an engaged, competent, and trustworthy person.”',
    'about-quote2-cite':'— reference, Radikate, 2026',

    'career-kicker':'Career',
    'career-h2':'Step by step, from a student club to Steam',
    'career-edu-kicker':'Education',
    'career-edu-h2':'Learning',
    'career-work-kicker':'Experience',
    'career-work-h2':'Professional career',
    'career-date-0':'2017 – 2021','career-title-0':'Technical school — Refrigeration &amp; Air Conditioning',
    'career-desc-0':'Transport-Electrical School Complex, Ostrów Wielkopolski. Before I started programming, I was training in a completely different trade.',
    'career-date-1':'March 2021 – March 2024','career-title-1':'University of Lower Silesia',
    'career-desc-1':'Computer Science, Game Programming track — where my journey really began.',
    'career-date-2':'May 2021 – March 2024','career-title-2':'Hello IT student club',
    'career-desc-2':'I joined a student tech club at university — my first real Unity projects, game jams (Popiel, Fluffy Savior), and my first taste of working in a team toward a shared goal.',
    'career-date-3':'November 2022 – June 2023','career-title-3':'Dream Eater Interactive',
    'career-desc-3':'Alongside the student club, I worked as a Unity programmer in a small team on two prototypes: on <strong>Project G</strong> I was responsible for the multiplayer layer — session management, matchmaking, and cross-client data sync; on <strong>Project D</strong> I built enemy AI, including the decision logic driving their behavior toward the player. Neither project ultimately made it to release, but that’s where I learned to build networking and AI systems from scratch.',
    'career-date-4':'July 2024 – 2025','career-title-4':'Unity Developer, Freelance',
    'career-desc-4':'I joined a 13-person group, where I broke functionality within a larger project down into separate, self-contained modules. I worked on ECS architecture, standing up a dedicated server, and Unity networking — including Unity Game Services (matchmaking, relay, lobby). That’s where I really learned to work with larger, distributed network infrastructure, not just local multiplayer.',
    'career-date-5':'April 2025','career-title-5':'Radikate',
    'career-desc-5':'I worked as a programmer on <strong>Nerd Simulator</strong> and <strong>Mr Toilet</strong> — writing code from early prototypes through to finished features, and building custom inspectors to make the rest of the team’s work easier.',
    'career-date-6':'2026 – present','career-title-6':'Own production',
    'career-desc-6':'I’m continuing to work as a Unity Developer Freelance, while also developing my own game on the side — aiming for a demo release in January 2027. More details closer to launch.',

    'skills-kicker':'Skills',
    'skills-h2':'What I work with day to day',
    'skills-lbl1':'Languages','skills-lbl2':'Engines','skills-lbl3':'Architecture',
    'skills-lbl4':'Networking & Backend','skills-lbl5':'Plugins','skills-lbl6':'Workflow',
    'skills-items1':'C# (advanced), C/C++ (basic), Python',
    'skills-items2':'Unity (advanced, URP), Unreal Engine 5 (basic)',

    'card-eyebrow-1':'Game · Steam','card-eyebrow-2':'Game · Steam',
    'card-eyebrow-8':'Tool · In development','card-eyebrow-9':'Tool · In development',
    'card-eyebrow-10':'Tool · Internal','card-eyebrow-11':'Tool · Work in progress',
    'card-eyebrow-6':'Game · Solo dev','card-eyebrow-blade':'Game · Solo dev',
    'card-eyebrow-4':'Game · University project','card-eyebrow-7':'Game · Game jam',
    'card-eyebrow-5':'Game · Game jam','card-eyebrow-12':'Software · Commercial project',

    'card-teaser-1':'A toilet-cleaning simulator that made it to Steam.',
    'card-teaser-2':'A comedic adventure about moving out of your mom’s house.',
    'card-teaser-8':'A zero-allocation communication system between game systems.',
    'card-teaser-9':'A developer console that runs inside the game build.',
    'card-teaser-10':'A toolkit that speeds up the whole team’s workflow.',
    'card-teaser-11':'Smaller support systems for day-to-day game dev work.',
    'card-teaser-6':'An arcade game about chopping wood to survive winter.',
    'card-teaser-blade':'A top-down hack and slash with four cooldown skills.',
    'card-teaser-4':'A cyberpunk Tower Defense built with SCRUM.',
    'card-teaser-7':'Defending a cat planet from waves of comets.',
    'card-teaser-5':'The first game I ever made — collecting mice at a game jam.',
    'card-teaser-12':'A transport app with point-by-point navigation.',

    'p1-p':'And since you were just reading about scrubbing a toilet — yes, I also made a game literally about being a nerd. Quite the pairing. A short, comedic adventure where you help forty-year-old Mervin move out of his mom’s house — through absurd odd jobs and even more absurd trouble.',
    'p1-p-split':'I was responsible for implementing key gameplay and minigame systems (including odd-job systems, arcade-style minigames, and mechanical loops). I also designed the character stats/needs logic, the room customization system, and managed the UI and game state.',
    'p1-detail-list':'<li><strong>Job &amp; Minigame Systems</strong>Logic for odd jobs and their minigames — freelance gigs, painting, trash sorting, arcade sequences.</li><li><strong>Character Stats &amp; State Management</strong>Character needs system (bladder, energy, hunger) with a dynamic HUD and random events.</li><li><strong>Customization System &amp; Room Architecture</strong>Room customization — furniture, rugs, layout saving, and economy integration.</li><li><strong>UX, Save Architecture &amp; UI Architecture</strong>Save systems for world state and quests, plus UI states — pop-ups, pause, keybinds.</li>',
    'p2-p':'Yes, it’s literally a simulator about cleaning a public restroom — sometimes the best gameplay hides in the least glamorous premise. Clean up, charge fees, kick out freeloaders, and grow your bathroom empire.',
    'p2-p-split':'I was responsible for a broad range of gameplay systems — from early prototypes through to polished, finished mechanics. This was the project where I learned the real requirements of the platform, as well as the process of shipping a game on Steam.',
    'p2-detail-list':'<li><strong>Core Gameplay Systems</strong>Main gameplay loops, player-environment interactions, and economic minigames with NPCs.</li><li><strong>Game Architecture &amp; State Management</strong>Save system for world and economy state, a dynamic calendar, and a time system.</li><li><strong>Player Onboarding &amp; UX</strong>Tutorials, notifications, contextual hints, and a settings panel with control rebinding.</li><li><strong>Optimization &amp; Steam Deployment</strong>Code stability and performance, plus adapting the project to Steam’s requirements.</li>',
    'p3-p':'A cyberpunk-styled Tower Defense — you defend a path from waves of enemies by placing and upgrading defense turrets.',
    'p3-p-split':'Built as a university project with a four-person team, run fully by SCRUM — short sprints, stand-ups, retrospectives, planning. I was the gameplay programmer.',
    'p4-p':'The first game I ever made — in a three-person team at a Game Jam. The goal is to defeat Popiel by collecting mice across three different maps, which change once you’ve gathered everything needed for that round.',
    'p4-p-split':'I was the lead programmer on the team — I was responsible for gameplay, including the mouse-collecting logic, map switching, and round-end conditions.',
    'p5-p':'An endless arcade game — a lumberjack has to gather enough wood to survive winter, chopping a tree into pieces with a single hit. The game offers 3 difficulty levels and different maps, so every run looks and plays a little differently.',
    'p5-p-split':'I coded the whole thing myself, managing assets from external artists and a sound designer and wiring them into the game. This was the project that taught me how to really tie every piece together into one coherent whole — from the first prototype to the finished product.',
    'pblade-p':'A top-down hack and slash — you fight off waves of enemies, combining a basic attack with four cooldown-based skills.',
    'pblade-p-split':'I was responsible for the combat system, enemy waves, game flow, and the full skill set along with the damage system — everything except the enemy AI itself.',
    'p6-p':'A multi-level arcade game made at a game jam — you play a galaxy defender saving a cat planet from destruction, destroying enemy comets and dodging attacks. Each planet is its own self-contained minigame, with its own set of threats.',
    'p6-p-split':'I was the programmer, responsible for every layer of gameplay — from controls and collision, through enemy wave logic, to the scoring system and transitions between planets.',
    'p8-p':'A strongly-typed, zero-allocation communication system between game systems, built so cross-assembly communication stops being a headache. One call and the data lands exactly where it needs to.',
    'p8-p-split':'Instead of holding references between modules or pushing data through singletons, one call — <code>Signals.Send(...)</code> — is enough, and the data lands exactly where it needs to, no matter which assembly the receiver lives in.',
    'p8-detail':'<li><strong>Split responsibility: Source Generator + Cecil</strong>Roslyn generates the public API and internal state (register/unregister), while Cecil does exactly one thing — injects the registration calls into <code>Awake</code>/<code>OnDestroy</code>. Each tool does what it’s best at.</li><li><strong>Editor window instead of hand-written interfaces</strong>Signals are declared through a dedicated window, not by writing interfaces by hand. Name collisions between different facades are blocked the moment you try to add them, not caught later in the generator.</li><li><strong>Combine modes without DynamicInvoke</strong>Plain multicast for <code>void</code>, and for return values — None/All/Any modes with arity-based overloads instead of costly runtime reflection.</li><li><strong>The Weaver’s safety rule</strong>If Cecil ever needed to generate a loop or a branch, that’s a sign the logic belongs in plain C# instead. Coming up: a visual dependency graph showing, live, who’s talking to whom at any given moment in the game.</li>',
    'p9-p':'A slide-out developer console that runs at runtime, inside the game build — any method in the code becomes a strongly-typed, callable command (exec), with no need to write a dedicated panel for every test.',
    'p9-p-split':'Every call gets logged — you can see exactly which command ran, with what arguments, and what result, making it much easier to reproduce and report a bug.',
    'p9-detail':'<li><strong>Two separate command spaces</strong><code>/</code> for game commands (full autocomplete, nesting) and <code>!</code> for tool commands (list, help, select, undo, clear) — never mixed in the same dropdown.</li><li><strong>Reflection over IL weaving — a deliberate choice</strong>I also built a Mono.Cecil version, but stuck with reflection — it’s not a hot path, and one consistent system is easier to maintain. Debug-only methods are protected from IL2CPP stripping with a <code>[Preserve]</code> attribute.</li><li><strong>Async and Coroutine support</strong>Methods returning <code>IEnumerator</code>/<code>Task</code> run as coroutines on a dedicated runner, with a live "running…" status in the log.</li><li><strong>Undo/Redo and nested calls</strong>Commands marked Undoable keep before/after state — one command instead of a scene restart. Nested calls log every step separately, so you can see exactly which value fed into which argument.</li>',
    'p10-p':'Nobody brags about editor tools in a first interview, yet they’re what speeds up the whole team the most. A set of smaller tools used daily:',
    'p10-p-split':'<li><strong>Anchor Converter</strong>Turns UI elements into screen-relative anchors.</li><li><strong>Font Auto-Size Converter</strong>Unifies text scaling across resolutions.</li><li><strong>Interface Drawer</strong>Draws interfaces in the Inspector, something Unity can’t do out of the box.</li>',
    'p10-detail':'All tied together by my own attribute- and reflection-based reference injection system, plus the <code>[OnValueChange]</code> attribute that generates a backing field via IL Weaving.',
    'p11-p':'These aren’t big, standalone products — they’re smaller support systems that speed up my day-to-day game dev work. Once they hit a more stable version, I plan to release them publicly, for free:',
    'p11-list':'<li><strong>LScene</strong> — a scene loader with network-loading support, built around a core / menu / map architecture</li><li><strong>Storex</strong> — a game-state save system</li><li><strong>Config Injector</strong> — reflection-based config injection from Resources</li><li><strong>Hermes</strong> — my own opinionated DI architecture inspired by Zenject</li>',
    'p12-p':'A transport app built for a waste management company.',
    'p12-p-split':'The system generates collection routes in GPX format, and the navigation module guides the driver point by point along the planned route — no manual stop-by-stop planning needed.',

    'contact-kicker':'Contact',
    'contact-h2':'Open to collaboration<br>and project talk',
    'contact-page-h1':'Let’s talk<br>about the <em>project</em>.',
    'contact-page-sub':'Looking for a Unity Developer to work with — full-time, project-based, or a single commission? Pick whatever fits.',
    'contact-page-sign-off':'Have a great day — talk soon!',
    'contact-p1':'Looking for a Unity Developer — full-time, project-based, or a one-off job? Reach out, I usually reply within 24h.',
    'contact-p2':'If you’d like to talk shop or just chat about game dev in general — I’m always up for it, and if you’re nearby, we might even grab a beer.',
    'contact-p3':'I also build sites like this on commission, and teach Unity one-on-one.',
    'contact-reference':'Reference','contact-github-old-inline':'Tobiasz2817 (old account)',
    'contact-discord':'Discord',
    'contact-github-new':'GitHub (new)','contact-github-old':'GitHub (old)',
    'contact-cv-pl-label':'CV (PL)','contact-cv-en-label':'CV (EN)',
    'foot-github-new':'GitHub (new)','foot-github-old':'GitHub (old)',
    'contact-copyright':'© 2026 Tobiasz Mazurek',
  };

  let PL = null;

  function captureOriginal(){
    PL = {};
    document.querySelectorAll('[data-i18n]').forEach(el => {
      PL[el.dataset.i18n] = el.innerHTML;
    });
  }

  function applyLang(lang){
    if(!PL) captureOriginal();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.innerHTML = (lang === 'en' && EN[key] !== undefined) ? EN[key] : PL[key];
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    try{ localStorage.setItem('site-lang', lang); }catch(e){}
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  let saved = null;
  try{ saved = localStorage.getItem('site-lang'); }catch(e){}
  if(saved !== 'pl'){ applyLang('en'); }

  window.__i18n = { applyLang, EN };
})();

/* ------------------------------------------------------------ filters */
(function(){
  const chips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.grid .card');
  if(!chips.length || !cards.length) return;

  function apply(group){
    cards.forEach(card => {
      card.style.display = (group === 'all' || card.dataset.group === group) ? '' : 'none';
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      apply(chip.dataset.filter);
    });
  });

  const initial = document.querySelector('.filter-chip.active') || chips[0];
  apply(initial.dataset.filter);
})();

/* ------------------------------------------- cover + filmstrip
   Pairs every .filmstrip with the .project-cover that precedes it, so the
   same swap-on-click behavior works whether there's one pair on the page
   (project detail pages) or several (the About page timeline). Each thumb
   can carry data-orientation="portrait" — the cover snaps between two
   static size presets (landscape default, portrait via .is-portrait)
   instead of resizing to match each photo's real aspect ratio. A chapter
   keeps ONE preset for all its photos even if some aren't a perfect ratio
   match — switching box shape mid-gallery as you click thumbnails felt
   like a jarring jolt, so consistency within a chapter wins over a
   perfect per-photo fit. */
(function(){
  document.querySelectorAll('.filmstrip').forEach(filmstrip => {
    const sib = filmstrip.previousElementSibling;
    if(!sib || !sib.classList.contains('project-cover')) return;
    const cover = sib.querySelector('img');
    if(!cover) return;
    const thumbs = Array.from(filmstrip.querySelectorAll('button'));
    if(!thumbs.length) return;

    function select(i){
      const thumbImg = thumbs[i].querySelector('img');
      cover.src = thumbImg.src;
      cover.alt = thumbImg.alt;
      thumbs.forEach((t, ti) => t.classList.toggle('active', ti === i));
      sib.classList.toggle('is-portrait', thumbs[i].dataset.orientation === 'portrait');
    }
    thumbs.forEach((t, i) => t.addEventListener('click', () => select(i)));
    const activeIndex = thumbs.findIndex(t => t.classList.contains('active'));
    select(activeIndex >= 0 ? activeIndex : 0);
  });
})();

/* ------------------------------------------- cover photo lightbox
   Click the big cover photo to view it full-size. If it has a filmstrip
   sibling, the lightbox also gets prev/next (arrows + buttons) so you can
   browse the whole gallery without closing and reopening it — and picking
   a photo in the lightbox updates the underlying cover/filmstrip to match,
   so they stay in sync when you close it. */
(function(){
  const covers = Array.from(document.querySelectorAll('.project-cover')).filter(c => !c.classList.contains('icon-cover'));
  if(!covers.length) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'cover-lightbox';
  lightbox.innerHTML =
    '<button type="button" class="cover-lightbox-close" aria-label="Zamknij">✕</button>' +
    '<button type="button" class="cover-lightbox-nav cover-lightbox-prev" aria-label="Poprzednie zdjęcie">‹</button>' +
    '<img alt="">' +
    '<button type="button" class="cover-lightbox-nav cover-lightbox-next" aria-label="Następne zdjęcie">›</button>';
  document.body.appendChild(lightbox);
  const lbImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.cover-lightbox-close');
  const prevBtn = lightbox.querySelector('.cover-lightbox-prev');
  const nextBtn = lightbox.querySelector('.cover-lightbox-next');

  let thumbs = [];
  let index = 0;
  let coverImg = null;
  let coverEl = null;

  function paint(){
    const thumbImg = thumbs[index].querySelector('img');
    lbImg.src = thumbImg.src;
    lbImg.alt = thumbImg.alt;
    if(coverImg){ coverImg.src = thumbImg.src; coverImg.alt = thumbImg.alt; }
    thumbs.forEach((t, i) => t.classList.toggle('active', i === index));
    if(coverEl) coverEl.classList.toggle('is-portrait', thumbs[index].dataset.orientation === 'portrait');
  }
  function step(delta){ index = (index + delta + thumbs.length) % thumbs.length; paint(); }

  function open(cover, img){
    coverEl = cover;
    coverImg = cover.querySelector('img');
    const filmstrip = cover.nextElementSibling;
    thumbs = (filmstrip && filmstrip.classList.contains('filmstrip')) ? Array.from(filmstrip.querySelectorAll('button')) : [];
    const multi = thumbs.length > 1;
    prevBtn.style.display = multi ? '' : 'none';
    nextBtn.style.display = multi ? '' : 'none';
    if(thumbs.length){
      const activeIndex = thumbs.findIndex(t => t.classList.contains('active'));
      index = activeIndex >= 0 ? activeIndex : 0;
      paint();
    } else {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
    }
    lightbox.classList.add('open');
  }
  function close(){ lightbox.classList.remove('open'); }

  covers.forEach(cover => {
    cover.setAttribute('role', 'button');
    cover.setAttribute('tabindex', '0');
    cover.addEventListener('click', () => {
      const img = cover.querySelector('img');
      if(img) open(cover, img);
    });
    cover.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        const img = cover.querySelector('img');
        if(img) open(cover, img);
      }
    });
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => step(-1));
  nextBtn.addEventListener('click', () => step(1));
  lightbox.addEventListener('click', (e) => { if(e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => {
    if(!lightbox.classList.contains('open')) return;
    if(e.key === 'Escape') close();
    if(e.key === 'ArrowLeft') step(-1);
    if(e.key === 'ArrowRight') step(1);
  });
})();

/* ------------------------------------------------------- scroll reveal */
(function(){
  const items = document.querySelectorAll('.reveal');
  if(!items.length) return;
  if(!('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(el => io.observe(el));
})();

/* =========================================================================
   Dev-only layout helper (?edit) — NOT shipped UI, never runs for visitors.
   Scope: pick which photo is a project's grid cover, reorder a project's
   gallery, and nudge each photo's crop focus (object-position). No pixel
   positioning — the responsive grid/flex layout doesn't need that anymore.
   ========================================================================= */
(function(){
  if(!new URLSearchParams(window.location.search).has('edit')) return;

  const toggle = document.createElement('button');
  toggle.id = 'edit-toggle';
  toggle.type = 'button';
  toggle.textContent = 'Edit';
  document.body.appendChild(toggle);

  const panel = document.createElement('div');
  panel.id = 'edit-panel';
  document.body.appendChild(panel);

  toggle.addEventListener('click', () => panel.classList.toggle('open'));

  function focusPicker(imgEl, onChange){
    const wrap = document.createElement('div');
    wrap.style.cssText = 'margin-top:.4rem;font-size:.7rem;color:var(--text-dim);cursor:crosshair;border:1px dashed var(--line);padding:.3rem;';
    wrap.textContent = 'Kliknij na miniaturę w galerii, by ustawić punkt kadru (klik = ' + (imgEl.style.objectPosition || '50% 50%') + ')';
    imgEl.style.cursor = 'crosshair';
    imgEl.addEventListener('click', (e) => {
      const r = imgEl.getBoundingClientRect();
      const x = Math.round(((e.clientX - r.left) / r.width) * 100);
      const y = Math.round(((e.clientY - r.top) / r.height) * 100);
      imgEl.style.objectPosition = x + '% ' + y + '%';
      onChange();
    });
    return wrap;
  }

  function buildOutput(lines){
    const ta = document.createElement('textarea');
    ta.rows = 6;
    ta.readOnly = true;
    ta.value = lines;
    const copy = document.createElement('button');
    copy.textContent = 'Kopiuj';
    copy.style.marginTop = '.4rem';
    copy.addEventListener('click', () => navigator.clipboard.writeText(ta.value));
    return [ta, copy];
  }

  // --- Home page: pick cover image per card from its known gallery ---
  const cards = document.querySelectorAll('.grid .card[data-gallery]');
  if(cards.length){
    const h = document.createElement('h4');
    h.textContent = 'Okładki kart (' + cards.length + ')';
    panel.appendChild(h);
    cards.forEach(card => {
      const imgEl = card.querySelector('.card-media img');
      const gallery = card.dataset.gallery.split(',').map(s => s.trim()).filter(Boolean);
      let idx = Math.max(0, gallery.indexOf(imgEl.getAttribute('src')));
      const row = document.createElement('div');
      row.className = 'ep-row';
      const label = document.createElement('span');
      label.textContent = card.querySelector('h3').textContent;
      const btns = document.createElement('span');
      const prevBtn = document.createElement('button'); prevBtn.textContent = '←';
      const nextBtn = document.createElement('button'); nextBtn.textContent = '→';
      btns.appendChild(prevBtn); btns.appendChild(nextBtn);
      row.appendChild(label); row.appendChild(btns);
      panel.appendChild(row);
      function paint(){ imgEl.setAttribute('src', gallery[idx]); }
      prevBtn.addEventListener('click', (e) => { e.preventDefault(); idx = (idx - 1 + gallery.length) % gallery.length; paint(); });
      nextBtn.addEventListener('click', (e) => { e.preventDefault(); idx = (idx + 1) % gallery.length; paint(); });
    });
  }

  // --- Project page: reorder filmstrip + set crop focus, regenerate markup ---
  const filmstrip = document.querySelector('.filmstrip');
  if(filmstrip){
    const h = document.createElement('h4');
    h.textContent = 'Zdjęcia — kolejność i kadr';
    panel.appendChild(h);
    const list = Array.from(filmstrip.querySelectorAll('button'));

    function regenerate(){
      const html = list.map((btn, i) => {
        const img = btn.querySelector('img');
        const pos = img.style.objectPosition ? ' style="object-position:' + img.style.objectPosition + '"' : '';
        const cls = i === 0 ? ' class="active"' : '';
        return '  <button type="button"' + cls + '><img src="' + img.getAttribute('src') + '" alt="' + img.alt + '"' + pos + '></button>';
      }).join('\n');
      ta.value = '<div class="filmstrip">\n' + html + '\n</div>';
    }

    list.forEach((btn, i) => {
      const row = document.createElement('div');
      row.className = 'ep-row';
      const label = document.createElement('span');
      label.textContent = (i + 1) + '. ' + btn.querySelector('img').alt.slice(0, 22);
      const btns = document.createElement('span');
      const upBtn = document.createElement('button'); upBtn.textContent = '↑';
      const downBtn = document.createElement('button'); downBtn.textContent = '↓';
      btns.appendChild(upBtn); btns.appendChild(downBtn);
      row.appendChild(label); row.appendChild(btns);
      panel.appendChild(row);
      upBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cur = list.indexOf(btn);
        if(cur <= 0) return;
        filmstrip.insertBefore(btn, list[cur - 1]);
        list.splice(cur, 1); list.splice(cur - 1, 0, btn);
        regenerate();
      });
      downBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cur = list.indexOf(btn);
        if(cur === -1 || cur === list.length - 1) return;
        filmstrip.insertBefore(list[cur + 1], btn);
        list.splice(cur, 1); list.splice(cur + 1, 0, btn);
        regenerate();
      });
      panel.appendChild(focusPicker(btn.querySelector('img'), regenerate));
    });

    const [ta, copyBtn] = buildOutput('');
    panel.appendChild(ta);
    panel.appendChild(copyBtn);
    regenerate();
  }
})();
