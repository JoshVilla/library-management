import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FileUploadModal = ({ api, refresh }) => {
  const { toast } = useToast();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "application/vnd.ms-excel": [".xls"],
    },
  });

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api(formData, true);
      if (response.isSuccess) {
        toast({
          title: "Upload successful!",
          className: "bg-black text-white",
        });
      }
    } catch (error) {
      toast({
        title: "Failed to add student",
        description: "Upload failed. Please try again.",
        className: "bg-red-500 text-white",
      });
    } finally {
      setUploading(false);
      setFile(null);
      setOpenDialog(false);
      await refresh();
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button size="sm"><Upload /> Upload Excel File</Button>
      </DialogTrigger>
      {/* @ts-ignore */ }
      <DialogContent className="max-w-md">
        {/* @ts-ignore */}
        <DialogHeader>
          {/* @ts-ignore */}
          <DialogTitle>Upload Excel File</DialogTitle>
        </DialogHeader>
        <div
          {...getRootProps()}
          className="border border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-500"
        >
          <input {...getInputProps()} />
          <Upload className="w-8 h-8 text-gray-500 mb-2" />
          <p className="text-sm text-gray-500">
            Drag & drop an Excel file here, or click to browse
          </p>
          <p className="text-xs text-gray-400">
            (Only .xls, .xlsx files are allowed)
          </p>
        </div>
        {file && (
          <div className="flex items-center justify-between mt-4 p-2 bg-gray-100 rounded-md">
            <p className="text-sm text-gray-700">{file.name}</p>
            <Button variant="ghost" size="icon" onClick={() => setFile(null)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}
        <Button
          onClick={handleUpload}
          disabled={!file || uploading}
          className="w-full mt-4"
        >
          {uploading ? "Uploading..." : "Upload"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default FileUploadModal;
