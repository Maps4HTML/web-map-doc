import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Minimum Code',
    description: (
      <>
        MapML prioritizes minimum code needed to create elaborate maps. No Javascript required, everything can be done using HTML + custom elements.
      </>
    ),
  },
  {
    title: 'Accessible Maps',
    description: (
      <>
        This suite of elements enables fast and easy use of functions in an accessible manner. Keyboard navigation and interaction is contantly being improved.
      </>
    ),
  },
  {
    title: 'Future Standard',
    description: (
      <>
        With the goal of one day being part of browsers natively, MapML provides the ability for all maps created using this custom suite to work once MapML is integrated with HTML.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const mapiframe = `<script type="module" src="dist/mapml-viewer.js"></script>
  <style>
  html,
  body {
    height: 100%;
  }
  body {
    margin: 0;
  }
  mapml-viewer {
    width: 100%;
    height: inherit;
  }
  </style>
  <mapml-viewer projection="CBMTILE" zoom="5" lat="58" lon="-90" frameborder="0" controls>
    <layer- label="CBMT" src="https://geogratis.gc.ca/mapml/en/cbmtile/cbmt/" checked></layer->
  </mapml-viewer>`;
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Home"
      description="Documentation for mapml-viewer and layer element suite">

      <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <iframe tabIndex="-1" height="500px" width="100%" frameBorder="0" scrolling="no" srcDoc={mapiframe}></iframe>
        <div className="container">

          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="container">
          <h2>Capabilities</h2>
          <p>A thorough breakdown of the capabilities compared to other web map solutions can be found in the <a href="https://maps4html.org/UCR-MapML-Matrix/mapml-ucrs-fulfillment-matrix.html">MapML UCR Fulfillment Matrix</a>.
          </p>
          <br />
          <h2>Getting Involved</h2>
          <p>The custom element suite is an open source project. Anyone who wants to submit changes/fixes is welcomed to doing so through Pull Requests to our <a href="https://github.com/Maps4HTML/Web-Map-Custom-Element">Github Repository</a>.
            <br />
            <br />
            You can also contribute by reporting any bugs or issues while using the element suite in the form of an issue on the same <a href="https://github.com/Maps4HTML/Web-Map-Custom-Element">Github Repository</a>.
          </p>
        </div>
      </main>
    </Layout >
  );
}

export default Home;
