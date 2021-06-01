export const template = Handlebars.compile(`
    <div>
        <button class="{{ className }} circle-button circle-button-hover-scale">                        
            <div class="circle-button__background circle-button__background-color-grey"></div>
            <div class="circle-button__content circle-button__content-type-circle-x"></div>
        </button>
        <span class="text-small profile__tooltip">Выйти</span>
    </div>
`);