export async function fetchGitHubDirectory(path: string) {
    const githubToken = process.env.GITHUB_TOKEN;
    const repoOwner = "adhl-0216";
    const repoName = "portfolio-contents";

    const response = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`,
        {
            headers: {
                Authorization: `token ${githubToken}`,
                Accept: "application/vnd.github.v3+json",
            },
            next: { revalidate: 3600 }
        }
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch directory: ${path}`);
    }

    return response.json();
}

export async function fetchGitHubFile(filePath: string) {
    const githubToken = process.env.GITHUB_TOKEN;
    const repoOwner = "adhl-0216";
    const repoName = "portfolio-contents";

    let data;
    try {
        const response = await fetch(
            `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
            {
                headers: {
                    Authorization: `token ${githubToken}`,
                    Accept: "application/vnd.github.v3+json",
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
        }

        data = await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }

    return data
}
