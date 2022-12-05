import Link from 'next/link';
import * as React from 'react';
import Header from './Header';
import LinkButton from './LinkButton';
import Tag from './Tag';
import Tile from './Tile';

type Page = {
  type: 'page';
};

type Project = {
  type: 'project';
  banner: string;
  tags: Array<string>;
  summary: string;
  details: {
    challenge: string;
    role: string;
    year: string;
  };
};

type Props = {title: string} & (Page | Project);

export default function Layout({
  title,
  children,
  ...props
}: React.PropsWithChildren<Props>) {
  return (
    <>
      <Header />

      <main className="mb-auto">
        {props.type === 'page' ? (
          <div className="mt-20 md:mt-40 px-6 md:px-20">
            <h1 className="text-4-1/2xl md:text-6-1/2xl text-black dark:text-white font-bold md:whitespace-pre-line">
              {title}
            </h1>
            {children}
          </div>
        ) : (
          <>
            <div className="h-98">{props.banner}</div>
            <div className="mt-5 md:mt-10 px-6 md:px-20">
              <h1 className="text-4-1/2xl md:text-6-1/2xl text-black dark:text-white font-bold md:whitespace-pre-line">
                {title}
              </h1>
              <div className="my-10 flex items-center flex-wrap gap-4">
                {props.tags.map(tag => (
                  <Tag key={tag} title={tag} />
                ))}
              </div>
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2 mb-20">
                <h2 className="text-3-1/2xl text-black dark:text-white">
                  {props.summary}
                </h2>
                <div>
                  {Object.entries(props.details).map(([key, value]) => (
                    <div
                      key={key}
                      className="mb-6 last:mb-0 text-base text-black dark:text-white"
                    >
                      <p className="font-bold">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </p>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              {children}
            </div>
          </>
        )}
      </main>

      <footer className="mt-20 md:mt-40 border-t-1 border-black dark:border-white">
        <div className="p-10">
          <div className="md:flex items-center justify-between mb-8">
            <Link
              href="/"
              className="block text-3-1/2xl text-black dark:text-white"
            >
              ✦
            </Link>
            <Link
              href="mailto:anitalaudado@gmail.com"
              className="block text-2xl md:text-3-1/2xl font-bold text-black dark:text-white"
            >
              anitalaudado@gmail.com
            </Link>
          </div>
          <div className="md:flex items-end justify-between">
            <div className="mb-8 md:mb-0">
              <Tile size="small" title="Work" link="/work" />
              <Tile size="small" title="Personal Projects" />
              <Tile size="small" title="About" link="/about" />
            </div>
            <div className="flex flex-wrap gap-4">
              <LinkButton
                href="https://www.linkedin.com/in/ana-laudado/"
                type="primary"
                size="small"
                title="linkedin"
              />
              <LinkButton
                href="/docs/Ana_Laudado_2023.pdf"
                type="primary"
                size="small"
                title="resume ↓"
                target="_blank"
                rel="noreferrer"
              />
              <LinkButton href="#" type="primary" size="small" title="top ↑" />
            </div>
          </div>
        </div>

        <div className="copyright-bar px-10 py-6 md:flex items-center justify-between bg-black dark:bg-white">
          <p className="text-base mb-6 md:mb-0 text-white dark:text-black">
            Ana Laudado - {new Date().getFullYear()}
          </p>
          <p className="text-base uppercase text-white dark:text-black">
            Made with ♥ <br className="md:hidden" />
            From the end of the world
          </p>
        </div>
      </footer>
    </>
  );
}
