const Intern = require('../lib/Intern');

//simply test if object intializes properly
describe("Intern", () => {
    describe("Initialization", () => {
      it("should create an Intern object if provided an object with valid arguments", () => {
        const mockInquirerOutput = {
            name:'John Doe',
            id:'01',
            email:'sample01@email.com',
            school: 'UCLA'
        }
        const intern = new Intern(mockInquirerOutput);
  
        expect(intern.name).toEqual('John Doe');
        expect(intern.id).toEqual('01');
        expect(intern.email).toEqual('sample01@email.com');
        expect(intern.school).toEqual('UCLA');

      });
      it("should throw an error if provided no arguments", () => {
        const mockInquirerOutput = {
          name:'',
          id:'',
          email:'',
          school: ''
      }
        const cb = () => new Intern(mockInquirerOutput);
  
        expect(cb).toThrow();
      });
  
      it("should throw an error if 'school' is not a string", () => {
        const mockInquirerOutput = {
          name: 'John Doe',
          id:'01',
          email:'sample01@email.com',
          school: 420
        }
        const cb = () => new Intern(mockInquirerOutput);
        const err = new Error("Expected parameter 'school' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });
    })
});