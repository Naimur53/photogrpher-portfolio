import { Box } from '@mui/material';
import React from 'react';
import MiddleContent from '../AboutMe/MiddleContent';
import DescriptionText from '../SmallComponents/DescriptionText';
import MainHeading from '../SmallComponents/MainHeading';
import { motion } from 'framer-motion'
const AboutBanner = () => {
    const leftIn = {
        initial: {
            x: '-100%'
        },
        animate: {
            x: '0%',
            transition: {
                type: 'easeOut',
            }
        }
    }
    return (
        <Box className='font-family-Helvetica '>
            <div className=' text-3xl md:text-5xl text-center mb-4 overflow-hidden'>

                <MainHeading title='I am John'></MainHeading>
            </div>
            <div className='text-3xl md:text-5xl text-center'>

                <MainHeading title='TODAY&apos;S SHOT IS BETTER THAN YESTERDAYS.'></MainHeading>
            </div>
            <div className='text-3xl md:text-5xl mt-5   '>

                <MainHeading title='THAT&apos;S WHY I LOVE TOMORROW.'></MainHeading>
            </div>

        </Box>
    );
};

export default AboutBanner;