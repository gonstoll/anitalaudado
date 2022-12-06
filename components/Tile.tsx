import Link from 'next/link';

interface TileProps {
  title: string;
  link?: string;
  size: 'small' | 'medium' | 'large';
}

export default function Tile({title, link, size}: TileProps) {
  const sizeClasses = {
    small: {
      content: 'text-base',
      tile: 'md:w-80 h-10',
    },
    medium: {
      content: 'text-3-1/2xl',
      tile: 'w-96 h-20',
    },
    large: {
      content: 'text-3-1/2xl',
      tile: 'w-112 h-40',
    },
  };

  return link ? (
    <Link
      href={link}
      className={`${sizeClasses[size].tile} flex items-center justify-between border-b-1 border-black dark:border-white group`}
    >
      <p className={`${sizeClasses[size].content} text-black dark:text-white`}>
        {title}
      </p>
      <p
        className={`${sizeClasses[size].content} text-black dark:text-white group-hover:-rotate-45 duration-200 transition-transform ease-linear`}
      >
        →
      </p>
    </Link>
  ) : (
    <div
      className={`${sizeClasses[size].tile} flex items-center justify-between border-b-1 border-black dark:border-white`}
    >
      <p className={`${sizeClasses[size].content} text-black dark:text-white`}>
        {title}
      </p>
      <p className={`${sizeClasses[size].content} text-black dark:text-white`}>
        wip
      </p>
    </div>
  );
}
