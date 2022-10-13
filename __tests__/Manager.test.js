const Manager = require('../lib/Manager');

describe('Manager class', () => {
    describe('Initialization', () => {
      it('should create an Manager object with property of officeNumber', () =>{
        const manager = new Manager('Daisy', '0003', 'daisy@gmail.com','12345')
        expect(manager.officeNumber).toEqual('12345');
      })
      it('should get the role of Manager', ()=> {
        const role = 'Manager'
        const theRole = new Manager('Daisy', '0003', 'daisy@gmail.com',12345).getRole();
        expect(theRole).toEqual(role);
      })

    })
}
)