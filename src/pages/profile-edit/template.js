export const template = Handlebars.compile(`
    <div class="page-centered">
        <a href="/chat/" class="page__back circle-button circle-button-hover-color">                        
            <div class="circle-button__background circle-button__background-color-grey"></div>
            <div class="circle-button__content circle-button__content-type-arrow-left"></div>
        </a>
        <main class="profile">
            <form name="profile-edit" class="profile__form">
                <div class="avatar__placeholder profile__avatar profile__avatar-type-editing">
                    <img src={{ imgSrc }} alt="avatar" class="avatar">
                    <input name="avatar" type="file" class="text-normal profile__avatar-input" />
                </div>

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
                    <span class="text-small field__label">Имя в чате</span>
                    <input name="display_name" type="text" class="field__input base-input">
                    <span class="text-small field__error"></span>
                </label>
                <label class="field">
                    <span class="text-small field__label">Логин</span>
                    <input name="login" type="password" class="field__input base-input">
                    <span class="text-small field__error"></span>
                </label>
                <label class="field">
                    <span class="text-small field__label">Телефон</span>
                    <input name="phone" type="text" class="field__input base-input">
                    <span class="text-small field__error"></span>
                </label>
                <label class="field">
                    <span class="text-small field__label">Почта</span>
                    <input name="email" type="text" class="field__input base-input">
                    <span class="text-small field__error"></span>
                </label>
                <button class="base-button profile__base-button">Сохранить</button>
            </form>
        </main>
    </div>
`);