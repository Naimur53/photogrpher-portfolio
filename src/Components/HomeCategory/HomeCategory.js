import { useSelector } from 'react-redux';
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import { allData } from '../../dataSlice/dataSlice';
import { motion } from "framer-motion";
import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import { forwardRef, useEffect, useRef, useState } from 'react';
import HomeCategoryImg from './HomeCategoryImg';
import MgButton from '../SmallComponents/MgButton';
import { useRouter } from 'next/router';
import HeadingText from '../AboutMe/HeadingText';
import CustomLink from '../SmallComponents/CustomLink';

const HomeCategory = () => {
    const router = useRouter()
    const [mp, setMp] = useState({ x: 0, y: 0 })
    const { homeCategory } = useSelector(allData)
    const canvasRef = useRef()
    const container = useRef()
    const handleMouseMove = e => {
        let x = e.clientX - container.current?.getBoundingClientRect().left
        let y = e.clientY - container.current?.getBoundingClientRect().top
        setMp({ x: -(x / 2.5), y: -(y * 2.5) });
        // canvasRef.current.style.transform = `translate3d(-${x / 1.5}px,-${y * 2}px,0px) scaleX(1) `;
        // 
        e.stopPropagation();

    }
    const handleMouseLeave = e => {
        // let x = 500
        // let y = 500
        // canvasRef.current.style.transform = `translate3d(-${x}px,-${y}px,0px) scaleX(1) `;
        // // 
        // e.stopPropagation();

    }
    const handleClick = () => {
        router.push('/category')
    }
    const initial = {
        opacity: 0,
        x: 500,
        y: 500,
    }
    return (
        <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={container} className='overflow-hidden   relative h-screen w-full'>
            <motion.div ref={canvasRef}
                initial={initial}
                exit={initial}
                animate={{
                    opacity: 1,
                    x: mp.x,
                    scale: 1.2,
                    y: mp.y,
                    transition: { ease: 'easeOut', duration: 1 }
                }} className='canvas mt-5 canvas-animation '>
                <Grid container spacing={15} >

                    <Grid item xs={12} md={3} className="column one">
                        {
                            homeCategory.slice(0, 5)?.map((single, i) => <HomeCategoryImg mp={mp} {...single} key={single.thumbnail}></HomeCategoryImg>)
                        }
                    </Grid>
                    <Grid item xs={12} md={3} className="column tow">
                        {
                            homeCategory.slice(5, 10)?.map(single => <HomeCategoryImg mp={mp}  {...single} key={single.thumbnail}></HomeCategoryImg>)
                        }
                    </Grid>
                    <Grid item xs={12} md={3} className="column there">
                        {
                            homeCategory.slice(10, 15)?.map(single => <HomeCategoryImg mp={mp}  {...single} key={single.thumbnail}></HomeCategoryImg>)
                        }
                    </Grid>
                    <Grid item md={3} xs={12} className="column four">
                        {
                            homeCategory.slice(15, 20)?.map(single => <HomeCategoryImg mp={mp}  {...single} key={single.thumbnail}></HomeCategoryImg>)
                        }
                    </Grid>
                </Grid>

            </motion.div>
            <div className='absolute pointer-events-none font-semibold	 flex justify-center items-center font-sans inset-0 capitalize font-family-Helvetica font-lighter'>
                <motion.div exit={{ opacity: 0 }} className='text-center'>
                    <HeadingText isVisible title='Photo Collection '></HeadingText>
                    <HeadingText isVisible title='After traveling many Country I Found this '></HeadingText>
                    <motion.div exit={{ scaleY: 0 }} className='flex justify-center mt-5 pointer-events-auto'>
                        <CustomLink href='/category'>
                            <MgButton text='Watch more'></MgButton>
                        </CustomLink>
                    </motion.div>
                </motion.div>


            </div>

        </div>
    );
};


export default HomeCategory;