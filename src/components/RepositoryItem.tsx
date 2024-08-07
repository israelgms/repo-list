import { githubLanguageColors } from "@/constants/githubLanguageColors";
import { Heart } from "lucide-react";

export function RepositoryItem(props) {
  const language = props.language;
  console.log("language", language);

  const color = githubLanguageColors[language] || "#cccccc";

  return (
    <div className="rounded-md border border-divider p-4 relative">
      <h2>{props.name}</h2>

      <p>{props.description}</p>

      {props.language && (
        <div className="flex gap-2 items-center">
          <div
            style={{ backgroundColor: color }}
            className="rounded-full h-4 w-4"
          />
          <span>{props.language}</span>
        </div>
      )}

      <div
        style={{ backgroundColor: color }}
        className="flex items-center justify-center rounded-full h-10 w-10 absolute right-4 top-4"
      >
        <Heart />
      </div>
    </div>
  );
}
