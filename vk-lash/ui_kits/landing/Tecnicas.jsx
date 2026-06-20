// VKLD landing — Técnicas responsivo
(() => {
const { SectionHeading, TechniqueCard } = window.VKLDVitRiaKellyLashDesignSystem_b37c80;

function Tecnicas() {
  const isMobile = window.useIsMobile();
  const techniques = [
    { name: 'Volume Brasileiro', img: '../../assets/brasileiro.jpeg', description: 'Fios tecnológicos em formato de "Y", aplicados um a um, para um efeito de volume denso e natural — ideal para quem quer resultado marcante no dia a dia.' },
    { name: 'Volume Egípcio',    img: '../../assets/egipcio.jpeg',    description: 'Fios em formato de "W" (geralmente 3D, 4D e 5D), criando um volume intenso e marcante com abertura dramática no olhar.' },
    { name: 'Volume Fox',        img: '../../assets/volume-fox.jpeg', description: 'Mapeamento com curvaturas mais retas (L ou M), criando o desejado olhar "puxadinho" — sensual e alongado.' },
    { name: 'Volume Luxo',       img: '../../assets/volume-luxo.jpeg', description: 'Fios tecnológicos (6D e 8D) aplicados sobre cada fio natural, para o máximo preenchimento e um olhar chamativo e poderoso.' },
    { name: 'Volume Borboleta',  img: '../../assets/volume-borboleta.jpeg', description: 'Mapeamento assimétrico com fios de diferentes comprimentos que cria um efeito de abertura e leveza — olhar expressivo e delicado ao mesmo tempo, como as asas de uma borboleta.' },
  ];

  return (
    <section id="tecnicas" style={{ background: 'var(--cream-200)', paddingBlock: isMobile ? 56 : 90 }}>
      <div className="vk-wrap">
        <SectionHeading eyebrow="Volume sob medida" title="Técnicas"
          subtitle="Cada técnica cria um efeito diferente. Na consulta, definimos juntas qual combina com o seu olhar e o seu estilo." />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 22, marginTop: 56 }}>
          {techniques.slice(0, 4).map((t) => (
            <TechniqueCard key={t.name} image={t.img} imagePosition="center center"
              name={t.name} description={t.description} />
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 22, marginTop: 22, maxWidth: isMobile ? '100%' : 560, marginInline: 'auto' }}>
          <TechniqueCard image={techniques[4].img} imagePosition="center center"
            name={techniques[4].name} description={techniques[4].description} />
        </div>
      </div>
    </section>
  );
}
window.Tecnicas = Tecnicas;
})();
