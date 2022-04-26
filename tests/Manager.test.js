const Manager = require('../lib/Manager');

test('Create Manager' , () => {
    const manager = new Manager('Koki', 26, 'austinbcw@gmail.com', 420);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Get Office Number', () => {
    const manager = new Manager('Koki', 26, 'austinbcw@gmail.com', 420);
    expect(manager.getOffice()).toEqual(420);
});

test('Get Employee Role', () => {
    const manager = new Manager('Koki', 26, 'austinbcw@gmail.com', 420);
    expect(manager.getRole()).toEqual('Manager');
});

