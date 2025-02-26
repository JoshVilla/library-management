"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { REGEX } from "@/utils/constant";
import { Button } from "@/components/ui/button";
import PasswordIndicator from "@/components/passwordIndicator/page";
import { login, register } from "../service/api";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const form = useForm();
  const router = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [loading, setLoading] = useState(false);

  // Watch form values
  const usn = form.watch("usn") || "";
  const password = form.watch("password") || "";
  const confirmPassword = form.watch("confirmPassword") || "";

  // Check if all fields are filled and passwords match
  const isFormValid =
    usn.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    isPasswordValid &&
    password === confirmPassword;

  const onSubmit = async (data) => {
    if (!isFormValid) return;
    setLoading(true);
    const { confirmPassword, ...payload } = data;

    try {
      const res = await register(payload);

      if (res.isSuccess) {
        form.reset();
        toast({
          title: "Success",
          description: res.message,
          variant: "default", // For success, use "default"
        });
        return; // Prevents the second toast from triggering
      }

      // Error case
      toast({
        title: "Register Failed",
        description: res.message,
        variant: "destructive", // Use "destructive" for errors
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full border flex items-center justify-center">
      <div className="w-96">
        <Button variant="outline" size="sm" onClick={() => router.back()}>
          <ArrowLeft />
        </Button>
        <div className="text-center font-bold text-2xl">Register</div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            {/* USN Field */}
            <FormField
              control={form.control}
              name="usn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>USN</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Input USN"
                      value={field.value || ""}
                      onChange={(event) => {
                        let val = event.target.value;
                        val = val.replace(REGEX.NUMBER_ONLY, "");
                        field.onChange(val);
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        value={field.value || ""}
                        type={showPassword ? "text" : "password"}
                        placeholder="Input Password"
                        className="pr-10"
                        onChange={field.onChange}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} className="text-gray-500" />
                        ) : (
                          <Eye size={18} className="text-gray-500" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Password Strength Indicator */}
            <PasswordIndicator
              password={password}
              isValid={setIsPasswordValid}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        value={field.value || ""}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Input Password Again"
                        className="pr-10"
                        onChange={field.onChange}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} className="text-gray-500" />
                        ) : (
                          <Eye size={18} className="text-gray-500" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" disabled={!isFormValid}>
              {loading ? (
                <Image
                  src="/assets/Loading.gif"
                  width={20}
                  height={20}
                  alt="loading"
                />
              ) : (
                "Register"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
