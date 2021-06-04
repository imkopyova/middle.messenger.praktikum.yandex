import { compile } from "handlebars";
import { ROUTES } from "../../router";

export const template = compile(`
    <div class="page-centered">
        <main class="error-page__content">
            <h1 class="error-page__title">{{ errorCode }}</h1>
            <p class="error-page__text">{{ errorText }}</p>
            <a href=${ROUTES.HOME} class="error-page__link">Назад к чатам</a>
        </main>
    </div>
`);