import React from 'react';
import InformationSide from './InformationSide';
import Container from '../../Components/Container';
import PostsShowCasing from './PostsShowCasing';
import Trending from './Trending';

const Home = () => {
    return (
        <Container>
        <div className='grid grid-cols-4 gap-3 pt-10'>
                <InformationSide></InformationSide>
                    <div className='col-span-2'>
                        <PostsShowCasing></PostsShowCasing>
                    </div>
                <Trending></Trending>
        </div>
        </Container>
    );
};

export default Home;