import React from 'react';
import InformationSide from './InformationSide';
import Container from '../../Components/Container';
import Trending from './Trending';
import PostsShowCasing from './PostShowCasing/PostsShowCasing';
import SearchBar from './SearchBarItem/SearchBar';

const Home = () => {
    return (
        <Container>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-6 md:py-10 lg:p-3'>

                <div className='lg:block hidden'>
                    <InformationSide></InformationSide>
                </div>

                <div className='col-span-2'>
                    <div className='lg:hidden block bg-white pb-2 pt-4 px-5 fixed z-50 w-full'>
                        <SearchBar></SearchBar>
                    </div>
                    <div className='mt-24 lg:mt-7'>
                        <PostsShowCasing></PostsShowCasing>
                    </div>
                </div>

                <div>
                    <Trending></Trending>
                </div>
            </div>
        </Container>
    );
};

export default Home;