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
