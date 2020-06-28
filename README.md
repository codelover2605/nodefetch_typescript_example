# nodefetch_typescript_example

Typescript Example to automate rest services using node-fetch and Jest.

## Project Structure

### core: 
- RequestWrapper: Request Object
- ServiceWrapper: Method to interact with the rest service and returns the response data

### applicationLibrary
- request: QueryParams/ Body param classes which will be serialized by ServiceWrapper before interacting with the service
- response: Rest Service response deserialized data
- clients: Aggreagting the functionalities of a service/module

### constants
- EndPoints: Endpoints of the services
- HttpMethod: Http Method constant to be used while building request

### __tests__
Tests Specifications

### Steps to run the test
- Install all dependencies: 
npm i

- Run the tests:
npm run start
