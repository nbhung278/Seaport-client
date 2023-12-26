import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  if (protectedRoutes.includes(request.nextUrl.pathname) && !accessToken) {
    request.cookies.delete("access_token");
    const response = NextResponse.redirect(new URL("/login", request.url));
    return response;
  } else {
    if (authRoutes.includes(request.nextUrl.pathname) && accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/:path*",
// };

export const protectedRoutes = ["/"];
export const authRoutes = ["/login"];
export const publicRoutes = ["/login", "/register"];
