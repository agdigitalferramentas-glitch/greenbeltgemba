import SectionLabel from "./SectionLabel";

const Promise = () => (
  <section className="bg-gradient-promise">
    <div className="container py-14 sm:py-20 lg:py-28">
      <SectionLabel>A transformação que você vai viver</SectionLabel>
      <h2 className="mt-4 font-display text-[34px] sm:text-5xl lg:text-6xl text-foreground max-w-3xl leading-tight">
        Não é um curso. <span className="text-green-glow">É um ponto de virada</span> na sua carreira.
      </h2>

      <div className="relative mt-10 sm:mt-14 max-w-4xl">
        <span className="font-quote select-none absolute -top-6 sm:-top-8 -left-1 sm:-left-2 text-[80px] sm:text-[160px] leading-none text-green-vibrant/15">"</span>
        <blockquote className="relative font-quote text-base sm:text-2xl lg:text-[28px] leading-relaxed text-foreground/90 pl-4 sm:pl-10 border-l-2 border-green-vibrant/50">
          Ao final da formação, você não será apenas mais um profissional com um certificado.
          Você será <strong className="not-italic font-semibold text-green-glow">a pessoa que resolve problemas que os outros não conseguem</strong>
          {" "}— com dados, método e clareza. A pessoa que gera economia real, lidera com autoridade e é disputada
          pelas melhores empresas do Brasil e do mundo.
        </blockquote>
      </div>
    </div>
  </section>
);

export default Promise;
