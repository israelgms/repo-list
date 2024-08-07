import { UserData } from "@/types/github";
import Image from "next/image";

export function UserCard({ name, login, bio, avatar_url }: UserData) {
  return (
    <div className="flex flex-col gap-6 items-center text-center border pt-10 pb-10 pr-6 pl-6 rounded-md">
      <Image
        src={avatar_url}
        alt={`${login}'s avatar`}
        width={180}
        height={180}
        className="rounded-full"
      />

      <div>
        <h1 className="text-neutral font-semibold">{name}</h1>
        <span className="text-sm text-neutral">@{login}</span>
      </div>

      <p className="text-sm text-neutral">{bio}</p>
    </div>
  );
}
