import { ActionFunctionArgs } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';

function generateShortUrl(originalUrl: string) {
	const baseDomain = 'https://short.ly/';

	// Generate a random alphanumeric string of 7 characters to mimic a shortened path
	const randomPath = Math.random().toString(36).substring(2, 9);

	// Return the complete shortened URL
	return `${baseDomain}${randomPath}`;
}
export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData();
	const longURL = formData.get('longUrl') as string;

	try {
		// Check if URL is valid
		new URL(longURL as string);
		const shortURL = generateShortUrl(longURL);
		console.log(shortURL, longURL);
		return { short: shortURL, long: longURL };
	} catch (error) {
		throw new Error('Not a URL');
	}
};
const ShortenURL = () => {
	const actionData = useActionData<typeof action>();
	return (
		<div className="flex flex-col gap-4">
			<Form method="post" className="flex flex-col">
				<h1>Shorten your URL</h1>
				<input
					type="text"
					name="longUrl"
					placeholder="URL"
					id="name"
					className="px-3 border border-1 rounded-md"
				/>
				<button
					type="submit"
					className="inline-block transition-all mt-2 p-2 border border-1 rounded-md hover:bg-blue-200"
				>
					Enter
				</button>
			</Form>
			{actionData?.short ? (
				<a href={actionData.long}> {actionData?.short}</a>
			) : (
				<p>Please enter a URL</p>
			)}
		</div>
	);
};

export default ShortenURL;
