import { expect } from "chai";
import * as sinon from "sinon";
import * as _ from "./03_collection";

describe("03_collection", function () {
  describe("forEach", function () {
    context("when collection is an array", function () {
      it("should iterate over all items of array", function () {
        const collection = ["first", "second", "third"];
        const iteratee = sinon.spy();
        _.forEach(collection, iteratee);
        sinon.assert.calledWithExactly(iteratee, "first", 0, collection);
        sinon.assert.calledWithExactly(iteratee, "second", 1, collection);
        sinon.assert.calledWithExactly(iteratee, "third", 2, collection);
      });
    });

    context("when collection is an object", function () {
      it("should iterate over all items of object", function () {
        const collection: _.Dictionary<string> = {
          "0": "first",
          "1": "second",
          "2": "third"
        };
        const iteratee = sinon.spy();
        _.forEach(collection, iteratee);
        sinon.assert.calledWithExactly(iteratee, "first", "0", collection);
        sinon.assert.calledWithExactly(iteratee, "second", "1", collection);
        sinon.assert.calledWithExactly(iteratee, "third", "2", collection);
      });
    });
  });
});
