export const template = Handlebars.compile(`
    <button type="submit" class="base-button {{#if className}}{{ className }}{{/if}}">{{ text }}</button>
`);