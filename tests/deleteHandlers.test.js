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
