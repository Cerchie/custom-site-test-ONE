import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
// NEED ERROR HANDLING FOR < 3 items HERE
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log("res in fetcher", res);
  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Home() {
  const { data, error } = useSWR("/api/stepzen_fetch", fetcher);
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  if (
    data.data.data.devto_getArticles[0].user.twitter_details.pinned_tweet ===
    null
  ) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>STEPZEN x NETLIFY</p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Top 3 articles &rarr;</h2>
              <p> - {data.data.data.devto_getArticles[0].title} </p>
              <p> - {data.data.data.devto_getArticles[1].title} </p>
              <p> - {data.data.data.devto_getArticles[2].title} </p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Top Pinned Github Repos &rarr;</h2>
              <p>
                Name:{" "}
                {
                  data.data.data.devto_getArticles[0].user.github_details
                    .pinnedItems.nodes[0].name
                }
                Description:{" "}
                {
                  data.data.data.devto_getArticles[0].user.github_details
                    .pinnedItems.nodes[0].description
                }
              </p>
              <p>
                Name:{" "}
                {
                  data.data.data.devto_getArticles[0].user.github_details
                    .pinnedItems.nodes[1].name
                }
                Description:{" "}
                {
                  data.data.data.devto_getArticles[0].user.github_details
                    .pinnedItems.nodes[1].description
                }
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>Pinned Tweet &rarr;</h2>
              <p>No pinned tweet, possible key error.</p>
            </a>

            <a href="#" className={styles.card}>
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your custom dynamic site with Netlify by
                clicking this button.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    );
  } else if (
    data.data.data.devto_getArticles[0].user.github_details.pinnedItems.nodes[0]
      .name === null
  ) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>STEPZEN x NETLIFY</p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Top 3 articles &rarr;</h2>
              <p> - {data.data.data.devto_getArticles[0].title} </p>
              <p> - {data.data.data.devto_getArticles[1].title} </p>
              <p> - {data.data.data.devto_getArticles[2].title} </p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Top Pinned Github Repos &rarr;</h2>
              <p>No pinned repos to be found, possible key error.</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>Pinned Tweet &rarr;</h2>
              <p>
                {" "}
                {
                  data.data.data.devto_getArticles[0].user.twitter_details
                    .pinned_tweet.text
                }
              </p>
            </a>

            <a href="#" className={styles.card}>
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your custom dynamic site with Netlify by
                clicking this button.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    );
  }
  if (data.data.data.devto_getArticles[0].user === undefined) {
    return <div>No devto user found under that nme</div>;
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>STEPZEN x NETLIFY</p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Top 3 articles &rarr;</h2>
              <p> - {data.data.data.devto_getArticles[0].title} </p>
              <p> - {data.data.data.devto_getArticles[1].title} </p>
              <p> - {data.data.data.devto_getArticles[2].title} </p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Top Pinned Github Repos &rarr;</h2>
              <p>
                Name:{" "}
                {
                  data.data.data.devto_getArticles[0].user.github_details
                    .pinnedItems.nodes[0].name
                }
                Description:{" "}
                {
                  data.data.data.devto_getArticles[0].user.github_details
                    .pinnedItems.nodes[0].description
                }
              </p>
              <p>
                Name:{" "}
                {
                  data.data.data.devto_getArticles[0].user.github_details
                    .pinnedItems.nodes[1].name
                }
                Description:{" "}
                {
                  data.data.data.devto_getArticles[0].user.github_details
                    .pinnedItems.nodes[1].description
                }
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>Pinned Tweet &rarr;</h2>
              <p>
                {" "}
                {
                  data.data.data.devto_getArticles[0].user.twitter_details
                    .pinned_tweet.text
                }
              </p>
            </a>

            <a href="#" className={styles.card}>
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your custom dynamic site with Netlify by
                clicking this button.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    );
  }
}
