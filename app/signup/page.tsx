import SignUpForm from "@/components/auth/SignUpForm";

export default function Signup() {
  return (
    <div className=" h-screen grid place-content-center items-center place-items-center bg-beige lg:grid-cols-2">
      <div
        id="mainContainer"
        className="bg-white rounded-xl py-6 px-5 flex flex-col gap-400 max-w-[496px] w-full h-fit"
      >
        <h1 className="preset1">Sign Up</h1>
        <SignUpForm />
      </div>
      <div className="flex items-center justify-center h-screen py-10">
        <img
          src={"/auth/loginCanvas.svg"}
          alt="loginCanvas"
          className="rounded-xl max-h-full"
        />
      </div>
    </div>
  );
}
