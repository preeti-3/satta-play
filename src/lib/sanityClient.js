import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "cj47vzo5", 
  dataset: "production",
  useCdn: true,
});


