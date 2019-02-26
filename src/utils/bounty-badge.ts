export class BountyBadge {
  static isBountyBadgeExists(str: string): boolean {
    const getBountyBadgeRegex = /\[\!\[Bountysource\]/m;

    return getBountyBadgeRegex.test(str);
  }

  static generate(bountyLink: string) {
    const issueId = BountyBadge.getIssueIdFromLink(bountyLink);

    return `[![Bountysource](https://api.bountysource.com/badge/issue?issue_id=${issueId})](${bountyLink})\r\n\r\n`;
  }

  static embedBadge(body: string, badge: string) {
    const lines = body.split('\n');

    const before: string[] = [];
    const after: string[] = [];

    let foundEndOfTitle = false;

    lines.forEach((line: string) => {
      if (!foundEndOfTitle && line.startsWith('#')) {
        before.push(line);
        return;
      }

      foundEndOfTitle = true;

      after.push(line);
    });

    return `${before.join('\n')}${badge}${after.join('\n')}`;
  }

  private static getIssueIdFromLink(bountyLink: string) {
    const getIssueIdRegex = /\/issues\/(\d*)-/;
    const matches = getIssueIdRegex.exec(bountyLink);

    return matches && matches[1];
  }
}
