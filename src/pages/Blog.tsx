import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowLeft, ChevronRight, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts, BlogPost } from '../data/blogData';
import Markdown from 'react-markdown';

export default function Blog() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = blogPosts.find(p => p.id === selectedPostId);

  // Scroll to top when a post is opened
  React.useEffect(() => {
    if (selectedPostId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedPostId]);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <SEO 
        title={selectedPost ? `${selectedPost.title} | Belle Vue Hospital` : "Blog & Health Articles | Belle Vue Multispecialty Hospital"}
        description={selectedPost ? selectedPost.excerpt : "Read our latest articles on health, wellness, and medical advancements from the experts at Belle Vue Multispecialty Hospital."}
      />

      <AnimatePresence mode="wait">
        {!selectedPostId ? (
          <motion.div
            key="blog-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header */}
            <div className="bg-primary text-white py-16 md:py-24">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Health & Wellness Blog</h1>
                <p className="text-xl max-w-2xl mx-auto text-primary-light">
                  Insights, advice, and updates from our medical experts to help you live a healthier life.
                </p>
              </div>
            </div>

            {/* Top Categories / Tags (Optional visual element for future use) */}
            <div className="bg-white border-b border-gray-200">
              <div className="container mx-auto px-4 py-4 flex items-center overflow-x-auto space-x-4">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">Filter by:</span>
                <button className="px-4 py-1.5 rounded-full bg-red-50 text-primary text-sm font-medium whitespace-nowrap border border-primary/20">All Articles</button>
                {/* Dynamically gather unique categories from blogPosts if desired */}
                {Array.from(new Set(blogPosts.map(p => p.category))).map(cat => (
                  <button key={cat} className="px-4 py-1.5 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm font-medium whitespace-nowrap border border-gray-200 transition-colors">
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="container mx-auto px-4 py-12 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, i) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col group cursor-pointer"
                    onClick={() => setSelectedPostId(post.id)}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center shadow-sm">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                        <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-3">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center text-primary font-semibold text-sm">
                        Read Full Article <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="blog-post"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white min-h-screen"
          >
            {/* Header Hero */}
            <div className="relative h-[40vh] md:h-[50vh] min-h-[300px] w-full">
              <img 
                src={selectedPost?.imageUrl} 
                alt={selectedPost?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="container mx-auto px-4 py-12 md:py-16">
                  <button 
                    onClick={() => setSelectedPostId(null)}
                    className="flex items-center text-white/80 hover:text-white mb-6 transition-colors w-fit group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                    <span className="font-medium tracking-wide text-sm">BACK TO ALL ARTICLES</span>
                  </button>
                  
                  <div className="flex flex-wrap items-center gap-3 text-white/90 text-sm font-medium mb-4">
                    <span className="bg-primary px-3 py-1 rounded-full text-white tracking-wide text-xs">{selectedPost?.category}</span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {selectedPost?.date}</span>
                    <span className="hidden sm:inline text-white/40">•</span>
                    <span className="flex items-center"><User className="w-4 h-4 mr-1.5" /> {selectedPost?.author}</span>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-tight max-w-4xl">
                    {selectedPost?.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 md:py-20 lg:flex lg:space-x-12">
              <article className="lg:w-2/3 max-w-3xl mx-auto lg:mx-0 w-full prose prose-lg prose-red">
                <div className="text-xl text-gray-500 leading-relaxed font-medium mb-10 pb-8 border-b border-gray-200">
                  {selectedPost?.excerpt}
                </div>
                
                <div className="markdown-body">
                  <Markdown>{selectedPost?.content}</Markdown>
                </div>
              </article>
              
              {/* Optional Sidebar */}
              <aside className="lg:w-1/3 mt-16 lg:mt-0 max-w-md mx-auto w-full">
                <div className="sticky top-28 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-4 mb-6">Recent Articles</h3>
                  <div className="space-y-6">
                    {blogPosts.filter(p => p.id !== selectedPostId).slice(0, 3).map(post => (
                      <div 
                        key={post.id} 
                        className="group cursor-pointer flex space-x-4"
                        onClick={() => setSelectedPostId(post.id)}
                      >
                        <img src={post.imageUrl} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" alt={post.title} />
                        <div>
                          <h4 className="font-bold text-sm text-gray-800 group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-1">
                            {post.title}
                          </h4>
                          <span className="text-xs text-gray-500">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <button 
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        // Add an event to open Contact form or navigate to Book appointment if that was supported in App state directly
                      }}
                      className="w-full bg-gray-900 hover:bg-black text-white px-6 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <User className="w-4 h-4" />
                      <span>Consult Our Experts</span>
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
