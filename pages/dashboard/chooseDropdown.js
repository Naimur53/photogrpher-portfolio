import { CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SelectMenuCard from "../../src/Components/SelectMenuCard/SelectMenuCard";
import DashboardLayout from "../../src/Layouts/DashboardLayout";
import { toast } from "react-toastify";

const ChooseDropdown = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [fullCategories, setFullCategories] = useState([]);
  const [beforeMenu, setBeforeMenu] = useState([]);
  const [num, setNum] = useState(0);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postLoading, setPostLoading] = useState(false);
  useEffect(() => {
    // axios.get('https://jhon-portfolio-server.vercel.app/category?short=true')
    //     .then(res => {
    //         const filterData = res.data?.filter(single => !single.subCategory)
    //         setAllCategory(filterData)
    //         setLoading(false)
    //     })
    Promise.all([
      axios.get("https://jhon-portfolio-server.vercel.app/category?short=true"),
      axios.get(" https://jhon-portfolio-server.vercel.app/chooseMenu"),
    ]).then((res) => {
      const fullCategory = res[0].data;
      setFullCategories(fullCategory);
      const chooseData = res[1].data;

      const filterCategory = fullCategory.filter(
        (single) => !single.subCategory
      );
      setAllCategory(filterCategory);
      setBeforeMenu(chooseData);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <div className=" flex justify-center items-center">
        <CircularProgress
          sx={{ color: "white" }}
          color="inherit"
        ></CircularProgress>
      </div>
    );
  }
  const handleAdd = (data) => {
    setSelected([...selected, data]);
  };
  const handleRemove = (data) => {
    const without = selected.filter((single) => single._id !== data._id);
    setSelected(without);
  };
  const addToNavigation = () => {
    if (selected.length) {
      setPostLoading(true);
      setSelected([]);
      let mainData = [];
      selected.forEach((element) => {
        const everyCategory = fullCategories.filter(
          (single) => single.categoryName === element.categoryName
        );
        let mainCategory = everyCategory.filter(
          (single) => !single.subCategory
        )[0];
        const withoutMainCategory = everyCategory.filter(
          (single) => single?.subCategory?.length
        );
        mainCategory.dropdown = withoutMainCategory;
        mainData = [...mainData, mainCategory];
      });

      axios
        .post("https://jhon-portfolio-server.vercel.app/chooseMenu", mainData)
        .then((res) => {
          setPostLoading(false);

          toast.success("Navigation successfully added", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((e) => {
          setLoading(false);

          if (e.response?.data?.error === "UnAuthorize") {
            toast.error(
              "UnAuthorize try to reload or re-login to the site " + e.message,
              {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          } else {
            toast.error("Something bad happened when adding menu" + e.message, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
    }
  };
  return (
    <>
      <div className="text-center text-white mb-5">
        <h2 className="text-2xl text-white">Choose Category</h2>
        <p className="text-white">
          Select category to show on collection dropdown
        </p>
      </div>
      <Grid container spacing={2}>
        {allCategory.map((single) => (
          <Grid item md={4} xs={12} key={single._id}>
            <SelectMenuCard
              selected={selected}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
              {...single}
            ></SelectMenuCard>
          </Grid>
        ))}
        <Grid item xs={12}>
          {postLoading ? (
            <div className="flex justify-center">
              <CircularProgress
                sx={{ color: "white" }}
                color="inherit"
              ></CircularProgress>
            </div>
          ) : selected.length ? (
            <button
              onClick={addToNavigation}
              className="w-full bg-contentText p-2 text-black rounded-md "
            >
              Add To Navigation
            </button>
          ) : (
            <div></div>
          )}
        </Grid>
      </Grid>
    </>
  );
};
ChooseDropdown.Layout = DashboardLayout;
export default ChooseDropdown;
