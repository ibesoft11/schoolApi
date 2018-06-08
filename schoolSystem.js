var fs = require('fs');

function School(name){
    this.name = name;
    this.students = [];
}

School.prototype.student = function(name, department, level){
    //generate stud id here.
    this.name = name;
    this.department = department;
    this.level = level;
}
School.prototype.addStudent = function(name, department, level){
    //add student here
}
School.prototype.deleteStudent = function(id){
    //delete student here
}
School.prototype.updateStudent = function(id, param, value){
    //update student record here
}
School.prototype.getStudentById = function(id){
    //print student's data here
}
School.prototype.getStudents = function(){
    //return every student
}
School.prototype.getStudents = function(param, value){
    if (arguments.length == 0){
        //get all students
    } else if (arguments.length == 2){
        //get students that match the params
    }
}