const Employee = require("../lib/Employee");

describe('Employee', () => {
    it("should set name of employee", () => {
      const name = 'Lauren';
      
      const emply = new Employee(name);

      expect(emply.name).toEqual(name);
    })

    it("should set id of the employee", () => {
      const id = 1234;
            const emply = new Employee('lauren', id);

      expect(emply.id).toEqual(id);
    })

    it("should set email of the employee", () => {
      const email = 'name@email.com';
            const emply = new Employee('lauren', 7, email);

      expect(emply.email).toEqual(email);
    })

    it("should set role of the employee to 'employee'", () => {
        const role = 'employee';
                const emply = new Employee('lauren', 1237, 'name@email.com', role);
          expect(emply.role).toEqual(role);
      })

      it("should return the name of employee when getName is called", () => {
        const name = 'Lauren';
                const emply = new Employee(name, 1237, 'name@email.com', 'employee');
          expect(emply.getName()).toEqual(name);
      })
      it("should return the id of employee when getId is called", () => {
        const id = 2754;
                const emply = new Employee('lauren', id, 'name@email.com', 'employee');
          expect(emply.getId()).toEqual(id);
     
      })
      it("should return the email of employee when getEmail is called", () => {
        const email = 'lauren.c.norgard@gmail.com';
            const emply = new Employee('lauren', 2654, email, 'employee');
          expect(emply.getEmail()).toEqual(email);
     
      })
})