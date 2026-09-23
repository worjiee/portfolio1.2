import Image from "next/image";

export function ProjectGallery({ title, images }: { title: string; images: string[] }) {
  return <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{images.map((image, index) => <figure key={`${image}-${index}`} className={`relative min-h-72 overflow-hidden rounded-2xl border border-[var(--border)] bg-[#181c2d] ${images.length === 1 ? "md:col-span-2 md:min-h-[500px]" : ""}`}><Image src={image} alt={`${title} interface view ${index + 1}`} fill sizes="(max-width: 768px) 92vw, 44vw" className="object-contain p-6" /></figure>)}</div>;
}
