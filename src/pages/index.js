import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import {translate} from '@docusaurus/Translate';

const features = [
  {
    title: translate({"message":"Minimum Code","id":"mapml.HomePageContent.minCode.title"}),
    description: (
        <>
          <a href="https://maps4html.org/MapML-Specification/spec/"><abbr title="Map Markup Language">MapML</abbr></a>
          <Translate id='mapml.HomePageContent.minCode.description'>
            prioritizes minimum code needed to create elaborate maps. No Javascript required, everything can be done using HTML + custom elements.
          </Translate>
        </>
    ),
  },
  {
    title: translate({"message":"Accessible Maps","id":"mapml.HomePageContent.a11y.title"}),
    description: (
      <>
        <Translate id='mapml.HomePageContent.a11y.description'>
        This suite of elements enables fast and easy use of functions in an accessible manner.
        Keyboard interaction and screen reader compatibility is constantly being improved.
        </Translate>
      </>
    ),
  },
  {
    title: translate({"message":"Future Standard","id":"mapml.HomePageContent.Future.title"}),
    description: (
      <>
      <Translate id='mapml.HomePageContent.Future.description'>
        With the goal of one day being part of browsers natively, MapML provides the ability for all maps created using this suite of custom elements to be easily adapted to the standard HTML syntax.
      </Translate>
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
  const mapUrl = "./demo/data/osmtile-cbmt.mapml"
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
    <layer- label="CBMT" src="${mapUrl}" checked></layer->
  </mapml-viewer>`;
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const home = translate({"message":"Home","id":"mapml.HomePageContent.Home"});
  const description = translate({"message":"Documentation for mapml-viewer and layer element suite","id":"mapml.HomePageContent.Description"});
  return (
    <Layout
      title={home}
      description={description}>

      <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <iframe tabIndex="-1" height="500px" width="100%" frameBorder="0" scrolling="no" title="MapML-viewer" srcDoc={mapiframe}></iframe>
        <div className="container">

    <h1 className="hero__title"><Translate id="mapml.HomePageContent.Hero.title">{siteConfig.title}</Translate></h1>
    <p className="hero__subtitle"><Translate id="mapml.HomePageContent.Hero.tagline">{siteConfig.tagline}</Translate></p>
          <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/')}>
                <Translate id="mapml.HomePageContent.getStarted">
                    Get Started
                </Translate>            
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
          <h2><Translate id="mapml.HomePageContent.Capabilities.title">Capabilities</Translate></h2>
          <p>
          
            <Translate id="mapml.HomePageContent.Capabilities.text">A thorough breakdown of the capabilities compared to other web map solutions can be found in the </Translate>
          <Link to="https://maps4html.org/UCR-MapML-Matrix/mapml-ucrs-fulfillment-matrix.html">
          <Translate id="mapml.HomePageContent.Capabilities.MapMLUCR.linkText">MapML UCR Fulfillment Matrix</Translate>
          </Link>.
          </p>
          
            <h2><Translate id="mapml.HomePageContent.GetInvolved.title">Getting Involved</Translate></h2>
          <p>
          <Translate id="mapml.HomePageContent.GetInvolved.PullRequests">
            The custom element suite is an open source project. Anyone who wants to submit changes/fixes is welcomed to doing so through Pull Requests to our </Translate>
          <Link to="https://github.com/Maps4HTML/MapML.js">
          <Translate id="mapml.HomePageContent.GetInvolved.GitHub.PullRequests.linkText"> Github Repository</Translate></Link>.
          </p>
          <p>
          <Translate id="mapml.HomePageContent.GetInvolved.GitHub.Issues.1">
          You can also contribute by reporting any bugs or issues while using the element suite in the form of one or more </Translate>
          <Link to="https://github.com/Maps4HTML/MapML.js/issues"> 
            <Translate id="mapml.HomePageContent.GetInvolved.GitHub.Issues.linkText"> issues</Translate>
          </Link> 
          <Translate id="mapml.HomePageContent.GetInvolved.GitHub.Issues.2"> on the same repository</Translate>.
          </p>
        </div>
      </main>
    </Layout >
  );
}

export default Home;
