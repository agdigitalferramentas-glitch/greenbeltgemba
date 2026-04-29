import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play } from "lucide-react";

interface VideoLightboxProps {
  videoIds: string[];
  /** Tailwind classes for the grid wrapper */
  gridClassName?: string;
  /** Tailwind classes for each card */
  cardClassName?: string;
}

/**
 * Grid of YouTube thumbnails. Clicking a thumb opens the video
 * in a centered, larger modal with an autoplay iframe and a close button.
 */
const VideoLightbox = ({
  videoIds,
  gridClassName = "flex flex-wrap justify-center gap-5 lg:gap-6 [&>*]:basis-full sm:[&>*]:basis-[calc((100%-1.25rem)/2)] lg:[&>*]:basis-[calc((100%-2*1.5rem)/3)]",
  cardClassName = "",
}: VideoLightboxProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const thumbUrl = (id: string) =>
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  const thumbFallback = (id: string) =>
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <>
      <div className={gridClassName}>
        {videoIds.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveId(id)}
            className={`group relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary ${cardClassName}`}
            aria-label="Reproduzir depoimento em vídeo"
          >
            <img
              src={thumbUrl(id)}
              onError={(e) => {
                const img = e.currentTarget;
                if (img.src !== thumbFallback(id)) img.src = thumbFallback(id);
              }}
              alt="Depoimento de aluno"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* gradient veil to hide YouTube ui hints if any & boost contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20 transition-opacity group-hover:from-black/40" />
            {/* play button */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Play className="h-7 w-7 translate-x-0.5 fill-black text-black" />
              </span>
            </span>
          </button>
        ))}
      </div>

      <Dialog open={!!activeId} onOpenChange={(open) => !open && setActiveId(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden border-0 bg-black sm:rounded-xl">
          <DialogTitle className="sr-only">Depoimento em vídeo</DialogTitle>
          {activeId && (
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0&modestbranding=1`}
                title="Depoimento em vídeo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoLightbox;
