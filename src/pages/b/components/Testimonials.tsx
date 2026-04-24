const videoIds = [
  "wJQeUW8ZQQA",
  "cnA_jrJDcRU",
  "YhS3Fz6iEYk",
  "mCfsnekzJ0o",
  "VRcPrcZigHM",
];

const Testimonials = () => (
  <section className="bg-white">
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 sm:py-16">
      <div className="b-section-bar mb-6 mx-auto w-fit">Prova social</div>
      <h2
        className="b-display b-underline b-center leading-tight max-w-3xl mx-auto text-center"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "hsl(var(--b-text))" }}
      >
        O que dizem nossos alunos
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {videoIds.map((id) => (
          <div
            key={id}
            className="relative rounded-xl overflow-hidden bg-black aspect-video shadow-md b-card"
            style={{ padding: 0 }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title={`Depoimento ${id}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
