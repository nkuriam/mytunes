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
          content="https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>My Tunes</title>
      </Head>
      {children}
    </div>
  );
}
