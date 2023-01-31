type PageProps = {
  params: {
    searchItem: string;
  };
};

const searchSomeItem = async (
  searchItem: PageProps['params']['searchItem'],
): Promise<TToDo[]> => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/posts?title_like=^${searchItem}`,
  ).then((res) => res.json());
};

const SearchResult = async ({ params: { searchItem } }: PageProps) => {
  const searchResult = await searchSomeItem(searchItem);
  return (
    <div>
      {searchResult.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}
    </div>
  );
};

export default SearchResult;
