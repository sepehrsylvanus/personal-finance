"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "../ui/form";

const LoginForm = () => {
  const LoginFormSchema = z.object({
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });
  const loginForm = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (loginData: z.infer<typeof LoginFormSchema>) => {
    console.log({ loginData });
  };

  return (
    <Form {...loginForm}>
      <form
        onSubmit={loginForm.handleSubmit(onSubmit)}
        id="inputContainer"
        className="flex flex-col gap-200"
      >
        <FormField
          name="email"
          control={loginForm.control}
          render={({ field }) => (
            <div className="inputGroup">
              <Label>Email</Label>
              <Input {...field} type="email" className="rounded-md" />
            </div>
          )}
        />
        <FormField
          name="password"
          control={loginForm.control}
          render={({ field }) => (
            <div {...field} className="inputGroup">
              <Label>Password</Label>
              <Input type="password" className="rounded-md" />
            </div>
          )}
        />
        <Button className="rounded-lg" type="submit">
          Login
        </Button>
      </form>
      <div className="flex justify-center items-center gap-100">
        <p className="opacity-50">Need to create an account?</p>
        <Link href={"/signup"} className="preset4 font-bold underline">
          Sign Up
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
