import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowLeft, ChevronRight, Tag, Search, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts, BlogPost } from '../data/blogData';
import Markdown from 'react-markdown';

export default function Blog({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const targetKeywords = [
    { label: "Bellevue Hospital DN Nagar", query: "dn nagar" },
    { label: "Bellevue Hospital Mumbai", query: "mumbai" },
    { label: "Bellevue Multispeciality Hospital", query: "bellevue multispeciality" },
    { label: "Bellevue Hospital", query: "bellevue hospital" },
    { label: "Belle Vue Multispeciality", query: "belle vue multispeciality" },
    { label: "Belle Vue", query: "belle vue" },
    { label: "Belle Vue Hospital", query: "belle vue hospital" },
    { label: "Belle Vue Andheri West", query: "andheri west" },
    { label: "Bellevue Nursing Home", query: "nursing home" },
  ];

  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      post.title.toLowerCase().includes(q) || 
      post.excerpt.toLowerCase().includes(q) || 
      post.content.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const selectedPost = blogPosts.find(p => p.id === selectedPostId);

  React.useEffect(() => {
    const handleOpenBlog = (e: CustomEvent<string>) => {
      setSelectedPostId(e.detail);
    };
    
    window.addEventListener('openBlog', handleOpenBlog as EventListener);
    return () => window.removeEventListener('openBlog', handleOpenBlog as EventListener);
  }, []);

  // Scroll to top when a post is opened
  React.useEffect(() => {
    if (selectedPostId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedPostId]);

  const blogSchema = selectedPost ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": selectedPost.title,
    "description": selectedPost.excerpt,
    "image": selectedPost.imageUrl,
    "author": {
      "@type": "Person",
      "name": selectedPost.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bellevue Multispeciality Hospital",
      "alternateName": [
        "Bellevue Mumbai",
        "Bellevue Hospital",
        "Belle Vue",
        "Belle Vue Hospital",
        "Belle Vue Multispeciality Hospital",
        "Bellevue Hospital DN Nagar",
        "Belle Vue Andheri West",
        "Bellevue Nursing Home"
      ],
      "logo": {
        "@type": "ImageObject",
        "url": "https://khssjcstrvidiuubzykw.supabase.co/storage/v1/object/public/BellVue%20Hospital%20Files/Bellvue%20Remake/Bellvue-Logo-Favicon-full.png"
      }
    },
    "datePublished": new Date(selectedPost.date).toISOString()
  } : {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Bellevue Multispeciality Hospital Health Blog",
    "alternateName": "Bellevue Mumbai Health Blog",
    "url": "http://bellevuemumbai.in/blog",
    "description": "Read our latest articles on health, wellness, medical advancements, and local healthcare guides from the experts at Bellevue Multispeciality Hospital."
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <SEO 
        title={selectedPost ? `${selectedPost.title} | Bellevue Multispeciality Hospital Blog` : "Health & Medical Blog | Bellevue Hospital Mumbai"}
        description={selectedPost ? selectedPost.excerpt : "Official health blog of Bellevue Multispeciality Hospital (Belle Vue Mumbai). Expert health guides, emergency care tips in DN Nagar Andheri West, and medical updates."}
        url={selectedPost ? `http://bellevuemumbai.in/blog#${selectedPost.id}` : "http://bellevuemumbai.in/blog"}
        schema={blogSchema}
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
                  Insights, medical advice, and hyper-local healthcare updates from the doctors at Bellevue Multispeciality Hospital.
                </p>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto mt-8 relative">
                  <div className="relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text"
                      placeholder="Search articles, keywords, or specialties..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 rounded-full text-gray-900 bg-white/95 backdrop-blur-sm focus:bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-light text-sm"
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full px-2 py-1"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Keyword Discovery Pills */}
            <div className="bg-primary/5 border-b border-primary/10 py-3">
              <div className="container mx-auto px-4 flex items-center overflow-x-auto space-x-2 scrollbar-none">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap flex items-center mr-1">
                  <Sparkles className="w-3.5 h-3.5 text-primary mr-1" />
                  Popular Topics:
                </span>
                {targetKeywords.map((kw) => (
                  <button
                    key={kw.label}
                    onClick={() => {
                      setSearchQuery(kw.query);
                      setSelectedCategory('All');
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                      searchQuery.toLowerCase() === kw.query.toLowerCase()
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-white hover:bg-red-50 text-gray-700 border border-gray-200 hover:border-primary/30'
                    }`}
                  >
                    {kw.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white border-b border-gray-200">
              <div className="container mx-auto px-4 py-4 flex items-center overflow-x-auto space-x-3">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">Category:</span>
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                    }}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat 
                        ? 'bg-primary text-white shadow-sm' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200'
                    }`}
                  >
                    {cat === 'All' ? 'All Articles' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="container mx-auto px-4 py-12 md:py-16">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 max-w-lg mx-auto">
                  <Tag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No articles found</h3>
                  <p className="text-gray-500 text-sm mb-6">We couldn't find any articles matching your search criteria.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
                  >
                    View All Articles
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, i) => (
                    <motion.article 
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col group cursor-pointer border border-gray-100 hover:border-primary/20"
                      onClick={() => setSelectedPostId(post.id)}
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center shadow-sm">
                          <Tag className="w-3 h-3 mr-1" />
                          {post.category}
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                          <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                          <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                        </div>
                        
                        <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        
                        <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="mt-auto flex items-center text-primary font-semibold text-sm pt-4 border-t border-gray-100">
                          Read Full Article <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
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
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="container mx-auto px-4 py-12 md:py-16">
                  <button 
                    onClick={() => setSelectedPostId(null)}
                    className="flex items-center text-white/90 hover:text-white mb-6 transition-colors w-fit group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center mr-3 group-hover:bg-white/25 transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                    <span className="font-semibold tracking-wide text-sm">BACK TO ALL ARTICLES</span>
                  </button>
                  
                  <div className="flex flex-wrap items-center gap-3 text-white/90 text-sm font-medium mb-4">
                    <span className="bg-primary px-3.5 py-1 rounded-full text-white font-semibold tracking-wide text-xs">{selectedPost?.category}</span>
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
              <article className="lg:w-2/3 max-w-3xl mx-auto lg:mx-0 w-full">
                <div className="text-xl text-gray-600 leading-relaxed font-medium mb-10 pb-8 border-b border-gray-200">
                  {selectedPost?.excerpt}
                </div>
                
                <div className="markdown-body prose prose-lg prose-red max-w-none">
                  <Markdown>{selectedPost?.content}</Markdown>
                </div>
              </article>
              
              {/* Sidebar */}
              <aside className="lg:w-1/3 mt-16 lg:mt-0 max-w-md mx-auto w-full">
                <div className="sticky top-28 bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-4 mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {blogPosts.filter(p => p.id !== selectedPostId).slice(0, 4).map(post => (
                      <div 
                        key={post.id} 
                        className="group cursor-pointer flex space-x-4"
                        onClick={() => setSelectedPostId(post.id)}
                      >
                        <img src={post.imageUrl} width={80} height={80} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" alt={post.title} referrerPolicy="no-referrer" loading="lazy" />
                        <div>
                          <h4 className="font-bold text-sm text-gray-800 group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-1">
                            {post.title}
                          </h4>
                          <span className="text-xs text-gray-500">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200 space-y-3">
                    <button 
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setActiveTab('CONTACT');
                      }}
                      className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 shadow-sm"
                    >
                      <User className="w-4 h-4" />
                      <span>Book an Appointment</span>
                    </button>
                    <a
                      href="tel:+9102266868600"
                      className="w-full bg-gray-900 hover:bg-black text-white px-6 py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 text-center text-sm"
                    >
                      <span>Call 24/7 Helpline: 022-6686-8600</span>
                    </a>
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
