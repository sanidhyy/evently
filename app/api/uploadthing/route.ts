import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    token: process.env.UPLOADTHING_TOKEN,
    callbackUrl: `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/uploadthing`,
  },
});
