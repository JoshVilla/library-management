"use client";
import { deleteAdmin } from "@/app/service/api";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2, Trash } from "lucide-react";

const DeleteAdmin = ({ id, refresh }: { id: string; refresh: () => void }) => {
  const { toast } = useToast();
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDeleteAdmin = async () => {
    try {
      if (!id) return;
      setLoading(true);
      const response = await deleteAdmin({ id });
      if (response.error) {
        toast({
          title: "Error",
          description: response.error,
        });
      } else {
        toast({
          title: "Success",
          description: response.message,
        });
        refresh();
        setOpenModalDelete(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Button
        size="sm"
        onClick={() => setOpenModalDelete(true)}
        variant="ghost"
      >
        <Trash />
      </Button>
      <Dialog open={openModalDelete} onOpenChange={setOpenModalDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Admin</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this admin?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setOpenModalDelete(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={handleDeleteAdmin}
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Delete"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteAdmin;
