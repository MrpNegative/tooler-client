import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Shared/Loading';
import ReviewCard from './Shared/ReviewCard';


const AllReview = () => {

    const { data, isLoading, refetch } = useQuery("review", () =>
    fetch(`http://localhost:5000/review`).then(
      (res) => res.json()
    )
  ); 
  if (isLoading) {
      return <Loading></Loading>;
    }
    return (
        <div>
            <div className='my-10 container mx-auto'>
            <h1 className='font-bold text-4xl uppercase lg:text-5xl text-center mb-10'>All review</h1>
            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2  grid-cols-1 justify-items-center'>
               {
                    data?.map(review => <ReviewCard oneReview={review} key={review._id}></ReviewCard>)
               }
            </div>
        </div>
        </div>
    );
};

export default AllReview;