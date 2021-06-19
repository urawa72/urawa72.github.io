export interface PostData {
  header: {
    slug: string;
    matterData: FrontMatter;
  };
  body: string;
}

export interface FrontMatter {
  title: string;
  date: string;
}
