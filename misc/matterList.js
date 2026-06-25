function masterMatter(cID, mID, areaOfLaw, mStatus, mJurisdiction) {
    this.clientID = cID;
    this.matterID = mID;
    this.matterAreaOfLaw = areaOfLaw;
    this.matterStatus = mStatus;
    this.jurisdiction = mJurisdiction;
    this.getMatterStatus = function () {
        return this.matterStatus;
    }
}

const matterList = [
    new masterMatter(1, 101, "Family Law", "Open", "England"),
    new masterMatter(2, 102, "Criminal Law", "Closed", "Wales"),
    new masterMatter(3, 103, "Corporate Law", "In Progress", "Scotland"),
    new masterMatter(4, 104, "Intellectual Property Law", "Open", "Northern Ireland"),
    new masterMatter(5, 105, "Employment Law", "Closed", "Wales")
];

module.exports = matterList;