"use client";
import TitlePage from "@/components/titlePage/titlePage";
import { useEffect, useState } from "react";
import AddAdmin from "./addAdmin";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { getAdmins } from "@/app/service/api";
import useFetchDataTable from "@/hooks/useFetchDataTable";
import { IAdmin } from "@/app/service/types";
import SearchForm from "@/components/searchForm/searchForm";
import { searchProps } from "./searchProps";
import EmptyData from "@/components/empty-data/emptyData";
import LoadingComp from "@/components/loading/loadingComp";
import PaginationComponent from "@/components/pagination/Pagination";
import DeleteAdmin from "./deleteAdmin";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import ChangeStatus from "./changeStatus";

const AdminManagement = () => {
  const state = useSelector(
    (state: RootState) => state.adminInfo.adminInfo
  ) as IAdmin;
  const { data, setData, pageState, setPageState, fetchData, loading } =
    useFetchDataTable({
      apiFunction: getAdmins,
    });

  return (
    <div>
      <TitlePage title="Admin Management" />
      <SearchForm api={fetchData} result={setData} searchProps={searchProps} />
      <AddAdmin refresh={fetchData} />
      <div className="mt-10">
        <Table>
          <TableHeader>
            <TableRow>
              {["Username", "Status", "Action"].map((heading) => (
                <TableHead key={heading}>{heading}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((admin: IAdmin) => (
              <TableRow key={admin._id}>
                <TableCell>
                  {`${admin.username} ${
                    state._id === admin._id ? "(You)" : ""
                  }`}
                </TableCell>
                <TableCell>
                  {admin.isSuperAdmin ? "Super Admin" : "Admin"}
                </TableCell>
                <TableCell className="flex gap-2 items-center">
                  <DeleteAdmin id={admin._id} refresh={fetchData} />
                  <ChangeStatus
                    id={admin._id}
                    defaultValue={admin.isSuperAdmin.toString()}
                    refresh={fetchData}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {data.length === 0 && !loading && <EmptyData />}
        {loading && data.length === 0 && <LoadingComp />}
        {pageState.totalPage > 1 && (
          <PaginationComponent
            pageState={pageState}
            onChangePage={(page) =>
              setPageState({ ...pageState, currentPage: page })
            }
          />
        )}
      </div>
    </div>
  );
};

export default AdminManagement;
