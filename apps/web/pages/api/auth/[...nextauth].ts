import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

import { getOptions } from "@calcom/features/auth/lib/next-auth-options";
import { getTrackingFromCookies } from "@calcom/lib/tracking";
import { mockSession } from "@calcom/prisma/mock-fixtures";

const MOCK_DB = process.env.MOCK_DB === "1" || process.env.MOCK_DB === "true";

// pass req to NextAuth: https://github.com/nextauthjs/next-auth/discussions/469
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // DB-less preview mode: short-circuit the client session endpoint so
  // useSession() resolves to a logged-in user instead of bouncing to /auth/login.
  if (MOCK_DB) {
    const route = Array.isArray(req.query.nextauth) ? req.query.nextauth.join("/") : req.query.nextauth;
    if (route === "session") {
      res.status(200).json(mockSession);
      return;
    }
  }
  return NextAuth(
    req,
    res,
    getOptions({
      getDubId: () => req.cookies.dub_id || req.cookies.dclid,
      getTrackingData: () => getTrackingFromCookies(req.cookies, req.query),
    })
  );
};

export default handler;
