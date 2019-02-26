"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getBountyLinkRegex = /There is a .*?bounty.*?\((.*?)\).* on this issue/m;
exports.getBountyLink = function (str) {
    var matches = getBountyLinkRegex.exec(str);
    return matches && matches[1];
};
//# sourceMappingURL=get-bounty-link.js.map