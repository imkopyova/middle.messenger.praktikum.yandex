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
        <main class="chat__main">
            <header class="chat__header">
                <div class="chat__info">
                    <div class="avatar__placeholder chat__avatar">
                        {{#if chatAvatar }}
                            <img src={{ chatAvatar }} alt="avatar" class="avatar">
                        {{/if}}
                    </div>
                    <h1 class="heading-normal chat__name">{{ chatTitle }}</h1>
                </div>
                <div class="options__container">
                    <button type="button" type="button" class="chat__button circle-button circle-button-hover-scale">
                        <div class="circle-button__background circle-button__background-color-grey"></div>
                        <div class="circle-button__content circle-button__content-type-options"></div>
                    </button>
                    <ul class="options__list  options__list-visibility-visible">
                        {{ childComponent this "menuButtonAddUser" }}
                        {{ childComponent this "menuButtonDeleteUser" }}
                        {{ childComponent this "menuButtonDeleteChat" }}
                    </ul>
                </div>
            </header>
            <div class="chat__messages">
                <div class="message__day">
                    {{childComponentArray this "messages"}}
                    <div class="message message-author-they message-content-image">
                        <img src="https://images.unsplash.com/photo-1605867700633-c410783f70f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="photo" class="message__image" />
                        <time class="message__time text-small">11:49</time>
                    </div>
                    <p class="text-semibold message__date">11 октября</p> 
                </div>  
            </div>
            <form name="new-message" method="POST" class="chat__writing">
                <div class="chat__button circle-button circle-button-hover-color">
                    <div class="circle-button__background"></div>
                    <input name="file" type="file" class="chat__button-type-file circle-button__content circle-button__content-color-grey circle-button__content-type-paperclip"/>
                </div>
                <button type="button" class="chat__button circle-button circle-button-hover-color">
                    <div class="circle-button__background"></div>
                    <div class="circle-button__content circle-button__content-color-grey circle-button__content-type-smiled"></div>
                </button>
                <textarea name="message" placeholder="Cообщение" class="chat__textarea base-input base-input-type-textarea text-normal"></textarea>
                <button type="submit" class="chat__button circle-button circle-button-hover-scale">
                    <div class="circle-button__background circle-button__background-color-accent"></div>
                    <div class="circle-button__content circle-button__content-color-white circle-button__content-type-send"></div>
                </button>
            </form>
        </main>
    </div>
`);