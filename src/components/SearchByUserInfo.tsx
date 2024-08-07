import Image from "next/image";

export default function SearchByUserInfo() {
  return (
    <div className="flex flex-col gap-12 text-center items-center mt-20">
      <div>
        <h1 className="font-semibold text-neutral">
          Procure pelo login do Usuário
        </h1>
        <p className="text-neutral">
          Encontre os repositórios de algum usuário digitando no campo acima
        </p>
      </div>

      <Image
        src="/search-username.png"
        alt={"Avatar - procure um usuário"}
        width={200}
        height={200}
      />
    </div>
  );
}
