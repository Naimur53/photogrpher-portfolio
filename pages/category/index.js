import { Container, Grid } from "@mui/material";
import React from "react";
import CategoryBanner from "../../src/Components/CategoryBanner/CategoryBanner";
import CategoryCard from "../../src/Components/CategoryCard/CategoryCard";
import { motion } from "framer-motion";
import Footer from "../../src/Components/AboutPages/Footer";
import { wrapper } from "../../src/store/store";

const AllCategory = ({ data }) => {
  return (
    <div className="bg-chak ">
      <CategoryBanner></CategoryBanner>
      <Container>
        <div className="flex justify-center pl-4 md:pl-40">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="  text-left mb-10"
          >
            <h2 className="font-family-Helvetica mb-3 text-5xl text-heading font-thin">
              May I asked you to take time
            </h2>
            <h4 className="text-2xl font-thin text-subTitles mt-5 mb-6">
              I don&apos;t like The Swiper
            </h4>
            <p className="font-thin text-xl text-contentText">
              I have taken the time to take my photos. I did it with passion and
              endless patience. May I also ask you to take the time to look at
              my work. Preferably not on your smart phone but if it can’t be
              otherwise … Try to become one with the image and feel what
              happened when I took the photo.
            </p>
          </motion.div>
        </div>
        <Grid container spacing={2}>
          {
            data?.map((res, i) => (
              <Grid key={i} item xs={12} md={4}>
                <CategoryCard i={i} {...res}></CategoryCard>
              </Grid>
            ))

            // // [1, 2, 3, 4].map((element, i) => {
            // //     const len = data.length / 4;

            // //     return <Grid key={i} item md={3}   >
            // //         {
            // //             data.slice(len * i, len * element).map((res, i) => <CategoryCard i={i} key={i} {...res}></CategoryCard>)
            // //         }
            // //     </Grid>
            // })
          }
        </Grid>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default AllCategory;
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://jhon-portfolio-server.vercel.app/category?normal=true`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

// export const getServerSideProps = wrapper.getStaticProps(
//   (store) => async () => {
//     const allUrl = [
//       fetch(`https://jhon-portfolio-server.vercel.app/category?short=true`),
//       fetch("https://jhon-portfolio-server.vercel.app/category?normal=true"),
//     ];
//     const [res1, res2] = await Promise.all(allUrl);
//     // const datas = await res.map(single => single.json());

//     const categoryNav = await res1.json();
//     const fullCategory = await res2.json();

//     store.dispatch(addHomeCategory(category));
//     return {
//       props: { data: fullCategory },
//     };
//   }
// );
