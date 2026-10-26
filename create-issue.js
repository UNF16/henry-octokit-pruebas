import { createIssue } from "./lib/github.js";

const [owner, repo, title = "Issue desde octokit", body = "Creado desde la clase"] = process.argv.slice(2)
if (!owner || !repo) {

    console.error("Error: Faltan parametros obligatorios (owner y repo)");
    process.exit(1);

}

try {
    const issue = await createIssue(owner, repo, title, body);
    console.log(`Issue #${issue.number} creado exitosamente: ${issue.url}`)

} catch (error) {

    console.error("Error al crear el issue:", error);
}