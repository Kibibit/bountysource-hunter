export declare class BountyBadge {
    static isBountyBadgeExists(str: string): boolean;
    static generate(bountyLink: string): string;
    static embedBadge(body: string, badge: string): string;
    private static getIssueIdFromLink;
}
