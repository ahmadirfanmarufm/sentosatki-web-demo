import { posts } from '../../data/Post'

const LatestNews = () => {
    return(
        <div className="bg-white py-10 sm:py-18 relative z-10">
            <div className="mx-auto max-w-7xl px-6 items-center justify-center lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-bold leading-7 text-primary-secondary-800">BERITA TERBARU</h2>
                    <p className="mt-5 text-3xl font-bold tracking-tight text-primary-400 sm:text-4xl">
                        APA SAJA BERITA TERBARU
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Informasi terbaru seputar industri penempatan Pekerja Migran Indonesia, regulasi terkini, kasus sukses Pekerja Migran Indonesa, dan perkembangan Kami
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.slice(0, 3).map((post) => (
                    <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4">
                            <img src={post.imageNews} className="rounded-xl mb-4 shadow-lg w-full h-auto" alt="Post Image"/>
                        </div>
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={post.datetime} className="text-gray-500">
                            {post.date}
                            </time>
                            <a
                                href={post.category.href}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600left hover:bg-gray-100"
                            >
                            {post.category.title}
                            </a>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg text-left font-semibold leading-6 text-gray-900 group-hover:text-primary-secondary-800">
                            <a href={post.href} target='_blank'>
                                <span className="absolute inset-0" />
                                {post.title}
                            </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-left text-sm leading-6 text-gray-600">{post.description}</p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4">
                            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                                <a href={post.author.href}>
                                <span className="absolute inset-0" />
                                {post.author.name}
                                </a>
                            </p>
                            <p className="text-gray-600 text-left">{post.author.role}</p>
                            </div> 
                        </div>
                    </article>
                ))}
                </div>
            </div>
        </div>
    )
}

export default LatestNews;