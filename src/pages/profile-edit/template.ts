import { ROUTES } from "../../router";

export const template = Handlebars.compile(`
    <div class="page-centered">
        <a href=${ROUTES.CHAT} class="page__back circle-button circle-button-hover-color">                        
            <div class="circle-button__background circle-button__background-color-grey"></div>
            <div class="circle-button__content circle-button__content-type-arrow-left"></div>
        </a>
        <main class="profile">
                <form id="form-avatar" name="profile-avatar" method="POST" class="profile__form">
                    <div class="avatar__placeholder profile__avatar profile__avatar-type-editing">
                        {{#if avatar}}
                            <img src={{ avatar }} alt="avatar" class="avatar">
                        {{/if}}
                        <input name="avatar" type="file" class="text-normal profile__avatar-input" />
                    </div>
                </form>
                <form name="profile-edit" method="POST" class="profile__form">
                    <label class="field">
                        <span class="text-small field__label">Имя</span>
                        <input value={{ first_name }} name="first_name" type="text" class="field__input base-input">
                        <span class="text-small field__error"></span>
                    </label>
                    <label class="field">
                        <span class="text-small field__label">Фамилия</span>
                        <input value={{ second_name }} name="second_name" type="text" class="field__input base-input">
                        <span class="text-small field__error"></span>
                    </label>
                    <label class="field">
                        <span class="text-small field__label">Имя в чате</span>
                        <input name="display_name" type="text" class="field__input base-input">
                        <span class="text-small field__error"></span>
                    </label>
                    <label class="field">
                        <span class="text-small field__label">Логин</span>
                        <input value={{ login }} name="login" type="text" class="field__input base-input">
                        <span class="text-small field__error"></span>
                    </label>
                    <label class="field">
                        <span class="text-small field__label">Телефон</span>
                        <input value={{ phone }} name="phone" type="tel" class="field__input base-input">
                        <span class="text-small field__error"></span>
                    </label>
                    <label class="field">
                        <span class="text-small field__label">Почта</span>
                        <input value={{ email }} name="email" type="mail" class="field__input base-input">
                        <span class="text-small field__error"></span>
                    </label>
                    {{ childComponent this "button" }}
                </form>
            </div>
        </main>
    </div>
`);