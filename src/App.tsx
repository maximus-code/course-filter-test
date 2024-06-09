import React, { useEffect, useState } from 'react';
import { fetchCourses } from './api';
import CourseList from './components/CourseList';
import FilterTags from './components/FilterTags';
import './styles/App.scss';

interface Course {
  id: string;
  name: string;
  image: string;
  bgColor: string;
  tags: string[];
}

const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const loadCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
      setFilteredCourses(data);
      const allTags = new Set<string>();
      data.forEach((course: Course) => {
        course.tags.forEach(tag => allTags.add(tag));
      });
      setTags(Array.from(allTags));
    };
    loadCourses();
  }, []);

  const handleTagClick = (tag: string) => {
    const newSelectedTag = selectedTag === tag ? null : tag;
    setSelectedTag(newSelectedTag);
    if (newSelectedTag === null) {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(
        courses.filter(course =>
          course.tags.includes(newSelectedTag)
        )
      );
    }
  };

  const handleClearFilters = () => {
    setSelectedTag(null);
    setFilteredCourses(courses);
  };

  return (
    <div className="app">
      <FilterTags
        tags={tags}
        selectedTag={selectedTag}
        onTagClick={handleTagClick}
        onClearFilters={handleClearFilters}
      />
      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default App;
