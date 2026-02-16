
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  imageUrl: string;
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}
