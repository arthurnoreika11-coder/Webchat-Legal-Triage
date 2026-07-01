import '../../App.css';

class Matter {
  clientID: number;
  matterID: number;
  subject: string;
  matterAreaOfLaw: string;
  matterStatus: boolean;
  jurisdiction: string;
  preview: string;
  lastUpdated: string;

  constructor(
    cID: number,
    mID: number,
    subject: string,
    areaOfLaw: string,
    mStatus: boolean,
    mJurisdiction: string,
    preview: string,
    lastUpdated: string,
  ) {
    this.clientID = cID;
    this.matterID = mID;
    this.subject = subject;
    this.matterAreaOfLaw = areaOfLaw;
    this.matterStatus = mStatus;
    this.jurisdiction = mJurisdiction;
    this.preview = preview;
    this.lastUpdated = lastUpdated;
  }

  getFullInfo(): Record<string, string | number | boolean> {
    return {
      matterID: this.matterID,
      subject: this.subject,
      matterAreaOfLaw: this.matterAreaOfLaw,
      matterStatus: this.matterStatus,
      jurisdiction: this.jurisdiction,
      preview: this.preview,
      lastUpdated: this.lastUpdated,
    };
  }

  getStatus(): boolean {
    return this.matterStatus;
  }
}

const matterList: Matter[] = [
  new Matter(
    1,
    1,
    'Fired from work',
    'Employment',
    true,
    'England',
    'I was dismissed without warning and need advice on what happens next.',
    'Today, 09:42',
  ),
  new Matter(
    2,
    2,
    'Landlord deposit dispute',
    'Housing',
    true,
    'England',
    'My landlord has not returned my deposit after the tenancy ended.',
    'Yesterday, 16:10',
  ),
  new Matter(
    3,
    3,
    'Debt collection letter',
    'Consumer',
    true,
    'Wales',
    'I received a debt letter for an account I do not recognise.',
    'Friday, 11:28',
  ),
  new Matter(
    4,
    4,
    'Child contact arrangements', 
    'Family',
    true,
    'England',
    'I need to understand my options for agreeing regular contact.',
    '21 Jun, 14:03',
  ),
];

export default function OpenEnquiries() {
  const openMatterCount = matterList.filter((matter) => matter.getStatus()).length;
  const filteredMatters = matterList;

  return (
    <main className="inboxPage">
      <section className="inboxShell" aria-labelledby="open-enquiries-title">
        <header className="inboxHeader">
          <div>
            <h1 className="inboxTitle" id="open-enquiries-title">
              Open Enquiries
            </h1>
            <p className="inboxSubtitle">
              {openMatterCount} current open enquiry{openMatterCount === 1 ? '' : 'ies'}
            </p>
          </div>
        </header>

        <ul className="enquiryList" aria-label="Open enquiry inbox">
          {filteredMatters.map((matter) => (
            <li
              key={matter.matterID}
              className="enquiryRow"
            >

              <div className="enquiryContent">
                <div className="enquiryMeta">
                  <span className="enquiryDate">{matter.lastUpdated}</span>
                </div>

                <h2 className="enquirySubject">{matter.subject}</h2>
                <p className="enquiryPreview">
                  {matter.preview}
                </p>
              </div>

              <span className="statusPill">
                {matter.getStatus() ? matter.matterAreaOfLaw : 'Closed'}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
