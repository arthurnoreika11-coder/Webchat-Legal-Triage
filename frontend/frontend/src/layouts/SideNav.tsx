import React, { useState } from 'react';
import type { IconType } from 'react-icons';
import { SiFiles } from 'react-icons/si';
import { LuMessageCirclePlus } from "react-icons/lu";
import { FaArchive } from "react-icons/fa";
import { RiInfoCardFill } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import '../App.css'

interface NavItem {
  title: string;
  icon: IconType;
}

const NAV_ITEMS: NavItem[] = [
  { title: 'New Enquiry', icon: LuMessageCirclePlus },
  { title: 'Open Enquires', icon: SiFiles },
  { title: 'Closed Enquires', icon: FaArchive },
  { title: 'Client Information', icon: RiInfoCardFill },
  { title: 'Accessibility', icon: IoAccessibility },
  { title: 'Settings', icon: IoMdSettings }
];

export default function Navbar(): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button
        className='toggle-btn'
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label='Toggle Navbar'
        
      >
        {isExpanded ? '◀' : '▶'}
      </button>

      <div className='navbar-menu'>
        <ul>
          {NAV_ITEMS.map((item: NavItem, index: number) => {
            const Icon = item.icon;

            return (
              <li key={index} className='nav-item'>
                <span className='item-icon'>
                  <Icon size={22} />
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