import React, { useEffect, useState } from 'react';
import { getNewsletter } from '../api/newsletter/api';
import { Newsletter } from '../domain/newsletter';
import NewsletterItem from './NewsletterItem';
import SearchBar from './SearchBar';

const NewsletterList: React.FC = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    getNewsletter().then((data) => {
      setNewsletters(data);
    });
  }, []);

  const categories = ['All', ...Array.from(new Set(newsletters.map((newsletter) => newsletter.category)))];

  const filteredNewsletters = newsletters.filter((newsletter) => {
    const matchesSearch = newsletter.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || newsletter.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border-2 transition ${
              selectedCategory === category
                ? 'bg-secondary border-secondary-variant text-white'
                : 'bg-page-background border-secondary text-secondary hover:bg-primary hover:text-tertiary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <ul className="space-y-4">
        {filteredNewsletters.map((newsletter) => (
          <li key={newsletter.id}>
            <NewsletterItem
              id={newsletter.id}
              name={newsletter.name}
              url={newsletter.url}
              category={newsletter.category}
            /> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsletterList;