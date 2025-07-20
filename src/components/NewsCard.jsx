const NewsCard = ({ article }) => {
  if (!article || !article.title) return null;

  return (
    <div className="border rounded-lg p-4 m-3 shadow-2xl">
      <h2 className="text-lg font-semibold">{article.title}</h2>

      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="my-2 w-full h-auto object-cover rounded-md"
        />
      )}

      {article.description && (
        <p className="text-sm text-gray-600">{article.description}</p>
      )}

      {article.url && (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          Read More
        </a>
      )}
    </div>
  );
};
export default NewsCard;
