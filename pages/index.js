import Header from "../components/Header";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

export default function Home() {
  /** Developed by paco used to set theme to dark or light mode using simple steps. */
  const { resolvedTheme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/** since header is a componenet that would be used across pages hence I was thinking right it extracting that out as a compoenent */}
      <Header />
      <div>
        <div>
          <div>Rishabh Jain</div>
          {/** Style sundial differently in this */}
          <div>Engineer at Sundial</div>
          <div>
            Currently helping companies make better decision with there data.
            Avid learner
          </div>
        </div>
        <div>Image</div>
      </div>
    </div>
  );
}
