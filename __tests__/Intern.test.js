const Intern = require('../lib/Intern');

describe('Intern class', () => {
    describe('Initialization', () => {
      it('should create an Intern object with property of school', () =>{
        const intern = new Intern('Banana', '0004', 'banana@gmail.com','UoT')
        expect(intern.school).toEqual('UoT');
      })
      it('should get the role of Intern', ()=> {
        const role = 'Intern'
        const theRole = new Intern('Banana', '0004', 'banana@gmail.com','UoT').getRole();
        expect(theRole).toEqual(role);
      })

    })
}
)