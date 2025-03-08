"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, Edit, Plus, Trash, Check, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useToast } from "@/hooks/use-toast";
import { IAdminNote, IStudentNote } from "@/app/service/types";
import { Badge } from "../ui/badge";

type StickyNoteProps = {
  userId: string;
  api: {
    getNote: any;
    addNote: any;
    deleteNote: any;
    updateNote: any;
  };
};

const StickyNote = ({ userId, api }: StickyNoteProps) => {
  const { getNote, addNote, deleteNote, updateNote } = (api as any) || {};
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openList, setOpenList] = useState(true);
  const [choosenColor, setChoosenColor] = useState("13203e");
  const [note, setNote] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState<IAdminNote[] | IStudentNote[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const colors = [
    "#13203e",
    "#274781",
    "#03513b",
    "#00477a",
    "#5a315e",
    "#73283a",
  ];

  const handleAddNote = async () => {
    try {
      setIsLoading(true);
      if (note.trim() === "") {
        toast({
          title: "Error",
          description: "Note cannot be empty",
          variant: "destructive",
        });
        return;
      }
      const response = await addNote({ note, color: choosenColor, userId });
      if (response.message) {
        toast({
          title: "Note Added",
          description: response.message,
          variant: "default",
        });
        fetchNote();
        setOpen(false);
        setIsLoading(false);
        return;
      }
      setOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNote = async () => {
    try {
      const response = await getNote({ userId });
      if (response.data) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenDeleteDialog = (id: string) => {
    setOpenDeleteDialog(true);
    setId(id);
  };

  const handleOpenEditDialog = (id: string, note: string, color: string) => {
    setId(id);
    setNote(note);
    setChoosenColor(color);
    setOpen(true);
    setEditMode(true);
  };

  const handleDeleteNote = async (id: string) => {
    try {
      setIsLoading(true);
      const response = await deleteNote({ noteId: id });
      if (response.message) {
        setIsLoading(false);
        setOpenDeleteDialog(false);
        setId("");
        toast({
          title: "Note Deleted",
          description: response.message,
          variant: "default",
        });
        fetchNote();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditNote = async () => {
    try {
      setIsLoading(true);
      const response = await updateNote({
        noteId: id,
        note,
        color: choosenColor,
      });

      if (response.error) {
        toast({
          title: "Error",
          description: response.error,
          variant: "destructive",
        });
        return;
      }
      if (response.message) {
        toast({
          title: "Note Updated",
          description: response.message,
          variant: "default",
        });
        fetchNote();
        setOpen(false);
        setEditMode(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompleteNote = async (id: string) => {
    try {
      setIsLoading(true);
      const response = await updateNote({
        noteId: id,
        isCompleted: true,
      });

      if (response.error) {
        toast({
          title: "Error",
          description: response.error,
          variant: "destructive",
        });
        return;
      }
      if (response.message) {
        toast({
          title: "Note Completed",
          description: response.message,
        });
        fetchNote();
        setId("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNote();
  }, []);

  useEffect(() => {
    if (!editMode) {
      setNote("");
      setChoosenColor(colors[0]);
    } else {
      setNote(note);
      setChoosenColor(choosenColor);
    }
  }, [open, editMode]);

  return (
    <div className="w-full my-6">
      <div className="bg-gray-300 dark:bg-neutral-900 flex justify-between items-center px-4 rounded-sm">
        <div>Notes ({data.length || 0})</div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <Plus />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpenList(!openList)}
          >
            <ChevronDown
              className={`transition-all duration-300 ${
                openList ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>
      </div>
      <div
        className={`py-6 px-4 space-y-4 overflow-y-auto max-h-[300px] ${
          openList ? "block" : "hidden"
        }`}
      >
        {data.length === 0 ? (
          <div className="text-center text-gray-500">No notes found</div>
        ) : (
          data.map((item) => (
            <div
              className=" p-4 rounded-sm text-sm hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: item.color }}
              key={item._id}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <Badge
                      variant={item.isCompleted ? "default" : "default"}
                      className="text-xs"
                    >
                      {item.isCompleted ? "Completed" : "Pending"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    {!item.isCompleted ? (
                      <Check
                        size={14}
                        className="hover:scale-150 transition-all duration-300"
                        onClick={() => handleCompleteNote(item._id)}
                      />
                    ) : null}
                    <Edit
                      size={14}
                      className="hover:scale-150 transition-all duration-300"
                      onClick={() =>
                        handleOpenEditDialog(item._id, item.note, item.color)
                      }
                    />
                    <Trash
                      size={14}
                      className="hover:scale-150 transition-all duration-300"
                      onClick={() => handleOpenDeleteDialog(item._id)}
                    />
                  </div>
                </div>
                <div className="mt-2">{item.note}</div>
              </div>
            </div>
          ))
        )}
      </div>
      <Dialog
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          setEditMode(false);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Note</DialogTitle>
          </DialogHeader>
          <div>
            <div>
              <Textarea
                placeholder="Note"
                style={{ backgroundColor: choosenColor }}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
            <div className="mt-6 w-42 space-y-2">
              <Label>Select Color</Label>
              <Select value={choosenColor} onValueChange={setChoosenColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent>
                  {colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      <div
                        className="p-1 rounded-sm w-20"
                        style={{ backgroundColor: color }}
                      />
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <DialogFooter className="mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setOpen(false);
                  setEditMode(false);
                }}
              >
                Cancel
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={editMode ? handleEditNote : handleAddNote}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : editMode ? (
                  "Update"
                ) : (
                  "Add"
                )}
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      {/*DELETE DIALOG */}
      <Dialog open={openDeleteDialog} onOpenChange={setOpenDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Note</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this note?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setOpenDeleteDialog(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDeleteNote(id)}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={14} />
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

export default StickyNote;
