import { useState } from 'react';

export default function Matter() {
    const [matterData] = useState({
        subject: 'Property dispute enquiry',
        category: 'Legal advice',
        subcategory: 'Property Law',
        message: 'A client is seeking guidance on an ongoing lease disagreement and would like an update on next steps.',
        status: 'Active',
        updated: 'Updated 2 hours ago',
        wasClosed: false
    });

    return (
        <main className="matterContainer">

            <section className="matterCard">

                <div className="matterHeader">
                    <div className="matterBadges" aria-label="Matter categories">
                        <span className="matterBadge matterBadge--primary">{matterData.category}</span>
                        <span className="matterBadge matterBadge--separator">—</span>
                        <span className="matterBadge matterBadge--secondary">{matterData.subcategory}</span>
                    </div>
                    <span className="matterStatus">{matterData.wasClosed ? 'Closed' : matterData.status}</span>
                </div>

                <h1 className="matterTitle">{matterData.subject}</h1>

                <div className="matterMessageBlock">
                    <h2 className="matterSectionTitle">Case summary</h2>
                    <p className="matterMessage">{matterData.message}</p>
                </div>

                <div className='documentsBlock'>
                    <h2 className="matterSectionTitle">Documents</h2>
                    <ul className="documentsList">
                        <li className="documentItem">
                            <span className="documentName">Lease Agreement.pdf</span>
                            <button className="documentButton">View</button>
                        </li>
                        <li className="documentItem">
                            <span className="documentName">Correspondence.docx</span>
                            <button className="documentButton">View</button>
                        </li>
                    </ul>
                </div>

                <div className="matterActions">
                    <button className="matterButton">Chat History</button>
                    <button className="matterButton">
                        {matterData.wasClosed ? 'Restart Chat' : 'Open Chat'}
                    </button>
                </div>

            </section>

        </main>
    );
}