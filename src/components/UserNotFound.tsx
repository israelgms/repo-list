import Image from "next/image";

interface UserNotFoundProps {
  userName?: string;
}

export function UserNotFound({ userName }: UserNotFoundProps) {
  return (
    <div className="flex flex-col gap-12 text-center items-center mt-20">
      <div>
        <h1 className="font-semibold text-primary">"{userName}"</h1>
        <h2 className="font-semibold text-neutral">
          Nenhum usuário encontrado
        </h2>
        <p className="text-neutral">
          Verifique se a escrita está correta ou tente novamente
        </p>
      </div>

      <Image
        src="/search-user-not-found.png"
        alt={"Avatar - usuário não encontrado"}
        width={200}
        height={200}
      />
    </div>
  );
}
