import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ImgSlider from '../ImgSlider/ImgSlider';
import CustomLink from '../SmallComponents/CustomLink';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const BlogSection = ({ data }) => {
    const { description, img, title, video } = data
    let Des = [];
    if (description.length >= 300) {
        const lines = description.split('.')
        const len = Math.ceil(lines.length / 10)

        for (let i = 1; i <= len; i++) {
            Des = [...Des,
            <p className='mt-4' key={i}>{lines.slice(i == 1 ? 0 : i, i * 10).join('.')}</p>
            ];
        }

    } else {
        Des = <p>{description}</p>

    }
    return (
        <div className='mt-10'>
            {
                img.length ? img.length > 2 ? <ImgSlider data={img}></ImgSlider> : img.length === 2 ? <Grid container spacing={2}>

                    {
                        img.map(single => <Grid key={single.url} item md={6} xs={12}>
                            <Image src={single.url} height={618} layout='raw' className='w-full' width={1060} alt='d'></Image>
                            <em className='text-contentText '>{single.title}</em>
                        </Grid>)
                    }

                </Grid> : <>
                    {img.map(single => <>
                        <Image key={single.url} layout='raw' className='w-full' src={single.url} height={618} width={1060} alt='d'></Image>
                        <em className='text-contentText '>{single.title}</em></>)}
                </> : video ? <video preload="metadata" controls src={video + '#t=2'}></video> : <></>
            }

            <div className='mt-5 '>
                {
                    data.url ? <div className='hover:underline'>
                        <CustomLink href={data.url}>
                            <h1 className='text-2xl mb-2 text-heading '>{title} <OpenInNewIcon></OpenInNewIcon></h1>
                        </CustomLink>
                    </div> : <h1 className='text-2xl mb-2 text-heading '>{title}</h1>
                }
                <div className='text-contentText '>

                    {
                        Des
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogSection;