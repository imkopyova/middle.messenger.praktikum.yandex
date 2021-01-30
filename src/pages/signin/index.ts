import { SigninPage } from "./SigninPage.js";

const root = document.querySelector(".root");
const pageContent = new SigninPage().getElement();

root && root.append(pageContent);