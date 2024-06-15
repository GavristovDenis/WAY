import { ListData } from "../types";

export const placesData: ListData[] = [
  {
    id: 1,
    whenPublished: "2 дня назад",
    name: "ГЭС-2",
    shortDescription:
      "Электростанция, выведена из эксплуатации, ныне культурный центр",
    description:
      "Некоммерческий фонд развития современной культуры V–A–C был основан в 2009 году Леонидом Михельсоном. Одной из главных задач Фонда является разработка нового языка современных культурных процессов через выставочную, просветительскую, издательскую и перформативную деятельность совместно с художниками, исследователями и публикой. Выходя за рамки дисциплинарных границ в поле эксперимента, Фонд переосмысляет систему культурного производства и распространения знания, ставя под вопрос конвенциональные иерархии экспертного и не-экспертного мнений, локального и глобального контекстов. Важным шагом на этом пути стало создание Дома культуры «ГЭС-2» — институции, способной представить ландшафт современной культуры во всем ее многообразии.",
    previewImage: require("../img/preview1.png"),
    isAdded: true,
    sliderImages: [
      require("../img/preview1.png"),
      require("../img/preview2.png"),
    ],
    author: "Марии Дубцовой",
    date: "24 апреля, 2024",
    mapLink:
      "https://yandex.ru/maps/org/ges_2/216491468916/?ll=37.612731%2C55.742651&z=16.71",
  },
  {
    id: 2,
    whenPublished: "Сегодня",
    name: "Красный Октябрь",
    shortDescription: "Кондитерская фабрика, креативный косплекс",
    description:
      "Основание кондитерской фабрики «Красный Октябрь» уходит своими корнями в конец 40-х - начало 50-х гг. XIX века. В 1846 году прусско-подданный, Фердинанд Теодор Эйнем прибывает в Москву. 6 декабря 1849 года кондитер «имел счастье поставлять» изделия своего мастерства к столу членов императорской семьи, и за те изделия удостоился высочайшего одобрения Императрицы и Великих Княгинь. В 1851 г. он открывает небольшую лавку по производству пиленого сахара и шоколада на Арбате. К концу 60-ых годов фирма «Эйнем» уже известна на кондитерском рынке России, ее обороты быстро растут и появляется необходимость в постройке большой фабрики. В 1867г. открывается фабрика на Софийской набережной, прямо напротив Кремля",
    previewImage: require("../img/preview2.png"),
    isAdded: true,
    sliderImages: [
      require("../img/preview2.png"),
      require("../img/preview3.png"),
    ],
    author: "Марии Дубцовой",
    date: "24 апреля, 2024",
    mapLink:
      "https://yandex.ru/maps/org/ges_2/216491468916/?ll=37.612731%2C55.742651&z=16.71",
  },

  {
    id: 3,
    whenPublished: "17 дней назад",
    name: "Трехгорка",
    shortDescription: "Текстильные предприятие, креативный кластер",
    description: "345",
    previewImage: require("../img/preview3.png"),
    isAdded: false,
    sliderImages: [
      require("../img/preview3.png"),
      require("../img/preview1.png"),
    ],
    author: "Марии Дубцовой",
    date: "24 апреля, 2024",
    mapLink:
      "https://yandex.ru/maps/org/ges_2/216491468916/?ll=37.612731%2C55.742651&z=16.71",
  },
];

export const eventsData = [
  {
    id: 1,
    whenPublished: "2 дня назад",
    name: "New event1",
    shortDescription:
      "Электростанция, выведена из эксплуатации, ныне культурный центр",
    description: "123",
    previewImage: require("../img/preview4.png"),
    isAdded: true,
    sliderImages: [
      require("../img/preview4.png"),
      require("../img/preview5.png"),
    ],
    author: "Марии Дубцовой",
    date: "24 апреля, 2024",
    mapLink:
      "https://yandex.ru/maps/org/ges_2/216491468916/?ll=37.612731%2C55.742651&z=16.71",
  },
  {
    id: 2,
    whenPublished: "Сегодня",
    name: "Event2",
    shortDescription: "Кондитерская фабрика, креативный комплекс",
    description: "234",
    previewImage: require("../img/preview5.png"),
    isAdded: true,
    sliderImages: [
      require("../img/preview5.png"),
      require("../img/preview6.png"),
    ],
    author: "Марии Дубцовой",
    date: "24 апреля, 2024",
    mapLink:
      "https://yandex.ru/maps/org/ges_2/216491468916/?ll=37.612731%2C55.742651&z=16.71",
  },
  {
    id: 3,
    whenPublished: "17 дней назад",
    name: "Event3",
    shortDescription: "Текстильные предприятие, креативный кластер",
    description: "345",
    previewImage: require("../img/preview6.png"),
    isAdded: false,
    sliderImages: [
      require("../img/preview6.png"),
      require("../img/preview4.png"),
    ],
    author: "Марии Дубцовой",
    date: "24 апреля, 2024",
    mapLink:
      "https://yandex.ru/maps/org/ges_2/216491468916/?ll=37.612731%2C55.742651&z=16.71",
  },
];
