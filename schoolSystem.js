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

School.prototype.getStudentIndex  = function(id){
    this.students = this.getData();
    for (let i = 0; i < this.students.length; i++){
        if(this.students[i].id === id){
            return i;
        }
    }
}
School.prototype.deleteStudent = function(id){
    this.students  = this.getData();
    let index = this.getStudentIndex(id);
    this.students.splice(index, 1);
    this.writeData(this.students);
}
School.prototype.updateStudent = function(id, param, value){
    this.students = this.getData();
    let index = this.getStudentIndex(id);
    if (arguments.length !=3){
        return "Error - You must provide an ID, a parameter to edit and a value.";
    } else {
        if (arguments[1] == "name"){
            this.students[index].name = value;
        } else if (arguments[1] == "department"){
            this.students[index].department = value;
        } else if(arguments[1] == "level"){
            this.students[index].level = value;
        } else if (arguments[1] == "all"){
            this.students[index] = value;
        } else {
            return "Error - You must specify what to update."
        }
        this.writeData(this.students);
    }
}
School.prototype.getStudentById = function(id){
    this.students = this.getData();
    for (let i = 0; i < this.students.length; i++){
        if(this.students[i].id === id){
            return students[i];
        }
    }
}
School.prototype.getStudents = function(param, value){
    if (arguments.length == 0){
        //get all students
    } else if (arguments.length == 2){
        //get students that match the params
    }
}