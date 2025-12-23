function showCourse() {
    fetch("http://localhost:8080/courses" )
        .then(response => response.json())
        .then(data => {
            let table = document.getElementById("coursetable");
            table.innerHTML = "";   // clear old rows

            data.forEach(course => {
                let row = `
                    <tr>
                        <td>${course.courseId}</td>
                        <td>${course.courseName}</td>
                        <td>${course.trainer}</td>
                        <td>${course.durationInWeeks}</td>
                    </tr>
                `;
                table.innerHTML += row;
            });
        })
        .catch(error => console.error("Error fetching courses:", error));
}

function showenrolledStudent(){
        fetch("http://localhost:8080/courses/enrolled" )
        .then(response => response.json())
        .then(data => {
            let table = document.getElementById("enrolledtable");
            table.innerHTML = "";   // clear old rows

            data.forEach(course => {
                let row = `
                    <tr>
                        <td>${course.name}</td>
                        <td>${course.emailId}</td>
                        <td>${course.coursename}</td>
                    </tr>
                `;
                table.innerHTML += row;
            });
        })
        .catch(error => console.error("Error fetching courses:", error));

}