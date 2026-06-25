function masterClient(cID, cName, cEmail, cPhone) {
    this.clientID = cID;
    this.clientName = cName;
    this.clientEmail = cEmail;
    this.clientPhone = cPhone;
    this.information = function () {
        return "Client ID: " + this.clientID + ", Name: " + this.clientName + ", Email: " + this.clientEmail + ", Phone: " + this.clientPhone;
    }
}

const clientList = [
    new masterClient(1, "John Doe", "john.doe@example.com", "123-456-7890"),
    new masterClient(2, "Jane Smith", "jane.smith@example.com", "098-765-4321"),
    new masterClient(3, "Bob Johnson", "bob.johnson@example.com", "555-555-5555")
];

module.exports = clientList;