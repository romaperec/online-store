import { BookCardInterface } from "@/interface/catalogpage/bookCard";
import { CategoriesInterface } from "@/interface/catalogpage/categories";

export const categories: CategoriesInterface[] = [
  {
    id: "196c1710-1297-1f49-8167-178c556753b8",
    category: "Художественная литература",
    slug: "fiction",
  },
  {
    id: "32fa2f10-28d6-4349-a64e-f83dc515ccee",
    category: "Нехудожественная литература",
    slug: "non-fiction",
  },
  {
    id: "b9ccf354-1ab1-42e1-a847-c18281449e3e",
    category: "Учебная литература и словари",
    slug: "educational-and-dictionaries",
  },
  {
    id: "a73f6c84-7f77-4bc7-b0f7-6c1f12f15c23",
    category: "Молодёжная литература",
    slug: "young-adult",
  },
  {
    id: "7c3fd64a-c64e-4bde-bf4b-9eaaf55fc69a",
    category: "Комиксы, манга, артбуки",
    slug: "comics-manga-artbooks",
  },
  {
    id: "acb6be68-e0c4-49e2-8a58-57025df46cfa",
    category: "Книги для детей",
    slug: "childrens-books",
  },
  {
    id: "8e20f5a4-5402-47a4-893e-33b26e0d0d78",
    category: "Периодические издания",
    slug: "periodicals",
  },
  {
    id: "6f882a87-ec5e-452d-8d33-ef780b79b126",
    category: "Все книги",
    slug: "all-books",
  },
];

export const BookCards: BookCardInterface = {
  id: "30040300R0",
  title:
    "Отношения. Визуальный гид по любви и дружбе из серии Чему не учат в школе для подростков | Smart Reading",
  description: `Отношения. Визуальный гид по любви и дружбе из серии «Чему не учат в школе» для подростков.<br/>
Навигатор по построению настоящих отношений, от которых зависит ваше счастье.<br/>
Умение создавать и поддерживать отношения, без преувеличения, самый важный навык. Из отношений соткана вся жизнь. Близость с людьми является источником как истинного счастья и радости, так и самых глубоких ран и разочарований. Настоящие отношения — основа удовлетворения жизнью и долголетия (научно доказано Гарвардским исследованием).
Что же мы делаем, чтобы научиться строить отношения? Как учим этому своих детей? В школьной программе такого предмета нет. Нам приходиться учиться и учить на собственных ошибках, перенимая не самый успешный опыт близкого окружения. Пора это исправить!
В книге «Отношения. Визуальный гид по любви и дружбе» мы делимся ключевыми принципами построения здоровых отношений. Увлекательно, в виде инфографики и иллюстраций, отвечаем на вопросы, так часто волнующие подростка примерно с 12-ти лет:
Как принимать себя и не зависеть от чужой оценки
Как дружить и доверять
Как понимать родителей и сохранять с ними отношения
Какова роль романтических отношений и когда пора
Как найти свое племя тех, кто тебя понимает и поддерживает`,
  characteristics: "Тут лютые характеристики что капец",
  price: 1083,
  publishing: "Smart Reading",
  isbn: "9785604800904",
  series: "Чему не учат в школе",
  year: 2023,
  category: "Книги для детей",
  category_slug: "childrens-books",
  typeBook: "Печатная книга",
  images: [
    "/img/books/book.png",
    "/img/books/book.png",
    "/img/books/book.png",
    "/img/books/book.png",
    "/img/books/book.png",
    "/img/books/book2.png",
    "/img/books/book3.png",
    "/img/books/book4.png",
  ],
  comments: 1123,
  rating: 4.0,
  shop: {
    id: "11111",
    title: "Smart Reading",
    description: "Ценные идеи в инфографике",
    cover: "/img/shop/shop1.png",
    rate: 4,
  },
};
