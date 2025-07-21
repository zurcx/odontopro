import SiderbarDashboard from "./_components/sidebar"

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiderbarDashboard>
        {children}
      </SiderbarDashboard>
    </>
  )
}
