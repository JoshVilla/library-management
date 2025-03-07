import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2, Settings, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { IAdmin } from "@/app/service/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { editAdmin } from "@/app/service/api";
import AlertAccess from "../components/alertAccess";
import { setAdminInfo } from "@/app/redux/slices/adminInfoSlice";

const ChangeStatus = ({
  id,
  defaultValue,
  refresh,
}: {
  id: string;
  defaultValue: string;
  refresh: () => void;
}) => {
  const dispatch = useDispatch();
  const state = useSelector(
    (state: RootState) => state.adminInfo.adminInfo
  ) as IAdmin;
  const { toast } = useToast();
  const [openModalChangeStatus, setOpenModalChangeStatus] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState<boolean>(
    defaultValue === "true" ? true : false
  );

  const handleOpenModal = () => {
    if (state.isSuperAdmin) {
      setOpenModalChangeStatus(true);
      setIsSuperAdmin(defaultValue === "true" ? true : false);
    } else {
      setOpenAlert(true);
    }
  };

  const handleChangeStatus = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("id", id);
      formData.append("isSuperAdmin", isSuperAdmin.toString());
      const response = await editAdmin(formData, true);
      if (response.error) {
        toast({
          title: "Error",
          description: response.error,
        });
      } else {
        setOpenModalChangeStatus(false);
        setLoading(false);
        toast({
          title: "Success",
          description: response.message,
        });
        refresh();

        // update the state
        if (response.data && state._id === id) {
          dispatch(setAdminInfo(response.data));
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button size="sm" variant="ghost" onClick={handleOpenModal}>
        <Settings />
      </Button>
      <Dialog
        open={openModalChangeStatus}
        onOpenChange={setOpenModalChangeStatus}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Status</DialogTitle>
            <DialogDescription>
              Are you sure you want to change the status of this admin?
            </DialogDescription>
          </DialogHeader>
          <RadioGroup
            value={isSuperAdmin.toString()}
            onValueChange={(val) => setIsSuperAdmin(val === "true")}
          >
            <div className="flex space-x-2">
              <RadioGroupItem value="true" id="super-admin" />
              <Label htmlFor="super-admin">Super Admin</Label>

              <RadioGroupItem value="false" id="admin" />
              <Label htmlFor="admin">Admin</Label>
            </div>
          </RadioGroup>

          <DialogFooter>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setOpenModalChangeStatus(false)}
            >
              Cancel
            </Button>
            <Button size="sm" onClick={handleChangeStatus} disabled={loading}>
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Change Status"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <AlertAccess openAlert={openAlert} setOpenAlert={setOpenAlert} />
    </div>
  );
};

export default ChangeStatus;
