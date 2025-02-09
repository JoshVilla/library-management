"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { REGEX } from "@/utils/constant";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../service/api";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/slices/studentInfoSlice";
import { Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
  const form = useForm();

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const username = form.watch("username");
  const password = form.watch("password");

  // const handleLogin = async (data) => {
  //   try {
  //     setLoading(true);
  //     const res = await login(data);
  //     if (res.user.length === 0) {
  //       toast({
  //         title: "Login Failed",
  //         description: "Check your credentials and try again.",
  //         className: "bg-black text-white",
  //       });
  //     } else {
  //       router.push("/student/");
  //       dispatch(setUserInfo(res.user[0]));
  //       toast({
  //         title: "Login Successful",
  //         description: "Welcome back!",
  //         className: "bg-black text-white",
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast({
  //       title: "Error",
  //       description: "Something went wrong, please try again later.",
  //       className: "bg-red text-white",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      window.location.href = "/admin/";
    } else {
      toast({
        title: "Login Failed",
        description: "Check again your credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="w-96">
          <Form {...form}>
            <form
              action=""
              className="flex justify-center flex-col gap-4"
              onSubmit={form.handleSubmit(handleLogin)}
            >
              <FormField
                control={form.control}
                name="username"
                rules={{ required: "Username is required" }}
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Input Username"
                        value={value || ""}
                        onChange={(event) => {
                          onChange(event.target.value);
                        }}
                      />
                    </FormControl>
                    {form.formState.errors.username && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.username.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                rules={{ required: "Password is required" }}
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Input Password"
                          value={value || ""}
                          onChange={(event) => {
                            onChange(event.target.value);
                          }}
                          className="pr-10"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
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
                    {form.formState.errors.password && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.password.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <Button type="submit">
                {loading ? (
                  <Image
                    src="/assets/Loading.gif"
                    width={10}
                    height={10}
                    alt="loading"
                  />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
