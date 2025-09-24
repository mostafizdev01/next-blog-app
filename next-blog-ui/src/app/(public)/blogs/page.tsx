import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IPost } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs || Next Blog",
  description: "Browser all blogs for web"
}


const AllBlogsPage = async () => {
  
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_API}/post`);
      const {data: blogs} = await res.json()
      console.log(blogs)
  return (

    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className=" grid grid-cols-3 gap-4 mt-20">
        {
          blogs.map((blog: IPost) => <BlogCard key={blog.id} post={blog} />)
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;
