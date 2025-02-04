"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Form, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const SignUpForm = () => {
  const SignupFormSchema = z.object({
    name: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please provide valid email",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });
  const signupForm = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SignupFormSchema>) => {
    console.log({ data });
  };

  return (
    <Form {...signupForm}>
      <form
        onSubmit={signupForm.handleSubmit(onSubmit)}
        className="flex flex-col gap-200"
      >
        <div className="inputGroup">
          <Label>Name</Label>
          <Input type="email" className="rounded-md" />
        </div>
        <div className="inputGroup">
          <Label>Email</Label>
          <Input type="password" className="rounded-md" />
        </div>
        <div className="inputGroup">
          <Label>Create Password</Label>
          <Input type="password" className="rounded-md" />
          <FormDescription>
            Passwords must be at least 8 characters
          </FormDescription>
        </div>
        <Button className="rounded-lg">Login</Button>
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

export default SignUpForm;
