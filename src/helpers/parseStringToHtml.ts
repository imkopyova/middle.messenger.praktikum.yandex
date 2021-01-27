export function parseStringToHtml(blockAsString: string): ChildNode | null {
    const blockAsHtml = new DOMParser().parseFromString(blockAsString, 'text/html').body.firstChild;
    return blockAsHtml;
}