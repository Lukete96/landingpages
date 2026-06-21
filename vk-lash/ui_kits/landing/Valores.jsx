// VKLD landing — Valores responsivo + PDF com redes sociais
(() => {
const { SectionHeading, PriceRow, WhatsAppButton, Button, Badge } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;

function gerarPDF() {
  const phone = window.VK_PHONE || '5561999808417';
  const phoneDisplay = '(61) 9 9980-8417';
  const insta = '@vk_lashdesigner';
  const site = window.VK_SITE || 'vitoriakellyld.vercel.app';

  const conteudo = `
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Montserrat:wght@300;400;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Montserrat', sans-serif; background: #F6EDE4; padding: 44px; color: #211C19; }
        .header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 1px solid #DBB9A8; }
        .brand-name { font-family: 'Cormorant Garamond', serif; font-size: 1.9rem; font-weight: 600; }
        .brand-sub { font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: #8A7060; margin-top: 3px; }
        .contatos { display: flex; flex-direction: column; gap: 6px; align-items: flex-end; }
        .contato-item { display: flex; align-items: center; gap: 8px; font-size: 0.78rem; color: #6E564A; }
        .contato-label { font-size: 0.6rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #9A7B68; }
        h2 { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 600; margin-bottom: 16px; color: #211C19; }
        .grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 18px; margin-bottom: 18px; }
        .secao { background: #fff; border: 1px solid #EAD9CC; border-radius: 16px; padding: 26px 28px; }
        .linha { display: flex; justify-content: space-between; align-items: baseline; padding: 9px 0; border-bottom: 1px dotted #EAD9CC; }
        .linha:last-child { border-bottom: none; }
        .nome { font-size: 0.825rem; font-weight: 600; }
        .preco { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 600; }
        .manutencao { font-size: 0.68rem; color: #8A7060; margin-top: 1px; }
        .politica { background: #211C19; color: #F6EDE4; border-radius: 16px; padding: 22px 26px; margin-top: 4px; }
        .politica h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; margin-bottom: 12px; color: #D4A574; }
        .politica p { font-size: 0.73rem; line-height: 1.7; color: rgba(246,237,228,0.85); }
        .rodape { margin-top: 28px; display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid #DBB9A8; }
        .rodape-texto { font-size: 0.62rem; color: #9A7B68; letter-spacing: 0.06em; text-transform: uppercase; }
        .badge { display: inline-block; background: #FFE4E0; color: #C96F68; font-size: 0.58rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; border-radius: 99px; padding: 3px 10px; margin-left: 8px; vertical-align: middle; }
        @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <div class="brand-name">Vitória Kelly</div>
          <div class="brand-sub">Lash Designer · Cílios &amp; Sobrancelhas</div>
        </div>
        <div class="contatos">
          <div class="contato-item"><span class="contato-label">WhatsApp</span> ${phoneDisplay}</div>
          <div class="contato-item"><span class="contato-label">Instagram</span> ${insta}</div>
          <div class="contato-item"><span class="contato-label">Site</span> ${site}</div>
        </div>
      </div>

      <div class="grid">
        <div class="secao">
          <h2>Extensão de Cílios <span class="badge">+ manutenção</span></h2>
          <div class="linha"><div><div class="nome">Volume Brasileiro</div><div class="manutencao">manutenção · R$90</div></div><div class="preco">R$110</div></div>
          <div class="linha"><div><div class="nome">Volume Egípcio</div><div class="manutencao">manutenção · R$95</div></div><div class="preco">R$120</div></div>
          <div class="linha"><div><div class="nome">Volume Fox</div><div class="manutencao">manutenção · R$100</div></div><div class="preco">R$125</div></div>
          <div class="linha"><div><div class="nome">Volume Luxo</div><div class="manutencao">manutenção · R$100</div></div><div class="preco">R$130</div></div>
          <div class="linha"><div><div class="nome">Volume Borboleta</div><div class="manutencao">manutenção · R$100</div></div><div class="preco">R$130</div></div>
          <div class="linha"><div><div class="nome">Remoção</div></div><div class="preco">R$25</div></div>
        </div>
        <div>
          <div class="secao" style="margin-bottom:18px">
            <h2>Sobrancelhas</h2>
            <div class="linha"><div><div class="nome">Design Simples</div></div><div class="preco">R$30</div></div>
            <div class="linha"><div><div class="nome">Design com Henna</div><div class="manutencao">dura até 4 semanas</div></div><div class="preco">R$50</div></div>
          </div>
          <div class="politica">
            <h3>Informações Importantes</h3>
            <p>
              ✦ Trabalho com hora marcada — tolerância de 15 min.<br>
              ✦ Taxa de 30% do procedimento para reservar o horário.<br>
              ✦ Imprevistos: avise até 24h antes para remarcarmos.<br>
              ✦ Não comparecimento sem aviso: perde os 30%.<br>
              ✦ Algo aconteceu? Me avise nas primeiras 24h.
            </p>
          </div>
        </div>
      </div>

      <div class="rodape">
        <span class="rodape-texto">© 2026 Vitória Kelly Lash Designer</span>
        <span class="rodape-texto">Manutenção recomendada entre 15 e 20 dias</span>
      </div>
    </body>
    </html>
  `;
  const janela = window.open('', '_blank');
  if (!janela) { alert('Permita popups neste site para gerar o PDF.'); return; }
  janela.document.write(conteudo);
  janela.document.close();
  janela.focus();
  setTimeout(() => { janela.print(); }, 600);
}

function Valores() {
  const isMobile = window.useIsMobile();
  return (
    <section id="valores" style={{ paddingBlock: isMobile ? 56 : 90 }}>
      <div className="vk-wrap">
        <SectionHeading eyebrow="Tabela de preços" title="Valores"
          subtitle="Valores transparentes para você se planejar. Manutenção recomendada entre 15 a 20 dias." />

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 28, marginTop: 56, alignItems: 'start' }}>
          {/* Lashes */}
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: '34px 36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22, flexWrap: 'wrap', gap: 8 }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--text-strong)' }}>Extensão de Cílios</h3>
              <Badge tone="rose">+ manutenção</Badge>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <PriceRow name="Volume Brasileiro" price="R$110" sub="manutenção" subPrice="R$90" />
              <PriceRow name="Volume Egípcio"    price="R$120" sub="manutenção" subPrice="R$95" />
              <PriceRow name="Volume Fox"        price="R$125" sub="manutenção" subPrice="R$100" />
              <PriceRow name="Volume Luxo"       price="R$130" sub="manutenção" subPrice="R$100" />
              <PriceRow name="Volume Borboleta"  price="R$130" sub="manutenção" subPrice="R$100" />
              <div style={{ height: 1, background: 'var(--divider)', margin: '2px 0' }} />
              <PriceRow name="Remoção" price="R$25" />
            </div>
          </div>

          {/* Sobrancelhas + CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
              <div style={{ background: 'var(--gold-gradient)', height: 4, opacity: 0.7 }} />
              <div style={{ padding: '30px 36px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22, flexWrap: 'wrap', gap: 8 }}>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--text-strong)' }}>Sobrancelhas</h3>
                  <Badge tone="gold">Design personalizado</Badge>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <PriceRow name="Design Simples" price="R$30" />
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingLeft: 4 }}>
                      {['Mapeamento','Limpeza','Definição'].map(t => (
                        <span key={t} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--text-muted)', background: 'var(--cream-200)', borderRadius: 99, padding: '3px 10px' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <PriceRow name="Design com Henna" price="R$50" />
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingLeft: 4 }}>
                      {['Pigmentação natural','Até 4 semanas','Inclui design'].map(t => (
                        <span key={t} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--text-muted)', background: 'var(--cream-200)', borderRadius: 99, padding: '3px 10px' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--ink-900)', borderRadius: 'var(--radius-lg)', padding: '30px 34px', color: 'var(--cream-100)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--gold-gradient)', opacity: 0.16 }} />
              <div style={{ position: 'relative' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.625rem', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--gold-300)' }}>Catálogo completo</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, margin: '8px 0 6px', lineHeight: 1.2 }}>Leve a tabela com você</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 300, color: 'rgba(246,237,228,0.7)', marginBottom: 18 }}>Gera um PDF com valores, redes sociais e regras de agendamento.</div>
                <Button as="button" onClick={gerarPDF} variant="gold" iconRight={<PDFIcon />}>Gerar catálogo em PDF</Button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 44 }}>
          <WhatsAppButton phone={window.VK_PHONE} size="lg">Tirar dúvidas no WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function PDFIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
    </svg>
  );
}
window.Valores = Valores;
})();
