export type RepositoryItemProps = {
  id: string;
  name: string;
  language?: string;
  description?: string;
};

export type RepositoryListProps = Array<RepositoryItemProps>;
