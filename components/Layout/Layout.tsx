import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>
          TrueCar | New and Used Cars for Sale | Car Pricing and Reviews
        </title>
        <meta
          name="description"
          content="TrueCar lets you control your car-buying journey. Shop new & used cars, sell your car, and find all the vehicle information you need with our research tools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
