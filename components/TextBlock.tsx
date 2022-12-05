import * as React from 'react';

interface Props {
  title: React.ReactNode;
  blocks: Array<string>;
}

export default function TextBlock({title, blocks}: Props) {
  return (
    <div className="text-black dark:text-white mb-20">
      <h3 className="text-2xl mb-6">{title}</h3>
      {blocks.map((paragraph, index) => (
        <React.Fragment key={index}>
          <p className="text-base peer">{paragraph}</p>
          <br className="peer-last-of-type:hidden" />
        </React.Fragment>
      ))}
    </div>
  );
}
