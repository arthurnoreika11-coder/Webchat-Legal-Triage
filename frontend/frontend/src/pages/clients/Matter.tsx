import { useState } from 'react';

export default function Matter() {
    const [matterData] = useState<String> ({
        subject: '',
        enquiryType: '',
        message: ''
    });

return (
    <main className= 'matterContainer'> 
        <h1 className= 'matterTitle'> {matterData.subject}</h1>
        <p className= 'matterEnquiryType'> {matterData.enquiryType}</p>
        <p className= 'matterMessage'> {matterData.message}</p>
        <button className= 'matterButton'>Open Live Chat</button>
    </main>
);

}