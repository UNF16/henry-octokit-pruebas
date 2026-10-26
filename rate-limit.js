import { octokit } from "./lib/client.js";

// Consultar el rate limit NO consume rate limit. 

const { data } = await octokit.rest.rateLimit.get();

const core = data.resources.core;

const reset = new Date(core.reset * 1000).toLocaleTimeString();



console.log(`Límite: ${core.limit} requests/hora`);

console.log(`Usadas: ${core.used} · Quedan: ${core.remaining}`);

console.log(`Se renueva a las: ${reset}`); 