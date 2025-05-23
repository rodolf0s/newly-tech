import { Newsletter } from "../domain/newsletter";

const NewsletterItem = ({ name, url, category }: Newsletter) => {
  return (
    <div
      className="p-4 border rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer"
      onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
    >
      <span className="text-blue-500 text-lg font-semibold">{name}</span>
      <div className="text-sm text-gray-600">Category: {category}</div>
    </div>
  );
};

export default NewsletterItem;