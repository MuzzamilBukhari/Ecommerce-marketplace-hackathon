import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for write operations
  token: process.env.SANITY_WRITE_TOKEN, // Server-side only token
  stega: {
    enabled: true,
    studioUrl: "/studio",
  },
});
