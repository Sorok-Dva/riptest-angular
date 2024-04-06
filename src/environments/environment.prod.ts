export const ENVIRONMENT = {
	production: true,

	services: {
		jsontest: {
			apiUrls: {
				ip: 'http://ip.jsontest.com',
				dateTime: 'http://date.jsontest.com'
			},
		},
		jsonplaceholder: {
			apiUrls: {
				newPost: 'https://jsonplaceholder.typicode.com/posts'
			}
		}
	},
};
