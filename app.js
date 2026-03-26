const checklistStorageKey = "fresh-guide-checklist";
const studentProfileStorageKey = "fresh-guide-profile";
const studentScheduleUrl = "https://docs.google.com/spreadsheets/d/1C156sWHs66tFzhNzipuNsUkBWETJUe1kOJgY2DR03Ng/edit?usp=drivesdk";

const appData = {
  meta: {
    facultyName: "Факультет математики, інформатики та фізики",
    universityName: "Український державний університет імені Михайла Драгоманова",
    address: "01601, м. Київ, вул. Пирогова, 9",
    verifiedAt: "26 березня 2026",
    phones: {
      faculty: "(044) 239-30-91",
      university: "(044) 234-11-08",
      reference: "(044) 239-30-33"
    }
  },
  stats: [
    {
      value: "1",
      label: "головна адреса",
      text: "Більшість стартових питань ФМІФ замикаються на центральний корпус на Пирогова, 9."
    },
    {
      value: "5",
      label: "ключових сервісів",
      text: "Студентський, оплата, стипендії, довідки та заяви на пропуск занять."
    },
    {
      value: "6",
      label: "офіційних переходів",
      text: "Розклад, Moodle, студентський відділ, оплата, вступ і сервіси для студентів."
    },
    {
      value: "26.03.2026",
      label: "дата перевірки",
      text: "Факти й контакти нижче зібрані з офіційних сторінок УДУ та ФМІФ."
    }
  ],
  onboarding: [
    {
      id: "check-schedule",
      title: "Відкрий офіційний розклад ФМІФ",
      text: "Збережи сторінку з розкладом і Moodle, щоб не шукати їх щоранку заново."
    },
    {
      id: "save-dekanat",
      title: "Занотуй контакти деканату",
      text: "Для довідок, підтверджень і термінових питань тобі найчастіше знадобиться саме деканат."
    },
    {
      id: "student-card",
      title: "Уточни статус студентського квитка",
      text: "Перевір у деканаті або студентському відділі, чи твій наказ і картка вже в роботі."
    },
    {
      id: "payment-or-stipend",
      title: "Розберися з фінансами",
      text: "Або переглянь оплату за навчання, або підготуйся до академічної чи соціальної стипендії."
    }
  ],
  resources: [
    {
      title: "Розклад ФМІФ",
      description: "Офіційна сторінка з постійним розкладом занять і графіком освітнього процесу.",
      url: "https://fmif.udu.edu.ua/navchannia/rozklad-zaniat-ta-sesii",
      tag: "Навчання"
    },
    {
      title: "Moodle ФМІФ",
      description: "Електронні курси, завдання, тести й матеріали саме факультету математики, інформатики та фізики.",
      url: "https://moodle.fmif.udu.edu.ua/",
      tag: "Курси"
    },
    {
      title: "Студентам УДУ",
      description: "Гуртожитки, документи, підтримка, послуги й корисні університетські сервіси.",
      url: "https://udu.edu.ua/studentam",
      tag: "Сервіси"
    },
    {
      title: "Оплата навчання",
      description: "Актуальна вартість, правила оплати та офіційні переходи на сторінки з реквізитами.",
      url: "https://udu.edu.ua/studentam",
      tag: "Фінанси"
    },
    {
      title: "Студентський відділ НМЦ",
      description: "Саме тут живуть питання видачі студентських квитків, дублікатів і частини навчальних документів.",
      url: "https://udu.edu.ua/navchalno-metodychni-pidrozdily/navchalno-metodychnyi-tsentr/navchalno-metodychnyi-tsentr",
      tag: "Документи"
    },
    {
      title: "Вступ / приймальна комісія",
      description: "Корисно, якщо потрібно перевірити документи, освітню програму або реквізити для вступних оплат.",
      url: "https://vstup.udu.edu.ua/",
      tag: "Вступ"
    }
  ],
  spotlight: [
    {
      title: "Де замовити довідку",
      text: "Для довідки про навчання ФМІФ веде в деканат, ауд. 460 центрального корпусу."
    },
    {
      title: "Де шукати стипендію",
      text: "База для старту: положення УДУ, банк-картка та стеження за стипендіальними протоколами."
    },
    {
      title: "Як не загубити заяву",
      text: "Для пропусків занять спершу йди в деканат; під час дистанційки діє подача з корпоративної пошти."
    }
  ],
  faculty: {
    title: "ФМІФ УДУ імені Михайла Драгоманова",
    description:
      "На офіційних сторінках факультету вказано центральну адресу на вул. Пирогова, 9, телефон факультету (044) 239-30-91 і загальноуніверситетські сервіси для студентів. У новинах і сторінках факультету згадуються проф. Микола Працьовитий як декан, а також Роман Нікіфоров і Ольга Бондаренко як заступники декана.",
    meta: [
      "Адреса: 01601, м. Київ, вул. Пирогова, 9",
      "Телефон факультету: (044) 239-30-91",
      "Довідка університету: (044) 239-30-33",
      "Приймальня університету: (044) 234-11-08"
    ],
    sourceLinks: [
      {
        label: "Контакти ФМІФ",
        url: "https://fmif.udu.edu.ua/kontakty"
      },
      {
        label: "Сторінка студентам УДУ",
        url: "https://udu.edu.ua/studentam"
      }
    ]
  },
  contacts: [
    {
      title: "Деканат ФМІФ",
      category: "Основний контакт",
      description: "Перший контакт для довідок, внутрішніх студентських питань, підтверджень і перенаправлення до потрібного підрозділу.",
      meta: [
        "Телефон: (044) 239-30-91",
        "Адреса: вул. Пирогова, 9",
        "Для довідок про навчання: ауд. 460, центральний корпус"
      ],
      links: [
        {
          label: "Офіційні контакти ФМІФ",
          url: "https://fmif.udu.edu.ua/kontakty"
        },
        {
          label: "Інструкція 'Отримати довідку'",
          url: "https://fmif.udu.edu.ua/otrymaty-dovidku"
        }
      ]
    },
    {
      title: "Приймальна комісія УДУ",
      category: "Документи / вступ",
      description: "Стане в пригоді для перевірки вступних документів, контрактних питань або повторних звернень після вступу.",
      meta: [
        "Кімн. 133, прийом документів",
        "Кімн. 229, технічні секретарі",
        "Телефони: (044) 235-82-36, (044) 239-30-17"
      ],
      links: [
        {
          label: "Офіційна сторінка вступу",
          url: "https://vstup.udu.edu.ua/"
        }
      ]
    },
    {
      title: "Студентський відділ НМЦ",
      category: "Студентський квиток",
      description: "Офіційний університетський підрозділ, де на сторінці Навчально-методичного центру вказано контакт студентського відділу.",
      meta: [
        "Завідувач: Захарченко Вікторія Миколаївна",
        "Телефон: 239-30-57",
        "Підрозділ: Навчально-методичний центр"
      ],
      links: [
        {
          label: "Навчально-методичний центр",
          url: "https://udu.edu.ua/navchalno-metodychni-pidrozdily/navchalno-metodychnyi-tsentr/navchalno-metodychnyi-tsentr"
        }
      ]
    },
    {
      title: "Наукова бібліотека",
      category: "Навчання",
      description: "Корисна точка для реєстрації, читальної зали та пошуку літератури в перші тижні навчання.",
      meta: [
        "Головний корпус, 1 поверх",
        "Телефон: (044) 239-30-39",
        "Адреса: вул. Пирогова, 9"
      ],
      links: [
        {
          label: "Опис бібліотеки",
          url: "https://kitp.fmif.udu.edu.ua/structure/library/"
        }
      ]
    }
  ],
  departments: [
    {
      title: "Кафедра інформаційних технологій і програмування",
      description: "Одна з ключових кафедр для студентів IT-напряму на ФМІФ. На сторінці кафедри є окремі контакти та вихід на дистанційні курси.",
      meta: [
        "Адреса: вул. Пирогова, 9, центральний корпус",
        "Телефон: +380 44 239-30-05",
        "Завідувач: Єфименко Василь Володимирович",
        "Email: v.v.efimenko@npu.edu.ua"
      ],
      links: [
        {
          label: "Контакти кафедри",
          url: "https://kitp.fmif.udu.edu.ua/contacts/"
        }
      ]
    },
    {
      title: "Кафедра комп'ютерної та програмної інженерії",
      description: "Офіційна сторінка кафедри вказує кімнату, телефони й окремі канали зв'язку для абітурієнтів і студентів.",
      meta: [
        "Адреса: вул. Пирогова, 9, ауд. 125",
        "Телефони: (044) 239-30-24, (050) 625-48-82",
        "Завідувач: Франчук Василь Михайлович"
      ],
      links: [
        {
          label: "Контакти кафедри",
          url: "https://kpi.fmif.udu.edu.ua/kontakty/"
        },
        {
          label: "Telegram для вступників",
          url: "https://t.me/kaf_kpi"
        }
      ]
    }
  ],
  serviceCategories: ["Всі", "Документи", "Фінанси", "Навчання"],
  services: [
    {
      title: "Студентський квиток",
      category: "Документи",
      summary: "Де перевірити статус виготовлення, куди звертатися і що треба для дубліката або первинної видачі.",
      details:
        "На загальноуніверситетському рівні питання студентських квитків зав'язані на студентський відділ НМЦ. На офіційній сторінці факультету педагогіки УДУ також опубліковано університетський порядок виготовлення та актуальну вартість за наказом ректора від 05.06.2025 №221.",
      steps: [
        "Спочатку уточни в деканаті ФМІФ, чи внесено тебе в наказ або список на виготовлення студентського квитка.",
        "Якщо потрібна оплата, орієнтуйся на чинний університетський порядок і збережи квитанцію.",
        "Для первинної видачі або дубліката тримай під рукою квитанцію й уточни, чи передавати її через деканат або напряму у студентський відділ.",
        "Якщо є затримка, звір статус у деканаті та, за потреби, телефонуй у студентський відділ НМЦ."
      ],
      meta: [
        "Студентський відділ НМЦ: тел. 239-30-57",
        "Вартість картки з безконтактним чипом і транспортним додатком: 215,16 грн",
        "Вартість держзразка без чипа: 129,96 грн"
      ],
      note:
        "Для першокурсника найкраща стартова дія тут не шукати 'де саме видають', а підтвердити в деканаті ФМІФ, що твій пакет документів уже пройшов внутрішній маршрут.",
      links: [
        {
          label: "Студентський відділ НМЦ",
          url: "https://udu.edu.ua/navchalno-metodychni-pidrozdily/navchalno-metodychnyi-tsentr/navchalno-metodychnyi-tsentr"
        },
        {
          label: "Порядок і вартість виготовлення",
          url: "https://pf.udu.edu.ua/studentovi-fpp/studentska-bukhhalteriia/studentskyi-kvytok-vartist-vyhotovlennia-ta-poriadok-otrymannia"
        }
      ]
    },
    {
      title: "Оплата навчання",
      category: "Фінанси",
      summary: "Де перевірити актуальну суму та які реквізити використовує університет.",
      details:
        "Головний орієнтир для суми та правил оплати - офіційна сторінка 'Студентам УДУ' і вступний сайт з блоком про вартість навчання. На офіційних сторінках підрозділів УДУ публікуються реквізити для договорної оплати.",
      steps: [
        "Відкрий офіційний блок з оплатою на сайті УДУ або сторінку вступної кампанії з вартістю навчання.",
        "Перевір свій рік вступу, освітній ступінь і форму навчання.",
        "Сплачуй лише за офіційними реквізитами університету та зберігай квитанцію.",
        "Після оплати уточни у деканаті ФМІФ, чи достатньо просто мати квитанцію, чи потрібно надіслати її копію."
      ],
      meta: [
        "Одержувач: УДУ імені Михайла Драгоманова",
        "ЄДРПОУ: 44807628",
        "Рахунок: UA988201720313201001201060987",
        "Код платежу: 25010100"
      ],
      note:
        "Якщо платіж робиться вперше, не вгадуй суму з чужих чатів: УДУ періодично оновлює вартість і публікує її на офіційних сторінках.",
      links: [
        {
          label: "Сторінка 'Студентам УДУ'",
          url: "https://udu.edu.ua/studentam"
        },
        {
          label: "Вступна кампанія / вартість навчання",
          url: "https://vstup.udu.edu.ua/"
        },
        {
          label: "Офіційні реквізити (приклад сторінки УДУ)",
          url: "https://fp.udu.edu.ua/studentam/oplata-za-navchannya"
        }
      ]
    },
    {
      title: "Академічна та соціальна стипендія",
      category: "Фінанси",
      summary: "Куди дивитися за правилами, які документи потрібні та на що звернути увагу першокурснику.",
      details:
        "На офіційних сторінках УДУ й факультетів опубліковані положення про стипендіальне забезпечення, списки на призначення стипендії, а також інструкції щодо соціальної стипендії.",
      steps: [
        "Для академічної стипендії оформи картку ПриватБанку або Укргазбанку та прив'яжи її в університеті, якщо це вимагається поточним порядком.",
        "Для соціальної стипендії підготуй заяву на ім'я ректора, копії паспорта, ІПН, свідоцтва про народження та витягу з реєстру громади.",
        "Додай документи, які підтверджують саме твою пільгову категорію.",
        "Слідкуй за протоколами або оголошеннями факультету та зберігай копії всіх поданих документів."
      ],
      meta: [
        "Академічні виплати часто орієнтують на 26 число місяця",
        "Для соцстипендії на офіційних сторінках вказано пакет базових копій по 2 примірники",
        "Починати краще з деканату ФМІФ або офіційної сторінки факультету або університету"
      ],
      note:
        "Якщо ти першокурсник-бюджетник, найкраще одразу уточнити в деканаті, чи потрібне додаткове оформлення банківських даних саме на твоєму факультеті.",
      links: [
        {
          label: "Положення про стипендіальне забезпечення",
          url: "https://pf.udu.edu.ua/studentovi-fpp/studentska-bukhhalteriia/polozhennia-pro-stypendialne-zabezpechennia-studentiv-aspirantiv-i-doktorantiv-udu-imeni-mykhaila-drahomanova"
        },
        {
          label: "Соціальна стипендія: перелік документів",
          url: "https://fp.udu.edu.ua/studentam/sotsialna-stypendiia"
        }
      ]
    },
    {
      title: "Довідка про навчання",
      category: "Документи",
      summary: "Один із найпрактичніших сценаріїв: для банку, військкомату, батьків або гуртожитку.",
      details:
        "Для ФМІФ університет опублікував окрему інструкцію: замовлення довідки про навчання проходить через деканат.",
      steps: [
        "Прийди в деканат і зареєструй замовлення довідки.",
        "Для паперового варіанту орієнтуйся на ауд. 460 центрального корпусу.",
        "Якщо навчання дистанційне, напиши листа на електронну адресу деканату, вказавши, чи потрібен електронний чи паперовий варіант.",
        "Заздалегідь уточни, коли довідку можна забрати, щоб не ходити двічі."
      ],
      meta: [
        "Точка входу: деканат ФМІФ",
        "Паперовий варіант: ауд. 460, ЦК",
        "Окрема офіційна сторінка з інструкцією вже є"
      ],
      note:
        "Це один із найточніше описаних сценаріїв на сайті ФМІФ, тому для нього я використав саме факультетську інструкцію, а не загальні припущення.",
      links: [
        {
          label: "Інструкція 'Отримати довідку'",
          url: "https://fmif.udu.edu.ua/otrymaty-dovidku"
        }
      ]
    },
    {
      title: "Подача заяви на пропуск занять",
      category: "Навчання",
      summary: "Типова схема для університету: через деканат, а під час дистанційки - з підтвердними документами з корпоративної пошти.",
      details:
        "На сторінці е-деканату одного з факультетів УДУ університет описує загальну процедуру подачі заяв: особисто через деканат або дистанційно з корпоративної пошти з прикріпленими документами. Для ФМІФ конкретна сторінка з цим алгоритмом у пошуку не знайшлась, тож нижче показана типова університетська логіка.",
      steps: [
        "Підготуй коротку заяву на ім'я декана із зазначенням причини пропуску пар.",
        "Якщо пропуск пов'язаний з хворобою чи офіційною подією, одразу додай підтвердні документи.",
        "За очного навчання подай заяву через деканат ФМІФ і уточни, кому її візують далі.",
        "За дистанційного або змішаного формату надішли фото або скан заяви та документів з корпоративної пошти, якщо факультет працює саме так."
      ],
      meta: [
        "Стартова точка: деканат ФМІФ",
        "Для дистанційної подачі університет використовує корпоративну пошту",
        "Підтвердні документи краще прикладати одразу"
      ],
      note:
        "Цей алгоритм я позначаю як типовий для УДУ, бо він спирається на офіційну сторінку е-деканату іншого факультету, а не на окрему знайдену сторінку саме ФМІФ.",
      links: [
        {
          label: "Е-деканат УДУ: приклад університетської процедури",
          url: "https://fsio.udu.edu.ua/faculty/e-dekanat/application"
        },
        {
          label: "Контакти ФМІФ",
          url: "https://fmif.udu.edu.ua/kontakty"
        }
      ]
    }
  ],
  scheduleTips: [
    "Починай не з чату групи, а з офіційної сторінки ФМІФ з розкладом і графіком освітнього процесу.",
    "Moodle ФМІФ тримай окремою вкладкою: там часто лежать матеріали, дедлайни й тести, навіть якщо розклад уже знайшов.",
    "Якщо щось не збігається, перше звіряння роби через деканат, а не через неофіційні скріни."
  ],
  scheduleLinks: [
    {
      title: "Ваш розклад групи",
      description: "Пряме посилання на той Google Sheets-розклад, який ви надали для свого навчання. Його варто відкривати в першу чергу.",
      url: studentScheduleUrl,
      tag: "Ваш файл"
    },
    {
      title: "Розклад занять та сесії",
      description: "Головна офіційна сторінка ФМІФ, з якої варто стартувати для пошуку постійного розкладу.",
      url: "https://fmif.udu.edu.ua/navchannia/rozklad-zaniat-ta-sesii",
      tag: "ФМІФ"
    },
    {
      title: "Постійний розклад (Google Sheets)",
      description: "Прямий перехід до таблиці, яку факультет використовує для денного розкладу.",
      url: "https://docs.google.com/spreadsheets/d/1tT5eJQTAdDdFzKUtls3fucf5eH9bSBzrEYLHBJhXLzc/edit?usp=sharing",
      tag: "Таблиця"
    },
    {
      title: "Графік освітнього процесу",
      description: "Офіційний графік навчального року, сесій та організації освітнього процесу.",
      url: "https://docs.google.com/spreadsheets/d/1PBr2C55gjhoIvSQx_i2v_Cq0wtqCTpqV/edit?usp=sharing",
      tag: "Графік"
    },
    {
      title: "Moodle ФМІФ",
      description: "Курси, файли, тести, практичні завдання й частина комунікації з викладачами.",
      url: "https://moodle.fmif.udu.edu.ua/",
      tag: "Moodle"
    },
    {
      title: "Студентам УДУ",
      description: "Якщо потрібні гуртожиток, документи, підтримка, пільги або студентські сервіси.",
      url: "https://udu.edu.ua/studentam",
      tag: "УДУ"
    },
    {
      title: "Вступ / документи / вартість",
      description: "Окремий хаб для вступних і документальних питань, вартості та реквізитів.",
      url: "https://vstup.udu.edu.ua/",
      tag: "Вступ"
    }
  ],
  mapFloors: [
    {
      floor: "1 поверх",
      points: [
        "Наукова бібліотека: головний корпус, 1 поверх, тел. (044) 239-30-39.",
        "Ауд. 125: кафедра комп'ютерної та програмної інженерії.",
        "Кімн. 133: прийом документів у приймальній комісії."
      ]
    },
    {
      floor: "2 поверх",
      points: [
        "Кімн. 229: технічні секретарі приймальної комісії.",
        "Зручна точка, якщо тебе перекинули з питаннями по документах після 133 кабінету."
      ]
    },
    {
      floor: "4 поверх",
      points: [
        "Ауд. 460: ключова точка для довідок про навчання та частини деканатських звернень.",
        "Якщо їдеш у деканат не наосліп, найчастіше саме сюди."
      ]
    }
  ],
  routes: [
    {
      title: "Маршрут 'Треба довідка'",
      description: "Йди в центральний корпус на Пирогова, 9 і орієнтуйся на деканат. Для паперового варіанту довідки офіційно згадана ауд. 460."
    },
    {
      title: "Маршрут 'Проблема зі студентським'",
      description: "Спершу деканат ФМІФ, далі - студентський відділ НМЦ. Так ти не витратиш час на випадкові кабінети."
    },
    {
      title: "Маршрут 'Потрібно уточнити документи'",
      description: "Для приймальної комісії тримай в голові кімн. 133 і 229. Це офіційно вказані точки для документів."
    },
    {
      title: "Маршрут 'Шукаю IT-кафедру'",
      description: "Для ККПІ орієнтир - ауд. 125. Для кафедри інформаційних технологій і програмування - центральний корпус і офіційні контакти кафедри."
    }
  ],
  faqCategories: ["Всі", "Документи", "Фінанси", "Навчання", "Навігація"],
  faq: [
    {
      question: "Де відкривати саме наш розклад групи?",
      answer: "У розділі 'Розклад' я додав окрему картку 'Ваш розклад групи' з прямим переходом на ваш Google Sheets-файл.",
      category: "Навчання",
      source: "Надано користувачем"
    },
    {
      question: "Де знайти офіційний розклад ФМІФ?",
      answer: "Починай зі сторінки ФМІФ 'Розклад занять та сесії'. Звідти є перехід до постійного розкладу та графіка освітнього процесу.",
      category: "Навчання",
      source: "ФМІФ"
    },
    {
      question: "Де отримати або перевірити студентський квиток?",
      answer: "Спершу звернись у деканат ФМІФ, щоб перевірити, чи твій наказ або список уже обробляється. Якщо питання зависло, офіційний університетський контакт - студентський відділ НМЦ, тел. 239-30-57.",
      category: "Документи",
      source: "НМЦ УДУ"
    },
    {
      question: "Де дізнатись вартість навчання та реквізити для оплати?",
      answer: "Орієнтуйся на сторінку 'Студентам УДУ' та вступний сайт університету. Для оплати на офіційних сторінках УДУ публікуються реквізити, зокрема рахунок UA988201720313201001201060987 і ЄДРПОУ 44807628.",
      category: "Фінанси",
      source: "УДУ"
    },
    {
      question: "Що потрібно для академічної стипендії?",
      answer: "За офіційними університетськими сторінками студентам радять мати банківську картку ПриватБанку або Укргазбанку та слідкувати за стипендіальними списками й протоколами.",
      category: "Фінанси",
      source: "УДУ"
    },
    {
      question: "Які документи потрібні для соціальної стипендії?",
      answer: "Базовий пакет на офіційних сторінках УДУ містить заяву на ім'я ректора, копії паспорта, ІПН, свідоцтва про народження, витягу з реєстру громади та документи, що підтверджують пільгову категорію.",
      category: "Фінанси",
      source: "УДУ"
    },
    {
      question: "Як замовити довідку про навчання?",
      answer: "ФМІФ має окрему офіційну інструкцію: звертаєшся в деканат, для паперової довідки орієнтуєшся на ауд. 460 ЦК, а під час дистанційного формату - пишеш на пошту деканату.",
      category: "Документи",
      source: "ФМІФ"
    },
    {
      question: "Як подати заяву на пропуск пар?",
      answer: "Типова схема УДУ така: заява на ім'я декана, підтвердні документи, подача через деканат; під час дистанційного формату - через корпоративну пошту. Для ФМІФ варто уточнити локальну деталь у деканаті.",
      category: "Навчання",
      source: "УДУ, узагальнено"
    },
    {
      question: "Куди йти в центральному корпусі, якщо я вперше на Пирогова, 9?",
      answer: "Для документів найчастіше потрібні кімн. 133 або 229, для довідок - ауд. 460, для бібліотеки - 1 поверх. IT-кафедру ККПІ шукай в ауд. 125.",
      category: "Навігація",
      source: "УДУ / ФМІФ"
    }
  ]
};

const state = {
  activeServiceCategory: "Всі",
  activeFaqCategory: "Всі",
  checklist: loadChecklist(),
  profile: loadProfile()
};

const panels = [...document.querySelectorAll("[data-panel]")];
const navButtons = [...document.querySelectorAll(".bottom-nav__item")];
const statsGrid = document.getElementById("statsGrid");
const onboardingChecklist = document.getElementById("onboardingChecklist");
const checklistCount = document.getElementById("checklistCount");
const checklistBar = document.getElementById("checklistBar");
const resourceHub = document.getElementById("resourceHub");
const spotlightServices = document.getElementById("spotlightServices");
const facultyCard = document.getElementById("facultyCard");
const contactsList = document.getElementById("contactsList");
const departmentsList = document.getElementById("departmentsList");
const serviceFilters = document.getElementById("serviceFilters");
const servicesList = document.getElementById("servicesList");
const scheduleTips = document.getElementById("scheduleTips");
const scheduleLinks = document.getElementById("scheduleLinks");
const floorMap = document.getElementById("floorMap");
const routeList = document.getElementById("routeList");
const faqSearch = document.getElementById("faqSearch");
const faqFilters = document.getElementById("faqFilters");
const faqList = document.getElementById("faqList");
const toast = document.getElementById("toast");
const heroWelcome = document.getElementById("heroWelcome");
const heroProfileAvatar = document.getElementById("heroProfileAvatar");
const heroProfileName = document.getElementById("heroProfileName");
const heroProfileSubtitle = document.getElementById("heroProfileSubtitle");
const xpBadge = document.getElementById("xpBadge");
const miniProfileAvatar = document.getElementById("miniProfileAvatar");
const miniProfileGroup = document.getElementById("miniProfileGroup");
const miniProfileStatus = document.getElementById("miniProfileStatus");
const miniProfileCode = document.getElementById("miniProfileCode");
const miniScheduleLink = document.getElementById("miniScheduleLink");
const profileForm = document.getElementById("profileForm");
const resetProfileButton = document.getElementById("resetProfileButton");
const chooseProfilePhotoButton = document.getElementById("chooseProfilePhotoButton");
const profileHeroName = document.getElementById("profileHeroName");
const profileHeroText = document.getElementById("profileHeroText");
const profileBadges = document.getElementById("profileBadges");
const profileSummaryGroup = document.getElementById("profileSummaryGroup");
const profileSummaryFaculty = document.getElementById("profileSummaryFaculty");
const profileSummaryAccount = document.getElementById("profileSummaryAccount");
const profileSummaryLevel = document.getElementById("profileSummaryLevel");
const profileSummaryId = document.getElementById("profileSummaryId");
const profileAvatar = document.getElementById("profileAvatar");
const profilePhotoInput = document.getElementById("profilePhotoInput");
const removeProfilePhotoButton = document.getElementById("removeProfilePhotoButton");
const profileFullName = document.getElementById("profileFullName");
const profileEmail = document.getElementById("profileEmail");
const profilePassword = document.getElementById("profilePassword");
const profileGroupInput = document.getElementById("profileGroup");
const profileFaculty = document.getElementById("profileFaculty");
const profileYear = document.getElementById("profileYear");

function loadChecklist() {
  try {
    const stored = JSON.parse(localStorage.getItem(checklistStorageKey) || "{}");
    return stored && typeof stored === "object" ? stored : {};
  } catch (error) {
    return {};
  }
}

function loadProfile() {
  try {
    const stored = JSON.parse(localStorage.getItem(studentProfileStorageKey) || "{}");
    return stored && typeof stored === "object" ? stored : {};
  } catch (error) {
    return {};
  }
}

function saveProfileState() {
  try {
    localStorage.setItem(studentProfileStorageKey, JSON.stringify(state.profile));
    return true;
  } catch (error) {
    return false;
  }
}

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.hidden = false;

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.hidden = true;
  }, 2800);
}

function getCompletedChecklistCount() {
  return appData.onboarding.filter((item) => state.checklist[item.id]).length;
}

function getProfileXP() {
  let xp = getCompletedChecklistCount() * 25;

  if (state.profile && state.profile.fullName) {
    xp += 80;
  }

  if (state.profile && state.profile.group) {
    xp += 35;
  }

  if (state.profile && state.profile.accountCreatedAt) {
    xp += 40;
  }

  return xp;
}

function getProfileLevel(xp = getProfileXP()) {
  return Math.max(1, Math.floor(xp / 80) + 1);
}

function sanitizeAccountChunk(value, fallback) {
  const cleaned = (value || "")
    .toUpperCase()
    .replace(/[^0-9A-ZА-ЯІЇЄҐ]/g, "")
    .slice(0, 6);

  return cleaned || fallback;
}

function buildAccountId(profile) {
  const year = String(profile.year || new Date().getFullYear()).slice(-2);
  const group = sanitizeAccountChunk(profile.group, "FMIF");
  const signature = sanitizeAccountChunk(profile.fullName || profile.email, "STUD").slice(0, 3);

  return `UDU-${year}-${group}-${signature}`;
}

function getProfileBadges() {
  const badges = [];
  const level = getProfileLevel();

  if (state.profile.fullName) {
    badges.push("Акаунт створено");
  }

  if (state.profile.group) {
    badges.push(`Група ${state.profile.group}`);
  }

  badges.push(`Level ${level}`);

  if (getCompletedChecklistCount() >= 2) {
    badges.push("Ритм першого тижня");
  }

  if (getCompletedChecklistCount() === appData.onboarding.length && appData.onboarding.length > 0) {
    badges.push("Quest Master");
  }

  return badges.length ? badges : ["Без бейджів поки що"];
}

async function hashPassword(password) {
  if (!password) {
    return "";
  }

  if (window.crypto && window.crypto.subtle) {
    const data = new TextEncoder().encode(password);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
    return [...new Uint8Array(hashBuffer)]
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  return `local-${password.length}`;
}

function setAvatarContent(target, avatarDataUrl) {
  if (!target) {
    return;
  }

  target.classList.toggle("has-image", Boolean(avatarDataUrl));

  if (avatarDataUrl) {
    target.innerHTML = `<img src="${avatarDataUrl}" alt="Фото профілю студента">`;
    return;
  }

  target.textContent = "😊";
}

function renderProfileAvatar() {
  const avatarDataUrl = state.profile.avatarDataUrl || "";
  setAvatarContent(heroProfileAvatar, avatarDataUrl);
  setAvatarContent(profileAvatar, avatarDataUrl);
  setAvatarContent(miniProfileAvatar, avatarDataUrl);
}

function prepareProfilePhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const image = new Image();

      image.onload = () => {
        const maxSide = 220;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext("2d");

        if (!context) {
          reject(new Error("Canvas unavailable"));
          return;
        }

        context.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.78));
      };

      image.onerror = () => reject(new Error("Image decode failed"));
      image.src = typeof reader.result === "string" ? reader.result : "";
    };

    reader.onerror = () => reject(new Error("File read failed"));
    reader.readAsDataURL(file);
  });
}

function populateProfileForm() {
  if (!profileForm) {
    return;
  }

  profileFullName.value = state.profile.fullName || "";
  profileEmail.value = state.profile.email || "";
  profileGroupInput.value = state.profile.group || "";
  profileFaculty.value = state.profile.faculty || "ФМІФ";
  profileYear.value = state.profile.year || "";
  profilePassword.value = "";
}

function renderProfile() {
  const fullName = state.profile.fullName || "";
  const firstName = fullName ? fullName.split(" ")[0] : "";
  const group = state.profile.group || "Не вказано";
  const faculty = state.profile.faculty || "ФМІФ";
  const accountCreated = Boolean(state.profile.accountCreatedAt);

  if (accountCreated && !state.profile.accountId) {
    state.profile.accountId = buildAccountId(state.profile);
    saveProfileState();
  }

  const badges = getProfileBadges();
  const xp = getProfileXP();
  const level = getProfileLevel(xp);
  const accountId = state.profile.accountId || "Ще не створено";

  if (heroWelcome) {
    heroWelcome.textContent = firstName
      ? `Привіт, ${firstName}! Твоя група ${group}. Усе важливе вже зібрано в одному місці.`
      : "Стартуй як профі: збережи свій профіль, розклад і квести першого тижня.";
  }

  if (heroProfileName) {
    heroProfileName.textContent = fullName || "Гість ФМІФ";
  }

  if (heroProfileSubtitle) {
    heroProfileSubtitle.textContent = state.profile.group
      ? `Група ${group} • ${accountCreated ? accountId : "локальний профіль"}`
      : "Додай фото й заповни профіль, щоб бачити себе тут";
  }

  if (xpBadge) {
    xpBadge.textContent = `Lv.${level} • ${xp} XP`;
  }

  if (miniProfileGroup) {
    miniProfileGroup.textContent = group;
  }

  if (miniProfileStatus) {
    miniProfileStatus.textContent = accountCreated ? `Активний • Lv.${level}` : "Не створено";
  }

  if (miniProfileCode) {
    miniProfileCode.textContent = accountCreated ? accountId : "Створи профіль, щоб отримати Student ID";
  }

  if (miniScheduleLink) {
    miniScheduleLink.href = studentScheduleUrl;
  }

  if (profileHeroName) {
    profileHeroName.textContent = fullName || "Створи акаунт студента";
  }

  if (profileHeroText) {
    profileHeroText.textContent = fullName
      ? `Профіль активний. Група ${group}, факультет ${faculty}, ${accountId}. Твої дані збережені локально в браузері.`
      : "Після збереження тут з’являться твоє ім’я, група, статус акаунта й маленькі бейджі прогресу.";
  }

  if (profileSummaryGroup) {
    profileSummaryGroup.textContent = group;
  }

  if (profileSummaryFaculty) {
    profileSummaryFaculty.textContent = faculty;
  }

  if (profileSummaryAccount) {
    profileSummaryAccount.textContent = accountCreated ? "Створено локально" : "Не створено";
  }

  if (profileSummaryLevel) {
    profileSummaryLevel.textContent = `Level ${level}`;
  }

  if (profileSummaryId) {
    profileSummaryId.textContent = accountId;
  }

  if (profileBadges) {
    profileBadges.innerHTML = badges
      .map((badge) => `<span class="profile-badge">${badge}</span>`)
      .join("");
  }

  renderProfileAvatar();
}

function saveChecklist() {
  try {
    localStorage.setItem(checklistStorageKey, JSON.stringify(state.checklist));
  } catch (error) {
    // Ignore local file mode storage issues.
  }
}

function setTodayBadge() {
  const formatter = new Intl.DateTimeFormat("uk-UA", {
    day: "numeric",
    month: "long"
  });
  document.getElementById("todayBadge").textContent = `Сьогодні ${formatter.format(new Date())}`;
}

function renderStats() {
  statsGrid.innerHTML = appData.stats
    .map(
      (item) => `
        <article class="stat-card">
          <span class="pill">${item.label}</span>
          <strong>${item.value}</strong>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderChecklist() {
  onboardingChecklist.innerHTML = appData.onboarding
    .map((item) => {
      const checked = Boolean(state.checklist[item.id]);
      return `
        <label class="check-item">
          <input type="checkbox" data-check-id="${item.id}" ${checked ? "checked" : ""}>
          <span>
            <span class="check-item__title">${item.title}</span>
            <span class="check-item__text">${item.text}</span>
          </span>
        </label>
      `;
    })
    .join("");

  const completedCount = appData.onboarding.filter((item) => state.checklist[item.id]).length;
  const totalCount = appData.onboarding.length;
  const progress = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;

  checklistCount.textContent = `${completedCount}/${totalCount}`;
  checklistBar.style.width = `${progress}%`;

  [...onboardingChecklist.querySelectorAll("[data-check-id]")].forEach((input) => {
    input.addEventListener("change", () => {
      state.checklist[input.dataset.checkId] = input.checked;
      saveChecklist();
      renderChecklist();
      renderProfile();
    });
  });
}

function renderResources(target, items) {
  target.innerHTML = items
    .map(
      (item) => `
        <article class="resource-card ${item.tag === "Ваш файл" ? "resource-card--primary" : ""}">
          <span class="source-chip">${item.tag}</span>
          <h3>${item.title}</h3>
          <p class="resource-card__meta">${item.description}</p>
          <a class="resource-card__link" href="${item.url}" target="_blank" rel="noreferrer">
            Відкрити ресурс
          </a>
        </article>
      `
    )
    .join("");
}

function renderSpotlight() {
  spotlightServices.innerHTML = appData.spotlight
    .map(
      (item) => `
        <article class="spotlight-card">
          <div class="spotlight-card__top">
            <h3>${item.title}</h3>
            <span class="pill">must know</span>
          </div>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderFaculty() {
  facultyCard.innerHTML = `
    <p class="eyebrow">Реальна база</p>
    <h3 class="faculty-title">${appData.faculty.title}</h3>
    <p class="faculty-description">${appData.faculty.description}</p>
    <div class="faculty-meta">
      ${appData.faculty.meta.map((item) => `<span class="source-chip">${item}</span>`).join("")}
    </div>
    <div class="source-list">
      ${appData.faculty.sourceLinks
        .map(
          (item) => `
            <a class="source-link" href="${item.url}" target="_blank" rel="noreferrer">
              ${item.label}
            </a>
          `
        )
        .join("")}
    </div>
  `;

  contactsList.innerHTML = appData.contacts
    .map(
      (item) => `
        <article class="contact-card">
          <div class="contact-card__top">
            <div>
              <span class="pill">${item.category}</span>
              <h3>${item.title}</h3>
            </div>
          </div>
          <div class="contact-card__body">
            <p>${item.description}</p>
            <div class="contact-meta">
              ${item.meta.map((metaItem) => `<span class="source-chip">${metaItem}</span>`).join("")}
            </div>
            <div class="source-list">
              ${item.links
                .map(
                  (link) => `
                    <a class="source-link" href="${link.url}" target="_blank" rel="noreferrer">
                      ${link.label}
                    </a>
                  `
                )
                .join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");

  departmentsList.innerHTML = appData.departments
    .map(
      (item) => `
        <article class="contact-card">
          <div class="contact-card__top">
            <div>
              <span class="pill">Кафедра</span>
              <h3>${item.title}</h3>
            </div>
          </div>
          <div class="department-card__body">
            <p>${item.description}</p>
            <div class="contact-meta">
              ${item.meta.map((metaItem) => `<span class="source-chip">${metaItem}</span>`).join("")}
            </div>
            <div class="department-links">
              ${item.links
                .map(
                  (link) => `
                    <a class="source-link" href="${link.url}" target="_blank" rel="noreferrer">
                      ${link.label}
                    </a>
                  `
                )
                .join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderServiceFilters() {
  serviceFilters.innerHTML = appData.serviceCategories
    .map(
      (category) => `
        <button class="filter-chip ${category === state.activeServiceCategory ? "active" : ""}" data-service-category="${category}">
          ${category}
        </button>
      `
    )
    .join("");

  [...serviceFilters.querySelectorAll("[data-service-category]")].forEach((button) => {
    button.addEventListener("click", () => {
      state.activeServiceCategory = button.dataset.serviceCategory;
      renderServiceFilters();
      renderServices();
    });
  });
}

function renderServices() {
  const filteredServices = appData.services.filter((item) => {
    return state.activeServiceCategory === "Всі" || item.category === state.activeServiceCategory;
  });

  servicesList.innerHTML = filteredServices
    .map(
      (item, index) => `
        <article class="service-card">
          <div class="service-card__top">
            <div>
              <span class="pill">${item.category}</span>
              <h3>${item.title}</h3>
            </div>
          </div>
          <div class="service-card__body">
            <p>${item.summary}</p>
            <div class="service-meta">
              ${item.meta.map((metaItem) => `<span class="source-chip">${metaItem}</span>`).join("")}
            </div>
            <details ${index === 0 ? "open" : ""}>
              <summary>Показати алгоритм</summary>
              <p>${item.details}</p>
              <ol class="step-list">
                ${item.steps.map((step) => `<li>${step}</li>`).join("")}
              </ol>
              <div class="service-note">${item.note}</div>
              <div class="source-list">
                ${item.links
                  .map(
                    (link) => `
                      <a class="source-link" href="${link.url}" target="_blank" rel="noreferrer">
                        ${link.label}
                      </a>
                    `
                  )
                  .join("")}
              </div>
            </details>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSchedule() {
  const personalizedTips = [
    state.profile.group
      ? `Твоя група: ${state.profile.group}. Для щоденної перевірки відкривай картку 'Ваш розклад групи' першою.`
      : "Додай свою групу в профіль, щоб бачити персональну підказку до розкладу.",
    ...appData.scheduleTips
  ];

  scheduleTips.innerHTML = personalizedTips
    .map((item) => `<div class="tip-list__item">${item}</div>`)
    .join("");

  renderResources(scheduleLinks, appData.scheduleLinks);
}

function renderMap() {
  floorMap.innerHTML = appData.mapFloors
    .map(
      (item) => `
        <article class="floor-card">
          <span class="floor-card__level">${item.floor}</span>
          <div class="floor-points">
            ${item.points.map((point) => `<div class="floor-point">${point}</div>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  routeList.innerHTML = appData.routes
    .map(
      (item) => `
        <article class="route-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderFaqFilters() {
  faqFilters.innerHTML = appData.faqCategories
    .map(
      (category) => `
        <button class="filter-chip ${category === state.activeFaqCategory ? "active" : ""}" data-faq-category="${category}">
          ${category}
        </button>
      `
    )
    .join("");

  [...faqFilters.querySelectorAll("[data-faq-category]")].forEach((button) => {
    button.addEventListener("click", () => {
      state.activeFaqCategory = button.dataset.faqCategory;
      renderFaqFilters();
      renderFaq();
    });
  });
}

function renderFaq() {
  const searchValue = faqSearch.value.trim().toLowerCase();
  const filtered = appData.faq.filter((item) => {
    const categoryMatches = state.activeFaqCategory === "Всі" || item.category === state.activeFaqCategory;
    const searchMatches = `${item.question} ${item.answer}`.toLowerCase().includes(searchValue);
    return categoryMatches && searchMatches;
  });

  if (!filtered.length) {
    faqList.innerHTML = `
      <article class="faq-card">
        <h3>Нічого не знайшлося</h3>
        <p>Спробуй інше ключове слово або переключи категорію. Якщо питання термінове, йди в деканат ФМІФ.</p>
      </article>
    `;
    return;
  }

  faqList.innerHTML = filtered
    .map(
      (item) => `
        <article class="faq-card">
          <details>
            <summary>${item.question}</summary>
            <p>${item.answer}</p>
            <div class="faq-card__meta">
              <span class="source-chip">${item.category}</span>
              <span class="source-chip">${item.source}</span>
            </div>
          </details>
        </article>
      `
    )
    .join("");
}

function setActivePanel(targetId) {
  panels.forEach((panel) => {
    panel.classList.toggle("panel--active", panel.id === targetId);
  });

  navButtons.forEach((button) => {
    button.classList.toggle("bottom-nav__item--active", button.dataset.target === targetId);
  });
}

function bindNavigation() {
  navButtons.forEach((button) => {
    button.addEventListener("click", () => setActivePanel(button.dataset.target));
  });

  [...document.querySelectorAll("[data-jump]")].forEach((button) => {
    button.addEventListener("click", () => setActivePanel(button.dataset.jump));
  });
}

faqSearch.addEventListener("input", renderFaq);

if (profileForm) {
  profileForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const rawPassword = profilePassword.value.trim();
    const hasExistingPassword = Boolean(state.profile.passwordHash);

    if (!rawPassword && !hasExistingPassword) {
      showToast("Додай пароль для створення акаунта");
      return;
    }

    if (rawPassword && rawPassword.length < 6) {
      showToast("Пароль має містити щонайменше 6 символів");
      return;
    }

    const draftProfile = {
      fullName: profileFullName.value.trim(),
      email: profileEmail.value.trim(),
      group: profileGroupInput.value.trim(),
      faculty: profileFaculty.value,
      year: profileYear.value.trim()
    };

    const passwordHash = rawPassword ? await hashPassword(rawPassword) : state.profile.passwordHash || "";
    const isExistingAccount = Boolean(state.profile.accountCreatedAt);

    state.profile = {
      ...draftProfile,
      passwordHash,
      avatarDataUrl: state.profile.avatarDataUrl || "",
      accountId: state.profile.accountId || buildAccountId(draftProfile),
      accountCreatedAt: state.profile.accountCreatedAt || new Date().toISOString()
    };

    saveProfileState();
    populateProfileForm();
    renderProfile();
    renderSchedule();
    showToast(isExistingAccount ? "Профіль студента оновлено" : "Акаунт студента створено");
  });
}

if (profilePhotoInput) {
  profilePhotoInput.addEventListener("change", async () => {
    const [file] = profilePhotoInput.files || [];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      showToast("Оберіть саме зображення");
      profilePhotoInput.value = "";
      return;
    }

    try {
      const avatarDataUrl = await prepareProfilePhoto(file);
      state.profile = {
        ...state.profile,
        avatarDataUrl
      };
      const saved = saveProfileState();
      renderProfile();

      if (!saved) {
        showToast("Фото завелике для збереження, спробуй інше");
      } else {
        showToast("Фото профілю збережено");
      }
    } catch (error) {
      showToast("Не вдалося обробити фото");
    } finally {
      profilePhotoInput.value = "";
    }
  });
}

if (chooseProfilePhotoButton && profilePhotoInput) {
  chooseProfilePhotoButton.addEventListener("click", () => {
    profilePhotoInput.click();
  });
}

if (removeProfilePhotoButton) {
  removeProfilePhotoButton.addEventListener("click", () => {
    if (!state.profile.avatarDataUrl) {
      showToast("Фото профілю ще не додано");
      return;
    }

    state.profile = {
      ...state.profile,
      avatarDataUrl: ""
    };
    saveProfileState();
    renderProfile();
    showToast("Фото профілю прибрано");
  });
}

if (resetProfileButton) {
  resetProfileButton.addEventListener("click", () => {
    state.profile = {};
    try {
      localStorage.removeItem(studentProfileStorageKey);
    } catch (error) {
      // Ignore local cleanup issues.
    }
    profileForm.reset();
    populateProfileForm();
    renderProfile();
    renderSchedule();
    showToast("Профіль очищено");
  });
}

setTodayBadge();
renderStats();
renderChecklist();
renderResources(resourceHub, appData.resources);
renderSpotlight();
renderFaculty();
renderServiceFilters();
renderServices();
renderSchedule();
renderMap();
renderFaqFilters();
renderFaq();
populateProfileForm();
renderProfile();
bindNavigation();
