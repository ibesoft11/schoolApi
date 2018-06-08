var express = require('express');
var app = express();
var School = require('./schoolSystem');
var school = School("Renaissance University");

app.listen(3000, function (){
    console.log("Server started, running on port 3000");
});

app.get('/', function(req, res){
   res.send(school.getStudents());
});

app.get('/api/students/add', function(req, res){
    let student = school.student(req.query.name, req.query.department, req.query.level);
    school.addStudent(student);
    school.getStudents();
});

app.get('/api/students/delete', function(req, res){
    school.deleteStudent(req.query.id);
    school.getStudents();
});

app.get('/api/students/update', function(req, res)){
    
}