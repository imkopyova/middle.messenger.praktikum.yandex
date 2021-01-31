export function parseStringToHtml(blockAsString: string): HTMLElement {
    const blockAsHtml = new DOMParser().parseFromString(blockAsString, 'text/html').body.firstChild;
    return blockAsHtml as HTMLElement || document.createElement("div");
}