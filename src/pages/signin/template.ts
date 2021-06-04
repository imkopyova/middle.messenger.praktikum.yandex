import { compile } from "handlebars";
import { ROUTES } from "../../router";

export const template = compile(`
<div class="page-centered">
    <main class="auth__container">
        <h1 class="heading-bid auth__title login__title">Регистрация</h1>
        <form name="signin" method="POST" class="auth__form">
            <div class="auth__fields">
                <label class="field">
                    <span class="text-small field__label">Почта</span>
                    <input name="email" type="email" class="field__input base-input">
                    <span class="text-small field__error"></span>
                </label>
                <label class="field">
                    <span class="text-small field__label">Логин</span>
                    <input name="login" type="text" class="field__input base-input">
                    <span class="text-small field__error"></span>
                </label>
                <label class="field">
                    <span class="text-small field__label">Имя</span>
                    <input name="first_name" type="text" class="field__input base-input">
                    <span class="text-small field__error"></span>
                </label>
                <label class="field">
                    <span class="text-small field__label">Фамилия</span>
                    <input name="second_name" type="text" class="field__input base-input">
                    <span class="text-small field__error"></span>
                </label>
                <label class="field">
                    <span class="text-small field__label">Телефон</span>
                    <input name="phone" type="tel" class="field__input base-input">
                    <span class="text-small field__error"></span>
                </label>
                <label class="field">
                    <span class="text-small field__label">Пароль</span>
                    <input name="password" type="password" class="field__input base-input">
                    <span class="text-small field__error"></span>
                </label>
                <label class="field">
                    <span class="text-small field__label">Пароль (еще раз)</span>
                    <input name="password_again" type="password" class="field__input base-input">
                    <span class="text-small field__error"></span>
                </label>
            </div>
            <div class="auth__buttons">
                {{ childComponent this "button" }}
                <a href=${ROUTES.LOGIN} class="base-button base-button-inverse base-button-type-link auth__button">Войти</a>
            </div>
        </form>
    </main>
</div>
`);