import { useState } from 'react';

export default function Matter() {
    const [matterData] = useState ({
        subject: String,
        enquiryType: String,
        message: String
    });

return (
    <main className= 'matterContainer'> 
        <h1 className= 'matterTitle'> {matterData.subject}</h1>
        <p className= 'matterEnquiryType'> {matterData.enquiryType}</p>
        <p className= 'matterMessage'> {matterData.message}</p>
    </main>
);

}