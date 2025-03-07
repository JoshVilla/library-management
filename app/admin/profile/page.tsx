"use client";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { IAdmin } from "@/app/service/types";
import { editAdmin } from "@/app/service/api";
import { setAdminInfo } from "@/app/redux/slices/adminInfoSlice";
import TitlePage from "@/components/titlePage/titlePage";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import PasswordIndicator from "@/components/passwordIndicator/page";
import { useToast } from "@/hooks/use-toast";

const AdminProfile = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const state = useSelector(
    (state: RootState) => state.adminInfo.adminInfo
  ) as IAdmin;
  const [profile, setProfile] = useState<File | null>(null);
  const [loadingState, setLoadingState] = useState({
    profile: false,
    details: false,
  });

  // Password visibility state
  const [showPasswordState, setShowPasswordState] = useState({
    currentPassword: false,
    password: false,
    confirmPassword: false,
  });
  const [formState, setFormState] = useState({
    username: state.username,
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordValid, setPasswordValid] = useState(false);

  const handleChangeProfile = async (key: string) => {
    try {
      setLoadingState({ ...loadingState, [key]: true });
      const formData = new FormData();
      formData.append("id", state._id);
      formData.append("picture", profile as Blob);
      const res = await editAdmin(formData, true);
      if (res.data) {
        setProfile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setLoadingState({ ...loadingState, [key]: false });
        dispatch(setAdminInfo(res.data));
      }
    } catch (error) {
      console.log(error);
      setLoadingState({ ...loadingState, [key]: false });
    }
  };

  const handleChangeDetails = async () => {
    try {
      setLoadingState({ ...loadingState, details: true });
      const formData = new FormData();
      formData.append("id", state._id);
      const params = Object.fromEntries(
        Object.entries(formState).filter(([key, value]) => {
          if (value !== "") {
            formData.append(key, value);
          }
          return value !== "";
        })
      );

      if (formState.currentPassword) {
        if (!formState.password || !formState.confirmPassword) {
          toast({
            title: "New Password and Confirm Password is required",
            description: "Please enter a valid password",
          });
          return;
        } else if (!passwordValid) {
          toast({
            title: "New Password is not valid",
            description: "Please enter a valid password",
          });
          return;
        }
      }

      const response = await editAdmin(formData, true);
      if (response.data) {
        setLoadingState({ ...loadingState, details: false });
        dispatch(setAdminInfo(response.data));
        toast({
          title: "Update Success",
          description: response.message,
        });
      }
      if (response.error) {
        toast({
          title: "Update Failed",
          description: response.error,
        });
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingState({ ...loadingState, details: false });
    }
  };

  return (
    <div>
      <TitlePage title="Admin Profile" />
      <div className="w-full mt-10 flex gap-10 flex-col md:flex-row">
        <Card className="md:h-[450px]">
          <CardHeader>
            <CardContent>
              <div className="rounded-full w-[200px] h-[200px] flex items-center justify-center overflow-hidden">
                <Image
                  src={state.pictureUrl ?? "/assets/admin-profile-default.png"}
                  alt="profile"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </div>
            </CardContent>
          </CardHeader>
          <CardFooter>
            <div className="flex flex-col">
              <label htmlFor="profile">Change Profile</label>
              <Input
                type="file"
                id="profile"
                ref={fileInputRef}
                onChange={(e) => setProfile(e.target.files?.[0] || null)}
              />
              {profile && (
                <Button
                  className="mx-auto mt-4"
                  size="sm"
                  onClick={() => handleChangeProfile("profile")}
                  disabled={loadingState.profile}
                >
                  {loadingState.profile ? "Updating..." : "Update Profile"}
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>

        {/* Edit Details Card */}
        <Card className="w-full md:w-1/2">
          <CardHeader>
            <CardTitle>Edit Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-col">
              <Label>Username: </Label>
              <Input
                type="text"
                placeholder="Username"
                value={formState.username}
                onChange={(e) =>
                  setFormState({ ...formState, username: e.target.value })
                }
                onBlur={() => {
                  if (formState.username.trim() === "") {
                    setFormState({ ...formState, username: state.username }); // Reset to default
                  }
                }}
              />
            </div>

            {/* Change Password Section */}
            <div className="mt-4">
              <div className="text-md font-bold mb-4">Change Password</div>
              <div className="flex gap-4 flex-col">
                <Label>Current Password: </Label>
                <div className="relative">
                  <Input
                    type={
                      showPasswordState.currentPassword ? "text" : "password"
                    }
                    placeholder="Enter Current Password"
                    className="pr-10"
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        currentPassword: e.target.value,
                      })
                    }
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    onClick={() =>
                      setShowPasswordState({
                        ...showPasswordState,
                        currentPassword: !showPasswordState.currentPassword,
                      })
                    }
                  >
                    {showPasswordState.currentPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
                <div className="flex gap-4 flex-col">
                  <Label>New Password: </Label>
                  <div className="relative">
                    <Input
                      type={showPasswordState.password ? "text" : "password"}
                      placeholder="Enter New Password"
                      className="pr-10"
                      onChange={(e) =>
                        setFormState({ ...formState, password: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                      onClick={() =>
                        setShowPasswordState({
                          ...showPasswordState,
                          password: !showPasswordState.password,
                        })
                      }
                    >
                      {showPasswordState.password ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>
                <PasswordIndicator
                  password={formState.password}
                  isValid={setPasswordValid}
                />
                <div className="flex gap-4 flex-col">
                  <Label>Confirm Password: </Label>
                  <div className="relative">
                    <Input
                      type={
                        showPasswordState.confirmPassword ? "text" : "password"
                      }
                      placeholder="Enter Confirm Password"
                      className="pr-10"
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                      onClick={() =>
                        setShowPasswordState({
                          ...showPasswordState,
                          confirmPassword: !showPasswordState.confirmPassword,
                        })
                      }
                    >
                      {showPasswordState.confirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <Button size="sm" className="mt-6" onClick={handleChangeDetails}>
                {loadingState.details ? "Updating..." : "Update"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminProfile;
