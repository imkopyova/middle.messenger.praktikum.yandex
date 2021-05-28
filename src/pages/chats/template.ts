import { ROUTES } from "../../router";

export const template = Handlebars.compile(`
    <div class="chat__page">
        <aside class="chat__aside aside">
            <header class="aside__header">
                <h3 class="heading-bid aside__title">Чаты</h3>
                <div class="aside-buttons">
                    {{ childComponent this "buttonCreateChat" }}
                    <a href=${ROUTES.PROFILE} class="chat__button chat__button-spacing-with-space circle-button circle-button-hover-scale">
                        <div class="circle-button__background circle-button__background-color-grey"></div>
                        <div class="circle-button__content circle-button__content-type-profile"></div>
                    </a>
                </div>
            </header>
            <form name="search" method="POST" class="aside__search">
                <input name="search"  type="text" placeholder="Поиск" class="base-input text-normal" />
            </form>
            <ul class="aside__list">
                {{#each chats}}
                    <li class="chat-preview">
                        <a href="${ROUTES.CHAT}{{ this.id }}" class="chat-preview__link">
                            <div class="avatar__placeholder chat-preview__avatar"></div>
                            <div class="chat-preview__content">
                                <h2 class="chat-preview__title text-semibold">{{ this.title }}</h2>
                                {{#if this.last_message}}
                                    <p class="chat-preview__text text-normal">{{ this.user.first_name }}: {{ this.content }}</p>
                                {{/if}}
                            </div>
                            <div class="chat-preview__indicators">
                                <time class="chat-preview__datetime text-small">{{ this.last_message.time }}</time>
                                {{#if this.unread_count}}
                                    <mark class="chat-preview__counter text-small">{{ this.unread_count }}</mark>
                                {{/if}}
                            </div>
                        </a>
                    </li>
                {{/each}}
            </ul>        
        </aside>
        <main class="chat__main"></main>
    </div>
`);