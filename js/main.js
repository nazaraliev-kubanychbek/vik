const games = [
  {
    name: 'Көк бөрү',
    category: 'Ат спорту',
      image: 'assets/images/sports/kok-boru.jpg',
    desc: 'Ат үстүндө ыргак, тактика жана ынаным бар жообу.',
    summary: 'Көк бөрү — көчмөндөрдүн эң белгилүү ат спорту. Бул оюнда оюнчу аттын ылдамдыгын, үйлөрүнүн тактикасын жана жетектөө ыкмасын сынайт.',
    rules: [
      'Команда 2ден 4кө чейин атчынан турат.',
      'Тартиптүү жол менен мотоциклеттик сигналдарсыз, тактай стилинде жылдырылат.',
      'Бардык жүрүштөр координация, баланстуу отрядтык ыкма менен аткарылат.',
      'Жеңүү — тактык, ылдамдык жана башкаруунун күчүнө байланышты.'
    ],
    video: 'https://www.youtube.com/embed/7UBtbT1zU4g?si=4obwd4S8X4WG7LPY'
  },
  {
    name: 'Эр эңиш',
    category: 'Күрөш',
      image: 'assets/images/sports/er-enish.jpg',
    desc: 'Ат үстүндө күрөшүү. Кайрат, дард, урмат бар.',
    summary: 'Эр эңиш — көчмөндөрдүн эгемен ыргагы. Бул түздөн-түз күрөш, күч, техника жана өзгөртүү ыкмасын талап кылат.',
    rules: [
      'Тактикалык позиция жана баланстуу турактоо эң негизги.',
      'Күш, чабандуулук, аялдама ыкмасы жокко чыгарылбайт.',
      'Күрөшүү учурунда укуктарды жайлап, жекече споры жок.',
      'Атаандаштын тепкен жерин текшерүү, тыныш, жайлуу машыгуулар мүнөздүү.'
    ],
    video: 'https://www.youtube.com/embed/3rYXeRJm5rM?si=9A0R3tl7nwKUw4dN'
  },
  {
    name: 'Тогуз коргоол',
    category: 'Логика',
      image: 'assets/images/sports/toguz-korgool.jpg',
    desc: 'Акыл, тактык жана стратегический ой.',
    summary: 'Тогуз коргоол — оюнчунын ойлок, стратегиялык жана логикалык ой жүгүртүүнү сынай турган классикалык интеллектуалдык оюн.',
    rules: [
      '9 тордун ичинде стратегиялык жүрүштөр жасалат.',
      'Жүрүштөрдү алдын ала пландаштыруу жана тактык зарыл.',
      'Төрт, беш, алты же 9 форманын түзүлүшү зарыл.',
      'Көптөрдүн алдында көңүл, сабыр жана тактика негизги.'
    ],
    video: 'https://www.youtube.com/embed/5R43M0B1ec8?si=0qZKXc1z9NzNaK4P'
  },
  {
    name: 'Алыш',
    category: 'Күрөш',
      image: 'assets/images/sports/alysh.jpg',
    desc: 'Белди б.о.с. чабуул, техника жана намыс.',
    summary: 'Алыш — көчмөндөрдүн салттуу күрөшүнүн бир түрү. Бул жерде мүнөз, чабандуулук, техникалык биим жана намыс эң көп талап кылынат.',
    rules: [
      'Күчтүү, бирок таза техниканы колдонуу шарт.',
      'Өзгөчө, алдын ала дайындалган позициялар талап кылынат.',
      'Өткөн ыргактарды текшерүү, жүлдүгө жетүү нускасы бар.',
      'Мээрим, намыс, сабыр — жарактуу күрөш үчүн зарыл.'
    ],
    video: 'https://www.youtube.com/embed/vWtm7mhkM7g?si=C1tXc7JvSxF0YROj'
  },
  {
    name: 'Оодарыш',
    category: 'Ат спорту',
      image: 'assets/images/sports/oodarysh.jpg',
    desc: 'Ат үстүндө атаандашты тең салмактан чыгаруу өнөрү.',
    summary: 'Оодарышта эки чабандес ат үстүндө күчүн, тең салмагын жана ыкмасын сынайт. Максат — атаандашты аттан оодарып түшүрүү.',
    rules: [
      'Мелдеш атайын белгиленген талаада өтөт.',
      'Чабандес атын башкаруу менен бирге өзүнүн тең салмагын сактайт.',
      'Атаандашка жаракат келтирүүчү ыкмаларга жол берилбейт.',
      'Таза оодарып түшүргөн оюнчу жеңишке жетет.'
    ],
    video: ''
  },
  {
    name: 'Салбуурун',
    category: 'Аңчылык өнөрү',
      image: 'assets/images/sports/salbuu-run.jpg',
    desc: 'Бүркүт салуу, тайган агытуу жана мергенчилик салты.',
    summary: 'Салбуурун — кыргыздын байыркы аңчылык маданиятын камтыган комплекстүү өнөр. Анда куш таптоо, тайган таптоо жана мергенчилик ыкмалары бааланат.',
    rules: [
      'Куштун жана тайгандын тапталгандыгы, башкарылышы эске алынат.',
      'Мергенчилик ыкмалары коопсуздук эрежелери менен көрсөтүлөт.',
      'Жаныбарга аяр мамиле кылуу негизги талап болуп саналат.',
      'Чеберчилик менен бирге салтты билүү да бааланат.'
    ],
    video: ''
  },
  {
    name: 'Ат чабыш',
    category: 'Ат спорту',
      image: 'assets/images/sports/at-chabysh.jpg',
    desc: 'Аттын чыдамкайлыгын жана чабандестин чеберчилигин сынаган жарыш.',
    summary: 'Ат чабыш — алыс аралыкта аттын чыдамкайлыгын, ылдамдыгын жана чабандестин туура тактикасын сынаган салттуу мелдеш.',
    rules: [
      'Жарышка аттар даярдалып, белгиленген аралыкта чабылат.',
      'Чабандес атты ашыкча кыйнабай, ылдамдыкты туура бөлүштүрөт.',
      'Мелдештин жыйынтыгы белгиленген аралыкты биринчи бүтүрүү менен аныкталат.',
      'Атка кам көрүү жана коопсуздук эрежелери маанилүү.'
    ],
    video: ''
  }
];

const glossaryData = [
  {
    word: 'Ынтымак',
    short: 'Биримдик, достук жана жалпы максат',
    definition: 'Көчмөндөрдүн жашоосунда, жалпы максат, тил, ыймандуулук жана өзара түшүнүчтүүлүк ар бир äлемди бириктирет. Бул сөз элдин улуттук маданиятын даңазалайт.',
    usage: '«Биздин ыргак биздин ынтымактан пайда bolýar.»'
  },
  {
    word: 'Кырчын',
    short: 'Жайлоо, көчмөндөрдүн мекени',
    definition: 'Көчмөндөрдүн турак жайына, малды багууга, таянууга жана айылдык жашоосуна байланыштуу дүйнө. Кырчын — элдин турмушунун, уюлунун жана рухунун өзөгү.',
    usage: '«Биздин кырчында ырыскы, музыка жана ыйман кеткен.»'
  },
  {
    word: 'Боз үй',
    short: 'Улуттук үй, руханий мекен',
    definition: 'Көчмөндөрдүн үйүнүн символикалык түрү. Бооз үй — меймандостук, урмат, уюл, салт-сананы сактаган үлгү.',
    usage: '«Боз үйдүн алдында ыргактар жана салттар даңазаланат.»'
  },
  {
    word: 'Көк бөрү',
    short: 'Ат спорту',
    definition: 'Шамдагай, тез, так, жигердүү ат спорту. Бул оюн негизинен түз, ылдам жана ыргактуу жүрүшкө байланыштуу.',
    usage: '«Көк бөрү — мениң ат спортуна деген сүйүү.»'
  },
  {
    word: 'Эр эңиш',
    short: 'Ат үстүндө күрөш',
    definition: 'Күч, ыргак, ыймандуулук жана расмий эстетика бар күрөш түрү. Ал бирдей ыргагында жүрөт.',
    usage: '«Эр эңиштин тактикалык ыргактары элге таанымал.»'
  }
];

const quizQuestions = [
  {
    question: 'Көчмөндөр оюндары негизинен кандай мааниге ээ?',
    options: [
      'Маданият, спорт жана руханий баалуулуктарды бириктирет',
      'Тек компьютер оюндарына байланыштуу',
      'Тек музыка фестивали',
      'Тек кесиптик семинар'
    ],
    answer: 0
  },
  {
    question: 'Кыргыз тилин сайттын негизги тили катары колдонуу эмне үчүн маанилүү?',
    options: [
      'Жаштар үчүн тилди үйрөтүү, сактоо жана популяризациялоо',
      'Сайтты тосуу',
      'Тек ат спортуна арналган',
      'Фильмге байланыштуу'
    ],
    answer: 0
  },
  {
    question: 'Тогуз коргоол кимге жакын?',
    options: [
      'Стратегиялык ой, логика жана сабыр',
      'Тек жообу',
      'Тек музыка',
      'Тек авто жарыш'
    ],
    answer: 0
  },
  {
    question: 'Боз үй кандай мааниге ээ?',
    options: [
      'Көчмөндөрдүн руханий мекени, салттын символу',
      'Дүңдүдүн ызы-чуусу',
      'Жер үстүндөгү жалгыз ғимарат',
      'Жөнөкөй базар'
    ],
    answer: 0
  },
  {
    question: 'Көчмөндөр оюндарына кандай сала катышат?',
    options: [
      'Маданият, спорт, тил, музыкага',
      'Тек вирустук маркетингге',
      'Тек бизнес конференцияларга',
      'Тек уул уурхайн жолуна'
    ],
    answer: 0
  }
];

const renderGames = () => {
  const container = document.getElementById('gamesGrid');
  if (!container) return;

  container.innerHTML = games
    .map(
      (game) => `
        <a class="game-card reveal" href="оюн.html?game=${encodeURIComponent(game.name)}">
          <div class="game-image">
            <img src="${game.image}" alt="${game.name}" loading="lazy" />
          </div>
          <div class="game-body">
            <span class="game-category">${game.category}</span>
            <h3>${game.name}</h3>
            <p>${game.desc}</p>
          </div>
        </a>
      `
    )
    .join('');
};

const renderGameDetail = () => {
  const detail = document.getElementById('gameDetail');
  if (!detail) return;

  const gameName = new URLSearchParams(window.location.search).get('game');
  const game = games.find((item) => item.name === gameName) || games[0];

  document.title = `${game.name} | Дүйнөлүк Көчмөндөр Оюндары`;
  detail.innerHTML = `
    <section class="page-hero game-detail-hero">
      <div class="container">
        <a class="back-link reveal" href="спорт.html">← Бардык оюндарга кайтуу</a>
        <p class="eyebrow reveal">${game.category}</p>
        <h1 class="reveal">${game.name}</h1>
        <p class="page-intro reveal">${game.desc}</p>
      </div>
    </section>
    <section class="section game-detail-section">
      <div class="container">
        <div class="game-detail-layout">
          <div class="game-detail-media reveal">
            <img src="${game.image}" alt="${game.name}" />
            <div class="video-note">
              <span class="video-note-label">Медиа</span>
              <strong>${game.name} тууралуу көргөзмө</strong>
              <p>Бул бөлүмдө оюнду талаада көрүп, анын кыймылын жана ыргактарын байкоого болот.</p>
            </div>
          </div>
          <article class="game-detail-copy reveal">
            <p class="section-label">Оюндун маңызы</p>
            <h2>${game.name} — көчмөн рухунун көрүнүшү</h2>
            <p>${game.summary}</p>
            <h3>Негизги эрежелер</h3>
            <ul>${game.rules.map((rule) => `<li>${rule}</li>`).join('')}</ul>
          </article>
        </div>
      </div>
    </section>
    <section class="section game-detail-values">
      <div class="container">
        <div class="section-header reveal"><div><p class="section-label">Эмне өнүгөт?</p><h2>Оюндан алынган сабак</h2></div><p class="section-summary">Салттуу оюндар спорттук жыйынтыктан тышкары мүнөздү да тарбиялайт.</p></div>
        <div class="info-grid"><article class="info-card reveal"><span class="info-number">01</span><h3>Сабыр</h3><p>Туура учурду күтүп, чечимди шашпай кабыл алуу.</p></article><article class="info-card reveal"><span class="info-number">02</span><h3>Тактык</h3><p>Ар бир кыймылды көзөмөлдөп, максатка багыт алуу.</p></article><article class="info-card reveal"><span class="info-number">03</span><h3>Ынтымак</h3><p>Команда менен иштеп, атаандашты урматтоо.</p></article></div>
      </div>
    </section>
  `;
};

const renderGlossary = () => {
  const list = document.getElementById('termList');
  const detail = document.getElementById('termDetail');
  if (!list || !detail) return;

  list.innerHTML = glossaryData
    .map(
      (item, index) => `
        <button class="term-button ${index === 0 ? 'active' : ''}" data-term-index="${index}">
          <span class="term-word">${item.word}</span>
          <span class="term-short">${item.short}</span>
        </button>
      `
    )
    .join('');

  const updateDetail = (index) => {
    const item = glossaryData[index];
    detail.innerHTML = `
      <span class="tag">Улуттук түшүнүк</span>
      <h3>${item.word}</h3>
      <p>${item.definition}</p>
      <p style="margin-top: 1rem; font-weight: 700; color: var(--navy);">Мисал: ${item.usage}</p>
    `;

    list.querySelectorAll('.term-button').forEach((btn) => {
      btn.classList.toggle('active', Number(btn.dataset.termIndex) === index);
    });
  };

  list.querySelectorAll('.term-button').forEach((button) => {
    button.addEventListener('click', () => {
      updateDetail(Number(button.dataset.termIndex));
    });
  });

  updateDetail(0);
};

const renderQuiz = () => {
  const quizCard = document.getElementById('quizCard');
  if (!quizCard) return;

  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  const showQuestion = () => {
    answered = false;
    const current = quizQuestions[currentQuestion];
    quizCard.innerHTML = `
      <div class="quiz-top">
        <div class="quiz-progress">Суроо ${currentQuestion + 1}/${quizQuestions.length}</div>
        <div class="quiz-score">Балл: ${score}</div>
      </div>
      <h3 class="quiz-question">${current.question}</h3>
      <div class="quiz-options">
        ${current.options
          .map(
            (option, optionIndex) => `
              <button class="quiz-option" data-option-index="${optionIndex}">${option}</button>
            `
          )
          .join('')}
      </div>
      <div class="quiz-feedback" aria-live="polite"></div>
      <div class="quiz-actions">
        <button class="btn btn-primary next-btn" style="display:none;">Кийинки</button>
      </div>
    `;

    quizCard.querySelectorAll('.quiz-option').forEach((button) => {
      button.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const selectedIndex = Number(button.dataset.optionIndex);
        const correctIndex = current.answer;
        const buttons = Array.from(quizCard.querySelectorAll('.quiz-option'));

        buttons.forEach((btn) => {
          btn.disabled = true;
          const isCorrect = Number(btn.dataset.optionIndex) === correctIndex;
          if (isCorrect) btn.classList.add('correct');
        });

        const feedback = quizCard.querySelector('.quiz-feedback');
        const nextButton = quizCard.querySelector('.next-btn');

        if (selectedIndex === correctIndex) {
          score += 1;
          feedback.textContent = 'Дурыс! Жакшы билим көрсөткөнүңүз.';
          feedback.style.color = '#1b6a3f';
        } else {
          feedback.textContent = `Туура жооп: «${current.options[correctIndex]}»`;
          feedback.style.color = '#7d352d';
          button.classList.add('incorrect');
        }

        const scoreLabel = quizCard.querySelector('.quiz-score');
        scoreLabel.textContent = `Балл: ${score}`;
        nextButton.style.display = 'inline-flex';
      });
    });

    quizCard.querySelector('.next-btn')?.addEventListener('click', () => {
      currentQuestion += 1;
      if (currentQuestion < quizQuestions.length) {
        showQuestion();
      } else {
        showResult();
      }
    });
  };

  const showResult = () => {
    let title = 'Чыныгы Көчмөн';
    let message = 'Сиздин билим деңгээли жогору. Кыргыз маданияты жана салттуу оюндар жөнүндө чындап ишенген жандар сыяктуу.';

    if (score <= 2) {
      title = 'Жаңадан жолго чыккан';
      message = 'Көчмөн руху менен таанышуусуңуз дагы улануы керек. Кичине кадам менен окуу жана үйрөнүү менен жогорулатасыз.';
    } else if (score === 3) {
      title = 'Жолдо турган жашыл үй';
      message = 'Жакшы баскычтасыз. Кыргыз тили жана салттык баалуулуктарды көбүрөөк үйрөнсөңүз, асыл билимге көбүрөөк жакындайсыз.';
    } else if (score === 4) {
      title = 'Жадыраган мүрдүктү';
      message = 'Сиздин билим жакшы деңгээлде. Улуу мурасты сактоонун жана таратууңуздун мааниси чоң.';
    }

    quizCard.innerHTML = `
      <div class="quiz-result">
        <h3>${title}</h3>
        <div class="result-score">${score}/${quizQuestions.length} балл</div>
        <p class="result-message">${message}</p>
        <div class="quiz-actions" style="justify-content:center; margin-top:1.5rem;">
          <button class="btn btn-primary" id="restartQuiz">Кайра баштан</button>
        </div>
      </div>
    `;

    document.getElementById('restartQuiz')?.addEventListener('click', () => {
      currentQuestion = 0;
      score = 0;
      showQuestion();
    });
  };

  showQuestion();
};

const initRevealAnimations = () => {
  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
};

const initCounters = () => {
  const counters = document.querySelectorAll('[data-counter]');
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.counter);
        const startTime = performance.now();
        const duration = 1500;

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          el.textContent = Math.floor(progress * target).toLocaleString('ru-RU');
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => observer.observe(counter));
};

const openModal = (game) => {
  const modal = document.getElementById('gameModal');
  const modalContent = document.getElementById('modalContent');
  if (!modal || !modalContent) return;

  modalContent.className = 'modal-content';
  modalContent.innerHTML = `
    <h3 id="modalTitle">${game.name}</h3>
    <div class="modal-meta">
      <span>${game.category}</span>
      <span>Салттуу оюн</span>
    </div>
    <div class="modal-layout">
      <div>
        <img src="${game.image}" alt="${game.name}" />
        <div class="video-frame">
          <iframe src="${game.video}" title="${game.name} видеосу" loading="lazy" allowfullscreen></iframe>
        </div>
      </div>
      <div>
        <p>${game.summary}</p>
        <ul>
          ${game.rules.map((rule) => `<li>${rule}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
};

const closeModal = () => {
  const modal = document.getElementById('gameModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};

const initMobileNav = () => {
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '×' : '☰';
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  renderGames();
  renderGameDetail();
  renderGlossary();
  renderQuiz();
  initRevealAnimations();
  initCounters();
  initMobileNav();
  window.Fancybox?.bind('[data-fancybox="gallery"]');

  document.querySelector('.modal-close')?.addEventListener('click', closeModal);
  document.querySelector('[data-close="true"]')?.addEventListener('click', closeModal);

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });
});
