import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewCard from '../Shared/ReviewCard';


const OurTools = () => {
    const { data, isLoading, refetch } = useQuery("homeReview", () =>
    fetch(`http://localhost:5000/review`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
      return <Loading></Loading>;
    }
    // const array = data;
    // const review = array.reverse()
    // console.log(review);
    const newReview = data?.slice(0, 3)
    return (
        <div className='my-10 container mx-auto'>
            <h1 className='font-bold text-4xl uppercase lg:text-5xl text-center mb-10'>User Reviews</h1>
            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2  grid-cols-1 justify-items-center'>
               {
                    newReview.map(review => <ReviewCard oneReview={review} key={review._id}></ReviewCard>)
               }
            </div>
        </div>
    );
};

export default OurTools;