import "jsdom-global";
import { expect } from "chai";
import { Router } from "../Router";

// eslint-disable-next-line
// @ts-ignore
global.DOMParser = window.DOMParser;

describe("Router", () => {
    function createRouter() {
        return new Router();
    }

    it("Добавление роутов через use() должно обновлять массив routes", () => {
        const router = createRouter();
        router.use("/login", class Login {});
        router.use("/profile", class Profile {});
        expect(router.routes.length).to.eq(2);
    });
  });
