import React from "react";

const Footer = () => {
  const data = [
    {
      id: 1,
      title: "Seaport",
      children: [{ id: 1, text: "" }],
    },
    {
      id: 2,
      title: "Company",
      children: [
        { id: 1, text: "About" },
        { id: 2, text: "Jobs" },
        { id: 3, text: "Terms of service" },
        { id: 4, text: "Privacy" },
        { id: 5, text: "Security" },
        { id: 6, text: "Cookie settings" },
      ],
    },
    {
      id: 3,
      title: "Product",
      children: [
        { id: 1, text: "Slicee Machine" },
        { id: 2, text: "Page Builder" },
        { id: 3, text: "Pricing" },
        { id: 4, text: "Showcase" },
        { id: 5, text: "Reviews" },
        { id: 6, text: "Progress" },
        { id: 7, text: "Status" },
        { id: 8, text: "Join our research panel" },
      ],
    },
    {
      id: 4,
      title: "Solutions",
      children: [
        { id: 1, text: "Developers" },
        { id: 2, text: "Marketers" },
        { id: 3, text: "Agencies" },
        { id: 4, text: "Marketing site" },
        { id: 5, text: "Multiple websites" },
        { id: 6, text: "Blogs" },
      ],
    },
  ];
  return (
    <div className=" bg-black text-[white] py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 padding-content">
        {data.map((el) => (
          <div key={el.id}>
            <p className="py-9 text-[22px] font-medium">{el.title}</p>
            <div className="flex flex-col items-start gap-4">
              {el.children.map((child) => (
                <p
                  key={child.id}
                  className="text-[#dcdcdc] cursor-pointer hover:underline"
                >
                  {child.text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
