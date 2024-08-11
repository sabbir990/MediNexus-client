import React from "react";
import { Chart } from "react-google-charts";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const options = {
  title: "Sales By Category",
  pieHole: 0.4,
  is3D: false,
};

export function PieChart() {
  const axiosSecure = useAxiosSecure();

  const {data : paymentDetails = []} = useQuery({
    queryKey : ['paymentDetails'],
    queryFn : async() => {
        const {data} = await axiosSecure.get('/admin-dashboard');
        return data;
    }
  })

  console.log(paymentDetails)

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={paymentDetails?.categorySpecification}
      options={options}
    />
  );
}
