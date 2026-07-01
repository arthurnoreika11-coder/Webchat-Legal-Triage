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
  new Matter(
    5,
    5,
    'Previous tenancy complaint',
    'Housing',
    false,
    'England',
    'The matter was resolved after a negotiation with the landlord.',
    '14 Jun, 10:05',
  ),
];

interface OpenEnquiriesProps {
  matterFilter: 'open' | 'closed';
  onMatterFilterChange: (value: 'open' | 'closed') => void;
}

export default function OpenEnquiries({ matterFilter, onMatterFilterChange }: OpenEnquiriesProps) {
  const filteredMatters = matterList.filter((matter) => matter.getStatus() === (matterFilter === 'open'));
  const visibleMatterCount = filteredMatters.length;
  const title = matterFilter === 'open' ? 'Open Enquiries' : 'Closed Enquiries';
  const subtitle = matterFilter === 'open'
    ? `${visibleMatterCount} current open enquiry${visibleMatterCount === 1 ? '' : 'ies'}`
    : `${visibleMatterCount} closed enquiry${visibleMatterCount === 1 ? '' : 'ies'}`;

  return (
    <main className="inboxPage">
      <section className="inboxShell" aria-labelledby="open-enquiries-title">
        <header className="inboxHeader">
          <div className="inboxHeaderContent">
            <h1 className="inboxTitle" id="open-enquiries-title">
              {title}
            </h1>
            <p className="inboxSubtitle">
              {subtitle}
            </p>
          </div>

          <div className="inboxHeaderActions" role="group" aria-label="Filter matters by status">
            <span className="matterFilterLabel">Open</span>
            <button
              type="button"
              className={`matterFilterSwitch ${matterFilter === 'closed' ? 'is-closed' : ''}`}
              onClick={() => onMatterFilterChange(matterFilter === 'open' ? 'closed' : 'open')}
              aria-pressed={matterFilter === 'closed'}
              aria-label={`Show ${matterFilter === 'open' ? 'closed' : 'open'} matters`}
            >
              <span className="matterFilterThumb" />
            </button>
            <span className="matterFilterValue">Closed</span>
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
