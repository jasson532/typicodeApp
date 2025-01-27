import React from "react";
import DataTableComponent from "../../components/data-table/DataTable";
import { useTypeCode } from "../../hook/useTypeCode.hook";

const HomeComponent: React.FC = (): JSX.Element => {
  const { posts } = useTypeCode();
  console.log(posts);
  
  return (
    <>
      <DataTableComponent {...posts} />
    </>
  );
};

export default HomeComponent;
