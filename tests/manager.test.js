const Manager = require('../lib/Manager');

describe('Manager', () => {
        it("should set office number of the manager", () => {
      const office = 100;

      const man = new Manager('dan', 3, 'dan@gmail.com', office);

      expect(man.office).toEqual(office);
    })

    it("should return the office number when getOffice is called", () => {
      const office = 100;

      const man = new Manager('dan', 3, 'dan@gmail.com', office);

      expect(man.getOffice()).toEqual(office);
    })

    it("should return 'manager' when getRole is called", () => {
            const man = new Manager('dan', 3, 'dan@gmail.com', 100);

      expect(man.getRole()).toEqual('Manager');
    })
})