"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BountyBadge = /** @class */ (function () {
    function BountyBadge() {
    }
    BountyBadge.isBountyBadgeExists = function (str) {
        var getBountyBadgeRegex = /\[\!\[Bountysource\]/m;
        return getBountyBadgeRegex.test(str);
    };
    BountyBadge.generate = function (bountyLink) {
        var issueId = BountyBadge.getIssueIdFromLink(bountyLink);
        return "[![Bountysource](https://api.bountysource.com/badge/issue?issue_id=" + issueId + ")](" + bountyLink + ")\r\n\r\n";
    };
    BountyBadge.embedBadge = function (body, badge) {
        var lines = body.split('\n');
        var before = [];
        var after = [];
        var foundEndOfTitle = false;
        lines.forEach(function (line) {
            if (!foundEndOfTitle && line.startsWith('#')) {
                before.push(line);
                return;
            }
            foundEndOfTitle = true;
            after.push(line);
        });
        console.log('BEFORE: ', before.join('\n'));
        console.log('AFTER: ', after.join('\n'));
        return "" + before.join('\n') + badge + after.join('\n');
    };
    BountyBadge.getIssueIdFromLink = function (bountyLink) {
        var getIssueIdRegex = /\/issues\/(\d*)-/;
        var matches = getIssueIdRegex.exec(bountyLink);
        return matches && matches[1];
    };
    return BountyBadge;
}());
exports.BountyBadge = BountyBadge;
//# sourceMappingURL=bounty-badge.js.map