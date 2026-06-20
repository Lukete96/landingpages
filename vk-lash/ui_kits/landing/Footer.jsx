// VKLD landing — footer responsivo
(() => {
const { WhatsAppButton } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;

function Footer() {
  const isMobile = window.useIsMobile();
  return (
    <footer style={{ background: 'var(--cream-200)', borderTop: '1px solid var(--border-soft)', paddingBlock: isMobile ? 40 : 56 }}>
      <div className="vk-wrap" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr 1fr', gap: isMobile ? 32 : 40, alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="../../assets/logo-vkld.jpeg" alt="VKLD" style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover' }} />
            <div style={{ lineHeight: 1.15 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-strong)' }}>Vitória Kelly</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.5625rem', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Lash Designer</div>
            </div>
          </div>
          <p style={{ margin: '18px 0 0', maxWidth: 280, fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.8125rem', lineHeight: 1.7, color: 'var(--text-body)' }}>
            Extensão de cílios, design de sobrancelhas de alto padrão em Brasília.
          </p>
        </div>

        <div>
          <h4 style={{ margin: '0 0 14px', fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Navegação</h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['Procedimentos', '#procedimentos'], ['Técnicas', '#tecnicas'], ['Valores', '#valores'], ['Agendar', '#agendamento']].map(([t, h]) => (
              <li key={h}><a href={h} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'var(--text-body)', textDecoration: 'none' }}>{t}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ margin: '0 0 14px', fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Contato</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'var(--text-body)' }}>
            <a href={window.VK_INSTA} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-body)', textDecoration: 'none' }}>@vk_lashdesigner</a>
            <span>Seg a Sáb · 9h às 19h</span>
            <a href={window.VK_SITE} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'none' }}>{(window.VK_SITE || '').replace('https://', '')}</a>
          </div>
          <div style={{ marginTop: 16 }}><WhatsAppButton phone={window.VK_PHONE} size="sm">WhatsApp</WhatsAppButton></div>
        </div>
      </div>

      <div className="vk-wrap" style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--border-soft)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>© 2026 Vitória Kelly Lash Designer · Todos os direitos reservados</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Feito com carinho 💕</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
})();
