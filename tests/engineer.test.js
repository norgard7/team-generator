const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
        it("should set github username of the engineer", () => {
      const git = 'norgard7';

      const eng = new Engineer('Lauren', 7, 'name@email.com', git);

      expect(eng.github).toEqual(git);
    })

    it("should return the github username when getGithub is called", () => {
      const git = 'norgard7';

      const eng = new Engineer('Lauren', 7, 'name@email.com', git);

      expect(eng.getGithub()).toEqual(git);
    })

    it("should return 'Engineer' when getRole is called", () => {
            const eng = new Engineer('Lauren', 7, 'name@email.com', 'norgard7');

      expect(eng.getRole()).toEqual('Engineer');
    })
})