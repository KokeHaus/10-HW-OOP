const { getMaxListeners } = require('process');
const Employee = require('../lib/Employee');

test('Create an Employee', ()=>{
    const employee = new Employee('Koki',26, 'austinbcw@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('Get Employee Name', () =>{
    const employee = new Employee('Koki',26, 'austinbcw@gmail.com');
    expect(employee.getName()).toEqual('Koki')
});

test('Get Employee ID', () => {
    const employee = new Employee('Koki',26, 'austinbcw@gmail.com');
    expect(employee.getId()).toEqual(26)
});

test('Get Employee Role', () => {
    const employee = new Employee('Koki',26, 'austinbcw@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});

