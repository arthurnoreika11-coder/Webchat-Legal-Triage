function formatTimestamp(): string {
    const now = new Date();

    return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

class MasterClient {
    clientID: number;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    creationDate: string;
    lastUpdated: string;

    constructor(cID: number, cName: string, cEmail: string, cPhone: string) {
        this.clientID = cID;
        this.clientName = cName;
        this.clientEmail = cEmail;
        this.clientPhone = cPhone;
        this.creationDate = formatTimestamp();
        this.lastUpdated = formatTimestamp();
    }

    updateLastUpdated(): void {
        this.lastUpdated = formatTimestamp();
    }

    getInformation(): string {
        return `Client ID: ${this.clientID}, Name: ${this.clientName}, Email: ${this.clientEmail}, Phone: ${this.clientPhone}`;
    }
}

interface ClientList extends Array<MasterClient> {
    addClient(cID: number, cName: string, cEmail: string, cPhone: string): void;
    removeClient(cID: number): void;
}

// Made up people for testing purposes
let clientList = [
    new MasterClient(1, "John Doe", "john.doe@example.com", "123-456-7890"),
    new MasterClient(2, "Jane Smith", "jane.smith@example.com", "098-765-4321"),
    new MasterClient(3, "Bob Johnson", "bob.johnson@example.com", "555-555-5555")
] as ClientList;

clientList.addClient = function (cID: number, cName: string, cEmail: string, cPhone: string): void {
    const newClient = new MasterClient(cID, cName, cEmail, cPhone);
    this.push(newClient);
}

clientList.removeClient = function (cID: number): void {
    const index = this.findIndex(client => client.clientID === cID);
    if (index !== -1) {
        this.splice(index, 1);
    }
}

export { MasterClient, clientList };
