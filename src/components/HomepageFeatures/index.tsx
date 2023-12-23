import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    imageSrc: require('@site/static/img/easy_to_use.png').default,
    description: (
      <>
        Encinitas was designed from the ground up so you can get monitoring over
        your dApp easily and quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageSrc: require('@site/static/img/focus_on_what_matters.png').default,
    description: (
      <>
        Encinitas lets you focus on your business and we&apos;ll do the chores.
      </>
    ),
  },
  {
    title: 'Powered by Solana',
    imageSrc: require('@site/static/img/powered_by_solana.png').default,
    description: (
      <>
        Encinitas is built with Solana principles and optimized for UX and Speed.
      </>
    ),
  },
];

function Feature({title, imageSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageSrc} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

