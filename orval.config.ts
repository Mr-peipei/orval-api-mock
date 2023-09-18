import { defineConfig } from "orval";

export default defineConfig({
	sample: {
    input: {
			target: "./openapi.yaml"
    },
    output: {
      target: "./src/api/",
      client: "react-query",
      mode: "tags",
      clean: true,
      prettier: true,
			mock: true,
    },
	}
});