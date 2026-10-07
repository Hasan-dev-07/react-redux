import { useDispatch } from "react-redux";
import { addCourse } from "../Features/Wishlist/WishlistSlice";

function CourseList() {
  const dispatch = useDispatch();

  const courses = [
    { id: 1, title: "React JS" },
    { id: 2, title: "Redux Toolkit" },
    { id: 3, title: "JavaScript" },
  ];

  return (
    <div>
      <h2>Courses</h2>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>

          <button
            onClick={() => dispatch(addCourse(course))}
          >
            Add Wishlist
          </button>
        </div>
      ))}
    </div>
  );
}

export default CourseList;