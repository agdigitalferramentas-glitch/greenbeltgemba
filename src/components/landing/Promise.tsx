import SectionLabel from "./SectionLabel";

const Promise = () => (
  <section className="bg-gradient-promise">
    <div className="container py-10 sm:py-14 lg:py-20">
      <div className="flex justify-center"><SectionLabel>A transformação que você vai viver</SectionLabel></div>
      <h2 className="mt-4 font-display text-[34px] sm:text-5xl lg:text-6xl text-foreground max-w-3xl mx-auto text-center leading-tight text-balance">
        O <span className="text-green-glow">ponto de virada</span> da sua carreira começa&nbsp;aqui.
      </h2>

      <div className="relative mt-10 sm:mt-14 max-w-4xl mx-auto">
        <div className="relative rounded-2xl border border-green-vibrant/25 bg-background/40 backdrop-blur-sm shadow-card px-6 sm:px-12 py-8 sm:py-12">
          <span className="font-quote select-none absolute -top-6 sm:-top-10 left-4 sm:left-6 text-[80px] sm:text-[160px] leading-none text-green-vibrant/20 pointer-events-none">"</span>
          <blockquote className="relative font-quote text-base sm:text-2xl lg:text-[28px] leading-relaxed text-foreground/90 pl-4 sm:pl-8 border-l-2 border-green-vibrant/50">
            Ao final da formação, você não será apenas mais um profissional com um certificado.
            Você será <strong className="not-italic font-semibold text-green-glow">a pessoa que resolve problemas que os outros não conseguem</strong>
            {" "}— com dados, método e clareza. A pessoa que gera economia real, lidera com autoridade e é disputada
            pelas melhores empresas do Brasil e do&nbsp;mundo.
          </blockquote>
        </div>
      </div>
    </div>
  </section>
);

export default Promise;
