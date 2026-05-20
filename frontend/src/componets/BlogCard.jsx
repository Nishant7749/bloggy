

export default function BlogCard({blog}) {
   return(
    <>
    <div className="border border-amber-800/30 bg-amber-800/20 p-5 rounded-md m-4 w-200">
        <h1 className="uppercase text-center mb-4 text-lg text-amber-900/30 font-bold">{blog.title}</h1>

        <p className="mb-4 text-amber-900 wrap-break-word">{blog.content}</p>

        <p className="text-sm text-amber-900/30 float-right">{new Date(blog.createdAt).toLocaleString()}</p>
    </div>
    </>
   )
}