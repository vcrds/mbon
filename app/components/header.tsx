import Image from "next/image";

export default function HeaderInitial() {
  return (
    <header className=" flex items-center justify-center h-screen max-w-7xl mx-6 max-sm:mx-2">
      <div className="flex flex-col gap-4">
        <Image
          src="ministerioBoasNovas.svg"
          width={400}
          height={382}
          alt="Logo Ministério Boas Novas Curitiba"
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-[var(--color-primary-50)] text-4xl font-bold">
            Ministério Boas Novas
          </h1>
          <span className="text-[var(--color-primary-500)] text-2xl font-bold">
            Seja bem-vindo a nossa igreja!
          </span>
        </div>
      </div>
    </header>
  );
}
