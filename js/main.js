const games = [
  {
    name: 'Көк бөрү',
    category: 'Ат спорту',
    image: 'assets/images/sports/kok-boru.jpg',
    desc: 'Ат үстүндөгү ылдамдык, тактика жана кайраттуулук мелдеши.',
    summary: 'Көк бөрү — көчмөндөрдүн эң белгилүү ат спорту. Бул оюнда улакчылар аттын ылдамдыгын, командалык тактиканы жана атка ээлик кылуу чеберчилигин сынайт.',
    rules: [
      'Команда 2ден 4кө чейин улакчыдан турат.',
      'Оюн атайын эрежелерге ылайык, калыстардын көзөмөлү астында өткөрүлөт.',
      'Бардык жүрүштөр командалык биримдик жана тактикалык чеберчилик менен аткарылат.',
      'Жеңиш — тактык, ылдамдык жана атка ээлик кылуу күчүнө байланыштуу.'
    ],
    video: 'https://www.youtube.com/embed/7UBtbT1zU4g?si=4obwd4S8X4WG7LPY'
  },
  {
    name: 'Эр эңиш',
    category: 'Күрөш',
    image: 'assets/images/sports/er-enish.jpg',
    desc: 'Ат үстүндө күрөшүү. Кайрат, эрк жана сабырдуулук мелдеши.',
    summary: 'Эр эңиш — көчмөндөрдүн байыркы күрөш өнөрү. Бул мелдеш жигиттерден күчтү, шамдагайлыкты жана сүрүп түшүрүү ыкмаларын талап кылат.',
    rules: [
      'Тең салмактуулукту сактоо жана тактикалык позиция эң маанилүү.',
      'Күч, шамдагайлык жана туура кармашуу ыкмалары колдонулат.',
      'Мелдеш учурунда жүрүм-турум адеби сакталып, эреже бузууга жол берилбейт.',
      'Атаандашты атынан оодарып түшүрүү негизги максат болуп саналат.'
    ],
    video: 'https://www.youtube.com/embed/3rYXeRJm5rM?si=9A0R3tl7nwKUw4dN'
  },
  {
    name: 'Тогуз коргоол',
    category: 'Логика',
    image: 'assets/images/sports/toguz-korgool.jpg',
    desc: 'Акыл, тактык жана стратегиялык ой жүгүртүү.',
    summary: 'Тогуз коргоол — оюнчунун акыл-эсин, стратегиялык жана логикалык ой жүгүртүүсүн сынай турган классикалык интеллектуалдык оюн.',
    rules: [
      'Оюн тактасындагы үйлөрдүн ичинде стратегиялык жүрүштөр жасалат.',
      'Жүрүштөрдү алдын ала пландаштыруу жана туура эсептөө зарыл.',
      'Утуп алган коргоолдорду чогултуу аркылуу жеңүүчү аныкталат.',
      'Оюнда сабырдуулук, кунт коюу жана эсептөө тактыгы негизги орунда.'
    ],
    video: 'https://www.youtube.com/embed/5R43M0B1ec8?si=0qZKXc1z9NzNaK4P'
  },
  {
    name: 'Алыш (Эркин стиль)',
    category: 'Күрөш',
    image: 'assets/images/sports/alysh.jpg',
    desc: 'Белбоодон кармап күрөшүү, эпчилдик жана намыс.',
    summary: 'Алыш — көчмөндөрдүн салттуу күрөшүнүн эркин стилдеги түрү. Мында балбандардан күч-кубат, эпчилдик жана техникалык чеберчилик талап кылынат.',
    rules: [
      'Күчтүү, бирок таза техниканы колдонуу шарт.',
      'Белбоодон ажырабай, бекитилген эрежелерге ылайык күрөшүү талап кылынат.',
      'Атаандашты жыгып, далысын жерге тийгизүү — башкы максат.',
      'Калыс жана таза күрөшүү негизги принцип болуп саналат.'
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
    name: 'Салбуурун (Бүркүт салуу)',
    category: 'Аңчылык өнөрү',
    image: 'assets/images/sports/salbuu-run.jpg',
    desc: 'Бүркүт салуу жана мергенчилик салты.',
    summary: 'Салбуурун — кыргыздын байыркы аңчылык маданиятын камтыган комплекстүү өнөр. Анда алгыр куш таптоо жана мергенчилик ыкмалары бааланат.',
    rules: [
      'Куштун тапталгандыгы, башкарылышы эске алынат.',
      'Мергенчилик ыкмалары коопсуздук эрежелери менен көрсөтүлөт.',
      'Кушка жана жаныбарга аяр мамиле кылуу негизги талап болуп саналат.',
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
  },
  {
    name: 'Көк пар',
    category: 'Ат спорту',
    image: 'assets/images/sports/kok-par.jpg',
    desc: 'Түрк элдеринин ат үстүндөгү туулуп-өскөн командалык мелдеши.',
    summary: 'Көк пар — салттуу аймактык эрежелер боюнча өткөрүлүүчү, ат үстүндө улак тартышуу мелдеши.',
    rules: [
      'Командалар белгиленген убакыттын ичинде улакты казанга таштоосу керек.',
      'Чабандестердин атка ээлик кылуусу жана күчү маанилүү орунду ээлейт.',
      'Эрежелер калыстар тарабынан бекем көзөмөлдөнөт.'
    ],
    video: ''
  },
  {
    name: 'Жорго салыш',
    category: 'Ат спорту',
    image: 'assets/images/sports/at-chabysh.jpg',
    desc: 'Жорго аттардын ыргыбай, бир калыпта күлүктүгүн сыноо.',
    summary: 'Жорго салыш — аттын жорго жүрүшүн сактоо менен ылдамдыкты көрсөтүүчү өзгөчө улуттук жарыш.',
    rules: [
      'Ат жарыш учурунда чаппастан, жорго жүрүшүн гана сакташы керек.',
      'Эгер ат чаап кетсе, айып упайлары берилет.',
      'Белгиленген аралыкты биринчи келген жорго жеңүүчү аталат.'
    ],
    video: ''
  },
  {
    name: 'Кунан чабыш',
    category: 'Ат спорту',
    image: 'assets/images/sports/kyz-kuumai.jpg',
    desc: 'Эки жашар кунандардын арасындагы жарыш.',
    summary: 'Кунан чабыш — жаш күлүктөрдүн чыдамкайлыгын жана келечегин аныктай турган мелдеш.',
    rules: [
      'Мелдешке 2 жаштагы кунандар катышат.',
      'Аралык кунандардын жашына ылайык белгиленет.',
      'Марага биринчи келген кунан жеңишке жетет.'
    ],
    video: ''
  },
  {
    name: 'Аламан чабыш',
    category: 'Ат спорту',
    image: 'assets/images/sports/kok-boru.jpg',
    desc: 'Эң узак аралыкка өткөрүлүүчү массалык ат жарышы.',
    summary: 'Аламан чабыш — эң чыдамкай тукумдагы аттардын ондогон чакырымга созулган масштабдуу жарышы.',
    rules: [
      '20дан 50 чакырымга чейинки узак аралык белгиленет.',
      'Чабандестен аттын кубатын туура бөлүштүрүү талап кылынат.',
      'Жеңүүчү мара сызыгын биринчи кесип өткөн ат болот.'
    ],
    video: ''
  },
  {
    name: 'Кыз куумай',
    category: 'Ат оюну',
    image: 'assets/images/sports/kyz-kuumai.jpg',
    desc: 'Жигит менен кыздын ат үстүндөгү шайыр мелдеши.',
    summary: 'Кыз куумай — кыргыздын байыркы үрп-адатын камтыган, жигит менен кыздын шайдоот жарышы.',
    rules: [
      'Адегенде кыз алдыга чыгат, жигит артынан кууп жетип өбүшү керек.',
      'Кайтаарда кыз жигитти кууп, камчы менен жетүүгө аракет кылат.',
      'Чабандестердин ылдамдыгы жана чеберчилиги бааланат.'
    ],
    video: ''
  },
  {
    name: 'Жамбы атуу (Атчан)',
    category: 'Жаа атуу өнөрү',
    image: 'assets/images/sports/zhamby-atuu.jpg',
    desc: 'Ат чаап баратып бутага жаа атуу мелдеши.',
    summary: 'Жамбы атуу — чабандестин ат үстүндө чаап баратып тактык менен жаа атуу чеберчилигин сынайт.',
    rules: [
      'Чабандес атты чаптырып баратып белгиленген бутаны атуусу шарт.',
      'Так тийгизүү жана убакыттын ылдамдыгы эсепке алынат.',
      'Эң жогорку балл алган мерген жеңүүчү болот.'
    ],
    video: ''
  },
  {
    name: 'Салттуу жаа атуу (Жөө)',
    category: 'Жаа атуу өнөрү',
    image: 'assets/images/sports/jaa-atuu.jpg',
    desc: 'Ар кандай аралыктардан салттуу жаа менен атуу.',
    summary: 'Жөө салттуу жаа атуу — мергенчилик жана аскердик өнөрдүн байыркы ыкмаларын кайра жандантат.',
    rules: [
      'Атайын жыгач же сөөк жаалар колдонулат.',
      'Түрдүү аралыктагы буталарга так атуу талап кылынат.',
      'Упайлардын суммасы боюнча жеңүүчү аныкталат.'
    ],
    video: ''
  },
  {
    name: 'Салбуурун (Ылачын салуу)',
    category: 'Аңчылык өнөрү',
    image: 'assets/images/sports/salbuu-run.jpg',
    desc: 'Ылачын кушунун ылдамдыгын жана тактыгын сыноо.',
    summary: 'Ылачын салуу — алгыр куштун абада жемге кол салуу ылдамдыгын көрсөтүүчү мелдеш.',
    rules: [
      'Куштун чакырууга келиши жана жемди кармоо ылдамдыгы ченелет.',
      'Кушка мээримдүү мамиле жана тапталганы бааланат.'
    ],
    video: ''
  },
  {
    name: 'Салбуурун (Тайган жарыш)',
    category: 'Аңчылык өнөрү',
    image: 'assets/images/sports/taigan-zharysh.jpg',
    desc: 'Кыргыз тайгандарынын ылдамдык жарышы.',
    summary: 'Тайган жарыш — кыргыз породасындагы мерген иттердин жасалма жемдин артынан чуркоо мелдеши.',
    rules: [
      'Тайгандар белгиленген аралыкта жасалма жемди кууйт.',
      'Марага биринчи жеткен тайган жеңүүчү аталат.'
    ],
    video: ''
  },
  {
    name: 'Кыргыз күрөшү',
    category: 'Күрөш',
    image: 'assets/images/sports/kyrgyz-kuresh.jpg',
    desc: 'Улуттук кур күрөш өнөрү.',
    summary: 'Кыргыз күрөшү — курдан кармап, түрдүү ыкмалар менен атаандашты далыга тийгизүү мелдеши.',
    rules: [
      'Балбандар курдан кармап күрөшөт.',
      'Атаандашты таза жыгуу башкы максат.',
      'Калыстар таза ыкмаларды баалайт.'
    ],
    video: ''
  },
  {
    name: 'Казак куреси',
    category: 'Күрөш',
    image: 'assets/images/sports/alysh.jpg',
    desc: 'Тик туруп кармашкан казактын салттуу күрөшү.',
    summary: 'Казак куреси — тик туруп күрөшүүдө чалуу, сүрүү жана аңтаруу ыкмаларын камтыган улуттук спорт.',
    rules: [
      'Күрөш кийимден кармап, тик абалда өткөрүлөт.',
      'Далыны жерге тийгизген балбан жеңет.'
    ],
    video: ''
  },
  {
    name: 'Татарча корэш',
    category: 'Күрөш',
    image: 'assets/images/sports/mas-wrestling.jpg',
    desc: 'Сүлгү же белбоо менен көтөрүп чабуу күрөшү.',
    summary: 'Корэш — сүлгү же белбоо менен атаандашты өйдө көтөрүп чабуу ыкмасына негизделген күрөш.',
    rules: [
      'Атаандашты белбоодон бошотпой күрөшүү шарт.',
      'Эң таза көтөрүп чабуу жогору бааланат.'
    ],
    video: ''
  },
  {
    name: 'Ашыртмалы аба күрөшү',
    category: 'Күрөш',
    image: 'assets/images/sports/er-enish.jpg',
    desc: 'Түрк элдеринин күчкө жана ыкмага негизделген күрөшү.',
    summary: 'Аба күрөшү — атайын кийимдерде эпчилдик жана чабуул ыкмаларын көрсөтүүчү мелдеш.',
    rules: [
      'Эрежеге ылайык кармашып, тең салмактуулукту бузуу талап кылынат.'
    ],
    video: ''
  },
  {
    name: 'Пахлавани',
    category: 'Күрөш',
    image: 'assets/images/sports/pahlavani.jpg',
    desc: 'Перс салттуу баатырдык күрөшү.',
    summary: 'Пахлавани өнөрү — күч-кубатты, адеп-ахлакты жана физикалык даярдыкты камтыган байыркы күрөш.',
    rules: [
      'Мээримдүү жана таза күрөшүү негизги эреже болуп саналат.'
    ],
    video: ''
  },
  {
    name: 'Ашырмалы күрөш',
    category: 'Күрөш',
    image: 'assets/images/sports/ashyrmaly-kuresh.jpg',
    desc: 'Белбоо аркылуу ашыра чабуу күрөшү.',
    summary: 'Ашырмалы күрөштө балбан атаандашын өзүнөн ашыра ыргытуу ыкмасын чеберчилик менен аткарат.',
    rules: [
      'Ийгиликтүү ашыра чабуу дароо жеңишти камсыз кылат.'
    ],
    video: ''
  },
  {
    name: 'Алыш (Классикалык стиль)',
    category: 'Күрөш',
    image: 'assets/images/sports/alysh-classic.jpg',
    desc: 'Классикалык эрежелер боюнча белбоо күрөшү.',
    summary: 'Алыш күрөшүнүн классикалык түрүндө атайын чектелген кармоо ыкмалары колдонулат.',
    rules: [
      'Буттан кармоого жол берилбейт, тек белбоо аркылуу ыкма жасалат.'
    ],
    video: ''
  },
  {
    name: 'Салттуу самбо',
    category: 'Күрөш',
    image: 'assets/images/sports/traditional-sambo.jpg',
    desc: 'Элдик коргонуу өнөрүнүн мелдеши.',
    summary: 'Салттуу самбо мелдеши коргонуу жана чабуул ыкмаларын айкалыштырат.',
    rules: [
      'Упайлар кармашуу жана жыгуу техникасы үчүн берилет.'
    ],
    video: ''
  },
  {
    name: 'Мас-рестлинг (Таяк тартыш)',
    category: 'Күч мелдеши',
    image: 'assets/images/sports/mas-wrestling.jpg',
    desc: 'Жыгач таякчаны сууруп алуу мелдеши.',
    summary: 'Таяк тартыш — эки спортчу атайын тосмодон буттарын таяп, жыгач таякты өз тарабына тартып алуу мелдеши.',
    rules: [
      'Таякты колдон чыгарбай же атаандашты өз тарабына тартып өтүү керек.',
      'Эки раундда жеңген спортчу жеңүүчү аталат.'
    ],
    video: ''
  },
  {
    name: 'Аркан тартыш',
    category: 'Күч мелдеши',
    image: 'assets/images/sports/arkan-tartysh.jpg',
    desc: 'Командалык күч жана ынтымак мелдеши.',
    summary: 'Аркан тартыш — эки команда жоон арканды белгиленген сызыктан өз тарабына тартып алуу үчүн мелдешет.',
    rules: [
      'Командалар бирдей сандагы катышуучулардан турат.',
      'Белгиленген сызыктан ашыра тарткан команда жеңишке жетет.'
    ],
    video: ''
  },
  {
    name: 'Мангала',
    category: 'Логика',
    image: 'assets/images/sports/mangala.jpg',
    desc: 'Түрк элдеринин байыркы логикалык оюну.',
    summary: 'Мангала — доскадагы 12 үйдүн ичинде таштарды бөлүштүрүү аркылуу ойнолуучу стратегиялык оюн.',
    rules: [
      'Көбүрөөк таш чогулткан оюнчу жеңүүчү аталат.'
    ],
    video: ''
  },
  {
    name: 'Овари',
    category: 'Логика',
    image: 'assets/images/sports/owari.jpg',
    desc: 'Манкала үй-бүлөсүнө кирген интеллектуалдык оюн.',
    summary: 'Овари оюну так эсептөөнү жана атаандаштын жүрүшүн алдын ала чамалоону талап кылат.',
    rules: [
      'Таштарды туура бөлүштүрүп, көп упай топтоо негизги максат.'
    ],
    video: ''
  },
  {
    name: 'Ордо',
    category: 'Элдик оюн',
    image: 'assets/images/sports/ordo.jpg',
    desc: 'Кыргыз элинин аскердик-стратегиялык асык оюну.',
    summary: 'Ордо — ханды таатынан кулатуу жана ордодон чүкөлөрдү атып чыгаруу тактикалык улуттук оюну.',
    rules: [
      'Томпой менен чүкөлөрдү тегеректен атып чыгаруу керек.',
      'Командалык тактика жана мергендик чечүүчү мааниге ээ.'
    ],
    video: ''
  },
  {
    name: 'Асык атуу',
    category: 'Элдик оюн',
    image: 'assets/images/sports/asyk-atuu.jpg',
    desc: 'Чүкө атуу жана тактык мелдештери.',
    summary: 'Асык атуу — балдардан баштап чоңдорго чейин ойнолуучу, колдун мергендигин жана тактыгын өнүктүрүүчү оюн.',
    rules: [
      'Белгиленген аралыктан асыкты сүзүп атуу талап кылынат.'
    ],
    video: ''
  },
  {
    name: 'Беш ашык',
    category: 'Элдик оюн',
    image: 'assets/images/sports/besh-ashyk.jpg',
    desc: 'Кыз-келиндердин шамдагай чүкө оюну.',
    summary: 'Беш ашык — беш чүкөнү абага ыргытып, колдун шамдагайлыгы менен тосуп алуу мелдеши.',
    rules: [
      'Чүкөлөрдү жерге түшүрбөй тосуп алуу шарт.'
    ],
    video: ''
  },
  {
    name: 'Билек күчүн сыноо (Армрестлинг)',
    category: 'Күч мелдеши',
    image: 'assets/images/sports/bilek-kuresh.jpg',
    desc: 'Кол күрөшү жана билек кубаты.',
    summary: 'Билек күрөшүндө спортчулар атайын үстөлдө колдун жана билектин күчүн сынайт.',
    rules: [
      'Атаандаштын колун үстөл жастыгына тийгизүү керек.'
    ],
    video: ''
  },
  {
    name: 'Таш көтөрүү',
    category: 'Күч мелдеши',
    image: 'assets/images/sports/tash-kotorush.jpg',
    desc: 'Элдик баатырлардын оор таш көтөрүү өнөрү.',
    summary: 'Таш көтөрүү — оор таштарды ийинге көтөрүү же белгиленген аралыкка алып баруу мелдеши.',
    rules: [
      'Эң оор ташты көтөргөн же узак аралыкка алып барган балбан жеңет.'
    ],
    video: ''
  },
  {
    name: 'Оордуктарды алып жүрүү',
    category: 'Күч мелдеши',
    image: 'assets/images/sports/orduk-tashuu.jpg',
    desc: 'Дөөпөрөстөрдүн оор жүктөрдү ташуу мелдеши.',
    summary: 'Оордук ташуу — спортчулардын физикалык чыдамкайлыгын жана булчуң күчүн сынайт.',
    rules: [
      'Белгиленген салмактагы жүктү ылдам ташуу талап кылынат.'
    ],
    video: ''
  },
  {
    name: 'Найза ыргытуу',
    category: 'Мергенчилик өнөрү',
    image: 'assets/images/sports/naiza-atuu.jpg',
    desc: 'Салттуу найзаны тактыкка ыргытуу.',
    summary: 'Найза ыргытуу — байыркы жоокерлик өнөрдүн уланышы катары алыстыкка жана бутага найза ыргытуу мелдеши.',
    rules: [
      'Бутага так тийгизген же эң алыс ыргыткан катышуучу жеңүүчү болот.'
    ],
    video: ''
  },
  {
    name: 'Бычак ыргытуу',
    category: 'Мергенчилик өнөрү',
    image: 'assets/images/sports/bychak-yrgytuu.jpg',
    desc: 'Бычакты бутага так ыргытуу чеберчилиги.',
    summary: 'Бычак ыргытуу — колдун айласын жана көздүн мергендигин талап кылган тактык оюну.',
    rules: [
      'Белгиленген аралыктан бычакты бутанын ортосуна саюу керек.'
    ],
    video: ''
  },
  {
    name: 'Лассо / Аркан атуу',
    category: 'Ат спорту',
    image: 'assets/images/sports/lasso.jpg',
    desc: 'Ат үстүндө аркан менен чалуу чеберчилиги.',
    summary: 'Аркан атуу — чабандестин ат чабышта бараткан жаныбарды аркан менен так тосуп алуу өнөрү.',
    rules: [
      'Белгиленген максатты аркан менен так илип алуу керек.'
    ],
    video: ''
  },
  {
    name: 'Көөкөр атуу',
    category: 'Элдик оюн',
    image: 'assets/images/sports/kookor-atuu.jpg',
    desc: 'Сыйынтыктай форма берилген бутага таш же асык ыргытуу.',
    summary: 'Көөкөр атуу — көөкөр формасындагы бутага асык же таш ыргытуу аркылуу уткандарды аныктоо.',
    rules: [
      'Бутага эң көп упай топтоо негизги максат.'
    ],
    video: ''
  },
  {
    name: 'Тоо мергенчилиги',
    category: 'Аңчылык өнөрү',
    image: 'assets/images/sports/too-mergen.jpg',
    desc: 'Тоо шарттарында салттуу багыт табуу жана атуу.',
    summary: 'Тоо мергенчилиги — татаал рельефте чыдамкайлыкты жана мергенчиликти сынайт.',
    rules: [
      'Маршрутту толук өтүп, буталарды туура атуу керек.'
    ],
    video: ''
  },
  {
    name: 'Этно-күрөш',
    category: 'Күрөш',
    image: 'assets/images/sports/alysh.jpg',
    desc: 'Эл аралык салттуу күрөш түрлөрүнүн синтези.',
    summary: 'Этно-күрөш — ар түрдүү өлкөлөрдүн улуттук күрөш мектептеринин жалпы эрежеде жолугушуусу.',
    rules: [
      'Калыстар тарабынан бекитилген бирдиктүү этно-эрежелер колдонулат.'
    ],
    video: ''
  },
  {
    name: 'Аркан качуу',
    category: 'Элдик оюн',
    image: 'assets/images/sports/arkan-kachuu.jpg',
    desc: 'Шамдагайлык жана ылдамдык мелдеши.',
    summary: 'Аркан качуу — аркан тоскоолдуктарынан ылдам өтүү боюнча шайыр улуттук мелдеш.',
    rules: [
      'Тоскоолдуктарга тийбей ылдам өтүү талап кылынат.'
    ],
    video: ''
  },
  {
    name: 'Баатырлар мелдеши',
    category: 'Күч мелдеши',
    image: 'assets/images/sports/baatyrlar.jpg',
    desc: 'Комплекстүү этно-күч мелдеши.',
    summary: 'Баатырлар мелдеши — таш көтөрүү, таяк тартыш жана аркан тартууну бириктирген оор мелдеш.',
    rules: [
      'Бардык күч сыноолорунун жыйынтыгы боюнча эң күчтүү баатыр аныкталат.'
    ],
    video: ''
  }
];

const glossaryData = [
  {
    word: 'Ынтымак',
    category: 'Баалуулуктар',
    short: 'Биримдик, достук жана жалпы максат',
    definition: 'Көчмөндөрдүн жашоосунда жалпы максат, тил, адеп-ахлак жана өз ара түшүнүшүү элди бириктирет. Бул сөз улуттук маданияттын негизин түзөт.',
    usage: '«Биздин күчүбүз — ынтымакта жана биримдикте».'
  },
  {
    word: 'Кырчын',
    category: 'Жер жана турак жай',
    short: 'Жайлоо, көчмөндөрдүн мекени',
    definition: 'Көчмөндөрдүн турак жайына, мал багууга жана айылдык жашоосуна байланыштуу касиеттүү конуш. Кырчын — элдин турмушунун жана рухунун өзөгү.',
    usage: '«Кырчын жайлоосунда улуттук рух жана кут өкүм сүрөт».'
  },
  {
    word: 'Боз үй',
    category: 'Жер жана турак жай',
    short: 'Улуттук турак жай, руханий мекен',
    definition: 'Көчмөндөрдүн турак жайынын символикалык түрү. Боз үй — меймандостуктун, урмат-сыйдын жана салт-санаанын ажырагыс үлгүсү.',
    usage: '«Боз үйдүн ичинде конок тосулуп, салт-санаа даңазаланат».'
  },
  {
    word: 'Көк бөрү',
    category: 'Улуттук спорт',
    short: 'Ат спортунун туу чокусу',
    definition: 'Шамдагайлыкты, туруктуулукту жана атка ээлик кылууну талап кылган улуттук ат спорту.',
    usage: '«Көк бөрү — кыргыз элинин эр жүрөктүүлүгүнүн символу».'
  },
  {
    word: 'Эр эңиш',
    category: 'Улуттук спорт',
    short: 'Ат үстүндөгү мелдеш өнөрү',
    definition: 'Ат үстүндөгү күрөштүн өзгөчө түрү. Мында балбандардан шамдагайлык, тең салмактуулук жана чыдамкайлык талап кылынат.',
    usage: '«Эр эңиш — жигиттердин күчүн жана айласын сынайт».'
  },
  {
    word: 'Тогуз коргоол',
    category: 'Акыл оюндары',
    short: 'Элдик интеллектуалдык оюн',
    definition: 'Логикалык, стратегиялык жана математикалык ой жүгүртүүнү өнүктүргөн байыркы көчмөндөр оюну.',
    usage: '«Тогуз коргоол — акыл менен сабырдуулуктун мелдеши».'
  },
  {
    word: 'Алыш',
    category: 'Улуттук спорт',
    short: 'Белбоо күрөшү',
    definition: 'Кыргыз элинин салттуу күрөшүнүн түрү. Мында балбандар атайын белбоодон кармап күрөшүшөт.',
    usage: '«Алыш күрөшүндө таза техника жана намыс бааланат».'
  },
  {
    word: 'Ат чабыш',
    category: 'Улуттук спорт',
    short: 'Узак аралыкка жарышуу',
    definition: 'Аттардын чыдамкайлыгын жана чабандестин тактикасын сынаган алыс аралыктагы ат жарышы.',
    usage: '«Ат чабышта күлүктөрдүн тапталганы байкалат».'
  },
  {
    word: 'Оодарыш',
    category: 'Улуттук спорт',
    short: 'Атчан эңишүү өнөрү',
    definition: 'Эки чабандес ат үстүндө атаандашын тең салмактан чыгарып, оодарып түшүрүүгө багытталган мелдеш.',
    usage: '«Оодарышта шамдагайлык менен тең салмак негизги».'
  },
  {
    word: 'Салбуурун',
    category: 'Аңчылык жана жаныбарлар',
    short: 'Мергенчилик маданияты',
    definition: 'Бүркүт, ылачын салуу, тайган агытуу жана жаа атуу өнөрлөрүн камтыган байыркы аңчылык салты.',
    usage: '«Салбуурунда адам менен табияттын гармониясы көрүнөт».'
  },
  {
    word: 'Түндүк',
    category: 'Жер жана турак жай',
    short: 'Боз үйдүн туу чокусу',
    definition: 'Боз үйдүн туу чокусундагы тегерек жыгач алкак. Жарык киргизүүчү жана биримдикти билдирүүчү ыйык белги.',
    usage: '«Түндүгүбүз ачык, коломтобуз өчпөсүн».'
  },
  {
    word: 'Шырдак',
    category: 'Өнөр жана кол өнөрчүлүк',
    short: 'Кол өнөрчүлүк кийизи',
    definition: 'Кыргыз аялдарынын кол өнөрчүлүк чеберчилигинен жаралган, түркүн оюм-чийимдери бар кийиз килем.',
    usage: '«ЮНЕСКОнун мурастарына кирген шырдак — улуттук сыймык».'
  },
  {
    word: 'Комуз',
    category: 'Өнөр жана кол өнөрчүлүк',
    short: 'Үч кылдуу салттуу аспап',
    definition: 'Өрүк жыгачынан чабылып жасалган кыргыздын эң белгилүү улуттук чертме музыкалык аспабы.',
    usage: '«Комуздун күүсү кылымдардын үнүн жеткирет».'
  },
  {
    word: 'Ак калпак',
    category: 'Өнөр жана кол өнөрчүлүк',
    short: 'Улуттук баш кийим',
    definition: 'Ак кийизден жасалган, Ала-Тоонун чокусун элестеткен кыргыз эркектеринин улуттук баш кийими.',
    usage: '«Ак калпак — Ала-Тоонун жана абийирдин символу».'
  },
  {
    word: 'Манас',
    category: 'Оозеки мурас',
    short: 'Улуу баатырдык эпос',
    definition: 'Кыргыз элинин тарыхын, философиясын, үрп-адатын камтыган дүйнөдөгү эң көлөмдүү баатырдык эпос.',
    usage: '«Манас эпосу — кыргыз рухунун туу чокусу».'
  },
  {
    word: 'Бешбармак',
    category: 'Улуттук тамак-аш',
    short: 'Сыйлуу конок тамагы',
    definition: 'Улуттук меймандостук салтында конокторго тартуулануучу тууралган эт менен камырдан турган даам.',
    usage: '«Кыргыз дасторкону бешбармаксыз толук болбойт».'
  },
  {
    word: 'Кымыз',
    category: 'Улуттук тамак-аш',
    short: 'Бээнин дарылык суусундугу',
    definition: 'Жайлоодо бээнин сүтүн атайын сабага ачытып даярдалуучу ден соолукка пайдалуу улуттук суусундук.',
    usage: '«Кымыз — адамга кубат берген асыл суусундук».'
  },
  {
    word: 'Тайган',
    category: 'Аңчылык жана жаныбарлар',
    short: 'Кыргыздын мерген ити',
    definition: 'Тоолуу шартта ылдам чуркоого жана аң уулоого ылайыкташкан кыргыздын байыркы породалуу ити.',
    usage: '«Тайган — салбуурун мелдешинин ажырагыс катышуучусу».'
  },
  {
    word: 'Мурас',
    category: 'Баалуулуктар',
    short: 'Муундан муунга калган казына',
    definition: 'Ата-бабалардан калган улуттук баалуулуктар, каада-салт, оозеки чыгармачылык жана маданий байлык.',
    usage: '«Мурасты сактоо — келечекке жол ачуу».'
  },
  {
    word: 'Меймандостук',
    category: 'Баалуулуктар',
    short: 'Элдик тарбия жана адеп',
    definition: 'Үйгө келген конокту улутуна жана жашына карабай төргө чыгарып, сыйлоо салты.',
    usage: '«Кыргыз элинин меймандостугу дүйнөгө белгилүү».'
  }
];

const quizQuestions = [
  {
    question: 'Көчмөндөр оюндары негизинен кандай мааниге ээ?',
    options: [
      'Маданият, спорт жана руханий баалуулуктарды бириктирет',
      'Бир гана компьютердик оюндарга байланыштуу',
      'Бир гана музыкалык фестиваль',
      'Бир гана кесиптик семинар'
    ],
    answer: 0
  },
  {
    question: 'Кыргыз тилин сайттын негизги тили катары колдонуу эмне үчүн маанилүү?',
    options: [
      'Жаштар үчүн тилди үйрөтүү, сактоо жана даңазалоо',
      'Сайтты тосуу',
      'Бир гана ат спортуна арналган',
      'Фильмге байланыштуу'
    ],
    answer: 0
  },
  {
    question: 'Тогуз коргоол кандай жөндөмдү өнүктүрөт?',
    options: [
      'Стратегиялык ой жүгүртүү, логика жана сабырдуулук',
      'Бир гана ылдам чуркоо',
      'Бир гана музыкалык угуу',
      'Бир гана автожарыш'
    ],
    answer: 0
  },
  {
    question: 'Боз үй кандай мааниге ээ?',
    options: [
      'Көчмөндөрдүн руханий мекени, салттын символу',
      'Дүйнөнүн ызы-чуусу',
      'Жөнөкөй имарат',
      'Жөнөкөй базар'
    ],
    answer: 0
  },
  {
    question: 'Көчмөндөр оюндарына кандай багыттар кирет?',
    options: [
      'Маданият, спорт, тил жана музыкалык мурас',
      'Бир гана вирустук маркетинг',
      'Бир гана бизнес-конференциялар',
      'Бир гана тоо-кен тармагы'
    ],
    answer: 0
  }
];

const renderGames = () => {
  const container = document.getElementById('gamesGrid');
  if (!container) return;

  const path = decodeURIComponent(window.location.pathname);
  const isSportsPage = path.includes('спорт');
  const gamesToRender = isSportsPage ? games : games.slice(0, 4);

  container.innerHTML = gamesToRender
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

  const path = decodeURIComponent(window.location.pathname);
  const isTermsPage = path.includes('терминдер');
  const termsToRender = isTermsPage ? glossaryData : glossaryData.slice(0, 4);

  let filters = document.getElementById('termFilters');
  if (isTermsPage && !filters) {
    const browser = document.createElement('div');
    browser.className = 'term-browser';
    list.parentNode.insertBefore(browser, list);
    browser.appendChild(list);
    filters = document.createElement('div');
    filters.id = 'termFilters';
    filters.className = 'term-filters';
    filters.setAttribute('aria-label', 'Терминдердин категориялары');
    browser.insertBefore(filters, list);
  }
  const categories = ['Баары', ...new Set(termsToRender.map((item) => item.category))];
  let activeCategory = 'Баары';

  const renderTerms = () => {
    const filteredTerms = activeCategory === 'Баары'
      ? termsToRender
      : termsToRender.filter((item) => item.category === activeCategory);

    list.innerHTML = filteredTerms
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
      const item = filteredTerms[index];
      if (!item) return;
      detail.innerHTML = `
        <span class="tag">${item.category}</span>
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
        const index = Number(button.dataset.termIndex);
        updateDetail(index);
        if (window.innerWidth <= 980) {
          detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });

    updateDetail(0);
  };

  if (filters) {
    filters.innerHTML = categories
      .map(
        (category, index) => `
          <button class="term-filter ${index === 0 ? 'active' : ''}" type="button" data-category="${category}">
            ${category}
          </button>
        `
      )
      .join('');

    filters.querySelectorAll('.term-filter').forEach((button) => {
      button.addEventListener('click', () => {
        activeCategory = button.dataset.category;
        filters.querySelectorAll('.term-filter').forEach((filter) => {
          filter.classList.toggle('active', filter === button);
        });
        renderTerms();
      });
    });
  }

  renderTerms();
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
          feedback.textContent = 'Туура! Эң сонун билим көрсөттүңүз.';
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
    let message = 'Сиздин билим деңгээлиңиз абдан жогору. Кыргыз маданиятын жана салттуу оюндарды жакшы билесиз.';

    if (score <= 2) {
      title = 'Жаңыдан жолго чыккан саякатчы';
      message = 'Көчмөн руху менен таанышууңуз жаңы гана башталды. Окуп-үйрөнүүнү улантыңыз.';
    } else if (score === 3) {
      title = 'Мурас изилдөөчүсү';
      message = 'Жакшы натыйжа! Кыргыз тили жана салттуу баалуулуктарды дагы да тереңирээк үйрөнө аласыз.';
    } else if (score === 4) {
      title = 'Маданият билгичи';
      message = 'Сиздин билимиңиз жогорку деңгээлде. Улуу мурасты сактоодо жана даңазалоодо аракеттериңиз чоң.';
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
