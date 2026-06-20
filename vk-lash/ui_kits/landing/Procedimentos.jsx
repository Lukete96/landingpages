// VKLD landing — Procedimentos responsivo
(() => {
const { SectionHeading, Badge, Button, WhatsAppButton } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;

function Procedimentos() {
  const isMobile = window.useIsMobile();
  return (
    <section id="procedimentos" style={{ paddingBlock: isMobile ? 56 : 90 }}>
      <div className="vk-wrap">
        <SectionHeading eyebrow="O que ofereço" title="Procedimentos"
          subtitle="Cílios e sobrancelhas — pensados para realçar a sua beleza natural com técnica e delicadeza." />

        {/* Extensão de Cílios */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 28 : 48, alignItems: 'center', marginTop: 64 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            {['../../assets/brasileiro.jpeg','../../assets/egipcio.jpeg','../../assets/volume-fox.jpeg','../../assets/volume-borboleta.jpeg'].map((src, i) => (
              <img key={i} src={src} alt="" style={{ width: '100%', height: isMobile ? 140 : 200, objectFit: 'cover', display: 'block' }} />
            ))}
          </div>
          <div>
            <Badge tone="rose">Mais procurado</Badge>
            <h3 style={{ margin: '14px 0 0', fontFamily: 'var(--font-display)', fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: 600, color: 'var(--text-strong)' }}>Extensão de Cílios</h3>
            <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--text-body)' }}>
              Aplicação fio a fio com volume e curvatura sob medida — do natural ao dramático. Cinco técnicas disponíveis para realçar o olhar que você sempre quis.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              {['Brasileiro','Egípcio','Fox','Luxo','Borboleta'].map(t => (
                <span key={t} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-deep)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase' }}>• {t}</span>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-strong)' }}>a partir de R$110</span>
            </div>
            <div style={{ marginTop: 20 }}>
              <Button as="a" href="#tecnicas" variant="outline">Ver técnicas</Button>
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: 'var(--divider)', margin: '56px 0' }} />

        {/* Design de Sobrancelha */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 28 : 48, alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: '0', fontFamily: 'var(--font-display)', fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: 600, color: 'var(--text-strong)' }}>Design de Sobrancelha</h3>
            <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--text-body)' }}>
              Mapeamento, limpeza e henna para emoldurar o rosto com simetria. Cada design é personalizado para o formato do seu rosto e o que você deseja expressar.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
              {[['Simples', 'R$30'], ['Com Henna', 'R$50']].map(([label, price]) => (
                <div key={label} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)', padding: '14px 22px', boxShadow: 'var(--shadow-xs)' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-strong)', marginTop: 4 }}>{price}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <WhatsAppButton phone={window.VK_PHONE} size="sm">Agendar sobrancelha</WhatsAppButton>
            </div>
          </div>
          <div style={{ position: 'relative', background: 'var(--ink-900)', borderRadius: 'var(--radius-xl)', padding: isMobile ? '36px 28px' : '48px 40px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'var(--gold-gradient)', opacity: 0.13 }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.625rem', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--gold-300)', marginBottom: 18 }}>Sabia que?</div>
              {[
                'Sobrancelhas bem desenhadas equilibram as proporções do rosto',
                'A henna dura até 4 semanas nos fios e 7 dias na pele',
                'O mapeamento é personalizado para o formato do seu rosto',
              ].map((tip, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 18 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold-400)', flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.875rem', lineHeight: 1.6, color: 'rgba(246,237,228,0.85)' }}>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Procedimentos = Procedimentos;
})();
