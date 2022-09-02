const Employee = require('../lib/Employee');

//goals for testing
//check that all of the validation works

describe("Employee", () => {
    describe("Initialization", () => {
      it("should create an Employee object if provided an object with valid arguments", () => {
        const mockInquirerOutput = {
            name:'John Doe',
            id:'01',
            email:'sample01@email.com'
        }

        const employee = new Employee(mockInquirerOutput);
  
        expect(employee.name).toEqual('John Doe');
        expect(employee.id).toEqual('01');
        expect(employee.email).toEqual('sample01@email.com');
      });
    })
});
  