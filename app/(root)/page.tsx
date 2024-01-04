import Image from "next/image";
import imageSocial from "../../public/assets/images/social-3.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegEye } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FcDatabase } from "react-icons/fc";

export default function Home() {
  const leftPosts = [
    {
      id: 1,
      image: imageSocial,
      category: "Business of Web Development",
      title: "Build a Next.js Blog: A Step-by-Step Guide",
    },
    {
      id: 2,
      image: imageSocial,
      category: "Tech stack",
      title: "Headless CMS: A Complete Introduction",
    },
    {
      id: 3,
      image: imageSocial,
      category: "Tech stack",
      title: "Headless CMS Explained: A Guide for Marketers and Developers",
    },
    {
      id: 4,
      image: imageSocial,
      category: "Latest Articles",
      title: "Build a Next.js Blog: A Step-by-Step Guide",
    },
    {
      id: 5,
      image: imageSocial,
      category: "Developer Workflow",
      title: "Headless CMS: A Complete Introduction",
    },
    {
      id: 6,
      image: imageSocial,
      category: "Performance & UX",
      title: "Headless CMS Explained: A Guide for Marketers and Developers",
    },
    {
      id: 7,
      image: imageSocial,
      category: "Tech stack",
      title: "Build a Next.js Blog: A Step-by-Step Guide",
    },
    {
      id: 8,
      image: imageSocial,
      category: "Developer Workflow",
      title: "Headless CMS: A Complete Introduction",
    },
  ];

  const bottomPosts = [
    {
      id: 1,
      image: imageSocial,
      category: "Performance & UX",
      title: "Build a Next.js Blog: A Step-by-Step Guide",
    },
    {
      id: 2,
      image: imageSocial,
      category: "Tech stack",
      title: "Headless CMS: A Complete Introduction",
    },
    {
      id: 3,
      image: imageSocial,
      category: "Performance & UX",
      title: "Headless CMS Explained: A Guide for Marketers and Developers",
    },
  ];

  const rightPosts = [
    {
      id: 1,
      image: imageSocial,
      category: "Business of Web Development",
      title: "Build a Next.js Blog: A Step-by-Step Guide",
    },
    {
      id: 2,
      image: imageSocial,
      category: "Tech stack",
      title: "Headless CMS: A Complete Introduction",
    },
  ];

  const centerPost = {
    id: 1,
    image: imageSocial,
    createdDate: "Jan 05 2024",
    author: "Nefe Emadamerho-Atori",
    category: "Tech stack",
    title: "Build a Next.js Blog: A Step-by-Step Guide",
    views: 54,
    description:
      "CSS frameworks are a set of pre-written and ready-to-use CSS stylesheets. Instead of creating CSS styles from scratch, CSS frameworks allow developers to swiftly create user interfaces and build websites by providing a foundation of styles and layout structures they can work with. CSS frameworks contain styles for pre-designed UI components, responsive grid systems, and elements like buttons and forms. They sometimes also contain JavaScript code for interactive web components like responsive navigation with hamburger menus, tabs, and accordions. If you are creating a new site, CSS frameworks are a great tool because they can boost your productivity and help you create consistent user interfaces and websites. They are a great choice for large and small teams and projects.",
  };

  return (
    <main className="padding-content">
      <div className="mt-10">
        <div>
          <p className="text-[#b84eff] font-medium">The Seaport Blog</p>
          <h1 className="font-semibold text-5xl mt-3">Choose your stack.</h1>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-5 max-xl:grid-cols-3">
          <div className="col-span-1 h-full max-xl:hidden">
            <div className="h-full border-[1px] border-[#e4e4e4] dark:border-[#4a4a4a] rounded-lg flex flex-col gap-4 bg-bw-card">
              {leftPosts.map((leftPost, index) => (
                <>
                  <div
                    key={leftPost.id}
                    className="rounded-md overflow-hidden cursor-pointer"
                  >
                    <div className="p-3">
                      <div className="flex flex-row items-center gap-1">
                        <FcDatabase />
                        <p className="text-[14px] font-medium">
                          {leftPost.category}
                        </p>
                      </div>
                      <p className="text-[18px] font-medium mt-2 line-clamp-2">
                        {leftPost.title}
                      </p>
                    </div>
                  </div>
                  {index !== leftPosts.length - 1 && (
                    <hr className="border-[1px] border-[#e5e5e5] dark:border-[#4a4a4a]" />
                  )}
                </>
              ))}
            </div>
          </div>
          <div className="col-span-3 grid grid-cols-3 grid-rows-3 gap-6">
            <div className="col-span-2 row-span-2 max-md:col-span-3 max-md:row-span-1">
              <div className="rounded-md overflow-hidden shadow-md bg-bw-card cursor-pointer">
                <Image
                  src={centerPost.image}
                  alt="centerPost"
                  className="w-full"
                />
                <div className="p-3 mt-2 flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-1">
                    <FcDatabase />
                    <p className="text-[14px] font-medium">
                      {centerPost.category}
                    </p>
                  </div>
                  <p className="text-[14px] font-medium text-[gray]">
                    {centerPost.createdDate}
                  </p>
                </div>
                <div className="p-3">
                  <p className="text-[26px] font-medium line-clamp-2">
                    {centerPost.title}
                  </p>
                  <p className="text-[16px] font-normal text-[#5a5a5a] mt-4 line-clamp-4">
                    {centerPost.description}
                  </p>
                </div>
                <div className="p-3 mt-2 flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-2">
                    <Avatar className="z-0">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="avatar"
                      />
                      <AvatarFallback>
                        <FaRegUser />
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-[14px] font-medium">
                      By {centerPost.author}
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 items-center">
                    <FaRegEye className="text-[18px]" />
                    <p className="text-[14px] font-medium">
                      {centerPost.views}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-6 row-span-2 max-md:col-span-3">
              {rightPosts.map((rightPost) => (
                <div
                  key={rightPost.id}
                  className="rounded-md overflow-hidden shadow-md cursor-pointer bg-bw-card"
                >
                  <Image
                    src={rightPost.image}
                    alt="rightPost"
                    className="w-full"
                  />
                  <div className="p-3">
                    <div className="flex flex-row items-center gap-1">
                      <FcDatabase />
                      <p className="text-[14px] font-medium">
                        {rightPost.category}
                      </p>
                    </div>
                    <p className="text-[18px] font-medium mt-2 line-clamp-2">
                      {rightPost.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-6 row-span-3 max-md:hidden">
              {bottomPosts.map((bottomPost) => (
                <div
                  key={bottomPost.id}
                  className="rounded-md overflow-hidden shadow-md cursor-pointer bg-bw-card"
                >
                  <Image
                    src={bottomPost.image}
                    alt="bottomPost"
                    className="w-full"
                  />
                  <div className="p-3">
                    <div className="flex flex-row items-center gap-1">
                      <FcDatabase />
                      <p className="text-[14px] font-medium">
                        {bottomPost.category}
                      </p>
                    </div>
                    <p className="text-[18px] font-medium mt-2 line-clamp-2">
                      {bottomPost.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
