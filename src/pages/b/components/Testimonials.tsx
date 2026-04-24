import VideoLightbox from "@/components/VideoLightbox";

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

      <div className="mt-12">
        <VideoLightbox videoIds={videoIds} />
      </div>
    </div>
  </section>
);

export default Testimonials;
