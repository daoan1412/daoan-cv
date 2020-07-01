import Head from 'next/head'
import Content from '../components/Content/Content'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dao An CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto sm:py-10 py-6 flex sm:flex-row flex-col justify-around sm:space-y-0 space-y-3">
          <img className="rounded-full sm:w-24 w-20 self-center" src="/av1.jpg"></img>
          <div className="self-center">
            <div className="font-semibold text-2xl">
              Dao An
          </div>
            <div className="font-medium">
              Mobile Developer
          </div>
            <div className="font-medium">
              Ha Noi, Viet Nam
          </div>
          </div>
          <div className="self-center space-y-1 text-sm flex flex-col">
            <a target="_blank" href="mailto:daoan1412@gmail.com"><i className="fas fa-envelope"></i>&nbsp;	 daoan1412@gmail.com</a>
            <a target="_blank" href="tel:+84967670265"><i className="fas fa-phone"></i>&nbsp;	 0967670265</a>
          </div>
        </div>
      </div>
      <Content
        title="Career Profile"
        icon="fas fa-user"
      >
        <div>Mobile developer with 1 years 2 months experience. I work with iOS and Android.</div>
        <div>Having ability to build the backend with common functions, full basic flow to communicate between backend and client</div>
        <div>Learning new languages or platforms quickly with a positive attitude. Can join in all process of product development from initialize to store release</div>
      </Content>
      <Content
        title="My Product"
        icon="fas fa-th"
      >
        <div className="mb-2">My own product with Full-Stack operations</div>
        <div className="font-semibold">Click & See</div>
        <a target="_blank" className="underline" href="https://clickandsee.net/">https://clickandsee.net/</a>
      </Content>
      <Content
        title="Repository"
        icon="fas fa-code-branch"
      >
        <div className="font-semibold">Github</div>
        <a target="_blank" className="underline mb-2" href="https://github.com/daoan1412">https://github.com/daoan1412</a>
        <div className="font-semibold mt-2">NPM</div>
        <a target="_blank" className="underline" href="https://www.npmjs.com/package/redis-trie-vi">https://www.npmjs.com/package/redis-trie-vi</a>
      </Content>
      <Content
        title="Key Skills"
        icon="fas fa-key"
      >
        <div>
          Android - good
          </div>
        <div>
          iOS - good
          </div>
        <div>
          Rust - good
          </div>
        <div>
          Git - good
          </div>
        <div>
          React Native, ReactJS, NextJS - intermediate
            </div>
        <div>
          Flutter - intermediate
            </div>
        <div>
          .NET (back end) - intermediate
            </div>
        <div>
          English - intermediate
         </div>
        <div className="mt-4">
          NodeJS (Auth, RESTful API, SocketIO, GraphQL)<br></br>
            Firebase (Authentication, Database, Functions, Storage, Hosting, Cloud Messaging) <br></br>
            Database (Realm, Couchbase, PostgreSQL) <br></br>
            DevOps: linux, nginx, docker, bashscript, python ... <br></br>
        </div>
      </Content>

      <Content
        title="Projects"
        icon="fas fa-project-diagram"
      >
        <span className="font-semibold">
          Click & See
          </span>
        <span>
          &nbsp; (my product, contribution rate 100%) The app makes learning new words fun (Rust - 20%; Kotlin, Swift - 80%, .NET - Backend, Offline Sync, firebase crashlytics, authentication)
          </span>
      </Content>
      <div className="pt-8"></div>
    </div>
  )
}
