import "../styles/globals.css";
import Head from 'next/head'; // Import Head component
import { NavBar, Footer } from "../Components";
import { CrowdFundingProvider } from "../Context/CroudFunding";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Votereum Fundraising</title> {/* Set your new title here */}
      </Head>
      <CrowdFundingProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </CrowdFundingProvider>
    </div>
  );
}
