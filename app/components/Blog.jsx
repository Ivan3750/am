'use client'

import {useEffect, useState, useMemo} from 'react'
import Image from 'next/image'
import {client} from '@/app/sanity/client'
import {PortableText} from '@portabletext/react'

const categories = [
  {label: 'Всі', value: 'all'},
  {label: 'Новини', value: 'news'},
  {label: 'Поради', value: 'tips'},
  {label: 'Інтервʼю', value: 'interview'},
  {label: 'Кейси', value: 'case'},
]

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blogPost"]{
  _id,
  title,
  type,
  mainImage{
    asset->{
      url
    }
  },
  content
}`,
      )

      .then((data) => setPosts(data))
      .catch((err) => console.error('Error fetching blog posts:', err))
  }, [])

  const filteredPosts = useMemo(() => {
    return selectedCategory === 'all'
      ? posts
      : posts.filter((item) => item.type === selectedCategory)
  }, [posts, selectedCategory])

  return (
    <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-[28px] sm:text-[32px] font-semibold text-black mb-8 text-center">
        Наш Блог
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(({label, value}) => (
          <button
            key={value}
            onClick={() => setSelectedCategory(value)}
            className={`text-sm sm:text-base rounded-sm border py-2 px-4 sm:px-6 transition-all
              ${
                selectedCategory === value
                  ? 'bg-gray-100 text-black border-transparent'
                  : 'text-gray-700 border-gray-300 hover:text-black'
              }`}
            aria-pressed={selectedCategory === value}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map(({_id, title, type, mainImage, content}) => {
         const imageUrl = mainImage?.asset?.url || "/placeholder.jpg";


          return (
            <div
              key={_id}
              onClick={() => setSelectedPost({title, type, content, imageUrl})}
              className="cursor-pointer transition-transform hover:scale-[1.02] bg-white overflow-hidden"
              role="button"
              tabIndex={0}
            >
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] group">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  loading="lazy"
                  className="object-cover transition group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text- opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-lg sm:text-xl font-semibold text-center px-2">{title}</h3>
                  <p className="text-xs sm:text-sm mt-1 text-center">{type}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {selectedPost && (
        <div
          className="fixed inset-0 bg-[#070707de] flex items-center justify-center z-50 px-4 py-8 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-content"
        >
          <div className="relative w-full max-w-[900px] bg-white p-6 md:p-10 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
            <Image
              src={selectedPost.imageUrl}
              alt={selectedPost.title}
              width={800}
              height={400}
              className="rounded-lg object-cover mb-6"
              priority
            />
            <h3 id="modal-title" className="text-[24px] text-black md:text-[28px] font-bold mb-3">
              {selectedPost.title}
            </h3>
            <p className="text-[#11111180] text-sm mb-6">{selectedPost.type}</p>
          <div id="modal-content" className="prose max-w-none break-words text-black">
  <PortableText value={selectedPost.content} />
</div>


            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 text-white text-2xl bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition"
              aria-label="Закрити статтю"
              type="button"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Blog
