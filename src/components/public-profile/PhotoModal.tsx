import { X } from "lucide-react";

type Photo = {
  src: string;
  alt: string;
};

type PhotoModalProps = {
  photo: Photo;
  onClose: () => void;
};

export function PhotoModal({ photo, onClose }: PhotoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 px-4 py-8 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={photo.alt}>
      <div className="relative max-h-full max-w-5xl">
        <img src={photo.src} alt={photo.alt} className="max-h-[82vh] max-w-full rounded-xl border border-border object-contain shadow-2xl" />
        <button type="button" onClick={onClose} aria-label="Close photo" className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-card/90 text-foreground shadow-lg transition hover:bg-card">
          <X className="size-5" />
        </button>
      </div>
    </div>
  );
}
