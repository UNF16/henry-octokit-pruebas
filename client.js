import dotenv from "dotenv";
import { Octokit } from "@octokit/rest";

// Carga el .env. quiet: true evita el mensaje "injected env" en cada ejecución. 

dotenv.config({ quiet: true });

const token = process.env.GITHUB_TOKEN;

if (!token) {

    console.error("Falta GITHUB_TOKEN en .env");
    process.exit(1);

}

// Un único cliente autenticado para todo el proyecto. 

export const octokit = new Octokit({

    auth: token,
    userAgent: "octokit-hands-on/1.0",

}); 