const Engineer = require('../lib/Engineer');

test('Create Engineer', () => {
    const engineer = new Engineer('Koki',26,'austinbcw@gmail.com', 'kokehaus');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('Get Github', () => {
    const engineer = new Engineer('Koki',26,'austinbcw@gmail.com', 'kokehaus');
    expect(engineer.getGithub()).toEqual('kokehaus')
});

test('Get Employee Role', () => {
    const engineer = new Engineer('Koki',26,'austinbcw@gmail.com', 'kokehaus');
    expect(engineer.getRole()).toEqual("Engineer");
})