import React from "react"; 
import AnalyticsComponent from "./components/AnalyticsComponent";
import WarrantyExpiringProductsTablesComponent from "../../components/WarrantyExpiringProductsTableComponent";

function DashBoardScreen() {
  return (
    <div className=" h-full w-full px-10">
      <br />
      <AnalyticsComponent  />
      <WarrantyExpiringProductsTablesComponent />
    </div>
  );
}

export default DashBoardScreen;
