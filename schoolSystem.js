var fs = require('fs');

function School(name){
    this.name = name;
    this.students = [];
}
School.prototype.getData = function(){
    return JSON.parse(fs.readFileSync('./studentDb.json', 'utf-8'));
}   
School.prototype.writeData = function(students){
    return fs.writeFileSync('./studentDb.json', JSON.stringify(students));
}
School.prototype.student = function(name, department, level){
    //generate stud id here.
    this.name = name;
    this.department = department;
    this.level = level;
}
School.prototype.addStudent = function(student){
    this.students = this.getData();
    this.students.push(student);
    this.writeData(this.students);
}
School.prototype.deleteStudent = function(id){
    
}
School.prototype.updateStudent = function(id, param, value){
    //update student record here
}
School.prototype.getStudentById = function(id){
    //print student's data here
}
School.prototype.getStudents = function(param, value){
    if (arguments.length == 0){
        //get all students
    } else if (arguments.length == 2){
        //get students that match the params
    }
}