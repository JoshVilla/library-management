"use client";
import React, { useEffect, useState, useMemo } from "react";

const PasswordIndicator = ({ password, isValid }) => {
  const [passwordValid, setPasswordValid] = useState({
    hasUppercase: false,
    hasSpecialChar: false,
    hasNumber: false,
    hasLowerCase: false,
    hasMinLength: false,
  });

  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  useEffect(() => {
    setPasswordValid({
      hasMinLength: password?.length >= minLength,
      hasUppercase: uppercaseRegex.test(password),
      hasLowerCase: lowercaseRegex.test(password),
      hasNumber: digitRegex.test(password),
      hasSpecialChar: specialCharRegex.test(password),
    });
  }, [password]);

  const isPasswordValid = useMemo(
    () => Object.values(passwordValid).every((value) => value === true),
    [passwordValid]
  );

  useEffect(() => {
    if (typeof isValid === "function") {
      isValid(isPasswordValid);
    }
  }, [isPasswordValid]);

  const validationMessages = [
    {
      condition: passwordValid.hasMinLength,
      message: `Password must be at least ${minLength} characters long.`,
    },
    {
      condition: passwordValid.hasUppercase,
      message: "Password must contain at least one uppercase letter.",
    },
    {
      condition: passwordValid.hasLowerCase,
      message: "Password must contain at least one lowercase letter.",
    },
    {
      condition: passwordValid.hasNumber,
      message: "Password must contain at least one number.",
    },
    {
      condition: passwordValid.hasSpecialChar,
      message: "Password must contain at least one special character.",
    },
  ];

  return (
    <div className="flex flex-col gap-2 p-2">
      {validationMessages.map(({ condition, message }) => (
        <span
          key={message}
          className={`text-sm ${condition ? "text-green-700" : "text-red-700"}`}
        >
          {message}
        </span>
      ))}
    </div>
  );
};

export default PasswordIndicator;
