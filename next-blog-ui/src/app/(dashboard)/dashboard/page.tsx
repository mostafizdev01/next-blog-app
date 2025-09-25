import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";
import { getUserSession } from "@/helpers/getUserSession";

const DashboardHomePage = async () => {

  const session = await getUserSession();
  console.log(session)

  return (
    <div className=" w-full text-center flex flex-col justify-center items-center">
      <h1 className=" text-2xl my-10 font-bold">Dashboard Home Page</h1>
      <Card className="w-full max-w-lg shadow-lg rounded-2xl border border-gray-200">
        <CardHeader className="flex items-center gap-4">
          <div>
            <Image src={session?.user?.image as string} width={80} height={80} className=" rounded-full" alt="Profile photo" />
          </div>
          {/* <Avatar className="w-16 h-16">
            <AvatarImage src={session?.user?.image as string} alt="profile photo"/>
            {/* <AvatarFallback>{name.charAt(0)}</AvatarFallback> */}
          {/* </Avatar> */} 
          <div>
            <CardTitle className="text-lg font-semibold">{session?.user?.name}</CardTitle>
            <p className="text-sm text-gray-500">{session?.user?.email}</p>
          </div>
        </CardHeader>
        <CardContent>
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">
            View Profile
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHomePage;
