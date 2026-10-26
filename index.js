import { listUserRepos } from "./lib/github.js";
const username = process.argv[2] ?? "octocat";

try {

    console.log(`Listando repos de ${username}...`);

    const { total, totalStars, topLanguage, items } = await listUserRepos(username);

    console.log(`Total de repos: ${total} · Estrellas: ${totalStars} · Lenguaje más usado: ${topLanguage}`);

    console.log("Primeros 5:", items.slice(0, 5));

} catch (err) {

    console.error("Error en la ejecución:", err.message);

} 