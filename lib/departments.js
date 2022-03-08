const sequelize = require("../config/connection");

// CRUD for departments

class Departments {
  constructor() {}
  getAllDepartments() {
    return new Promise((resolve, reject) => {
      sequelize.query(
        `SELECT id, name AS department_name FROM departments`,
        (err, res) => {
          if (err) throw err;
          resolve(res);
        }
      );
    });
  }

  addNewDepartments(departmentName) {
    return new Promise((resolve, reject) => {
      sequelize.query(
        `INSERT INTO departments (name) VALUES (?)`,
        [departmentName],
        (err, res) => {
          if (err) throw err;
          resolve(res);
        }
      );
    });
  }

  deleteDepartment(departmentName) {
    return new Promise((resolve, reject) => {
      sequelize.query(
        `DELETE FROM departments WHERE name =?`,
        [departmentName],
        (err, res) => {
          if (err) throw err;
          resolve(res);
        }
      );
    });
  }

  getDepartmentIDByName(departmentName) {
    return new Promise((resolve, reject) => {
      sequelize.query(
        `SELECT SUM(salary) total_budget,
            department.name department FROM employees
            INNER JOIN roles ON employees.role_id=role.id
            INNER JOIN departments ON roles.department_id=department.id
            WHERE departments.name=?`[departmentName],
        (err, res) => {
          if (err) throw err;
          resolve(res);
        }
      );
    });
  }
}
module.exports = Departments;
