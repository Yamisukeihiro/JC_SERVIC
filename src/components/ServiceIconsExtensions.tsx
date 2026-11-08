import React from 'react';
import {
  siApple,
  siCursor,
  siDuolingo,
  siGoogle,
  siIcloud,
  siNordvpn,
  siNotion,
} from 'simple-icons';
import { BrandIconBadge as BaseBrandIconBadge } from './ServiceIcons';

interface IconProps {
  className?: string;
  size?: number;
}

interface SimpleIconData {
  title: string;
  hex: string;
  path: string;
}

const SimpleBrandIcon: React.FC<IconProps & { icon: SimpleIconData }> = ({
  className = 'w-6 h-6',
  size,
  icon,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    role="img"
    aria-label={`${icon.title} logo`}
  >
    <path d={icon.path} fill={`#${icon.hex}`} />
  </svg>
);

export const AirPodsIcon: React.FC<IconProps> = (props) => <SimpleBrandIcon icon={siApple} {...props} />;
export const GoogleOneIcon: React.FC<IconProps> = (props) => <SimpleBrandIcon icon={siGoogle} {...props} />;
export const NordVPNIcon: React.FC<IconProps> = (props) => <SimpleBrandIcon icon={siNordvpn} {...props} />;
export const ICloudIcon: React.FC<IconProps> = (props) => <SimpleBrandIcon icon={siIcloud} {...props} />;
export const DuolingoIcon: React.FC<IconProps> = (props) => <SimpleBrandIcon icon={siDuolingo} {...props} />;
export const NotionIcon: React.FC<IconProps> = (props) => <SimpleBrandIcon icon={siNotion} {...props} />;
export const CursorIcon: React.FC<IconProps> = (props) => <SimpleBrandIcon icon={siCursor} {...props} />;

export const MicrosoftOfficeIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    role="img"
    aria-label="Microsoft Office logo"
  >
    <path fill="#F25022" d="M1 1h10.5v10.5H1z" />
    <path fill="#7FBA00" d="M12.5 1H23v10.5H12.5z" />
    <path fill="#00A4EF" d="M1 12.5h10.5V23H1z" />
    <path fill="#FFB900" d="M12.5 12.5H23V23H12.5z" />
  </svg>
);

const addedIcons: Record<string, React.FC<IconProps>> = {
  airpods: AirPodsIcon,
  'google-one': GoogleOneIcon,
  nordvpn: NordVPNIcon,
  icloud: ICloudIcon,
  duolingo: DuolingoIcon,
  notion: NotionIcon,
  'microsoft-office': MicrosoftOfficeIcon,
  cursor: CursorIcon,
};

/** Badge dispatcher for the additional brand icons; existing keys fall back to ServiceIcons. */
export const ExtendedBrandIconBadge: React.FC<{
  iconKey: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'rounded' | 'square' | 'circle';
  className?: string;
}> = ({ iconKey, size = 'md', variant = 'rounded', className = '' }) => {
  const Icon = addedIcons[iconKey];
  if (!Icon) {
    return <BaseBrandIconBadge iconKey={iconKey} size={size} variant={variant} className={className} />;
  }

  const sizeMap = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };
  const roundedMap = {
    rounded: 'rounded-xl',
    square: 'rounded-md',
    circle: 'rounded-full',
  };

  return (
    <div
      className={`inline-flex items-center justify-center p-1.5 transition-transform duration-200 hover:scale-105 shadow-sm bg-white dark:bg-[#343333] border border-[#2B2A2A]/15 dark:border-[#F5EBDD]/15 ${sizeMap[size]} ${roundedMap[variant]} ${className}`}
    >
      <Icon className="w-full h-full object-contain" />
    </div>
  );
};
