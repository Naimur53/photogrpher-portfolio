import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import { motion } from 'framer-motion';
import CustomLink from '../SmallComponents/CustomLink';
import TextSlider from './TextSlider';
const HomeTextSection = ({ innerRoute }) => {
    const { scrollValue, homeCategory, homeBlog } = useSelector(allData);
    const [value, setValue] = useState(0);
    useEffect(() => {
        setValue(scrollValue.toFixed(2))
    }, [scrollValue])
    const big = 'p-3 mr-5 w-48 text-center md:inline-block border border-white text-white font-bold  cursor-pointer rounded-full  hidden';
    return (
        <div className='h-full overflow-hidden   relative flex font-family-Helvetica  justify-center items-center'>
            <h2 className='text-6xl md:text-6xl  text-center font-thin'>
                Don’t over
                <br />
                organize.
                <br />
                Be on time and
                <br />
                stay until you are
                <br />
                completely
                <br />
                satisfied.
            </h2>
            <div className='absolute inset-0  flex justify-center items-center font-family-roboto'>
                <div>
                    <div>

                        <motion.span
                            initial={{
                                x: 0,
                                rotate: 0,
                                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                            }}
                            animate={{
                                x: -(value * 120),
                                rotate: -(value * 20),
                                transition: { ease: "easeOut", duration: 1 }
                            }}

                            className={big}> Watch Where I Am!</motion.span>
                        <motion.span
                            initial={{
                                x: 0,
                                rotate: 0,
                                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                            }}
                            animate={{
                                x: (value * 120),
                                rotate: (value * 20),
                                transition: { ease: "easeOut", duration: 1 }
                            }}

                            className={big}>Latest Collection  </motion.span>
                    </div>
                    <div className='my-32'>

                        <motion.span
                            initial={{
                                x: 0,
                                rotate: 0,
                                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                            }}
                            animate={{
                                x: -(value * 300),
                                rotate: (value * 20),
                                transition: { ease: "easeOut", duration: 1 }
                            }}

                            className={big}>Read my Blogs</motion.span>
                        <motion.span
                            initial={{
                                x: 0,
                                rotate: 0,
                                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                            }}
                            animate={{
                                x: (value * 300),
                                rotate: -(value * 20),
                                transition: { ease: "easeOut", duration: 1 }
                            }}

                            className={big}>Checkout My Gallery</motion.span>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <motion.span
                                initial={{
                                    x: 0,
                                    y: 0,
                                    rotate: 0,
                                    transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                                }}
                                animate={{
                                    x: (value * 2),
                                    y: (value * 50),
                                    rotate: (value * 2),
                                    transition: { ease: "easeOut", duration: 1 }
                                }}

                                className={big}>Who am I?</motion.span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HomeTextSection;
{/* <div style={{ zIndex: '1000' }} className=' absolute inset-0 pointer-events-none flex justify-center items-end font-family-Helvetica pb-20'>
<div className='flex pointer-events-auto'>
   
    <CustomLink
        href={`/blogs/${homeBlog?.length ? homeBlog[0]?._id : ''}`}
    >
        <motion.span

            initial={{
                x: 0,
                y: 0,
                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
            }}
            animate={{
                // x: window.innerWidth >= 1600 ? -(value * 20) : -(value * 300),
                y: value * 40,
                // rotate: -(value * 20),
                transition: { ease: "easeOut", duration: 1 }
            }}

            className={big}>

            Watch Where I Am!
        </motion.span>
    </CustomLink>

     
    <CustomLink
        href={`/category/${homeCategory?.length ? homeCategory[0]?._id : ''}`}
    >

        <motion.span
            initial={{
                x: 0,
                rotate: 0,
                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
            }}
            animate={{
                // x: window.innerWidth >= 1600 ? (value * 500) : (value * 300),
                // rotate: (value * 20),
                y: value * 20,
                transition: { ease: "easeOut", duration: 1 }
            }}

            className={big}>Latest Collection </motion.span>
    </CustomLink>
 
</div>
<CustomLink
    href='/blogs'
>
    <motion.span
        initial={{
            x: 0,
            rotate: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], }
        }}
        animate={{
            // x: window.innerWidth >= 1600 ? -(value * 500) : -(value * 350),
            // rotate: (value * 20),
            y: value * 40,
            transition: { ease: "easeOut", duration: 1 }
        }}

        className={big}>Read my Blogs</motion.span>
</CustomLink>

<CustomLink href='/category'>
    <motion.span
        initial={{
            x: 0,
            y: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], }
        }}

        animate={{
            // x: (window.innerWidth >= 1600 ? value * 500 : value * 400),
            // rotate: -(value * 20),
            y: value * 20,
            transition: { ease: "easeOut", duration: 1 }
        }}

        className={big}>Checkout My Gallery</motion.span>
</CustomLink>



<CustomLink
    href="/aboutme"
>
    <motion.span
        initial={{
            x: 0,
            y: 0,
            rotate: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], }
        }}
        animate={{
            // x: window.innerWidth >= 1600 ? (value * 500) : (value * 300),
            y: value * 40,
            transition: { ease: "easeOut", duration: 1 }
        }}

        className={big}>Who am I? </motion.span>
</CustomLink>


</div> */}