import { SigninPage } from "./SigninPage";

const root = document.querySelector(".root");
const pageContent = new SigninPage().getElement();

root && root.append(pageContent);