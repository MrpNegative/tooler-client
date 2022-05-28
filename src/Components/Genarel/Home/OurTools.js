import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ToolsCard from './ToolsCard';

const OurTools = () => {
    const { data, isLoading, refetch } = useQuery("tools", () =>
    fetch(`http://localhost:5000/tools`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
      return <Loading></Loading>;
    }

    const newTools = data?.slice(0, 3)
    return (
        <div className='my-10 container mx-auto'>
            <h1 className='font-bold text-4xl uppercase lg:text-5xl text-center mb-10'>Our Tools</h1>
            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2  grid-cols-1 justify-items-center'>
               {
                    newTools.map(tool => <ToolsCard tool={tool} key={tool._id}></ToolsCard>)
               }
            </div>
        </div>
    );
};

export default OurTools;