export default function TodosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>This Is Todos Page</div>
      {children}
    </div>
  );
}

// 01:24:31