name_of_the_student = []

function submit(){
    var name_1 = document.getElementById("student_name_1").value;
    var name_2 = document.getElementById("student_name_2").value;
    var name_3 = document.getElementById("student_name_3").value;
    var name_4 = document.getElementById("student_name_4").value;

    name_of_the_student.push(name_1);
    name_of_the_student.push(name_2);
    name_of_the_student.push(name_3);
    name_of_the_student.push(name_4);

    console.log(name_of_the_student);
    document.getElementById("display_name").innerHTML = name_of_the_student;
    document.getElementById("submit_btn").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}

function Sort(){
    name_of_the_student.sort();
    console.log(name_of_the_student);
    document.getElementById("display_name").innerHTML = name_of_the_student;
}



