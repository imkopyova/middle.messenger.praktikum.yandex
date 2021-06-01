export const template = Handlebars.compile(`
    <div class="message {{#if isAuthorMe}}message-author-me{{else}}message-author-they{{/if}}">
        <p class="message__text text-normal">{{text}}</p>
        <time class="message__time text-small">{{time}}</time>
        <span class="message__check"></span>
    </div>
`);