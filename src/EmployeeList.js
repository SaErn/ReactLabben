import {useEffect, useState} from "react";
import Employee from "./Employee";

function EmployeeList(){
    const [employees, setEmployees] = useState([
        {
            name: "Samir Ernez", 
            email: "samirernez@hotmail.com", 
            phone: "07000000", 
            skills: "React, Java, Javascript, Nodejs", 
            avatar: "https://i.imgur.com/t9HFQvX.png",
        },
        {
            name: "Jack Kerouac", 
            email: "jackkerouac@hotmail.com", 
            phone: "07000001", 
            skills: "C++, C#, Javascript, Nodejs", 
            avatar: "https://i.imgur.com/Q9qFt3m.png",
        },
        {
            name: "Kristina Ohlsson", 
            email: "kOhlsson@hotmail.com", 
            phone: "07000003", 
            skills: "MS Paint 2020", 
            avatar: "https://i.imgur.com/ebHfuth.png",
        }
    ]);

    function handleAddNewEmployee(){
        setEmployees((prevState)=>{
            return [
                ...prevState,
                {
                name: "Belinda Bauer", 
                email: "belindaB@hotmail.com", 
                phone: "07000002", 
                skills: "Python, Html/Css, Java", 
                avatar: "https://i.imgur.com/TUhCrsY.png",
            },
            ];
        });
    }

    return (
        <div>
            <h3>EmployeeList</h3>
            <button className="button" onClick={handleAddNewEmployee}>Add Employee</button>
            {employees.map((employee)=>(
                <Employee EmployeeData={employee}/>
            ))}
        </div>
    );
}

export default EmployeeList;