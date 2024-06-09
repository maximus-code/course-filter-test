import React from 'react';
import '../styles/App.scss';

interface FilterTagsProps {
  tags: string[];
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
  onClearFilters: () => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({ tags, selectedTag, onTagClick, onClearFilters }) => {
  return (
    <div className="filter-tags-container">
      <div className="filter-tags">
        <button
          className={selectedTag === null ? 'active' : ''}
          onClick={onClearFilters}>
          Все темы
        </button>
        {tags.map(tag => (
          <button
            key={tag}
            className={selectedTag === tag ? 'active' : ''}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTags;