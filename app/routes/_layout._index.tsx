import type { MetaFunction } from '@remix-run/node';
import { Form, Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
	return [
		{ title: 'URL Shortener' },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export default function Index() {
	return (
		<>
			<Link
				to="/shortenURL"
				className="hover:text-red-500 hover:underline hover:transition-colors "
			>
				Shorten your URL
			</Link>
		</>
	);
}
