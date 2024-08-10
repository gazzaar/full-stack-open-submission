import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ course }) => {
  const { name, parts } = course;

  const total = parts.reduce((a, c) => {
    return a + c.exercises;
  }, 0);
  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total sum={total} />
    </>
  );
};
export default Course;
