let students=[];

const tablebody=document.getElementById("tableBody");
const maletablebody=document.getElementById("fetable").getElementsByTagName('tbody')[0];
const femaletablebody=document.getElementById("matable").getElementsByTagName('tbody')[0];


 


fetch("https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json")
.then(response=>response.json())
.then(data=>{
    students=data;
    displayData(students,tablebody)
});

function displayData(data, tablebodyElement){
tablebodyElement.innerHTML="";
data.forEach(student=>{
    const row = tablebodyElement.insertRow();
    const idcell=row.insertCell(0);
    const namecell=row.insertCell(1);
    const gendercell=row.insertCell(2);
    const classcell=row.insertCell(3);
    const markcell=row.insertCell(4);
    const statuscell=row.insertCell(5);
    const emailcell=row.insertCell(6);
    

    idcell.innerHTML=`${student.id}`;
    namecell.innerHTML=`<img src=${student.img_src} width="50px"/> ${student.first_name} ${student.last_name}`
    markcell.innerHTML=student.marks;
    emailcell.innerHTML=student.email;
    statuscell.innerHTML=student.passing;
    classcell.innerHTML=student.class;
    gendercell.innerHTML=student.gender;
})
}


function searchData(){
    const searchterm=document.getElementById("search").value.toLowerCase();
    const filterStudent=students.filter(
        student=>
        student.first_name.toLowerCase().includes(searchterm)
    )

    displayData(filterStudent,tablebody);
}

function sortBy(type){
    switch (type){
        case 'nameAsc':
            students.sort(
                (a,b)=>a.first_name.localeCompare(b.first_name));
                if(document.getElementsByClassName("result_table")[0].style.display="none"){
                    document.getElementsByClassName("result_table")[0].style.display="block";
            document.getElementsByClassName("female_table")[0].style.display="none";
            document.getElementsByClassName("male_table")[0].style.display="none";
                }
              break;

        case 'nameDesc':
            students.sort(
                (a,b)=>b.first_name.localeCompare(a.first_name));
                if(document.getElementsByClassName("result_table")[0].style.display="none"){
                    document.getElementsByClassName("result_table")[0].style.display="block";
            document.getElementsByClassName("female_table")[0].style.display="none";
            document.getElementsByClassName("male_table")[0].style.display="none";
                }
              break; 

         case 'marks':
            students.sort(
                (a,b)=>a.marks-b.marks);
                if(document.getElementsByClassName("result_table")[0].style.display="none"){
                    document.getElementsByClassName("result_table")[0].style.display="block";
            document.getElementsByClassName("female_table")[0].style.display="none";
            document.getElementsByClassName("male_table")[0].style.display="none";
                }
              break;

         case 'pass':
            students=students.filter(student=>student.passing==true)
            if(document.getElementsByClassName("result_table")[0].style.display="none"){
                document.getElementsByClassName("result_table")[0].style.display="block";
        document.getElementsByClassName("female_table")[0].style.display="none";
        document.getElementsByClassName("male_table")[0].style.display="none";
            }
           break;

           case 'class':
            students.sort(
                (a,b)=>a.class-b.class);
                if(document.getElementsByClassName("result_table")[0].style.display="none"){
                    document.getElementsByClassName("result_table")[0].style.display="block";
            document.getElementsByClassName("female_table")[0].style.display="none";
            document.getElementsByClassName("male_table")[0].style.display="none";
                }
              break;

           case 'gender':
            const maleStudents= students.filter(student=>student.gender=="Male");
            const femaleStudents= students.filter(student=>student.gender=="Female");
            displayData(maleStudents,maletablebody);
            displayData(femaleStudents,femaletablebody);
            document.getElementsByClassName("result_table")[0].style.display="none";
            document.getElementsByClassName("female_table")[0].style.display="block";
            document.getElementsByClassName("male_table")[0].style.display="block";
     default:
        break;
        }
    displayData(students,tableBody);
}