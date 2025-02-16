"use client";

import TitlePage from "@/components/titlePage/titlePage";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { renderDate } from "@/utils/helpers";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { editStudent } from "@/app/service/api";
import { useToast } from "@/hooks/use-toast";
import { setUserInfo } from "@/app/redux/slices/studentInfoSlice";
import { Eye, EyeOff } from "lucide-react";

const Page = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const state = useSelector((state) => state.user.userInfo);
  const form = useForm({ defaultValues: state });
  const passworForm = useForm({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [editMode, setEditMode] = useState({
    firstname: false,
    middleinitial: false,
    lastname: false,
    image: false,
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const validateImageFile = (file) => {
    // Check if file exists
    if (!file) return false;

    // Check file type
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please select a JPG or PNG image",
        className: "bg-red-500 text-white",
      });
      return false;
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image under 5MB",
        className: "bg-red-500 text-white",
      });
      return false;
    }

    return true;
  };

  const handleSave = async (data) => {
    try {
      const filteredData = getParams(data);
      setIsLoading(true);
      if (filteredData.picture && !validateImageFile(filteredData.picture)) {
        return;
      }

      const formData = new FormData();
      if (filteredData.picture) {
        formData.append("picture", filteredData.picture);
      }

      // Make sure to include USN in the form data
      formData.append("usn", state.usn);
      formData.append("id", state._id);

      Object.keys(filteredData).forEach((key) => {
        if (key !== "picture" && filteredData[key]) {
          formData.append(key, filteredData[key]);
        }
      });

      const response = await editStudent(formData, true);

      if (response.user) {
        // Update Redux store with new user data
        dispatch(
          setUserInfo({
            ...state,
            ...response.user,
          })
        );

        // Reset edit modes
        setEditMode({
          firstname: false,
          middleinitial: false,
          lastname: false,
          image: false,
        });

        toast({
          title: "Success",
          description: "Profile updated successfully",
          className: "bg-green-500 text-white",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: error.message || "Failed to update profile",
        className: "bg-red-500 text-white",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!Object.values(editMode).includes(true)) {
      form.reset(state); // Reset form when exiting all edit modes
    }
  }, [editMode, state, form]);

  const toggleEditMode = (field) =>
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));

  const profileFields = [
    { name: "firstname", label: "Firstname" },
    { name: "middleinitial", label: "Middle Initial" },
    { name: "lastname", label: "Lastname" },
  ];

  const getParams = (data) => {
    const allowedFields = profileFields.map((field) => field.name);
    const filteredProfile = Object.fromEntries(
      Object.entries(data).filter(([key]) =>
        [...allowedFields, "picture"].includes(key)
      )
    );

    return filteredProfile;
  };

  return (
    <div>
      <TitlePage title="Profile" hasBack />
      <div className="mt-10 flex">
        <div className="flex-1">
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSave)}
                className="flex gap-10"
              >
                {/* Profile Image */}
                <div className="text-center">
                  <Image
                    src={state.pictureUrl ?? "/assets/defaultProfile.jpg"}
                    width={300}
                    height={300}
                    alt="profile"
                    className="w-64 h-64 rounded-full object-cover"
                    priority
                  />
                  {editMode["image"] && (
                    <FormField
                      control={form.control}
                      name="picture"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="space-y-2">
                              <Input
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                onChange={(event) => {
                                  const file = event.target.files?.[0];
                                  if (file && validateImageFile(file)) {
                                    form.setValue("picture", file); // Explicitly set file in form
                                  } else {
                                    event.target.value = ""; // Reset input if validation fails
                                  }
                                }}
                              />
                              <p className="text-sm text-gray-500">
                                Accepted formats: JPG, PNG (Max 5MB)
                              </p>
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  )}
                  <div
                    className="text-blue-400 text-xs cursor-pointer hover:underline mt-6"
                    onClick={() => toggleEditMode("image")}
                  >
                    {editMode["image"] ? "Cancel" : "Edit"}
                  </div>
                </div>

                {/* Profile Form */}
                <div>
                  {profileFields.map(({ name, label }) => (
                    <div
                      key={name}
                      className="flex items-end  justify-between w-[100px] mt-4"
                    >
                      {editMode[name] ? (
                        <FormField
                          control={form.control}
                          name={name}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{label}</FormLabel>
                              <FormControl>
                                <Input {...field} className="h-8 w-64" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      ) : (
                        <div>
                          <div className="text-gray-500 text-sm">{label}</div>
                          <div>{state[name]}</div>
                        </div>
                      )}
                      <div
                        className="text-blue-400 text-xs cursor-pointer hover:underline"
                        onClick={() => toggleEditMode(name)}
                      >
                        {editMode[name] ? "Cancel" : "Edit"}
                      </div>
                    </div>
                  ))}
                  <div className="mt-10">
                    {Object.values(editMode).includes(true) && (
                      <Button>{isLoading ? "Saving..." : "Save"}</Button>
                    )}
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <div className="text-lg font-semibold">Other Information</div>
            <Separator />
            <div className="space-y-4 mt-6">
              <div className="text-sm">
                <span className="text-gray-500">USN: </span>
                {state.usn}
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Registered Since: </span>
                {renderDate(state.createdAt)}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-lg font-semibold">Change Password</div>
            <Separator />
            <Form {...passworForm}>
              <form action="">
                <FormField
                  control={passworForm.control}
                  name="currentPassword"
                  render={({ field: { onChange, value, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>Current Password</FormLabel>
                      <FormControl>
                        <div className="relative w-full max-w-md">
                          <Input
                            placeholder="Enter your current password"
                            type={showPassword.current ? "text" : "password"}
                            {...fieldProps}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black focus:outline-none"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff size={20} />
                            ) : (
                              <Eye size={20} />
                            )}
                          </button>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
