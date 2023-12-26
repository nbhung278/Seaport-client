import Image from "next/image";

export default function Home() {
  const listCategories = [
    {
      id: 1,
      text: "Latest Articles",
    },
    {
      id: 2,
      text: "Performance & UX",
    },
    {
      id: 3,
      text: "Tech stack",
    },
    {
      id: 4,
      text: "Developer Workflow",
    },
    {
      id: 5,
      text: "Prismic Announcements",
    },
    {
      id: 6,
      text: "Business of Web Development",
    },
  ];
  return (
    <main className="h-[2000px] ">
      {/* <div className=" sticky top-0 flex flex-row justify-between items-center h-[100px] padding-content border-b-[1px] bg-white">
        {listCategories.map((category) => (
          <div key={category.id}>{category.text}</div>
        ))}
      </div> */}
      <div className="padding-content">Content</div>
    </main>
  );
}
