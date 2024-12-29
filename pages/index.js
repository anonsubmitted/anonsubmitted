import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anon Submitted</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title} style={{marginBottom: '50px'}}>
          Anon Submitted
        </h1>

        <iframe width="1000px" height="700px" scrolling="no" frameBorder="yes" src="https://www.taskade.com/f/01JGA0EH253PVW1NHWV84073CD"></iframe>


        <div>
        </div>

        <div style={{ display: 'flex', gap: '75px', justifyContent: 'center', marginTop: '50px'}}>
  <a href="https://x.com/anonsubmitted">
    <img
      src="/x.png"
      alt="Twitter"
      style={{ width: '75px', height: '75px' }}
    />
  </a>
  <a href="">
    <img
      src="/pumpfun.png"
      alt="Facebook"
      style={{ width: '75px', height: '75px' }}
    />
  </a>
  <a href="">
    <img
      src="/dexscreener.png"
      alt="Instagram"
      style={{ width: '65px', height: '75px' }}
    />
  </a>
</div>

      </main>


      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #f0e0d6;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          color: #789922;
          background: #f0e0d6;
          padding: 0;
          margin: 0;
          font-family:
          Tahoma
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
