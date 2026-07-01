import { useState } from 'react';

export default function Matter() {
    const [matterData] = useState({
        subject: 'Property dispute enquiry',
        enquiryType: 'Legal advice',
        message: 'A client is seeking guidance on an ongoing lease disagreement and would like an update on next steps.',
        status: 'Active',
        updated: 'Updated 2 hours ago'
    });

    return (
        <main className="matterContainer">

            <section className="matterCard">

                <div className="matterHeader">
                    <span className="matterBadge">{matterData.enquiryType}</span>
                    <span className="matterStatus">{matterData.status}</span>
                </div>

                <h1 className="matterTitle">{matterData.subject}</h1>

                <div className="matterMeta">
                    <div className="matterMetaItem">
                        <span className="matterMetaLabel">Enquiry type</span>
                        <p className="matterMetaValue">{matterData.enquiryType}</p>
                    </div>
                    <div className="matterMetaItem">
                        <span className="matterMetaLabel">Last updated</span>
                        <p className="matterMetaValue">{matterData.updated}</p>
                    </div>
                </div>

                <div className="matterMessageBlock">
                    <h2 className="matterSectionTitle">Case summary</h2>
                    <p className="matterMessage">{matterData.message}</p>
                </div>

                <div className="matterActions">
                    <button className="matterButton">Chat History</button>
                    <button className="matterButton">Open Live Chat</button>
                </div>

            </section>
            
        </main>
    );
}