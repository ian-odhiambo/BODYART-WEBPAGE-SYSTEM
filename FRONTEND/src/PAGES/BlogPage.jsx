import BlogHero from '../COMPONENTS/blog/BlogHero';
import BlogCard from '../COMPONENTS/blog/BlogCard';
import blogData from '../data/blogData.json';

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-zinc-900">
      <BlogHero />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((item) => (
            <BlogCard 
              key={item.id}
              image={item.image}
              description={item.description}
              artist={item.artist}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
