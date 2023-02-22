import React from "react";
import { useQuery } from "react-query";
import ToolsCard from "./Home/ToolsCard";
import Loading from "./Shared/Loading";
const AllTools = () => {
  const { data, isLoading, refetch } = useQuery("allTools", () =>
    fetch(`https://assignment-12-server-ochre.vercel.app/tools`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="my-10 container mx-auto">
        <h1 className="font-bold text-4xl uppercase lg:text-5xl text-center mb-10">
          Our Tools
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2  grid-cols-1 justify-items-center">
          {data?.map((tool) => (
            <ToolsCard tool={tool} key={tool._id}></ToolsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTools;
