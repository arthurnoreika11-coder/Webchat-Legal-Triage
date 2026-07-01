import React, { useState } from 'react';
import type { IconType } from 'react-icons';
import { LuMessageCirclePlus } from "react-icons/lu";
import { VscFileSubmodule } from "react-icons/vsc";
import { PiArchive} from "react-icons/pi";
import { PiUserList } from "react-icons/pi";
import { IoAccessibilityOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import '../../App.css'

interface NavItem {
  title: string;
  icon: IconType;
}

const NAV_ITEMS: NavItem[] = [
  { title: 'New Enquiry', icon: LuMessageCirclePlus },
  { title: 'Open Enquires', icon: VscFileSubmodule },
  { title: 'Closed Enquires', icon: PiArchive },
  { title: 'Client Information', icon: PiUserList },
  { title: 'Accessibility', icon: IoAccessibilityOutline },
  { title: 'Settings', icon: IoSettingsOutline }
];

export default function ClientSideNav(): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div
      className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className='navbar-menu'>
        <ul>
          {NAV_ITEMS.map((item: NavItem, index: number) => {
            const Icon = item.icon;

            return (
              <li key={index} className='nav-item'>
                <span className='item-icon'>
                  <Icon size={44} />
                </span>
                {isExpanded && <span className='item-text'>{item.title}</span>}
              </li>
            )
          })}
        </ul>
      </div>

    </div>
  );
}
