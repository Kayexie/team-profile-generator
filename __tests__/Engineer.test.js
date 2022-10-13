const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    describe('Initialization', () => {
      it('should create an Engineer object with property of github', () =>{
        const engineer = new Engineer('Orange', '0002', 'orange@gmail.com','OrangeOne')
        expect(engineer.github).toEqual('OrangeOne');
      })
      it('should get the github username of Engineer', ()=> {
        const githubName = new Engineer('Orange', '0002', 'orange@gmail.com','OrangeOne').getGithub();
        expect(githubName).toEqual('OrangeOne');
      })
      it('should get the role of Engineer', ()=> {
        const role = 'Engineer'
        const theRole = new Engineer('Orange', '0002', 'orange@gmail.com','OrangeOne').getRole();
        expect(theRole).toEqual(role);
      })

    })
}
)