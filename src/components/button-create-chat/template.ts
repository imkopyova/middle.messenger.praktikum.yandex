import { compile } from "handlebars";

export const template = compile(`
    <button type="button" class="chat__button chat__button-spacing-with-space circle-button circle-button-hover-scale">                        
        <div class="circle-button__background circle-button__background-color-grey"></div>
        <div class="circle-button__content circle-button__content-type-newchat"></div>
    </button>
`);