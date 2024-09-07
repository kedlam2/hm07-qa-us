// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return 200 status code', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatuscode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatuscode).toBE(200)
});
