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

  describe("every", function () {
    context("when collection is an array", function () {
      context("when iteratee always returns true", function () {
        it("should return true", function () {
          const collection = [null, null, null];
          const iteratee = sinon.stub().returns(true);
          expect(_.every<null>(collection, iteratee)).to.be.equal(true);
        });
      });

      context("when iteratee returns false", function () {
        it("should return false and exit early", function () {
          const collection = [null, null, null];
          const iteratee = sinon.stub().returns(false);
          expect(_.every<null>(collection, iteratee)).to.be.equal(false);
          sinon.assert.calledOnce(iteratee);
        });
      });

      it("should iterate over all items", function () {
        const collection = ["first", "second", "third"];
        const iteratee = sinon.stub().returns(true);
        _.every<string>(collection, iteratee);
        sinon.assert.calledWithExactly(iteratee, "first", 0, collection);
        sinon.assert.calledWithExactly(iteratee, "second", 1, collection);
        sinon.assert.calledWithExactly(iteratee, "third", 2, collection);
      });
    });

    context("when collection is an object", function () {
      context("when iteratee always returns true", function () {
        it("should return true", function () {
          const collection: _.Dictionary<number> = {
            'a': 1,
            'b': 2,
            'c': 3
          };
          const iteratee = sinon.stub().returns(true);
          expect(_.every<number>(collection, iteratee)).to.be.equal(true);
        });
      });

      context("when iteratee returns false", function () {
        it("should return false and exit early", function () {
          const collection: _.Dictionary<number> = {
            'a': 1,
            'b': 2,
            'c': 3
          };
          const iteratee = sinon.stub().returns(false);
          expect(_.every<number>(collection, iteratee)).to.be.equal(false);
          sinon.assert.calledOnce(iteratee);
        });
      });

      it("should iterate over all items", function () {
        const collection: _.Dictionary<string> = {
          "0": "first",
          "1": "second",
          "2": "third"
        };
        const iteratee = sinon.stub().returns(true);
        _.every<string>(collection, iteratee);
        sinon.assert.calledWithExactly(iteratee, "first", "0", collection);
        sinon.assert.calledWithExactly(iteratee, "second", "1", collection);
        sinon.assert.calledWithExactly(iteratee, "third", "2", collection);
      });
    });
  });
});
