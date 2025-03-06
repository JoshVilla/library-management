import TitlePage from "@/components/titlePage/titlePage";
import { useState } from "react";
import AddAdmin from "./addAdmin";

const AdminManagement = () => {
  return (
    <div>
      <TitlePage title="Admin Management" />
      <AddAdmin />
    </div>
  );
};

export default AdminManagement;
