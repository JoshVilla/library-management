"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, // ✅ Added FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminLogin = () => {
  const form = useForm();

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const username = form.watch("username");
  const password = form.watch("password");

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
              className="flex justify-center flex-col gap-4"
              onSubmit={form.handleSubmit(handleLogin)}
            >
              {/* ✅ Updated FormField for Username */}
              <FormField
                control={form.control}
                name="username"
                rules={{ required: "Username is required" }}
                render={({ field }: any) => (
                  // @ts-ignore
                  <FormItem>
                    {/*@ts-ignore*/}
                    <FormLabel>Username</FormLabel>
                    {/*@ts-ignore*/}
                    <FormControl>
                      <Input placeholder="Input Username" {...field} />
                    </FormControl>
                    <FormMessage /> {/* ✅ Automatically displays errors */}
                  </FormItem>
                )}
              />

              {/* ✅ Updated FormField for Password */}
              <FormField
                control={form.control}
                name="password"
                rules={{ required: "Password is required" }}
                render={({ field }: any) => (
                  //@ts-ignore
                  <FormItem>
                    {/*@ts-ignore*/}
                    <FormLabel>Password</FormLabel>
                    {/*@ts-ignore*/}
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Input Password"
                          {...field}
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
                    <FormMessage /> {/* ✅ Automatically displays errors */}
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
