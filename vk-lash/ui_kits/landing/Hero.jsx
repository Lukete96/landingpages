// VKLD landing — hero responsivo
(() => {
const { Button, WhatsAppButton, Badge } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;

function Hero() {
  const isMobile = window.useIsMobile();
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', paddingTop: isMobile ? 32 : 40, paddingBottom: isMobile ? 56 : 90 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 60% at 78% 22%, var(--rose-200) 0%, rgba(255,228,224,0) 55%)', pointerEvents: 'none' }} />
      <div className="vk-wrap vk-reveal" style={{ position: 'relative', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.05fr 0.95fr', gap: isMobile ? 40 : 56, alignItems: 'center' }}>
        <div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--accent-deep)' }}>
            <span style={{ width: 26, height: 1, background: 'var(--gold-500)' }} />
            Lash Designer ·{' '}
            <a href={window.VK_INSTA} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>@vk_lashdesigner</a>
          </span>
          <h1 style={{ margin: '20px 0 0', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: isMobile ? 'clamp(2.2rem,9vw,3rem)' : 'clamp(2.6rem, 5.2vw, 4.4rem)', lineHeight: 1.04, letterSpacing: '0.01em', color: 'var(--text-strong)' }}>
            Realce o seu olhar<br />com cílios <span style={{ fontStyle: 'italic', color: 'var(--accent-deep)' }}>sob medida</span>
          </h1>
          <p style={{ margin: '22px 0 0', maxWidth: 460, fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-body)' }}>
            Extensão de cílios, design de sobrancelhas e cuidados faciais com técnica, higiene e um toque de delicadeza. Cada aplicação é pensada para a sua beleza natural.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32 }}>
            <WhatsAppButton phone={window.VK_PHONE} size="lg" />
            <Button as="a" href="#tecnicas" variant="outline" size="lg">Ver técnicas</Button>
          </div>
          <div style={{ display: 'flex', gap: isMobile ? 24 : 34, marginTop: 40, flexWrap: 'wrap' }}>
            {[['+500', 'clientes atendidas'], ['5', 'técnicas de volume'], ['5,0★', 'avaliação média']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {!isMobile && (
          <div style={{ position: 'relative', justifySelf: 'center' }}>
            <div style={{ position: 'absolute', inset: -14, borderRadius: 'var(--radius-xl)', background: 'var(--gold-gradient)', opacity: 0.5, filter: 'blur(2px)' }} />
            <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '4px solid var(--cream-50)' }}>
              <img src="../../assets/portrait-vitoria.jpeg" alt="Vitória Kelly, Lash Designer" style={{ display: 'block', width: 'min(440px, 42vw)', height: 'min(540px, 52vw)', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 22, left: -28, background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src="../../assets/logo-vkld.jpeg" alt="" style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover' }} />
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-strong)' }}>Vitória Kelly</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Cílios & Sobrancelhas</div>
              </div>
            </div>
            <div style={{ position: 'absolute', top: 18, right: -18 }}><Badge tone="gold">Atendimento com hora marcada</Badge></div>
          </div>
        )}
      </div>
    </section>
  );
}
window.Hero = Hero;
})();
