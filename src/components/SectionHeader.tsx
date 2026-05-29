import React from 'react';

interface SectionHeaderProps {
  labelIcon?: React.ReactNode;
  label: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  labelIcon,
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <div className={`section-header ${align === 'center' ? 'text-center' : ''} ${className}`} style={{ marginBottom: 'var(--spacing-12)' }}>
      <div className={`badge badge-primary ${align === 'center' ? 'mx-auto' : ''}`} style={{ marginBottom: 'var(--spacing-4)', display: 'inline-flex' }}>
        {labelIcon}
        <span>{label}</span>
      </div>
      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: 'var(--spacing-4)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary" style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: align === 'center' ? '0 auto' : '0' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
