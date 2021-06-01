import "jsdom-global";
import { expect } from "chai";
import { Block } from "../Block";

// eslint-disable-next-line
// @ts-ignore
global.DOMParser = window.DOMParser;

describe("Block", () => {
    function createBlock() {
        return new Block({}, {});
    }

    it("Вызов setProps должен менять props блока", () => {
        const block = createBlock();
        const newProps = {id: 1};
        block.setProps(newProps);
        // eslint-disable-next-line
        // @ts-ignore
        expect(block.props.id).to.equal(1);
    });
  });
