# 🎓 Course Registration System (Java + Spring Boot + MySQL)

A **Course Registration System** built using **Java**, **Spring Boot**, **Spring Data JPA**, and **MySQL**, with a responsive web interface using **HTML, CSS, and JavaScript**. This system allows students to register for courses, manage schedules, and enables admins to manage students and courses efficiently.

---

## 🚀 Features
- 👩‍🎓 Add, edit, and view student details  
- 📚 Add, update, and view courses  
- 📝 Register students for courses    
- 💾 Persistent data storage in **MySQL** using **Spring Data JPA**  
- 🌐 Responsive frontend with **HTML, CSS, and JavaScript**

---

## 🏗 Tech Stack
- **Java (Spring Boot)** – Backend development  
- **Spring Data JPA** – Database management and ORM  
- **MySQL** – Relational database  
- **HTML, CSS, JavaScript** – Frontend development  
- **Maven** – Build and dependency management  
- **Git & GitHub** – Version control

---

## 📂 Project Structure
Course-Registration-System/
- ├── src/main/java/ # Java & Spring Boot source files
- ├── src/main/resources/ # Application properties, templates, static files
- ├── src/main/resources/static/ # CSS, JS, images
- ├── src/main/resources/templates/ # HTML templates
- ├── pom.xml # Maven configuration
- └── README.md # Project documentation

---

## 🗄 Database Setup
1. Create a MySQL database:
```sql
CREATE DATABASE course_registration_system;
USE course_registration_system;
```

2. Tables are automatically managed using Spring Data JPA, or you can create tables manually if needed.

---

## 💻 How to Run

1. Clone the repository:

   git clone https://github.com/Xavierdivya/Course-Registration-System.git
   cd Course-Registration-System


2. Open the project in your preferred IDE (IntelliJ/Eclipse).

3. Update application.properties with your MySQL credentials:

   spring.datasource.url=jdbc:mysql://localhost:3306/course_registration_system
   spring.datasource.username=root
   spring.datasource.password=yourpassword


4. Run the Spring Boot application (CourseRegistrationSystemApplication.java).

5. Access the web application at http://localhost:8080.

---

## 🌟 Learning Outcomes

- Connecting Spring Boot with MySQL using Spring Data JPA
- Building CRUD operations with a full-stack approach
- Implementing MVC architecture
- Creating responsive web interfaces with HTML, CSS, and JavaScript
- Understanding role-based dashboards for admin and student

---

## 🙌 Author

Divya Xavier
🌐 LinkedIn
💻 GitHub
✉️ xavierdivya01@gmail.com
