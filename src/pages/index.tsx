import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
        All-in-one observability tool for Solana dApps
        </Heading>
      </div>
    </header>
  );
}

function IntroSection() {
  return (
    <section className={styles.introSection}>
      <div className="container">
        <h2>
        Start using Encinitas
        </h2>
        <h3>
      Encinitas is an observability platform that helps you build better dApps. You can bring in data from any Smart Contract and their frontend so that you can fully understand your system, analyze that data efficiently, and respond to incidents before they become problems. As extensive as the capablities of Encinitas are, you can get started with the platform by following a three-step procedure.
        </h3>
      </div>
    </section>
  );
}

function Step({ stepNumber, stepTitle, children }) {
  return (
    <div className={styles.step}>
      <h3 className={styles.stepTitle}>
        STEP {stepNumber} OF 3
      </h3>
      <h4 className={styles.stepAction}>
        {stepTitle}
      </h4>
      {children}
    </div>
  );
}

function StepsSection() {
  return (
    <section className={styles.stepsSection}>
      <div className="container">
        <Step stepNumber="1" stepTitle="Configure Your Smart Contracts">
          <p>Set up your Solana Smart Contracts for integration and prepare your dApp for observability.</p>
        </Step>
        <Step stepNumber="2" stepTitle="Ingest Your Data">
          <p>Encinitas auto-discovers your dApp configuration, guiding you through the setup. Once infrastructure agent is ready it will start collecting data.</p>
        </Step>
        <Step stepNumber="3" stepTitle="Explore Dashboards">
          <p>With data incoming, delve into dashboards for real-time insights. If you encounter issues, refer to our help resources.</p>
        </Step>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="All-in-one observability tool for Solana dApps">
      <HomepageHeader />
      <main>
        <IntroSection/>
        <StepsSection/>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
