"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection1, collection2) {
    var merged = [];
    var i = 0;
    var j = 0;
    var k = 0;
    while (k < collection1.length - 1 && k < collection2.length - 1) {
        if (collection1[k] > collection1[k + 1]) {
            throw new Error("Array is not sorted");
        }
        if (collection2[k] > collection2[k + 1]) {
            throw new Error("Array is not sorted");
        }
        if (collection1[k] % 1 !== 0 || collection1[k + 1] % 1 !== 0 || collection2[k] % 1 !== 0 || collection2[k + 1] % 1 !== 0) {
            throw new Error("Array has float number ");
        }
        if (collection1[k] < 0 || collection1[k + 1] < 0 || collection2[k] < 0 || collection2[k + 1] < 0) {
            throw new Error("Array has negative number ");
        }
        k++;
    }
    while (i < collection1.length && j < collection2.length) {
        if (collection1[i] < collection2[j]) {
            merged.push(collection1[i]);
            i++;
        }
        else {
            merged.push(collection2[j]);
            j++;
        }
    }
    while (i < collection1.length) {
        merged.push(collection1[i]);
        i++;
    }
    while (j < collection2.length) {
        merged.push(collection2[j]);
        j++;
    }
    return merged;
}
exports.merge = merge;
