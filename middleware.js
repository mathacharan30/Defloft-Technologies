import { NextResponse } from "next/server";

// Routes the `gym.devlofttech.com` subdomain to the /gym landing page,
// while keeping the URL bar on the bare subdomain root.
export function middleware(request) {
  const host = request.headers.get("host") || "";
  const subdomain = host.split(":")[0].split(".")[0];

  if (subdomain === "gym") {
    const url = request.nextUrl.clone();
    if (!url.pathname.startsWith("/gym")) {
      url.pathname = `/gym${url.pathname === "/" ? "" : url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Run on everything except Next internals and static files.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|.*\\..*).*)"],
};
