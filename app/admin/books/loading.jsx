import LoadingComp from "@/components/loading/loadingComp";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="h-screen flex items-center justify-center">
      <LoadingComp />
    </div>
  );
}
