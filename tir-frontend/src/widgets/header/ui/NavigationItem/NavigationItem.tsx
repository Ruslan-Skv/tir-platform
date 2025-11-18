import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { NavigationItem as NavigationItemType } from '@/shared/types/navigation';
import { dropdownMenus } from '@/shared/constants/navigation';
import styles from './NavigationItem.module.css';

export interface NavigationItemProps {
  item: NavigationItemType;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onDropdownMouseEnter: () => void;
  onDropdownMouseLeave: () => void;
  onClick?: (sectionName: string) => void;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onDropdownMouseEnter,
  onDropdownMouseLeave,
  onClick,
}) => {
  const hasDropdown = item.hasDropdown;
  const menuData = hasDropdown ? dropdownMenus[item.name] : null;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (hasDropdown) {
      if (onClick) {
        onClick(item.name);
      }
    } else {
      window.location.href = item.href;
    }
  };

  const handleDropdownItemClick = (itemName: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(itemName);
    }
  };

  return (
    <div className={styles.navItem} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        onClick={handleClick}
        className={`${styles.navButton} ${hasDropdown ? styles.navButtonWithDropdown : ''}`}
      >
        <span className={styles.navText}>{item.name}</span>
        {hasDropdown && (
          <ChevronDownIcon
            className={`${styles.chevron} ${isActive ? styles.chevronActive : ''}`}
          />
        )}
        <div className={styles.hoverEffect} />
      </button>

      {hasDropdown && isActive && menuData && (
        <div
          className={styles.dropdown}
          onMouseEnter={onDropdownMouseEnter}
          onMouseLeave={onDropdownMouseLeave}
        >
          <div className={styles.dropdownContent}>
            <div className={styles.dropdownList}>
              {menuData.items.map(dropdownItem => (
                <a
                  key={dropdownItem.name}
                  href={dropdownItem.href}
                  onClick={e => handleDropdownItemClick(dropdownItem.name, e)}
                  className={styles.dropdownItem}
                  title={dropdownItem.name}
                >
                  {dropdownItem.name}
                </a>
              ))}
            </div>

            <div className={styles.dropdownImage}>
              <img
                src={menuData.image}
                alt={item.name}
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik02NCA0MEM1MS4yNDg3IDQwIDQwIDUxLjI0ODcgNDAgNjRDNDAgNzYuNzUxMyA1MS4yNDg3IDg4IDY0IDg4Qzc2Ljc1MTMgODggODggNzYuNzUxMyA4OCA2NEM4OCA1MS4yNDg3IDc2Ljc1MTMgNDAgNjQgNDBaTTY0IDcyQzU5LjU4MTcgNzIgNTYgNjguNDE4MyA1NiA2NEM1NiA1OS41ODE3IDU5LjU4MTcgNTYgNjQgNTZDNjguNDE4MyA1NiA3MiA1OS41ODE3IDcyIDY0QzcyIDY4LjQxODMgNjguNDE4MyA3MiA2NCA3MloiIGZpbGw9IiNkOTA2NTIiLz4KPHBhdGggZD0iTTg4IDI0SDQwQzM0LjQ3NzIgMjQgMzAgMjguNDc3MiAzMCAzNFY5NEMzMCA5OS41MjI4IDM0LjQ3NzIgMTA0IDQwIDEwNEg4OEM5My41MjI4IDEwNCA5OCA5OS41MjI4IDk4IDk0VjM0Qzk4IDI4LjQ3NzIgOTMuNTIyOCAyNCA4OCAyNFpNNDAwIDI4SDg4QzkxLjMxMzcgMjggOTQgMzAuNjg2MyA5NCAzNFY4Mi4zNDM4TDc4LjY1NjIgNjdDNzcuODQwNyA2Ni4zMTI1IDc2Ljc1MzIgNjYuMzEyNSA3NS45Mzc4IDY3TDU3LjI1IDgyLjI1TDEwMCAyOEg0MDBaIiBmaWxsPSIjZDkwNjUyIi8+Cjwvc3ZnPgo=';
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
