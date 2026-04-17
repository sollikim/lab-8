const Courses = () => {
    [span_6](start_span)// Список курсов (пока просто текст для 6.1)[span_6](end_span)
    const courseList = ["React Basics", "TypeScript Mastery", "React Router v6"];
  
    return (
      <section>
        <h1>Наши курсы</h1>
        <ul>
          {courseList.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Courses;
  
