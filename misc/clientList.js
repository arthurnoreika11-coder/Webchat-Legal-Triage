function masterClient(cID, cName, cEmail, cPhone) {
    this.clientID = cID;
    this.clientName = cName;
    this.clientEmail = cEmail;
    this.clientPhone = cPhone;
    this.creationDate = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    this.lastUpdated = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    this.updateLastUpdated = function () {
        this.lastUpdated = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    };
    this.getInformation = function () {
        return "Client ID: " + this.clientID + ", Name: " + this.clientName + ", Email: " + this.clientEmail + ", Phone: " + this.clientPhone;
    }
}

// Made up people for testing purposes
const clientList = [
    new masterClient(1, "John Doe", "john.doe@example.com", "123-456-7890"),
    new masterClient(2, "Jane Smith", "jane.smith@example.com", "098-765-4321"),
    new masterClient(3, "Bob Johnson", "bob.johnson@example.com", "555-555-5555")
];

clientList.addClient = function (cID, cName, cEmail, cPhone) {
    const newClient = new masterClient(cID, cName, cEmail, cPhone);
    this.push(newClient);
}

clientList.removeClient = function (cID) {
    const index = this.findIndex(client => client.clientID === cID);
    if (index !== -1) {
        this.splice(index, 1);
    }
}
