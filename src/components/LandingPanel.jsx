function LandingPanel() {
  return (
    <div className="mx-auto mt-32 w-full max-w-2xl">
      <div className="relative w-full rounded-3xl bg-gradient-to-tr from-main-blue to-[#0078C5]">
        <div className=" mx-auto flex max-w-lg flex-col items-center justify-center px-6 py-12 text-center">
          <div className="space-y-8">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Explore a better way to learn and memorize new words
            </h1>
            <div className="transition-all hover:scale-105">
              <a
                className=" rounded-full bg-white py-3 px-6 text-base font-semibold text-main-blue "
                href="/dashboard">
                Let's started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPanel;
