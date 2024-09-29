import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCurrentUser } from './services/AuthService'

type Role = keyof typeof roleBasedRoutes

const AuthRoutes = ['/login', '/register']

const roleBasedRoutes = {
    user: [/^\/profile/],
    admin: [/^\/admin/]
}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    console.log(pathname);
    const userToken = await getCurrentUser()
    console.log(userToken, 'user token from middleware');


    const user = {
        name: 'raiyan',
        token: 'kkjkjl',
        role: 'user'
    }

    // const user = undefined
    if (!user) {
        if (AuthRoutes.includes(pathname)) {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    if (user?.role && roleBasedRoutes[user?.role as Role]) {
        const routes = roleBasedRoutes[user?.role as Role]
        if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next()
        }

    }
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/profile', '/admin', '/login', '/register'],
}