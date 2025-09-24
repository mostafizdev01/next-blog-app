import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { IPost } from "@/types";

export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_API}/post`)
    const { data } = await res.json();
    return data.slice(0, 3).map((blog: IPost) => ({
        blogId: String(blog.id)
    }))
}


export const generateMetadata = async ({
    params
}: { params: Promise<{ blogId: string }> }) => {
    const { blogId } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_API}/post/${blogId}`)
    const blog = await res.json();

    return {
        title: blog?.title,
        description: blog?.content
    }
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ blogId: string }> }) {
    const { blogId } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_API}/post/${blogId}`)
    const data = await res.json();
    console.log(data);

    return (
        <div>
            <BlogDetailsCard blog={data} />
        </div>
    )
}
