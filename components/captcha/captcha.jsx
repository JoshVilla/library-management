"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Captcha = ({ onVerified, open, setOpen }) => {
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const { toast } = useToast();

  // Function to generate a new captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  // Verify input against CAPTCHA
  const verifyCaptcha = () => {
    const isMatch = inputCaptcha.toUpperCase() === captcha;
    onVerified(isMatch); // Pass result to parent component

    if (isMatch) {
      toast({
        title: "Success",
        description: "Captcha Verified!",
        variant: "success",
      });
      setOpen(false); // Close modal if verified
    } else {
      toast({
        title: "Error",
        description: "Incorrect Captcha!",
        variant: "destructive",
      });
    }
  };

  // Generate new captcha when modal opens
  useEffect(() => {
    if (open) generateCaptcha();
    setInputCaptcha("");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Captcha</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Input the code to continue
          </p>
        </DialogHeader>

        {/* Captcha Display */}
        <div className="flex justify-center items-center bg-gray-200 p-3 rounded-md text-2xl font-bold tracking-widest">
          {captcha}
        </div>

        {/* Input Field */}
        <Input
          type="text"
          placeholder="Enter CAPTCHA"
          value={inputCaptcha}
          onChange={(e) => setInputCaptcha(e.target.value.toUpperCase())}
          className="uppercase text-center"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <Button onClick={verifyCaptcha}>Verify</Button>
          <Button variant="outline" onClick={generateCaptcha}>
            Refresh
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Captcha;
