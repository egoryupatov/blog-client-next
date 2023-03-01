import Category from "@/components/Sidebar/Category";
import { ICategory } from "@/types/category.type";

export default function Sidebar() {
  // список категории будем получать с бека

  const categories = [
    {
      id: 1,
      name: "Популярное",
      alias: "popular",
      image: "/fire.svg",
    },
    {
      id: 2,
      name: "Свежее",
      alias: "new",
      image: "/clock.svg",
    },
    {
      id: 3,
      name: "Моя лента",
      alias: "feed",
      image: "/feed.svg",
    },
  ];

  return (
    <div className="sidebar">
      {categories.map((category: ICategory) => (
        <Category
          key={category.id}
          id={category.id}
          name={category.name}
          alias={category.alias}
          image={category.image}
        />
      ))}
      <button className="btn_sidebar">Новая запись</button>
    </div>
  );
}
