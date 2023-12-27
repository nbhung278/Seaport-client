"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "@/graphql/actions/login.action";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import imageSocial from "../../../public/assets/images/social-4.jpg";
import Image from "next/image";

const FormSchema = z.object({
  email: z
    .string()
    .email({
      message: "This field must have type email.",
    })
    .max(64, {
      message: "This field can only have a maximum of 64 characters.",
    }),
});
const ForgotPassword = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const loginData = {
      email: data.email || "",
    };
    try {
      const res: any = await LoginUserMutation({
        variables: loginData,
      });
      if (res.data) {
        toast.success("Login successfully");
        Cookies.set("access_token", res.data.login?.accessToken);
        Cookies.set("refresh_token", res.data.login?.refreshToken);
        router.push("/");
        form.reset();
      } else {
        if (res?.errors?.length > 0) {
          toast.error(res?.errors[0]?.message, {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          });
        }
      }
    } catch (error: any) {
      toast.error(error?.message, {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      });
    }
  };

  const [LoginUserMutation, { loading, error, data }] = useMutation(LOGIN_USER);
  return (
    <div className="flex flex-row items-center justify-between w-screen h-screen">
      <div className=" h-full flex-1 max-md:hidden">
        <Image
          src={imageSocial}
          alt="loginImage"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center xl:px-[100px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-5/6 space-y-5"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-lg font-semibold">Forgot password</h1>
              <p className="text-[13px] text-center">
                Enter your email to reset password
              </p>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex flex-row justify-end">
              <Link href={"/login"}>
                <p className="text-[14px] cursor-pointer">Back to Login</p>
              </Link>
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
        <div className="mt-5 w-5/6 flex flex-col gap-4 items-center">
          <p>
            Don’t have an account?{" "}
            <Link href="register">
              <span className="cursor-pointer text-[blue]">Register</span>
            </Link>
          </p>
          <p className="text-[13px] text-center">
            By clicking continue, you agree to our{" "}
            <span className="underline  cursor-pointer">Terms of Service</span>{" "}
            and{" "}
            <span className="underline  cursor-pointer">Privacy Policy</span> .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
