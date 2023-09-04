import Head from 'next/head'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style>
          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");
        </style>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div id="container">
        <h1>API Routes</h1>
        <ul>
        <li>
            <a href="/api/users" target="_blank">
              users - get all info(id,name e email)
            </a>
          </li>
          <li>
            <a href="/api/user/[id]" target="_blank">
              user/[id] - get user details by id 
            </a>
          </li>
          <li>
            <a
              href="api/beers/lager"
              target="_blank"
            >
              beers/[categorie] - get all beer of one categorie
            </a>
          </li>
          <li>
            <a href="api/detail/heineken" target="_blank">
              /detail/[id] - get details info by id 
            </a>
          </li>
          <li>
            <a
              href="/api/search/heineken"
              target="_blank"
            >
              search/[beer] - Search beer by name
              </a>
          </li>
        </ul>
        <footer>
          Made with ♥  by <a href="https://wenblack.github.io/" target='blank'>Wender</a>
        </footer>
      </div>
    </>
  )
}
