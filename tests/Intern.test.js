const Intern = require('../lib/Intern');

test('Create Intern', () => {
    const intern = new Intern('Koki', 26, 'austinbcw@gmail.com', 'Texas A&M');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('Get Intern School', () => {
    const intern = new Intern('Koki', 26, 'austinbcw@gmail.com', 'Texas A&M');
    expect(intern.getSchool()).toEqual('Texas A&M');
});

test('Get Employee Role', () => {
    const intern = new Intern('Koki', 26, 'austinbcw@gmail.com', 'Texas A&M');
    expect(intern.getRole()).toEqual('Intern');
})