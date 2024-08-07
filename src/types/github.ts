export type RepositoryItemProps = {
  id: string;
  name: string;
  language?: string;
  description?: string;
  updated_at: string;
};

export type RepositoryListProps = Array<RepositoryItemProps>;

export type UserData = {
  name?: string;
  login: string;
  bio?: string;
  avatar_url: string;
};
