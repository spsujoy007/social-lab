import React from 'react';
import InformationSide from './InformationSide';
import Container from '../../Components/Container';
import Trending from './Trending';
import PostsShowCasing from './PostShowCasing/PostsShowCasing';

const Home = () => {
    return (
        <Container>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-6 md:py-10 p-3'>

                <div className='md:block hidden'>
                    <InformationSide></InformationSide>
                </div>

                <div className='col-span-2'>
                    <PostsShowCasing></PostsShowCasing>
                </div>

                {/* <Trending></Trending> */}
            </div>
        </Container>
    );
};

export default Home;