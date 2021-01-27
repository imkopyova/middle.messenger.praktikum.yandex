export function parseStringToHtml(blockAsString) {
    const blockAsHtml = new DOMParser().parseFromString(blockAsString, 'text/html').body.firstChild;
    return blockAsHtml;
}