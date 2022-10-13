const Employee = require('../lib/Employee');

describe('Employee class', () => {
 describe('Initialization', () => {
   test ('should create an Employee object with property of name, id and email', () => {
    const employee = new Employee('Apple', '0001', 'apple@gmail.com')
    expect(employee.name).toEqual('Apple');
    expect(employee.id).toEqual('0001');
    expect(employee.email).toEqual('apple@gmail.com');
   })
   it('should get Employee name', () => {
    const name = new Employee('Apple', '0001', 'apple@gmail.com').getName();
    expect(name).toEqual('Apple');
   })
   it('should get Employee id', () => {
    const id = new Employee('Apple', '0001', 'apple@gmail.com').getId();
    expect(id).toEqual('0001');
   })
   it('should get Employee email', () => {
    const email = new Employee('Apple', '0001', 'apple@gmail.com').getEmail();
    expect(email).toEqual('apple@gmail.com');
   })
   it('should get Employee role', () => {
    const role = "Employee";
    const theRole = new Employee('Apple', '0001', 'apple@gmail.com').getRole();
    expect(theRole).toEqual(role);
   })
 })
})