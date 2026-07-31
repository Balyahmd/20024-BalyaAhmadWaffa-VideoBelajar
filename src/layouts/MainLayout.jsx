function MainLayout({ children }) {
  return (
    <main className="bg-main-secondary-100 min-h-screen">
      <div className="flex items-center justify-center flex-col gap-5 md:gap-10 p-6 md:p-20">
        {children}
      </div>
    </main>
  );
}

export default MainLayout;
