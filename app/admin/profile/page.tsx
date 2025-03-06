"use client";
import TitlePage from "@/components/titlePage/titlePage";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { IAdmin } from "@/app/service/types";

const AdminProfile = () => {
  const state = useSelector(
    (state: RootState) => state.adminInfo.adminInfo
  ) as IAdmin;
  const [profile, setProfile] = useState<File | null>(null);
  const handleChangeProfile = () => {
    console.log(profile);
  };
  return (
    <div>
      <TitlePage title="Admin Profile" />
      <div className="w-full mt-10 flex items-center ">
        <Card>
          <CardHeader>
            {/* <CardTitle className="text-xl font-bold">Profile</CardTitle> */}
            <CardContent>
              <Image
                src={state.pictureUrl ?? "/assets/admin-profile-default.png"}
                alt="profile"
                width={150}
                height={150}
                className="rounded-full mt-4 mx-auto"
              />
            </CardContent>
          </CardHeader>
          <CardFooter>
            <div className="flex flex-col">
              <label htmlFor="profile">Change Profile</label>
              <Input
                type="file"
                id="profile"
                onChange={(e) => setProfile(e.target.files?.[0] || null)}
              />
              {profile && (
                <Button
                  className="mx-auto"
                  size="sm"
                  onClick={handleChangeProfile}
                >
                  Change Profile
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminProfile;
