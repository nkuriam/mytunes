import Head from "next/head";

const siteTitle = "My Tunes - chill music";

export default function Layout({ children, libraryStatus }) {
  return (
    <div className={`Home ${libraryStatus ? "library-active" : ""}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Free randomly curated chill tunes to max out your productivity"
        />
        <meta
          property="og:image"
          content="https://cdn.homerun.co/default/we-are-hiring-share-og.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>My Tunes</title>
      </Head>
      {children}
    </div>
  );
}
