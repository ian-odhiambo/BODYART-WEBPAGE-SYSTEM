const BlogCard = ({ image, description, artist }) => {
  return (
    <div className="group bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-zinc-700/50 hover:border-red-600/50 hover:shadow-red-500/25 transition-all duration-500 overflow-hidden">
      <div className="relative h-64 mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <img 
          src={`/src/assets/images/${image}`} 
          alt="Artist work"
          className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
        />
      </div>
      <p className="text-zinc-300 leading-relaxed text-lg mb-4 group-hover:text-white transition-colors">
        {description}
      </p>
      <p className="text-red-400 italic font-medium text-base tracking-wide">
        — {artist}
      </p>
    </div>
  );
};

export default BlogCard;
