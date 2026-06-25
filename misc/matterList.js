function masterMatter(cID, mID, areaOfLaw) {
    this.clientID = cID;
    this.matterID = mID;
    this.matterAreaOfLaw = areaOfLaw;
    this.information = function () {
        return "Client ID: " + this.clientID + ", Matter ID: " + this.matterID + ", Area of Law: " + this.matterAreaOfLaw;
    }
}

const matterList = [
    new masterMatter(1, 101, "Family Law"),
    new masterMatter(2, 102, "Criminal Law"),
    new masterMatter(3, 103, "Corporate Law"),
    new masterMatter(4, 104, "Intellectual Property Law"),
    new masterMatter(5, 105, "Employment Law")
];

module.exports = matterList;