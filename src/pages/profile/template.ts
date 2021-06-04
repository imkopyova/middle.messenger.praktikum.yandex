import { compile } from "handlebars";
import { ROUTES } from "../../router";

export const template = compile(`
    <div class="page-centered">
        <a href=${ROUTES.HOME} class="page__back circle-button circle-button-hover-color">                        
            <div class="circle-button__background circle-button__background-color-grey"></div>
            <div class="circle-button__content circle-button__content-type-arrow-left"></div>
        </a>

        <main class="profile">
            <div class="avatar__placeholder profile__avatar">
                {{#if imgSrc}}
                    <img src={{ imgSrc }} alt="avatar" class="avatar">
                {{/if}}
            </div>
            <nav class="profile__buttons">
                <div class="profile__button-container">
                    <a href=${ROUTES.PROFILE_EDIT} class="profile__button circle-button circle-button-hover-scale">                        
                        <div class="circle-button__background circle-button__background-color-grey"></div>
                        <div class="circle-button__content circle-button__content-type-profile"></div>
                    </a>
                    <span class="text-small profile__tooltip">Изменить профиль</span>
                </div>
                <div class="profile__button-container">
                    <a href=${ROUTES.PASSWORD_EDIT} class="profile__button circle-button circle-button-hover-scale">                        
                        <div class="circle-button__background circle-button__background-color-grey"></div>
                        <div class="circle-button__content circle-button__content-type-lock"></div>
                    </a>
                    <span class="text-small profile__tooltip">Изменить пароль</span>
                </div>
                <div class="profile__button-container">
                    {{ childComponent this "buttonLogout" }}
                </div>
            </nav>
            <ul class="profile__data-list">
                <li class="profile__data-item">
                    <span class="text-normal profile__param">Почта</span>
                    <span class="text-normal profile__value">{{ mail }}</span>
                </li>
                <li class="profile__data-item">
                    <span class="text-normal profile__param">Логин</span>
                    <span class="text-normal profile__value">{{ login }}</span>
                </li>
                <li class="profile__data-item">
                    <span class="text-normal profile__param">Имя</span>
                    <span class="text-normal profile__value">{{ first_name }}</span>
                </li>
                <li class="profile__data-item">
                    <span class="text-normal profile__param">Фамилия</span>
                    <span class="text-normal profile__value">{{ last_name }}</span>
                </li>
                <li class="profile__data-item">
                    <span class="text-normal profile__param">Имя в чате</span>
                    <span class="text-normal profile__value">{{ nickname }}</span>
                </li>
                <li class="profile__data-item">
                    <span class="text-normal profile__param">Телефон</span>
                    <span class="text-normal profile__value">{{ phone }}</span>
                </li>
            </ul>
        </main>
    </div>

    <div class="modal__background">
        <div class="modal__container">
            <h3 class="heading-small modal__title">Добавить пользователя</h3>
            <form name="add-user" method="POST" class="modal__form">
                <label class="field">
                    <span class="text-small field__label">Логин</span>
                    <input name="login" type="text" class="field__input base-input">
                    <span class="text-small field__error"></span>
                </label>
                <button type="submit" class="text-semibold base-button base-button-inverse modal__button">Добавить</button>
            </form>
        </div>
        <div class="modal__container">
            <h3 class="heading-small modal__title">Удалить пользователя</h3>
            <form name="remove-user" method="POST" class="modal__form">
                <label class="field">
                    <span class="text-small field__label">Логин</span>
                    <input name="login" type="text" class="field__input base-input">
                    <span class="text-small field__error"></span>
                </label>
                <button type="submit" class="text-semibold base-button base-button-inverse modal__button modal__button-type-warning">Удалить</button>
            </form>
        </div>
        <div class="modal__container">
            <h3 class="heading-small modal__title">Удалить чат?</h3>
            <button type="button" class="text-semibold base-button modal__button">Отмена</button>
            <button type="button" class="text-semibold base-button base-button-inverse modal__button modal__button-type-warning">Удалить</button>
        </div>
        <div class="modal__container">
            <h3 class="heading-small modal__title">Не удалось загрузить файл</h3>
            <button type="button" class="text-semibold base-button modal__button">Отмена</button>
        </div>
    </div>
`);