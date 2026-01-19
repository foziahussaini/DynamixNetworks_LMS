function getCourses() {
  return JSON.parse(localStorage.getItem("courses")) || [];
}

function saveCourses(courses) {
  localStorage.setItem("courses", JSON.stringify(courses));
}
function addCourse() {
  const title = document.getElementById("courseTitle").value;
  const desc = document.getElementById("courseDesc").value;
  const price = document.getElementById("coursePrice").value;

  if (!title || !price) {
    alert("Title & price required");
    return;
  }

  const courses = getCourses();

  courses.push({
    id: Date.now(),
    title,
    description: desc,
    price,
    quizzes: []
  });

  saveCourses(courses);
  renderCourses();
}

function renderCourses() {
  const courses = getCourses();
  const list = document.getElementById("courseList");
  list.innerHTML = "";

  courses.forEach(course => {
    list.innerHTML += `
      <div class="course-card">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p>Price: $${course.price}</p>

        <button onclick="editCourse(${course.id})">Edit</button>
        <button onclick="deleteCourse(${course.id})">Delete</button>
        <button onclick="addQuiz(${course.id})">Add Quiz</button>
      </div>
    `;
  });
}

renderCourses();