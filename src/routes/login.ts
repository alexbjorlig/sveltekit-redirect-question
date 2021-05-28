import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	return {
		body: `<html>
    <body>
        <h1>Welcome to login</h1>
    </body>
</html>`
	};
};
