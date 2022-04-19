var student_names = [];

function submitfunction(){
    name1 = document.getElementById("name1").value;
    name2 = document.getElementById("name2").value;
    name3 = document.getElementById("name3").value;
    name4 = document.getElementById("name4").value;
    student_names.push(name1);
    student_names.push(name2);
    student_names.push(name3);
    student_names.push(name4);
    console.log(student_names);
    document.getElementById("namelist").innerHTML=student_names;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sortfunction(){
    student_names.sort();
    console.log(student_names);
    document.getElementById("namelist").innerHTML=student_names;
}