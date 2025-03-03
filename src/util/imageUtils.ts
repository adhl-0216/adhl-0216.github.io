export async function isValidImageUrl(url: string): Promise<boolean> {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok && response.headers.get('content-type')?.startsWith('image/') || false;
    } catch (error) {
        console.info(error);
        return false;
    }
}