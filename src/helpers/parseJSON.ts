export function parseJSON(data: unknown) {
    try {
        return JSON.parse(data as string);
    } catch(error) {
        console.log(error);
    }
}