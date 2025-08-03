import SiderbarLayout from "./_components/sidebar";

export default function DashboardLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <SiderbarLayout>
        {children}
      </SiderbarLayout>
    </>)
}
