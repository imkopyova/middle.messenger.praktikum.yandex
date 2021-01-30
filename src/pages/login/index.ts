import { LoginPage } from "./LoginPage.js";

const root = document.querySelector(".root");
const pageContent = new LoginPage().getElement();

root && root.append(pageContent);