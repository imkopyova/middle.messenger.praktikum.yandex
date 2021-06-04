import { compile } from "handlebars";

export const template = compile(`
    <li class="options__item">
        <button type="button" class="options__button {{#if isWarning}}options__button-color-warning{{/if}}">
            {{#if (isEqual iconClassName "plus")}}
                <div class="options__item-icon options__item-icon-type-circle-plus"></div>
            {{/if}}
            {{#if (isEqual iconClassName "minus")}}
                <div class="options__item-icon options__item-icon-type-circle-minus"></div>
            {{/if}}
            {{#if (isEqual iconClassName "sticker")}}
                <div class="options__item-icon options__item-icon-type-circle-sticker"></div>
            {{/if}}
            {{#if (isEqual iconClassName "del")}}
                <div class="options__item-icon options__item-icon-type-circle-x"></div>
            {{/if}}
            <span class="text-caption options__item-text">{{ text }}</span>
        </button>
    </li>
`);