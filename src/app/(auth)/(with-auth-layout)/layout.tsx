export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <h2>Inner Layout</h2>
        {children}
      </div>
    </div>
  );
}