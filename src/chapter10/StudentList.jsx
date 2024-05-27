import React from "react";

const students = [
    {id:1, name:"홍길동"},
    {id:2, name:"박성언"},
    {id:3, name:"김서현"},
    {id:4, name:"박경미"}
]

function StudentList(props){
    return (
       <ul>
        {/* key 값으로 쓸만한 요소가 없으면 map((student, index))로 설정하고 key={index}를 설정하면 된다 */}
        {students.map((student)=>{
            return <li key={student.id}>{student.name}</li>
        })}
       </ul>
    )
}
export default StudentList;