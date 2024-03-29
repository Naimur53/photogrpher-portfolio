import HomeBanner from "../src/Components/HomeBanner/HomeBanner";
import HomeCategory from "../src/Components/HomeCategory/HomeCategory";
import {
  addCollection,
  addHomeBlog,
  addHomeCategory,
  addScrollValue,
} from "../src/dataSlice/dataSlice";
import { wrapper } from "../src/store/store";
import { motion } from "framer-motion";
import { Container, Grid, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import AboutMe from "../src/Components/AboutMe/AboutMe";
import HomeBlog from "../src/Components/HomeBlog/HomeBlog";
import HomeTextSection from "../src/Components/HomeTextSection/HomeTextSection";
import Head from "../src/Components/Head/Head";
import Footer from "../src/Components/AboutPages/Footer";
import ParallaxLayerBackground from "../src/Components/ParallaxLayerBackground/ParallaxLayerBackground";
import ContactSections from "../src/Components/ContactSections/ContactSections";

export default function Home() {
  const dispatch = useDispatch();
  const parallaxRef = useRef();

  const innerRoute = (value) => {
    parallaxRef.current.scrollTo(value);
  };
  useEffect(() => {
    if (!parallaxRef.current || !parallaxRef.current.container) return;
    parallaxRef.current.container.current.onscroll = () => {
      dispatch(
        addScrollValue(parallaxRef.current.current / parallaxRef.current.space)
      );
    };
    return () => {
      return dispatch(addScrollValue(0));
    };
  });
  return (
    <>
      <Head title="John Baggen"></Head>
      <Parallax ref={parallaxRef} pages={12}>
        <ParallaxLayer offset={0} speed={0.1}>
          <HomeBanner innerRoute={innerRoute}></HomeBanner>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1} style={{ zIndex: "-1" }}>
          <div className="banner-wrap h-full w-full">
            <div className="w-full flex h-full items-end   ">
              <div className="relative w-full">
                <Image
                  className="w-full mt-15  "
                  src="https://i.ibb.co/0cjqwrp/GRID-for-movement-on-background-5.png"
                  width={1200}
                  height={100}
                  alt="background web"
                  quality={100}
                  priority
                  layout="raw"
                ></Image>
                <motion.div
                  className=" absolute inset-0"
                  style={{ background: "rgba(0,0,0,1)" }}
                  initial={{
                    x: " 0%",
                  }}
                  animate={{
                    x: "100%",
                    transition: { type: "ease", duration: 1, delay: 1.3 },
                  }}
                ></motion.div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}>
          <HomeTextSection innerRoute={innerRoute}></HomeTextSection>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} sticky={{ start: 2, end: 5 }}>
          <AboutMe innerRoute={innerRoute}></AboutMe>
        </ParallaxLayer>
        <ParallaxLayerBackground
          offset={2}
          speed={0.5}
          style={{ zIndex: "-1" }}
        />
        <ParallaxLayerBackground
          offset={3}
          speed={0.5}
          style={{ zIndex: "-1" }}
        />
        <ParallaxLayerBackground
          offset={4}
          speed={0.5}
          style={{ zIndex: "-1" }}
        />
        <ParallaxLayerBackground
          offset={5}
          speed={0.5}
          style={{ zIndex: "-1" }}
        />
        <ParallaxLayer offset={6} factor={1.3} speed={0.5}>
          <HomeCategory></HomeCategory>
        </ParallaxLayer>
        <ParallaxLayer
          offset={7}
          speed={5}
          sticky={{ start: 7, end: 9 }}
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <HomeBlog></HomeBlog>
          <div className=" md:flex hidden overlay-wrap pointer-events-none absolute flex-col justify-between inset-0">
            <div></div>
            <div></div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.3}
          sticky={{ start: 10, end: 12 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ContactSections></ContactSections>
        </ParallaxLayer>

        <ParallaxLayerBackground
          offset={10}
          speed={0.3}
          style={{ zIndex: "-1" }}
        />
        <ParallaxLayerBackground
          offset={11}
          speed={0.3}
          style={{ zIndex: "-1" }}
        />
      </Parallax>
    </>
  );
}
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://jhon-portfolio-server.vercel.app/category`)
//   const data = await res.json()
//

//   // Pass data to the page via props
//   return { props: { data } }
// }
export const getServerSideProps = wrapper.getStaticProps(
  (store) => async () => {
    const allUrl = [
      fetch(`https://jhon-portfolio-server.vercel.app/category?short=true`),
      fetch("https://jhon-portfolio-server.vercel.app/blog?short=true"),
    ];
    const [res1, res2] = await Promise.all(allUrl);
    // const datas = await res.map(single => single.json());

    const category = await res1.json();
    const blogs = await res2.json();

    store.dispatch(addHomeCategory(category));
    store.dispatch(addHomeBlog(blogs));
    store.dispatch(addCollection(store.getState().data.collection));
  }
);
