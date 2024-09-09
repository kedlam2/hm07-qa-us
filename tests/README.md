# Sprint 7 project

Project 7

For this project, I was task to do positive testing using JavaScript programming language (Visual Studio) and git commands to test the JavaScript. I also used Postman to test the Urban Grocers. I also used JavaScript commands such as let, cont, test try, catch.

Technologies
1. Visual Studio
2. Postman
3. Git Bash
4. Command Prompt
5. Node.Js
6. Notepad

Techniques Used
1. asynchronous Testing
2. Status code validation
3. Response Body Validation
4. Error Handling.

Pretesting
I open Gitbash, and enter the following commands.
cd~
mkdir projects
cd project
After than i clone the Gitbash through your account with this file hm07-qa-us. Open Gitbash and choose HTTPS for authentication. Copy and paste this command; git clone https://github.com/username/hm07-qa-us.git. When this is done go to the project folder and run the command npm install. Last make sure to start Urban Grocers server so you can test on Postman and on Command Prompt. Make sure to go to the config.js folder and update the url with the Urban Grocers server before doing any testing. On the testing folder is where all the 4 JavaScript we need add the correct script and then test.

Testing getHandlers
1. Use either swagger or docs to choose the API [GET] command {{URL}}/api/v1/kits/id
2. In Postman, insert the URL with the request to make sure the response returns a 200 ok response.
3. Enter this scprit inside of the Visual Studio or notepad of the getHandlers.test.js
// eslint-disable-next-line no-undef
const config = require("../config");

test("should return 200 status code", async () => {
  let actualStatusCode;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
    actualStatusCode = response.status;
    console.log(response.toString());
  } catch (error) {
    console.error(error);
  }
  expect(actualStatusCode).toBe(200);
});

test("Body should contain ...", async () => {
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualResponseBody.name).toBe("For picnic");
});

Make sure to save before testing the JavaScript. To test it go back to the command prompt or Gitbash and run "npx jest" to test all of them or "npx jest tests/getHandlers.test.js". After a few second it should test the script and come back positive.

Testing postHandlers
1. Use either swagger or docs to choose the API [POST] command {{URL}}/api/v1/orders
2. In Postman, insert the URL with the request to make sure the response returns a 200 ok response.
3. Also get the body command to test from the docs or swagger. For the POST, the body is 
{
  productsList: [
    {
      id: 5,
      quantity: 1,
    },
  ],
};

4. Enter this script inside of the Visual Studio or notepad of the postHandlers.test.js
// eslint-disable-next-line no-undef
const config = require("../config");

const requestBody = {
  productsList: [
    {
      id: 5,
      quantity: 1,
    },
  ],
};

test("Status Code should be 201", async () => {
  let ActualStatusCode;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    ActualStatusCode = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(ActualStatusCode).toBe(201);
});

test("Response body should contain. ..", async () => {
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualResponseBody.courierService).toBe("Order and Go");
});
Make sure to save before testing the JavaScript. To test it go back to the command prompt or Gitbash and run "npx jest" to test all of them or "npx jest tests/getHandlers.test.js". After a few second it should test the script and come back positive.

Testing putHandlers
1. Use either swagger or docs to choose the API [PUT] command {{URL}}/api/v1/kits/id
2. In Postman, insert the URL with the request to make sure the response returns a 200 ok response.
3. Also get the body command to test from the docs or swagger. For the PUT, the body is 
{
  "name": "My modified kit",
  "productsList": [
	{
		"id": 3,
		"quantity": 1
	}
     ]
};

4. Enter this script inside of the Visual Studio or notepad of the putHandlers.test.js
// eslint-disable-next-line no-undef
const config = require('../config');


const requestBody = {
  "name": "My modified kit",
  "productsList": [
	{
		"id": 3,
		"quantity": 1
	}
     ]
};

test('status should be 200', async () => {
  let actualStatus;
  try {
      const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
      });
      actualStatus = response.status
  } catch (error) {
      console.error(error);
  }
  expect(actualStatus).toBe(200);
});

test('Response body should contain. . .', async () => {
  let actualResponseBody;
  try {
      const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
      });

      actualResponseBody = await response.json();
  } catch (error) {
      console.error(error);
  }
  expect(actualResponseBody.ok).toBe(true);
});
Make sure to save before testing the JavaScript. To test it go back to the command prompt or Gitbash and run "npx jest" to test all of them or "npx jest tests/getHandlers.test.js". After a few second it should test the script and come back positive.

Testing deleteHandlers
1. Use either swagger or docs to choose the API [DELETE] command {{URL}}/api/v1/kits
2. In Postman, insert the URL with the request to make sure the response returns a HTTP/1.1 200 OK.
3. Enter this script inside of the Visual Studio or notepad of the putHandlers.test.js
// eslint-disable-next-line no-undef
const config = require("../config");

const requestBody = {
  "name": "sample kit",
  "cardId": 7
};

test("Status code should be 201", async () => {
  let ActualStatusCode;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    ActualStatusCode = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(ActualStatusCode).toBe(201);
});

test("should return 200 status", async () => {
  let actualStatusCode;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
      method: "DELETE",
    });
    actualStatusCode = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatusCode).toBe(200);
});

const requestBodyCreateKit = {
  productsList: [
    {
      id: 2,
      quantity: 1,
    },
  ],
};

test("Response body deletes the kit", async () => {
  let postResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBodyCreateKit),
    });
    postResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }

  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
      method: "DELETE",
    });
    const postResponseBody = await response.json();
    actualResponseBody = postResponseBody.ok;
  } catch (error) {
    console.error(error);
  }

  expect(actualResponseBody).toBe(true);
});

The difference with this one is that you must create a kit (reason why there a POST) so that you can delete it after.


Memory updated
Here is the updated README.md file with the additional technologies you used:

API Handler Testing Project
Description
This project is designed to validate the functionality of an API by testing GET and DELETE HTTP requests. The tests check the status codes, response bodies, and the overall behavior of the API endpoints to ensure they work as expected. The project focuses on testing basic CRUD (Create, Read, Update, Delete) operations for different API endpoints, ensuring proper status code responses and content integrity.

Technologies and Techniques
Technologies Used:
Node.js: A JavaScript runtime environment used to execute the tests.
Jest: A testing framework used to write and run the test cases.
Fetch API: Used to make HTTP requests to the API from within the test cases.
Postman: Used for testing API endpoints during development.
Visual Studio Code: The code editor used for writing the test cases and project code.
Git Bash: A terminal emulator used for Git version control and running commands.
Command Prompt: Used as an alternative terminal to run scripts and commands.
Techniques Used:
Asynchronous Testing: Each test makes asynchronous calls to the API and waits for the responses before asserting conditions.
Status Code Validation: Tests check whether the correct HTTP status codes (such as 200 OK, 201 Created, etc.) are returned.
Response Body Validation: Tests verify that the correct data is returned by the API in the response body for GET requests.
Error Handling: Each test includes error handling for better debugging in case of failed requests.
Project Structure
The project is structured as follows:

bash
Copy code
.
├── deleteHandlers.test.js  # Tests for DELETE requests
├── getHandlers.test.js     # Tests for GET requests
├── config.js               # Configuration file for API URL
├── README.md               # Project documentation
Configuration
In the config.js file, set the API_URL to point to your API backend:

js
Copy code
// config.js
module.exports = {
  API_URL: 'http://your-api-url.com',
};
Running the Tests
Step 1: Install Dependencies
Ensure that you have Node.js installed on your system. Install the necessary dependencies by running the following command:

bash
Copy code
npm install
or if you are using yarn:

bash
Copy code
yarn install
Step 2: Run the Tests
Once the dependencies are installed, you can run the test suite using the following command:

bash
Copy code
npm test
This will run all the test files (.test.js) within the project, checking that the API endpoints behave as expected.

Example Tests
GET Handler Tests
Located in getHandlers.test.js, these tests ensure that GET requests to specific endpoints return the correct status codes and response data.

Example:

javascript
Copy code
test('Should return 200 status code', async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
        actualStatusCode = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatusCode).toBe(200);
});

test('Body should contain expected data', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }
    expect(actualResponseBody.name).toBe("For picnic");
});
DELETE Handler Tests
Located in deleteHandlers.test.js, these tests check that DELETE requests properly remove resources from the API and return the correct status code.

Example:

javascript
Copy code
test('Should delete the specified resource', async () => {
    try {
        const response = await fetch(`${config.API_URL}/your/endpoint`, {
            method: 'DELETE',
        });
        expect(response.ok).toBe(true);
    } catch (error) {
        console.error(error);
    }
});
How to Add New Tests
If additional functionality needs to be tested, you can create new tests or modify existing ones by following the structure below:

Create a new test file or add to an existing file.
Use fetch to make HTTP requests to your desired API endpoint.
Add appropriate expect assertions to check for status codes, response bodies, or other behaviors.
Example:

javascript
Copy code
test('New POST request should return 201 status code', async () => {
    const requestBody = {
        productsList: [
            { id: 2, quantity: 1 }
        ]
    };
    
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualStatusCode = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatusCode).toBe(201);
});
In conclusion, this project provides a sturdy testing setup to ensure the API’s GET, POST, PUT and DELETE endpoints function correctly. By running these tests, you can verify the reliability of your API responses, status codes, and overall functionality.


