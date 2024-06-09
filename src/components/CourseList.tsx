import React from 'react';
import '../styles/App.scss';

interface Course {
  id: string;
  name: string;
  image: string;
  bgColor: string;
  tags: string[];
}

interface CourseListProps {
  courses: Course[];
}


const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map(course => (
        <div key={course.id} className="course-card" style={{ backgroundColor: course.bgColor }}>
          <div className="course-upper">
            <img src={course.image} alt={course.name} />
          </div>
          <div className="course-info">
            <h3>{course.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;