import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { motion } from "framer-motion";
import { FiArrowLeft, FiClock, FiTag, FiCalendar } from "react-icons/fi";
import articles from "../utils/articles";
import { articleContent } from "../utils/articleContent";
import { useEffect } from "react";

function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);
  const content = articleContent[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article || !content) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-gray-200 mb-4">Article Not Found</h2>
        <p className="text-gray-400 mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/articles"
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <FiArrowLeft /> Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto pt-10 pb-20 px-4"
    >
      <Link
        to="/articles"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
      >
        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Back to Articles
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <FiCalendar className="text-cyan-400" />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <FiTag className="text-cyan-400" />
            {article.tags.join(", ")}
          </span>
          <span className="flex items-center gap-1">
            <FiClock className="text-cyan-400" />
            8 min read
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6 leading-tight">
          {article.title}
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed italic border-l-4 border-cyan-400 pl-6 py-2">
          {article.description}
        </p>
      </header>

      {article.previewImage && (
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20">
          <img
            src={article.previewImage}
            alt={article.title}
            className="w-full h-auto object-cover max-h-[400px]"
          />
        </div>
      )}

      <div className="prose prose-invert prose-cyan max-w-none 
        prose-headings:text-gray-100 prose-headings:font-bold
        prose-p:text-gray-300 prose-p:leading-relaxed
        prose-strong:text-cyan-400 prose-strong:font-semibold
        prose-code:text-cyan-300 prose-code:bg-[#1d2d50] prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-gray-800 prose-pre:shadow-xl
        prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-cyan-400 prose-blockquote:bg-[#112240] prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
        prose-img:rounded-xl prose-img:shadow-lg
        prose-hr:border-gray-800
      ">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <div className="relative group">
                  <div className="absolute right-4 top-4 text-xs text-gray-500 uppercase font-mono group-hover:text-cyan-400 transition-colors">
                    {match[1]}
                  </div>
                  <pre className={className} {...props}>
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      <footer className="mt-20 pt-10 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400">
             &copy; {new Date().getFullYear()} Alibaba. All rights reserved.
          </div>
          <div className="flex gap-4">
            {article.tags.map((tag) => (
              <span key={tag} className="text-sm px-3 py-1 rounded-full bg-[#112240] text-cyan-400 border border-cyan-400/20">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default ArticleDetail;
