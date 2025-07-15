import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  const token = request.cookies.get("token")?.value;
  if (token) {
    return NextResponse.redirect(
      new URL("/exercicios/ex028-middleware/conta", request.url)
    );
  } else {
    return NextResponse.redirect(
      new URL("/exercicios/ex028-middleware/login", request.url)
    );
  }
}

export const config = {
  matcher: "/entrar",
};
