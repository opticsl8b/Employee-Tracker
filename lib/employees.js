const sequelize =require('../config/connection');
const cTable=require('console.table');

class Employees{
    constructor(){}
    getAllEmployees(){
        return new Promise((resolve,reject)=>{
sequelize.query(
`
SELECT ROW_NUMBER() OVER (ORDER BY employees.id) 
row_num,
employees.id employee_id,
employees.first_name,
employees.last_name,
roles.title,
departments.name department,
roles.salary,
concat(m.first_name,'',m.last_name) AS manager
FROM employees
INNER JOIN roles ON employees.role_id=roles.id
INNER JOIN departments ON roles.department_id=department_id
LEFT JOIN employees m ON m.id =employees.manager_id
ORDER BY employees.id ASC,
`

)

        })
    }
}

module.exports = Employees;