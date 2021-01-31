export const template = Handlebars.compile(`
<div class="page-centered">
    <a href="/chat/" class="page__back circle-button circle-button-hover-color">                        
        <div class="circle-button__background circle-button__background-color-grey"></div>
        <div class="circle-button__content circle-button__content-type-arrow-left"></div>
    </a>
    <main class="profile">
        <div class="avatar__placeholder profile__avatar">
            <img src="{{ imgSrc }}" alt="avatar" class="avatar">
        </div>
        <form name="password-edit" method="POST" class="profile__form">
            <label class="field">
                <span class="text-small field__label">Старый ароль</span>
                <input name="password_old" type="password" class="field__input base-input">
                <span class="text-small field__error"></span>
            </label>
            <label class="field">
                <span class="text-small field__label">Новый пароль</span>
                <input name="password_new" type="password" class="field__input base-input">
                <span class="text-small field__error"></span>
            </label>
            <label class="field">
                <span class="text-small field__label">Новый пароль (еще раз)</span>
                <input name="password_new_again" type="password" class="field__input base-input">
                <span class="text-small field__error"></span>
            </label>
            <div class="profile__base-button">{{ childComponent this "button" }}</div>
        </form>
    </main>
</div>
`);