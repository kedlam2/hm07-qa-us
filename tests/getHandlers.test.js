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

test('Should return 200 status code', async () => {
	let actualStatuscode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatuscode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatuscode).toBE(200)
});

test('Body should contain ...', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.name).toBE("For picnic")
>>>>>>> ab329aac350d4fad0bf53209d91116210de6619b
});
