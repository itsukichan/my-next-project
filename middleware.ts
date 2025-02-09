import { NextRequest, NextResponse } from 'next/server';
import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware();

export const config = {
  matcher: ["/(.*)"]
};
