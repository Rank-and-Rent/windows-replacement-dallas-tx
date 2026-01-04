import Link from 'next/link';

interface FullImageSectionProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  className?: string;
  linkTo?: string;
  linkText?: string;
}

export default function FullImageSection({
  imageUrl,
  title,
  subtitle,
  className = '',
  linkTo,
  linkText
}: FullImageSectionProps) {
  const content = (
    <section
      className={`relative h-96 md:h-[500px] bg-cover bg-center bg-no-repeat ${className} ${linkTo ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
            {subtitle}
          </p>
          {linkText && (
            <div className="inline-block bg-primary hover:bg-primary-dark text-white font-black py-4 px-8 uppercase tracking-[0.2em] text-sm shadow-lg transition-all active:scale-95">
              {linkText}
            </div>
          )}
        </div>
      </div>
    </section>
  );

  if (linkTo) {
    return (
      <Link href={linkTo}>
        {content}
      </Link>
    );
  }

  return content;
}