import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

async function getWikiResults(searchTerm: string) {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchTerm,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });

  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?${searchParams}`,
  );
  return response.json();
}

export async function generateMetaData({ params: { searchTerm } }: Props) {
  const wikiData = await getWikiResults(searchTerm);
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!wikiData?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData = await getWikiResults(searchTerm);
  const results = wikiData?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result: any) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );
  return content;
}
