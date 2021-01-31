export const template = Handlebars.compile(`
<div class="page-centered">
<main class="auth__container">
    <h1 class="heading-bid auth__title login__title">Вход</h1>
    <form name="login" method="POST" class="auth__form">
        <div class="auth__fields">
            <label class="field field-state-error">
                <span class="text-small field__label">Логин</span>
                <input name="login" type="text" class="field__input base-input">
                <span class="text-small field__error">Неверный логин</span>
            </label>
            <label class="field">
                <span class="text-small field__label">Пароль</span>
                <input name="password" type="password" class="field__input base-input">
                <span class="text-small field__error"></span>
            </label>
        </div>
        <div class="auth__buttons">
            <button type="submit" class="base-button auth__button">Авторизоваться</button>
            <a href="/signin/" class="base-button base-button-inverse base-button-type-link auth__button">Нет аккаунта?</a>
        </div>
    </form>
</main>
</div>
`);