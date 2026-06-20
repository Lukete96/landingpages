// VKLD landing — Agendamento responsivo
(() => {
const { Input, Button, SectionHeading } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;

function Agendamento() {
  const isMobile = window.useIsMobile();
  const [form, setForm] = React.useState({ nome: '', tecnica: 'Volume Brasileiro', data: '', msg: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const send = (e) => {
    e.preventDefault();
    const text = `Olá, Vitória! 💕 Meu nome é ${form.nome || '...'}.\nGostaria de agendar: ${form.tecnica}.` +
      (form.data ? `\nPreferência de data: ${form.data}.` : '') +
      (form.msg ? `\nObservação: ${form.msg}` : '');
    window.open(`https://wa.me/${window.VK_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const tecnicas = ['Volume Brasileiro','Volume Egípcio','Volume Fox','Volume Luxo','Volume Borboleta','Design de Sobrancelha','Sobrancelha com Henna'];

  const politica = [
    { icon: '⏱', titulo: 'Tolerância de 15 min', texto: 'Trabalho com hora marcada. Após 15 minutos o horário pode ser redistribuído.' },
    { icon: '💳', titulo: 'Taxa de reserva (30%)', texto: 'Na marcação é cobrada uma taxa antecipada de 30% do valor do procedimento.' },
    { icon: '📅', titulo: 'Remarque com 24h de antecedência', texto: 'Imprevistos acontecem — avise antes das 24h para remarcarmos juntas.' },
    { icon: '⚠️', titulo: 'Não comparecimento', texto: 'Caso não apareça sem avisar, o valor dos 30% é perdido.' },
    { icon: '🔍', titulo: 'Pós-procedimento', texto: 'Algo aconteceu? Me avise nas primeiras 24h para analisarmos juntas.' },
  ];

  return (
    <section id="agendamento" style={{ background: 'var(--ink-900)', paddingBlock: isMobile ? 56 : 96, color: 'var(--cream-100)' }}>
      <div className="vk-wrap">

        {/* Comunicado */}
        <div style={{ background: 'rgba(212,165,116,0.12)', border: '1px solid rgba(212,165,116,0.35)', borderRadius: 'var(--radius-lg)', padding: isMobile ? '20px 20px' : '28px 36px', marginBottom: 60 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.625rem', fontWeight: 700, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--gold-300)', marginBottom: 18 }}>Comunicado Importante</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
            {politica.map(({ icon, titulo, texto }) => (
              <div key={titulo} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: 2 }}>{icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--gold-200)', marginBottom: 4 }}>{titulo}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 300, lineHeight: 1.6, color: 'rgba(246,237,228,0.75)' }}>{texto}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conteúdo + Formulário */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 64, alignItems: 'center' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--gold-300)' }}>Agendamento</span>
            <h2 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: isMobile ? 'clamp(1.8rem,7vw,2.4rem)' : 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.08 }}>
              Vamos agendar o<br />seu <span style={{ fontStyle: 'italic', color: 'var(--rose-400)' }}>horário?</span>
            </h2>
            <p style={{ margin: '20px 0 0', maxWidth: 380, fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(246,237,228,0.74)' }}>
              Preencha os campos e eu te respondo pelo WhatsApp para confirmar dia e horário. Atendimento com hora marcada, em ambiente acolhedor e higienizado.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
              {[
                ['Seg a Sáb · 9h às 19h'],
                ['@vk_lashdesigner', window.VK_INSTA],
                ['Taxa de 30% para reservar o horário'],
              ].map(([t, link]) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(246,237,228,0.86)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold-400)', flexShrink: 0 }} />
                  {link
                    ? <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(246,237,228,0.3)' }}>{t}</a>
                    : t}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={send} style={{ background: 'var(--surface-raised)', borderRadius: 'var(--radius-xl)', padding: isMobile ? '24px 20px 20px' : '34px 34px 30px', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 18 }}>
              <Input label="Seu nome" placeholder="Como te chamar?" value={form.nome} onChange={set('nome')} />
              <Input label="Data preferida" placeholder="Ex: 12/06 à tarde" value={form.data} onChange={set('data')} />
            </div>
            <div style={{ marginTop: 18 }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Procedimento</span>
                <select value={form.tecnica} onChange={set('tecnica')} style={{
                  width: '100%', padding: '13px 16px', fontFamily: 'var(--font-sans)', fontSize: '0.875rem',
                  color: 'var(--text-strong)', background: 'var(--surface-raised)', border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-md)', outline: 'none', appearance: 'none', cursor: 'pointer',
                }}>
                  {tecnicas.map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
            </div>
            <div style={{ marginTop: 18 }}>
              <Input label="Observações" multiline rows={3} placeholder="Alguma preferência ou dúvida?" value={form.msg} onChange={set('msg')} />
            </div>
            <div style={{ marginTop: 24 }}>
              <Button type="submit" variant="primary" size="lg" full>Enviar pelo WhatsApp</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
window.Agendamento = Agendamento;
})();
