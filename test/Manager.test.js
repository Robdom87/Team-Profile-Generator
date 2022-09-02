const Manager = require('../lib/Manager');

//simply test if object intializes properly
describe("Manager", () => {
    describe("Initialization", () => {
      it("should create an Manager object if provided an object with valid arguments", () => {
        const mockInquirerOutput = {
            name:'John Doe',
            id:'01',
            email:'sample01@email.com',
            officeNumber: '02'
        }
        const manager = new Manager(mockInquirerOutput);
  
        expect(manager.name).toEqual('John Doe');
        expect(manager.id).toEqual('01');
        expect(manager.email).toEqual('sample01@email.com');
        expect(manager.officeNumber).toEqual('02');

      });
      it("should throw an error if provided no arguments", () => {
        const mockInquirerOutput = {
          name:'',
          id:'',
          email:'',
          officeNumber: ''
      }
        const cb = () => new Manager(mockInquirerOutput);
  
        expect(cb).toThrow();
      });
  
      it("should throw an error if 'officeNumber' is not a string", () => {
        const mockInquirerOutput = {
          name: 'John Doe',
          id:'01',
          email:'sample01@email.com',
          officeNumber: 2
        }
        const cb = () => new Manager(mockInquirerOutput);
        const err = new Error("Expected parameter 'officeNumber' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });
    })
});
  