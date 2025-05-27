import { Newsletter } from "../domain/newsletter";

const NewsletterItem = ({ name, url, category }: Newsletter) => {
  return (
    <div
      className="p-4 border-2 border-secondary rounded-lg shadow-md bg-primary/80 hover:bg-primary transition cursor-pointer"
      onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
    >
      <span className="text-tertiary text-lg font-semibold">{name}</span>
      <div className="text-sm text-tertiary/80">Category: {category}</div>
    </div>
  );
};

export default NewsletterItem;