import { providers } from "../util/ai.js";

export async function commandProviders() {
  for (const model of providers) {
    console.log(`${model}`);
  }
}
