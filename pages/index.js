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
        <h1 className={styles.title} style={{ marginBottom: '30px', textAlign: 'center' }}>
          Anon Submitted
        </h1>

        <iframe
          width="90%"
          height="400px"
          scrolling="yes"
          frameBorder="yes"
          src="https://www.taskade.com/f/01JGA0EH253PVW1NHWV84073CD"
          style={{ width: '100%', height: '750px', maxWidth: '1500px', maxHeight: '1500px' }}
          ></iframe>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://x.com/anonsubmitted">
              <img
                src="/x.png"
                alt="Twitter"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
            <a href="">
              <img
                src="/pumpfun.png"
                alt="Facebook"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
            <a href="">
              <img
                src="/dexscreener.png"
                alt="Instagram"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
          </div>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 3rem 1rem;
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
          font-size: 1rem;
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
          font-family: Tahoma, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem;
            margin-bottom: 20px;
          }
          iframe {
            height: 300px;
          }
          a img {
            width: 40px;
            height: 40px;
          }
        }
        @media (max-width: 480px) {
          iframe {
            width: 100%;
            height: 250px;
          }
          a img {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </div>
  );
}
