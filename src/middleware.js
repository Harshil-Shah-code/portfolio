// import { NextResponse } from 'next/server';

export function middleware(req) {
    // console.log("Middleware is running..."); // Debugging log

    // const token = req.cookies.get('authToken'); // Get token from cookies
    // const isAuthenticated = !!token; // Convert to boolean
    // console.log(token);

    // const publicRoutes = [ '/login', '/signup']; // Public pages

    // if (!isAuthenticated && !publicRoutes.includes(req.nextUrl.pathname)) {
    //     console.log("User not authenticated. Redirecting...");
    //     return NextResponse.redirect(new URL('/login', req.url));
    // }

    // console.log("User authenticated. Proceeding...");
    // return NextResponse.next();
}

// Apply middleware only to protected routes
export const config = {
    // matcher: ['/', '/blog','/dashboard','/admin-dashboard','/settings','/services/web-development','/services/mobile-apps','/services/seo'],// Only runs on these routes
};
