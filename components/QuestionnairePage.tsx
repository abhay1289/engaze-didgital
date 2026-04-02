import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';

const styles: Record<string, React.CSSProperties> = {
  page: {
    background: '#030303',
    color: '#EBEBEB',
    minHeight: '100vh',
    position: 'relative',
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    lineHeight: 1.6,
  },
  noiseOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
    pointerEvents: 'none',
    zIndex: 9999,
  },
  gridOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundImage: 'linear-gradient(rgba(54, 184, 165, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(54, 184, 165, 0.015) 1px, transparent 1px)',
    backgroundSize: '64px 64px',
    maskImage: 'radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)',
    WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  ambientGlow: {
    position: 'fixed',
    top: -200,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 800,
    height: 500,
    background: 'radial-gradient(ellipse, rgba(54, 184, 165, 0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  container: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    padding: '120px 0 48px',
    textAlign: 'center',
  },
  logoMark: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 12,
    background: 'linear-gradient(135deg, #36B8A5, #1A5F6E)',
    marginBottom: 28,
    boxShadow: '0 0 20px rgba(54, 184, 165, 0.2)',
    position: 'relative',
  },
  headerLabel: {
    fontSize: '0.7rem',
    fontWeight: 600,
    letterSpacing: '0.25em',
    textTransform: 'uppercase' as const,
    color: '#36B8A5',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: '2rem',
    fontWeight: 800,
    letterSpacing: '-0.04em',
    lineHeight: 1.15,
    color: '#EBEBEB',
    marginBottom: 12,
  },
  headerTitleSpan: {
    background: 'linear-gradient(135deg, #36B8A5, #2B7D8E)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  headerDescription: {
    fontSize: '0.95rem',
    color: '#94A3B8',
    maxWidth: 520,
    margin: '0 auto',
    lineHeight: 1.7,
  },
  progressContainer: {
    position: 'sticky' as const,
    top: 0,
    zIndex: 45,
    background: 'rgba(3, 3, 3, 0.92)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    padding: '16px 0',
    marginBottom: 40,
  },
  progressInner: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '0 24px',
  },
  progressMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressLabel: {
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#94A3B8',
    letterSpacing: '0.05em',
  },
  progressPercent: {
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#36B8A5',
    fontVariantNumeric: 'tabular-nums',
  },
  progressTrack: {
    width: '100%',
    height: 3,
    background: 'rgba(255,255,255,0.06)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #1A5F6E, #36B8A5)',
    borderRadius: 4,
    transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 0 12px rgba(54, 184, 165, 0.3)',
  },
  section: {
    marginBottom: 48,
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  sectionNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 8,
    background: 'rgba(54, 184, 165, 0.08)',
    border: '1px solid rgba(54, 184, 165, 0.18)',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#36B8A5',
    flexShrink: 0,
  },
  sectionTitle: {
    fontSize: '1.05rem',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: '#EBEBEB',
  },
  sectionSubtitle: {
    fontSize: '0.78rem',
    color: '#94A3B8',
    marginTop: 2,
  },
  fieldLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: '0.82rem',
    fontWeight: 600,
    color: '#94A3B8',
    marginBottom: 8,
    letterSpacing: '0.01em',
  },
  required: {
    color: '#36B8A5',
    fontSize: '0.7rem',
  },
  fieldHint: {
    fontSize: '0.72rem',
    color: '#94A3B8',
    marginBottom: 8,
    lineHeight: 1.5,
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '0.88rem',
    fontWeight: 400,
    color: '#EBEBEB',
    background: '#0A0A0A',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 12,
    outline: 'none',
    transition: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    WebkitAppearance: 'none' as const,
    boxSizing: 'border-box' as const,
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '0.88rem',
    fontWeight: 400,
    color: '#EBEBEB',
    background: '#0A0A0A',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 12,
    outline: 'none',
    transition: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    resize: 'vertical' as const,
    minHeight: 88,
    lineHeight: 1.6,
    boxSizing: 'border-box' as const,
  },
  select: {
    width: '100%',
    padding: '12px 16px',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '0.88rem',
    fontWeight: 400,
    color: '#EBEBEB',
    background: '#0A0A0A',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 12,
    outline: 'none',
    transition: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    paddingRight: 40,
    WebkitAppearance: 'none' as const,
    boxSizing: 'border-box' as const,
  },
  fieldGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
  },
  field: {
    marginBottom: 20,
  },
  callout: {
    display: 'flex',
    gap: 12,
    padding: '14px 16px',
    background: 'rgba(54, 184, 165, 0.08)',
    border: '1px solid rgba(54, 184, 165, 0.18)',
    borderRadius: 12,
    marginBottom: 20,
  },
  calloutText: {
    fontSize: '0.78rem',
    color: '#2B7D8E',
    lineHeight: 1.6,
  },
  optionGroup: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: 8,
  },
  optionLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 16px',
    background: '#0A0A0A',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 12,
    cursor: 'pointer',
    fontSize: '0.82rem',
    fontWeight: 500,
    color: '#94A3B8',
    transition: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    userSelect: 'none' as const,
  },
  optionLabelChecked: {
    color: '#36B8A5',
    borderColor: 'rgba(54, 184, 165, 0.18)',
    background: 'rgba(54, 184, 165, 0.08)',
  },
  divider: {
    height: 1,
    background: 'rgba(255,255,255,0.06)',
    margin: '40px 0',
  },
  submitArea: {
    padding: '48px 0 80px',
    textAlign: 'center' as const,
  },
  disclaimer: {
    fontSize: '0.75rem',
    color: '#94A3B8',
    maxWidth: 440,
    margin: '0 auto 24px',
    lineHeight: 1.6,
  },
  btnSubmit: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '14px 40px',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '0.88rem',
    fontWeight: 700,
    color: '#030303',
    background: 'linear-gradient(135deg, #36B8A5, #2ED8C0)',
    border: 'none',
    borderRadius: 12,
    cursor: 'pointer',
    transition: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 16px rgba(54, 184, 165, 0.2)',
    letterSpacing: '0.01em',
  },
  btnSubmitSuccess: {
    background: 'linear-gradient(135deg, #059669, #10B981)',
    pointerEvents: 'none' as const,
  },
  footerWrap: {
    textAlign: 'center' as const,
    padding: '32px 0',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  },
  footerText: {
    fontSize: '0.72rem',
    color: '#94A3B8',
    letterSpacing: '0.02em',
  },
  footerLink: {
    color: '#36B8A5',
    textDecoration: 'none',
  },
};

const CalloutIcon = () => (
  <svg style={{ flexShrink: 0, width: 18, height: 18, color: '#36B8A5', marginTop: 1 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface QuestionnairePageProps {
  onNavigate?: (route: string) => void;
}

const QuestionnairePage: React.FC<QuestionnairePageProps> = ({ onNavigate }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [progress, setProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checkedBoxes, setCheckedBoxes] = useState<Record<string, boolean>>({});
  const [radioValues, setRadioValues] = useState<Record<string, string>>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 560);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const updateProgress = () => {
    if (!formRef.current) return;
    const inputs = formRef.current.querySelectorAll('input[type="text"], input[type="email"], input[type="url"], input[type="tel"], input[type="password"], textarea, select');
    const radioGroups: Record<string, boolean> = {};
    const checkboxGroups: Record<string, boolean> = {};

    let filled = 0;
    let total = 0;

    inputs.forEach((input: any) => {
      total++;
      if (input.value && input.value.trim() !== '' && !input.value.startsWith('Select')) {
        filled++;
      }
    });

    formRef.current.querySelectorAll('input[type="radio"]').forEach((radio: any) => {
      radioGroups[radio.name] = radioGroups[radio.name] || false;
      if (radio.checked) radioGroups[radio.name] = true;
    });

    Object.keys(radioGroups).forEach(group => {
      total++;
      if (radioGroups[group]) filled++;
    });

    formRef.current.querySelectorAll('input[type="checkbox"]').forEach((cb: any) => {
      checkboxGroups[cb.name] = checkboxGroups[cb.name] || false;
      if (cb.checked) checkboxGroups[cb.name] = true;
    });

    Object.keys(checkboxGroups).forEach(group => {
      total++;
      if (checkboxGroups[group]) filled++;
    });

    const percent = total > 0 ? Math.round((filled / total) * 100) : 0;
    setProgress(percent);
  };

  useEffect(() => {
    updateProgress();
  }, [checkedBoxes, radioValues]);

  const handleInputChange = () => {
    updateProgress();
  };

  const handleCheckboxChange = (name: string, value: string) => {
    const key = `${name}_${value}`;
    setCheckedBoxes(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setRadioValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const fields: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (fields[key]) {
        fields[key] += ', ' + String(value);
      } else {
        fields[key] = String(value);
      }
    });

    Object.entries(radioValues).forEach(([k, v]) => { fields[k] = v; });
    Object.entries(checkedBoxes).forEach(([k, v]) => {
      if (v) {
        const [name, value] = k.split('_').length > 1 ? [k.substring(0, k.lastIndexOf('_')), k.substring(k.lastIndexOf('_') + 1)] : [k, 'yes'];
        fields[name] = fields[name] ? fields[name] + ', ' + value : value;
      }
    });

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'questionnaire', fields }),
      });

      if (!res.ok) throw new Error('Failed to send');
      setIsSubmitted(true);
      window.history.replaceState({ source: 'questionnaire' }, '');
      setTimeout(() => onNavigate?.('thank-you'), 600);
    } catch {
      setError('Failed to submit questionnaire. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputFocusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(54, 184, 165, 0.5)';
    e.target.style.background = '#0A0A0A';
    e.target.style.boxShadow = '0 0 0 3px rgba(54, 184, 165, 0.1)';
  };

  const inputBlurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.06)';
    e.target.style.background = '#0A0A0A';
    e.target.style.boxShadow = 'none';
  };

  const inputHoverIn = (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const el = e.currentTarget;
    if (document.activeElement !== el) {
      el.style.borderColor = 'rgba(255,255,255,0.1)';
      el.style.background = '#161616';
    }
  };

  const inputHoverOut = (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const el = e.currentTarget;
    if (document.activeElement !== el) {
      el.style.borderColor = 'rgba(255,255,255,0.06)';
      el.style.background = '#0A0A0A';
    }
  };

  const gridStyle = isMobile ? { ...styles.fieldGrid, gridTemplateColumns: '1fr' } : styles.fieldGrid;

  return (
    <div style={styles.page}>
      <div style={styles.noiseOverlay} />
      <div style={styles.gridOverlay} />
      <div style={styles.ambientGlow} />

      {/* Header */}
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.logoMark}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: 24, height: 24, fill: 'white' }}>
              <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
            </svg>
          </div>
          <div style={styles.headerLabel}>Engaze Digital</div>
          <h1 style={styles.headerTitle}>Client Onboarding <span style={styles.headerTitleSpan}>Questionnaire</span></h1>
          <p style={styles.headerDescription}>We need a few details to set up your accounts, access your platforms, and start delivering results. This should take about 10 minutes.</p>
        </header>
      </div>

      {/* Sticky Progress Bar */}
      <div style={styles.progressContainer}>
        <div style={styles.progressInner}>
          <div style={styles.progressMeta}>
            <span style={styles.progressLabel}>Completion</span>
            <span style={styles.progressPercent}>{progress}%</span>
          </div>
          <div style={styles.progressTrack}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <form ref={formRef} style={styles.container} autoComplete="off" onSubmit={handleSubmit} onChange={handleInputChange}>

        {/* Section 1: Business Information */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>01</div>
            <div>
              <div style={styles.sectionTitle}>Business Information</div>
              <div style={styles.sectionSubtitle}>Tell us about your company</div>
            </div>
          </div>

          <div style={gridStyle}>
            <div style={styles.field}>
              <label style={styles.fieldLabel}>Business Name <span style={styles.required}>*</span></label>
              <input type="text" name="business_name" placeholder="e.g. Acme Corporation" required style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
            </div>
            <div style={styles.field}>
              <label style={styles.fieldLabel}>Industry / Niche</label>
              <input type="text" name="industry" placeholder="e.g. SaaS, E-commerce, Healthcare" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
            </div>
          </div>

          <div style={gridStyle}>
            <div style={styles.field}>
              <label style={styles.fieldLabel}>Primary Contact Name <span style={styles.required}>*</span></label>
              <input type="text" name="contact_name" placeholder="Full name" required style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
            </div>
            <div style={styles.field}>
              <label style={styles.fieldLabel}>Role / Designation</label>
              <input type="text" name="contact_role" placeholder="e.g. Marketing Director" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
            </div>
          </div>

          <div style={gridStyle}>
            <div style={styles.field}>
              <label style={styles.fieldLabel}>Email Address <span style={styles.required}>*</span></label>
              <input type="email" name="contact_email" placeholder="name@company.com" required style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
            </div>
            <div style={styles.field}>
              <label style={styles.fieldLabel}>Phone Number</label>
              <input type="tel" name="contact_phone" placeholder="+1 (555) 000-0000" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Business Address</label>
            <textarea name="business_address" rows={2} placeholder="Street address, City, State, ZIP, Country" style={styles.textarea} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any} />
          </div>
        </div>

        {/* Section 2: Website Details */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>02</div>
            <div>
              <div style={styles.sectionTitle}>Website Details</div>
              <div style={styles.sectionSubtitle}>Your web presence and access credentials</div>
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Website URL <span style={styles.required}>*</span></label>
            <input type="url" name="website_url" placeholder="https://www.yourwebsite.com" required style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
          </div>

          <div style={gridStyle}>
            <div style={styles.field}>
              <label style={styles.fieldLabel}>Website Platform / CMS</label>
              <select name="website_platform" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                <option value="" disabled>Select platform</option>
                <option>WordPress</option>
                <option>Shopify</option>
                <option>Wix</option>
                <option>Squarespace</option>
                <option>Webflow</option>
                <option>Custom Built</option>
                <option>Magento</option>
                <option>BigCommerce</option>
                <option>Other</option>
              </select>
            </div>
            <div style={styles.field}>
              <label style={styles.fieldLabel}>Hosting Provider</label>
              <input type="text" name="hosting_provider" placeholder="e.g. GoDaddy, Bluehost, AWS" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
            </div>
          </div>

          <div style={styles.callout}>
            <CalloutIcon />
            <p style={styles.calloutText}>We need admin-level access to your website to implement tracking codes, landing pages, and conversion optimization. All credentials are stored securely and used solely for project work.</p>
          </div>

          <div style={gridStyle}>
            <div style={styles.field}>
              <label style={styles.fieldLabel}>Website Admin URL</label>
              <div style={styles.fieldHint}>e.g. yoursite.com/wp-admin</div>
              <input type="url" name="website_admin_url" placeholder="https://www.yoursite.com/wp-admin" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
            </div>
            <div style={styles.field}>
              <label style={styles.fieldLabel}>Admin Username</label>
              <input type="text" name="website_username" placeholder="Admin username" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
            </div>
          </div>

          <div style={gridStyle}>
            <div style={styles.field}>
              <label style={styles.fieldLabel}>Admin Password</label>
              <input type="password" name="website_password" placeholder="Admin password" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
            </div>
            <div style={styles.field}>
              <label style={styles.fieldLabel}>Domain Registrar</label>
              <input type="text" name="domain_registrar" placeholder="e.g. GoDaddy, Namecheap, Google" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Domain Registrar Login</label>
            <div style={styles.fieldHint}>If DNS changes are needed (email setup, verification, etc.)</div>
            <div style={gridStyle}>
              <input type="text" name="domain_username" placeholder="Username or email" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
              <input type="password" name="domain_password" placeholder="Password" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Additional Website Notes</label>
            <textarea name="website_notes" rows={3} placeholder="Any staging URLs, CDN info, caching plugins, page builders (Elementor, Divi), or known issues we should be aware of" style={styles.textarea} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any} />
          </div>
        </div>

        {/* Section 3: Google Ecosystem */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>03</div>
            <div>
              <div style={styles.sectionTitle}>Google Ecosystem Access</div>
              <div style={styles.sectionSubtitle}>Google Ads, Analytics, Search Console, Tag Manager</div>
            </div>
          </div>

          <div style={styles.callout}>
            <CalloutIcon />
            <p style={styles.calloutText}>Grant admin access to <strong style={{ color: '#36B8A5' }}>engazedigital@gmail.com</strong> across the following Google platforms. If you need help with this, we will walk you through it.</p>
          </div>

          {/* Google Ads */}
          <div style={styles.field}>
            <label style={styles.fieldLabel}>Google Ads Account</label>
            <div style={gridStyle}>
              <div>
                <div style={styles.fieldHint}>Account ID (format: 123-456-7890)</div>
                <input type="text" name="google_ads_id" placeholder="000-000-0000" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
              </div>
              <div>
                <div style={styles.fieldHint}>Access granted?</div>
                <select name="google_ads_access" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                  <option value="" disabled>Select status</option>
                  <option>Yes — Admin access granted</option>
                  <option>Yes — Standard access granted</option>
                  <option>Not yet — Need instructions</option>
                  <option>No account — Please create one</option>
                </select>
              </div>
            </div>
          </div>

          {/* Google Analytics */}
          <div style={styles.field}>
            <label style={styles.fieldLabel}>Google Analytics</label>
            <div style={gridStyle}>
              <div>
                <div style={styles.fieldHint}>Property ID (GA4 format: 123456789)</div>
                <input type="text" name="ga_property_id" placeholder="GA4 Property ID" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
              </div>
              <div>
                <div style={styles.fieldHint}>Access granted?</div>
                <select name="ga_access" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                  <option value="" disabled>Select status</option>
                  <option>Yes — Editor access granted</option>
                  <option>Not yet — Need instructions</option>
                  <option>No account — Please set up</option>
                </select>
              </div>
            </div>
          </div>

          {/* Google Search Console */}
          <div style={styles.field}>
            <label style={styles.fieldLabel}>Google Search Console</label>
            <div style={gridStyle}>
              <div>
                <div style={styles.fieldHint}>Property URL</div>
                <input type="url" name="gsc_property" placeholder="https://www.yoursite.com" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
              </div>
              <div>
                <div style={styles.fieldHint}>Access granted?</div>
                <select name="gsc_access" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                  <option value="" disabled>Select status</option>
                  <option>Yes — Owner access granted</option>
                  <option>Yes — Full user access granted</option>
                  <option>Not yet — Need instructions</option>
                  <option>No account — Please set up</option>
                </select>
              </div>
            </div>
          </div>

          {/* Google Tag Manager */}
          <div style={styles.field}>
            <label style={styles.fieldLabel}>Google Tag Manager</label>
            <div style={gridStyle}>
              <div>
                <div style={styles.fieldHint}>Container ID (format: GTM-XXXXXX)</div>
                <input type="text" name="gtm_id" placeholder="GTM-XXXXXX" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
              </div>
              <div>
                <div style={styles.fieldHint}>Access granted?</div>
                <select name="gtm_access" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                  <option value="" disabled>Select status</option>
                  <option>Yes — Admin access granted</option>
                  <option>Not yet — Need instructions</option>
                  <option>No account — Please set up</option>
                </select>
              </div>
            </div>
          </div>

          {/* Google Business Profile */}
          <div style={styles.field}>
            <label style={styles.fieldLabel}>Google Business Profile</label>
            <div style={gridStyle}>
              <div>
                <div style={styles.fieldHint}>Business listing name</div>
                <input type="text" name="gbp_name" placeholder="Business name as it appears on Google" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
              </div>
              <div>
                <div style={styles.fieldHint}>Access granted?</div>
                <select name="gbp_access" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                  <option value="" disabled>Select status</option>
                  <option>Yes — Manager access granted</option>
                  <option>Not yet — Need instructions</option>
                  <option>No listing exists</option>
                </select>
              </div>
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Monthly Google Ads Budget</label>
            <div style={styles.fieldHint}>Approximate monthly spend you plan to allocate to Google Ads</div>
            <select name="google_ads_budget" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
              <option value="" disabled>Select budget range</option>
              <option>Under $1,000 / month</option>
              <option>$1,000 — $3,000 / month</option>
              <option>$3,000 — $5,000 / month</option>
              <option>$5,000 — $10,000 / month</option>
              <option>$10,000 — $25,000 / month</option>
              <option>$25,000+ / month</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>

        {/* Section 4: Meta */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>04</div>
            <div>
              <div style={styles.sectionTitle}>Meta — Facebook & Instagram</div>
              <div style={styles.sectionSubtitle}>Business Manager, Ad Accounts, Pages, and Instagram</div>
            </div>
          </div>

          <div style={styles.callout}>
            <CalloutIcon />
            <p style={styles.calloutText}>Add us as a <strong style={{ color: '#36B8A5' }}>Partner</strong> in your Meta Business Manager using Business ID or grant admin access to the assets listed below. We will guide you through this process if needed.</p>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Meta Business Manager</label>
            <div style={gridStyle}>
              <div>
                <div style={styles.fieldHint}>Business Manager ID</div>
                <input type="text" name="meta_bm_id" placeholder="e.g. 1234567890" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
              </div>
              <div>
                <div style={styles.fieldHint}>Business Manager URL</div>
                <input type="url" name="meta_bm_url" placeholder="https://business.facebook.com/..." style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
              </div>
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Facebook Ad Account</label>
            <div style={gridStyle}>
              <div>
                <div style={styles.fieldHint}>Ad Account ID (format: act_1234567890)</div>
                <input type="text" name="fb_ad_account_id" placeholder="act_0000000000" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
              </div>
              <div>
                <div style={styles.fieldHint}>Access granted?</div>
                <select name="fb_ad_access" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                  <option value="" disabled>Select status</option>
                  <option>Yes — Admin access granted</option>
                  <option>Yes — Advertiser access granted</option>
                  <option>Not yet — Need instructions</option>
                  <option>No account — Please create one</option>
                </select>
              </div>
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Facebook Page</label>
            <div style={gridStyle}>
              <div>
                <div style={styles.fieldHint}>Page name or URL</div>
                <input type="text" name="fb_page" placeholder="https://facebook.com/yourpage" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
              </div>
              <div>
                <div style={styles.fieldHint}>Page admin access granted?</div>
                <select name="fb_page_access" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                  <option value="" disabled>Select status</option>
                  <option>Yes — Admin access granted</option>
                  <option>Not yet — Need instructions</option>
                  <option>No page exists</option>
                </select>
              </div>
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Meta Pixel</label>
            <div style={gridStyle}>
              <div>
                <div style={styles.fieldHint}>Pixel ID</div>
                <input type="text" name="meta_pixel_id" placeholder="e.g. 1234567890" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
              </div>
              <div>
                <div style={styles.fieldHint}>Is the pixel currently installed?</div>
                <select name="meta_pixel_status" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                  <option value="" disabled>Select status</option>
                  <option>Yes — Active and tracking</option>
                  <option>Yes — Installed but not verified</option>
                  <option>No — Needs installation</option>
                  <option>Not sure</option>
                </select>
              </div>
            </div>
          </div>

          <div style={styles.divider} />

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Instagram Business Account</label>
            <div style={gridStyle}>
              <div>
                <div style={styles.fieldHint}>Instagram handle</div>
                <input type="text" name="instagram_handle" placeholder="@yourhandle" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
              </div>
              <div>
                <div style={styles.fieldHint}>Account type</div>
                <select name="instagram_type" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                  <option value="" disabled>Select type</option>
                  <option>Business Account</option>
                  <option>Creator Account</option>
                  <option>Personal Account</option>
                  <option>No account yet</option>
                </select>
              </div>
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Is this Instagram account linked to the Facebook Page above?</label>
            <div style={styles.optionGroup}>
              {[{ v: 'yes', l: 'Yes, linked' }, { v: 'no', l: 'No, not linked' }, { v: 'unsure', l: 'Not sure' }].map(opt => (
                <label key={opt.v} style={{ ...styles.optionLabel, ...(radioValues['ig_linked'] === opt.v ? styles.optionLabelChecked : {}) }}>
                  <input type="radio" name="ig_linked" value={opt.v} checked={radioValues['ig_linked'] === opt.v} onChange={() => handleRadioChange('ig_linked', opt.v)} style={{ width: 16, height: 16, accentColor: '#36B8A5', cursor: 'pointer' }} />
                  <span>{opt.l}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Instagram Ad Account Access</label>
            <div style={styles.fieldHint}>This is usually managed through Meta Business Manager. Confirm if we have ad permissions for running Instagram campaigns.</div>
            <select name="ig_ad_access" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
              <option value="" disabled>Select status</option>
              <option>Yes — Access granted through Business Manager</option>
              <option>Not yet — Need instructions</option>
              <option>Managed separately — Details below</option>
            </select>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Monthly Meta Ads Budget</label>
            <select name="meta_ads_budget" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
              <option value="" disabled>Select budget range</option>
              <option>Under $1,000 / month</option>
              <option>$1,000 — $3,000 / month</option>
              <option>$3,000 — $5,000 / month</option>
              <option>$5,000 — $10,000 / month</option>
              <option>$10,000 — $25,000 / month</option>
              <option>$25,000+ / month</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>

        {/* Section 5: Other Advertising Platforms */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>05</div>
            <div>
              <div style={styles.sectionTitle}>Other Advertising Platforms</div>
              <div style={styles.sectionSubtitle}>LinkedIn, TikTok, X (Twitter), Pinterest, Snapchat</div>
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Which other ad platforms are you using or plan to use?</label>
            <div style={styles.optionGroup}>
              {[
                { v: 'linkedin', l: 'LinkedIn Ads' },
                { v: 'tiktok', l: 'TikTok Ads' },
                { v: 'twitter', l: 'X (Twitter) Ads' },
                { v: 'pinterest', l: 'Pinterest Ads' },
                { v: 'snapchat', l: 'Snapchat Ads' },
                { v: 'youtube', l: 'YouTube Ads' },
                { v: 'none', l: 'None of the above' },
              ].map(opt => {
                const key = `other_platforms_${opt.v}`;
                return (
                  <label key={opt.v} style={{ ...styles.optionLabel, ...(checkedBoxes[key] ? styles.optionLabelChecked : {}) }}>
                    <input type="checkbox" name="other_platforms" value={opt.v} checked={!!checkedBoxes[key]} onChange={() => handleCheckboxChange('other_platforms', opt.v)} style={{ width: 16, height: 16, accentColor: '#36B8A5', cursor: 'pointer' }} />
                    <span>{opt.l}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Platform Details</label>
            <div style={styles.fieldHint}>For any platform selected above, share your account IDs, ad account details, and whether access has been granted.</div>
            <textarea name="other_platform_details" rows={4} placeholder={"e.g. LinkedIn Campaign Manager ID: 12345678, access granted as admin\nTikTok Business Center ID: 98765432, need instructions"} style={styles.textarea} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any} />
          </div>
        </div>

        {/* Section 6: Branding & Creative Assets */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>06</div>
            <div>
              <div style={styles.sectionTitle}>Branding & Creative Assets</div>
              <div style={styles.sectionSubtitle}>Logos, guidelines, and existing materials</div>
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Brand Guidelines Document</label>
            <div style={styles.fieldHint}>Share a link to your brand kit, style guide, or guidelines PDF (Google Drive, Dropbox, etc.)</div>
            <input type="url" name="brand_guidelines_url" placeholder="https://drive.google.com/..." style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Logo Files</label>
            <div style={styles.fieldHint}>Share a link to your logo files in various formats (SVG, PNG, AI, EPS)</div>
            <input type="url" name="logo_files_url" placeholder="https://drive.google.com/..." style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Brand Colors</label>
            <div style={styles.fieldHint}>Primary and secondary brand colors, if not included in brand guidelines</div>
            <input type="text" name="brand_colors" placeholder="e.g. Primary: #1A5F6E, Secondary: #36B8A5, Accent: #FF6B35" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Brand Fonts</label>
            <input type="text" name="brand_fonts" placeholder="e.g. Headings: Montserrat Bold, Body: Open Sans Regular" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Existing Ad Creatives or Marketing Materials</label>
            <div style={styles.fieldHint}>Link to a shared folder with any past ads, banners, videos, or marketing assets</div>
            <input type="url" name="existing_creatives_url" placeholder="https://drive.google.com/..." style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
          </div>
        </div>

        {/* Section 7: Goals & Expectations */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>07</div>
            <div>
              <div style={styles.sectionTitle}>Goals & Expectations</div>
              <div style={styles.sectionSubtitle}>What does success look like for you?</div>
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Primary Business Objective</label>
            <div style={styles.optionGroup}>
              {[
                { v: 'leads', l: 'Lead Generation' },
                { v: 'sales', l: 'Online Sales / E-commerce' },
                { v: 'awareness', l: 'Brand Awareness' },
                { v: 'traffic', l: 'Website Traffic' },
                { v: 'calls', l: 'Phone Calls' },
                { v: 'footfall', l: 'Store Visits / Footfall' },
                { v: 'app', l: 'App Installs' },
              ].map(opt => {
                const key = `objectives_${opt.v}`;
                return (
                  <label key={opt.v} style={{ ...styles.optionLabel, ...(checkedBoxes[key] ? styles.optionLabelChecked : {}) }}>
                    <input type="checkbox" name="objectives" value={opt.v} checked={!!checkedBoxes[key]} onChange={() => handleCheckboxChange('objectives', opt.v)} style={{ width: 16, height: 16, accentColor: '#36B8A5', cursor: 'pointer' }} />
                    <span>{opt.l}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Target Audience</label>
            <div style={styles.fieldHint}>Describe your ideal customer — demographics, interests, location, pain points</div>
            <textarea name="target_audience" rows={3} placeholder="e.g. Small business owners aged 30–55 in the US, interested in digital transformation, struggling with outdated processes" style={styles.textarea} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any} />
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Geographic Targeting</label>
            <input type="text" name="geo_targeting" placeholder="e.g. United States, UK, Canada — or specific cities/states" style={styles.input} onFocus={inputFocusStyle} onBlur={inputBlurStyle} onMouseEnter={inputHoverIn} onMouseLeave={inputHoverOut} />
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Key Competitors</label>
            <div style={styles.fieldHint}>List 2–5 competitors whose digital presence you'd like to match or surpass</div>
            <textarea name="competitors" rows={3} placeholder={"e.g.\n1. competitor-one.com\n2. competitor-two.com\n3. competitor-three.com"} style={styles.textarea} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any} />
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Any Specific KPIs or Targets?</label>
            <textarea name="kpis" rows={3} placeholder="e.g. 50 qualified leads per month, $5 cost per lead, 3x ROAS, 10,000 monthly website visits" style={styles.textarea} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any} />
          </div>
        </div>

        {/* Section 8: Additional Information */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>08</div>
            <div>
              <div style={styles.sectionTitle}>Additional Information</div>
              <div style={styles.sectionSubtitle}>Anything else we should know</div>
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Email Marketing Platform</label>
            <div style={styles.fieldHint}>If you use an email platform, share the name and whether we need access</div>
            <div style={gridStyle}>
              <select name="email_platform" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                <option value="" disabled>Select platform</option>
                <option>Mailchimp</option>
                <option>Klaviyo</option>
                <option>HubSpot</option>
                <option>ActiveCampaign</option>
                <option>Constant Contact</option>
                <option>Brevo (Sendinblue)</option>
                <option>ConvertKit</option>
                <option>Other</option>
                <option>None</option>
              </select>
              <select name="email_access_needed" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                <option value="" disabled>Access needed?</option>
                <option>Yes — Please grant access</option>
                <option>No — Not needed</option>
                <option>Will discuss later</option>
              </select>
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>CRM System</label>
            <div style={gridStyle}>
              <select name="crm_system" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                <option value="" disabled>Select CRM</option>
                <option>HubSpot</option>
                <option>Salesforce</option>
                <option>Zoho CRM</option>
                <option>Pipedrive</option>
                <option>Monday.com</option>
                <option>Other</option>
                <option>None</option>
              </select>
              <select name="crm_access_needed" defaultValue="" style={styles.select} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any}>
                <option value="" disabled>Access needed?</option>
                <option>Yes — Please grant access</option>
                <option>No — Not needed</option>
                <option>Will discuss later</option>
              </select>
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Preferred Communication Channel</label>
            <div style={styles.optionGroup}>
              {[
                { v: 'email', l: 'Email' },
                { v: 'whatsapp', l: 'WhatsApp' },
                { v: 'slack', l: 'Slack' },
                { v: 'phone', l: 'Phone / Video Call' },
              ].map(opt => (
                <label key={opt.v} style={{ ...styles.optionLabel, ...(radioValues['comm_channel'] === opt.v ? styles.optionLabelChecked : {}) }}>
                  <input type="radio" name="comm_channel" value={opt.v} checked={radioValues['comm_channel'] === opt.v} onChange={() => handleRadioChange('comm_channel', opt.v)} style={{ width: 16, height: 16, accentColor: '#36B8A5', cursor: 'pointer' }} />
                  <span>{opt.l}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>How often would you like progress updates?</label>
            <div style={styles.optionGroup}>
              {[
                { v: 'daily', l: 'Daily' },
                { v: 'weekly', l: 'Weekly' },
                { v: 'biweekly', l: 'Bi-weekly' },
                { v: 'monthly', l: 'Monthly' },
              ].map(opt => (
                <label key={opt.v} style={{ ...styles.optionLabel, ...(radioValues['update_freq'] === opt.v ? styles.optionLabelChecked : {}) }}>
                  <input type="radio" name="update_freq" value={opt.v} checked={radioValues['update_freq'] === opt.v} onChange={() => handleRadioChange('update_freq', opt.v)} style={{ width: 16, height: 16, accentColor: '#36B8A5', cursor: 'pointer' }} />
                  <span>{opt.l}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.fieldLabel}>Anything else we should know?</label>
            <div style={styles.fieldHint}>Past agency experiences, specific concerns, upcoming product launches, seasonal considerations, etc.</div>
            <textarea name="additional_notes" rows={4} placeholder="Share anything that could help us serve you better" style={styles.textarea} onFocus={inputFocusStyle as any} onBlur={inputBlurStyle as any} onMouseEnter={inputHoverIn as any} onMouseLeave={inputHoverOut as any} />
          </div>
        </div>

        {/* Submit */}
        <div style={styles.submitArea}>
          <p style={styles.disclaimer}>All credentials and access information shared here are treated as strictly confidential. We use industry-standard security practices to protect your data.</p>
          <button
            type="submit"
            disabled={isSubmitted || isLoading}
            style={isSubmitted ? { ...styles.btnSubmit, ...styles.btnSubmitSuccess } : { ...styles.btnSubmit, ...(isLoading ? { opacity: 0.7 } : {}) }}
            onMouseEnter={(e) => { if (!isSubmitted && !isLoading) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(54, 184, 165, 0.3)'; } }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(54, 184, 165, 0.2)'; }}
          >
            {isSubmitted ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                Submitted
              </>
            ) : isLoading ? (
              <>Sending...</>
            ) : (
              <>
                Submit Questionnaire
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </>
            )}
          </button>
          {error && <p style={{ color: '#EF4444', fontSize: '0.85rem', marginTop: 16 }}>{error}</p>}
        </div>
      </form>

      {/* Footer */}
      <footer style={styles.footerWrap}>
        <div style={styles.container}>
          <p style={styles.footerText}>&copy; 2026 Engaze Digital. All rights reserved. &nbsp;|&nbsp; <a href="https://engazedigital.com" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>engazedigital.com</a></p>
        </div>
      </footer>
    </div>
  );
};

export default QuestionnairePage;
