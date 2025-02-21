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

const Login = () => {
  const form = useForm();
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      const res = await login(data);
      if (!res.isSuccess) {
        toast({
          title: "Login Failed",
          description: res.message,
          className: "bg-red-500 text-white",
        });
      } else if (res?.user.length === 0) {
        toast({
          title: "Login Failed",
          description: "Check your credentials and try again.",
          className: "bg-red-500 text-white",
        });
      } else {
        router.push("/student/");
        dispatch(setUserInfo(res.user[0]));
        toast({
          title: "Login Successful",
          description: "Welcome back!",
          className: "bg-black text-white",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong, please try again later.",
        className: "bg-red text-white",
      });
    } finally {
      setLoading(false);
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
                name="usn"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>USN</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Input USN"
                        value={value || ""}
                        onChange={(event) => {
                          let val = event.target.value;
                          val = val.replace(REGEX.NUMBER_ONLY, "");
                          onChange(val);
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
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
                  </FormItem>
                )}
              />
              <Link href="/register" className="hover:underline">
                Don't have an account? Register
              </Link>
              <Button type="submit">
                {loading ? (
                  <Image
                    unoptimized
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

export default Login;
