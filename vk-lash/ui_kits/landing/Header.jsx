// VKLD landing — sticky header com hook global useIsMobile
(() => {
const { Button, WhatsAppButton } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;

const VK_PHONE = '5561999808417';
const VK_INSTA = 'https://instagram.com/vk_lashdesigner';
const VK_SITE  = 'https://vitoriakellyld.vercel.app'; // atualizar após deploy
window.VK_PHONE = VK_PHONE;
window.VK_INSTA = VK_INSTA;
window.VK_SITE  = VK_SITE;

// Hook global reutilizado por todos os componentes
window.useIsMobile = () => {
  const [m, setM] = React.useState(window.innerWidth < 860);
  React.useEffect(() => {
    const h = () => setM(window.innerWidth < 860);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return m;
};

function Header() {
  const isMobile = window.useIsMobile();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Procedimentos', '#procedimentos'],
    ['Técnicas', '#tecnicas'],
    ['Valores', '#valores'],
    ['Contato', '#agendamento'],
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(251,246,240,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-soft)' : '1px solid transparent',
      transition: 'all var(--dur-base) var(--ease-soft)',
    }}>
      <div className="vk-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: isMobile ? 64 : 76 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <img src="../../assets/logo-vkld.jpeg" alt="VKLD" style={{ width: isMobile ? 38 : 46, height: isMobile ? 38 : 46, borderRadius: '50%', objectFit: 'cover', boxShadow: 'var(--shadow-xs)' }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: 600, color: 'var(--text-strong)', letterSpacing: '0.01em' }}>Vitória Kelly</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.5rem', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Lash Designer</span>
          </span>
        </a>

        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
            {links.map(([label, href]) => (
              <a key={href} href={href} style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500,
                letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-body)',
                textDecoration: 'none', transition: 'color var(--dur-fast) var(--ease-soft)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-deep)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-body)'}>{label}</a>
            ))}
          </nav>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {!isMobile && <WhatsAppButton phone={VK_PHONE} size="sm">Agendar</WhatsAppButton>}
          {isMobile && (
            <button onClick={() => setMenuOpen(o => !o)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}>
              {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: 22, height: 2, background: 'var(--text-strong)', borderRadius: 2 }} />)}
            </button>
          )}
        </div>
      </div>

      {/* menu mobile */}
      {isMobile && menuOpen && (
        <div style={{ background: 'rgba(251,246,240,0.97)', backdropFilter: 'blur(12px)', borderTop: '1px solid var(--border-soft)', padding: '20px var(--gutter) 28px' }}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500, letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-body)', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid var(--border-soft)' }}>{label}</a>
          ))}
          <div style={{ marginTop: 20 }}><WhatsAppButton phone={VK_PHONE} size="md" full>Agendar pelo WhatsApp</WhatsAppButton></div>
        </div>
      )}
    </header>
  );
}
window.Header = Header;
})();
