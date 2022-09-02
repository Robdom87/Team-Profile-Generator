const Engineer = require('../lib/Engineer');

//simply test if object intializes properly
describe("Engineer", () => {
    describe("Initialization", () => {
      it("should create an Engineer object if provided an object with valid arguments", () => {
        const mockInquirerOutput = {
            name:'John Doe',
            id:'01',
            email:'sample01@email.com',
            github: 'BigJohn22'
        }
        const engineer = new Engineer(mockInquirerOutput);
  
        expect(engineer.name).toEqual('John Doe');
        expect(engineer.id).toEqual('01');
        expect(engineer.email).toEqual('sample01@email.com');
        expect(engineer.github).toEqual('BigJohn22');

      });
      it("should throw an error if provided no arguments", () => {
        const mockInquirerOutput = {
          name:'',
          id:'',
          email:'',
          github: ''
      }
        const cb = () => new Engineer(mockInquirerOutput);
  
        expect(cb).toThrow();
      });
  
      it("should throw an error if 'github' is not a string", () => {
        const mockInquirerOutput = {
          name: 'John Doe',
          id:'01',
          email:'sample01@email.com',
          github: 22
        }
        const cb = () => new Engineer(mockInquirerOutput);
        const err = new Error("Expected parameter 'github' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });
    })
});