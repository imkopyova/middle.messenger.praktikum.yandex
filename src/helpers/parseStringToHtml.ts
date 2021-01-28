export function parseStringToHtml(blockAsString: string): Node {
    const blockAsHtml = new DOMParser().parseFromString(blockAsString, 'text/html').body.firstChild;
    return blockAsHtml || document.createElement("div");
}