class Matter {
    clientID: number;
    matterID: number;
    matterAreaOfLaw: string;
    matterStatus: string;
    jurisdiction: string;

    constructor(cID: number, mID: number, areaOfLaw: string, mStatus: string, mJurisdiction: string) {
        this.clientID = cID;
        this.matterID = mID;
        this.matterAreaOfLaw = areaOfLaw;
        this.matterStatus = mStatus;
        this.jurisdiction = mJurisdiction;
    }

    getMatterStatus(): string {
        return this.matterStatus;
    }
}

const matterList: Matter[] = [
    new Matter(1, 101, "Family Law", "Open", "England"),
    new Matter(2, 102, "Criminal Law", "Closed", "Wales"),
    new Matter(3, 103, "Corporate Law", "In Progress", "Scotland"),
    new Matter(4, 104, "Intellectual Property Law", "Open", "Northern Ireland"),
    new Matter(5, 105, "Employment Law", "Closed", "Wales")
];

export { Matter, matterList };
