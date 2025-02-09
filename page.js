import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./login/studentLogin";
import AdminLogin from "./login/adminLogin";

const Page = () => {
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-96">
          <div className="text-center font-bold text-2xl">Login</div>
          <Tabs defaultValue="studentLogin" className="mt-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="studentLogin">Student Login</TabsTrigger>
              <TabsTrigger value="admin">Admin Login</TabsTrigger>
            </TabsList>
            <TabsContent value="studentLogin">
              <Login />
            </TabsContent>
            <TabsContent value="admin">
              <AdminLogin />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Page;
