const Employee = require('../lib/Employee');
const 

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
    })
});

//test inquirer validation
describe("Employee - Inquirer", () => {
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
    describe("Validation - name", () => {
        it("should create an employee object if ", () => {
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
      describe("Validation - ID", () => {
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
      describe("Validation - Email", () => {
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
  