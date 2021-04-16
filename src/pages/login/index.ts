import { LoginPage } from "./LoginPage";

const root = document.querySelector(".root");
const pageContent = new LoginPage().getElement();

root && root.append(pageContent);