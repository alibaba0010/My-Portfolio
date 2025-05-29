import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import articles from "../utils/articles";
import { useState } from "react";

function Articles() {
  const [expandedIds, setExpandedIds] = useState(new Set());
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const toggleDescription = (id) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 inline-block">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
              Technical Articles
            </span>
          </h2>
        </motion.div>

        <motion.ul className="max-w-4xl mx-auto space-y-8">
          {sortedArticles.map((article) => (
            <motion.li
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border-b border-[#233554] pb-8 last:border-b-0"
            >
              <article className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 hidden md:block">
                  <img
                    src={article.previewImage}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-cyan-400/20 transition-shadow"
                  />
                </div>

                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-2 text-sm text-cyan-400 mb-2">
                    <time>{article.date}</time>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-gray-200 hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>

                  <div className="relative">
                    <p
                      className={`text-gray-400 mb-4 ${
                        !expandedIds.has(article.id) ? "line-clamp-2" : ""
                      }`}
                    >
                      {article.description}
                    </p>
                    <button
                      onClick={() => toggleDescription(article.id)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm flex items-center gap-1"
                    >
                      {expandedIds.has(article.id) ? (
                        <>
                          Show Less <FiChevronUp className="inline" />
                        </>
                      ) : (
                        <>
                          Read More <FiChevronDown className="inline" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-2 flex-wrap">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-[#1d2d50] text-cyan-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      View Article <FiArrowUpRight className="inline-block" />
                    </a>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default Articles;
