import { compile } from "handlebars";

export const template = compile(`
    <button type="submit" class="base-button {{#if className}}{{ className }}{{/if}}">{{ text }}</button>
`);