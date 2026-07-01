import React, { useState } from 'react';
import type { IconType } from 'react-icons';
import { IoFolderOpenOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { VscFiles } from "react-icons/vsc";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoAccessibilityOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import '../../App.css'

interface NavItem {
  title: string;
  icon: IconType;
}

const NAV_ITEMS: NavItem[] = [
  { title: 'Dashboard', icon: MdOutlineDashboard },
  { title: 'Assigned Matters', icon: IoFolderOpenOutline },
  { title: 'Clients', icon: GoPerson },
  { title: 'Matters', icon: VscFiles },
  { title: 'Manage Users', icon: MdOutlineManageAccounts },
  { title: 'Accessibility', icon: IoAccessibilityOutline },
  { title: 'Settings', icon: IoSettingsOutline }
];

export default function Navbar(): React.JSX.Element {
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
