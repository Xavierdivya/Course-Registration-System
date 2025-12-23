package com.example.Course.Registration.System.controller;

import com.example.Course.Registration.System.model.Course;
import com.example.Course.Registration.System.model.CourseRegistry;
import com.example.Course.Registration.System.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class courseController {

    @Autowired
    CourseService courseService;

    @GetMapping("courses")
    public List<Course> avilableCourses(){
        return courseService.avilableCourses();
    }

    @GetMapping("courses/enrolled")
    public List<CourseRegistry> enrolledStudents(){
        return courseService.enrolledStudents();
    }

    @PostMapping("/courses/register")
    public String enrollCourse(@RequestParam String name,
                               @RequestParam String emailId,
                               @RequestParam String coursename){
        courseService.enrollCourse(name,emailId,coursename);
        return "Congratulations! "+ name+" Enrollment Success for "+coursename;

    }
}
