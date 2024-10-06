import { Link, Outlet, useLocation } from '@remix-run/react';
import React from 'react';

const Layout = () => {
	const location = useLocation();
	return (
		<>
			<header className="flex justify-between fixed top-0 left-0 w-full bg-blue-500 text-white shadow-md z-50 py-2 px-4">
				<div>
					<h1>URL Shortner</h1>
				</div>
				<div className="flex gap-8">
					<Link to="/">Home</Link>
					{location.pathname === '/shortenURL' && (
						<Link to="/shortenURL">Shorten your URL</Link>
					)}
				</div>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
