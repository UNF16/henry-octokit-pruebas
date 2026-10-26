import { octokit } from "./client.js";
// Lista TODOS los repos públicos de un usuario (pagina sola) y calcula métricas. 

export async function listUserRepos(username) {
    const repos = await octokit.paginate(octokit.rest.repos.listForUser, {
        username,
        per_page: 100,
    });



    const items = repos.map((r) => ({
        name: r.name,
        private: r.private,
        url: r.html_url,
        stars: r.stargazers_count ?? 0,
        language: r.language ?? "sin lenguaje",

    }));

    // Métricas básicas 
    const totalStars = items.reduce((sum, r) => sum + r.stars, 0);
    const porLenguaje = {};
    for (const r of items) porLenguaje[r.language] = (porLenguaje[r.language] ?? 0) + 1;
    const topLanguage = Object.entries(porLenguaje).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;

    return { total: items.length, totalStars, topLanguage, items };

}

// Crea un Issue en un repo. Devuelve el numero y la url.
export async function createIssue(owner, repo, title, body) {

    const res = await octokit.rest.issues.create({ owner, repo, title, body });

    return { number: res.data.number, url: res.data.html_url };

} 