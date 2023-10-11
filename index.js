// Write your solution in this file!
const employee = {
    name : "karen",
    streetAddress : "hollywood"
}
console.log(employee)
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee, [key]: value}
  
    return newEmployee 
 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key, value){
    return{
        ...employee,
        [key]: value,
    }
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    delete employee.name
    

    return employee
    
}