"use client";
import { Button } from "@/components/ui/button";
import { IStudent } from "@/app/service/types";
import { setUserInfo } from "@/app/redux/slices/studentInfoSlice";
import { useDispatch } from "react-redux";
import ConfettiExplosion from "react-confetti-explosion";
import { useToast } from "@/hooks/use-toast";
import { editStudent } from "@/app/service/api";
import { useRouter } from "next/navigation";
interface WelcomeScreenProps {
  userInfo: IStudent;
}

const WelcomeScreen = ({ userInfo }: WelcomeScreenProps) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const router = useRouter();

  const handleGetStarted = async () => {
    try {
      const formData = new FormData();
      formData.append("usn", userInfo.usn);
      formData.append("didFirstLogin", "true");
      const res = await editStudent(formData, true);
      if (res.error) {
        toast({
          title: "Error",
          description: res.error,
        });
      } else {
        router.push("/student/");
        dispatch(setUserInfo(res.user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-2xl mx-auto p-8 text-center space-y-6">
        <div className="w-full flex justify-between items-center">
          <ConfettiExplosion
            force={0.8}
            duration={5000}
            particleCount={100}
            width={3000}
          />{" "}
          <ConfettiExplosion
            force={0.8}
            duration={5000}
            particleCount={100}
            width={3000}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to Your Library Portal, {userInfo.firstname}!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're excited to have you join our digital library community. Here
            you can:
          </p>
          <ul className="text-left space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-blue-500 dark:text-blue-400">•</span>
              Browse and borrow books from our extensive collection
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500 dark:text-blue-400">•</span>
              Track your borrowed items and due dates
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500 dark:text-blue-400">•</span>
              Access digital resources and study materials
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500 dark:text-blue-400">•</span>
              Receive notifications about new arrivals and due dates
            </li>
          </ul>
        </div>
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
