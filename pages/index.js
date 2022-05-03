import Head from "next/head";
import Image from "next/image";
import AppBar from "../Common/AppBar/AppBar";
import Introduction from "../Common/Introduction/Introduction";
import Carousal from "../Common/Carousal/Carousal";
import Commitment from "../Common/Commitments/Commitment";
import Header from "../Common/Header/Header";
import Services from "../Common/Services/Services";
import styles from "../styles/Home.module.css";
import Jobs from "../Common/Jobs/Jobs";
import Clients from "../Common/Teams/Teams";
import Footer from "../Common/Footer/Footer";
import License from "../Common/License/License";

export default function Home() {
  return (
    <>
      <License />

      <AppBar />
      <Carousal />
      <Introduction />
      <Services />
      <Jobs />
      <Clients />
      <Footer />
    </>
  );
}
