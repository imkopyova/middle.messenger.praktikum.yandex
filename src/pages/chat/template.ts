export const template = Handlebars.compile(`
    <div class="chat__page">
        <aside class="chat__aside aside">
            <header class="aside__header">
                <h3 class="heading-bid aside__title">Чаты</h3>
                <div class="aside-buttons">
                    <button type="button" class="chat__button chat__button-spacing-with-space circle-button circle-button-hover-scale">                        
                        <div class="circle-button__background circle-button__background-color-grey"></div>
                        <div class="circle-button__content circle-button__content-type-newchat"></div>
                    </button>
                    <a href="/profile/" class="chat__button chat__button-spacing-with-space circle-button circle-button-hover-scale">
                        <div class="circle-button__background circle-button__background-color-grey"></div>
                        <div class="circle-button__content circle-button__content-type-profile"></div>
                    </a>
                </div>
            </header>
            <form name="search" method="POST" class="aside__search">
                <input name="search"  type="text" placeholder="Поиск" class="base-input text-normal" />
            </form>
            <ul class="aside__list">
                <li class="chat-preview">
                    <a href="/chat/" class="chat-preview__link">
                        <div class="avatar__placeholder chat-preview__avatar"></div>
                        <div class="chat-preview__content">
                            <h2 class="chat-preview__title text-semibold">Киноклуб</h2>
                            <p class="chat-preview__text text-normal">Вы: Друзья, у меня для вас особенная новость!</p>
                        </div>
                        <div class="chat-preview__indicators">
                            <time class="chat-preview__datetime text-small">11:49</time>
                        </div>
                    </a>
                </li>
                <li class="chat-preview chat-preview-type-active">
                    <a href="/chat/" class="chat-preview__link">
                        <div class="avatar__placeholder chat-preview__avatar">
                            <img src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" alt="avatar" class="avatar">
                        </div>
                        <div class="chat-preview__content">
                            <h2 class="chat-preview__title text-semibold">Вася</h2>
                            <p class="chat-preview__text text-normal">Супер!</p>
                        </div>
                        <div class="chat-preview__indicators">
                            <time class="chat-preview__datetime text-small">11 окт</time>
                            <mark class="chat-preview__counter text-small">1</mark>
                        </div>
                    </a>
                </li>
            </ul>        
        </aside>
        <main class="chat__main">
            <header class="chat__header">
                <div class="chat__info">
                    <div class="avatar__placeholder chat__avatar">
                        <img src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" alt="avatar" class="avatar">
                    </div>
                    <h1 class="heading-normal chat__name">Вася</h1>
                </div>
                <div class="options__container">
                    <button type="button" type="button" class="chat__button circle-button circle-button-hover-scale">
                        <div class="circle-button__background circle-button__background-color-grey"></div>
                        <div class="circle-button__content circle-button__content-type-options"></div>
                    </button>
                    <ul class="options__list  options__list-visibility-visible">
                        <li class="options__item">
                            <button type="button" class="options__button">
                                <div class="options__item-icon options__item-icon-type-circle-plus"></div>
                                <span class="text-caption options__item-text">Добавить пользователя</span>
                            </button>
                        </li>
                        <li class="options__item">
                            <button type="button" class="options__button">
                                <div class="options__item-icon options__item-icon-type-circle-minus"></div>
                                <span class="text-caption options__item-text">Удалить пользователя</span>
                            </button>
                        </li>
                        <li class="options__item">
                            <button type="button" class="options__button">
                                <div class="options__item-icon options__item-icon-type-sticker"></div>
                                <span class="text-caption options__item-text">Измененить аватара чата</span>
                            </button>
                        </li>
                        <li class="options__item">
                            <button type="button" class="options__button options__button-color-warning">
                                <div class="options__item-icon options__item-icon-type-circle-x"></div>
                                <span class="text-caption options__item-text">Удалить чат</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
            <div class="chat__messages">
                <div class="message__day">
                    <div class="message message-author-me">
                        <p class="message__text text-normal">Супер!</p>
                        <time class="message__time text-small">13:47</time>
                        <span class="message__check"></span>
                    </div>
                    <div class="message message-author-they message-content-image">
                        <img src="https://images.unsplash.com/photo-1605867700633-c410783f70f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="photo" class="message__image" />
                        <time class="message__time text-small">11:49</time>
                    </div>
                    <div class="message message-author-they">
                        <p class="message__text text-normal">
                            Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
                            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали.
                        </p>
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