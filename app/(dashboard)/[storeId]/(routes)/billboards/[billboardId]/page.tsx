import prismadb from "@/lib/prismadb";
import BillboardForm from "./components/bilboard-form";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const bilboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={bilboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
