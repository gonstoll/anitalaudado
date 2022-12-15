import * as React from 'react';

interface Props {
  title: React.ReactNode;
  blocks?: Array<string>;
  list?: Array<string>;
  isFinalBlock?: boolean;
}

export default function TextBlock({title, blocks, list, isFinalBlock}: Props) {
  const textBlockId = `title-${title}`;
  const boardClass = 'p-6 border-1 border-black dark:border-dark-white';

  return (
    <div className="text-black dark:text-white mb-20 lg:px-40">
      <div className={`${isFinalBlock ? boardClass : ''}`}>
        <h3 id={textBlockId} className="text-3-1/2xl mb-6">
          {title}
        </h3>
        {blocks?.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p className="text-xl peer">{paragraph}</p>
            <br className="peer-last-of-type:hidden" />
          </React.Fragment>
        ))}
        {list ? (
          <ul
            aria-labelledby={textBlockId}
            className="text-xl mt-5 list-disc list-inside"
          >
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
