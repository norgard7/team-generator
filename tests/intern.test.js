const Intern = require('../lib/Intern');

describe('Intern', () => {
        it("should set the school that the intern is attending", () => {
      const school = 'Normandale';

      const int = new Intern('Lauren', 7, 'name@email.com', school);

      expect(int.school).toEqual(school);
    })

    it("should return the school when getSchool is called", () => {
      const school = 'Normandale';

      const int = new Intern('Lauren', 7, 'name@email.com', school);

      expect(int.getSchool()).toEqual(school);
    })

    it("should return 'Intern' when getRole is called", () => {
            const int = new Intern('Lauren', 7, 'name@email.com', 'Normandale');

      expect(int.getRole()).toEqual('Intern');
    })
})