const Employee = require('../lib/Employee');

//simply test if object intializes properly
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
      it("should throw an error if provided no arguments", () => {
        const mockInquirerOutput = {
          name:'',
          id:'',
          email:''
      }
        const cb = () => new Employee(mockInquirerOutput);
  
        expect(cb).toThrow();
      });
  
      it("should throw an error if 'name' is not a string", () => {
        const mockInquirerOutput = {
          name: 1,
          id:'01',
          email:'sample01@email.com'
        }
        const cb = () => new Employee(mockInquirerOutput);
        const err = new Error("Expected parameter 'name' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });
    })
});
  