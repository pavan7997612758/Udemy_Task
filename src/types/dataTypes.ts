export interface Achievement {
    labelText: string;
    description: string;
    contentUrl: string;
    contentUrlText: string;
    contents: {
      heading: string;
      description: string;
      image: { url: string };
    }[];
    trackingId: string;
  }
  