class MasterMatter {
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

const matterList: MasterMatter[] = [
    new MasterMatter(1, 101, "Family Law", "Open", "England"),
    new MasterMatter(2, 102, "Criminal Law", "Closed", "Wales"),
    new MasterMatter(3, 103, "Corporate Law", "In Progress", "Scotland"),
    new MasterMatter(4, 104, "Intellectual Property Law", "Open", "Northern Ireland"),
    new MasterMatter(5, 105, "Employment Law", "Closed", "Wales")
];

export { MasterMatter, matterList };
