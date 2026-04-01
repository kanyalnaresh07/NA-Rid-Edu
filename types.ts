export enum PageView {
  HOME = 'home',
  GLOSSARY = 'glossary',
  CATEGORY_DETAIL = 'category_detail',
  ABOUT = 'about',
  QUIZ = 'quiz',
  PHOTOS = 'photos',
  LOGIN = 'login',
  SIGNUP = 'signup',
  DASHBOARD = 'dashboard',
  CONTACT = 'contact',
  PRIVACY = 'privacy'
}

export type Language = 'en' | 'hi';

export interface GlossaryTerm {
  id: string;
  title: string;
  description?: string;
  category: string;
  subItems: string[];
  details?: Record<string, DepartmentDetail>;
}

export interface DepartmentDetail {
  id: string;
  name: string;
  role: string;
  responsibilities: { groupName?: string; items: string[] }[];
  responsiblePersons: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface QuizCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: number;
  questions: QuizQuestion[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  subcategories: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  terms: Term[];
}

export interface Term {
  id: string;
  term: string;
  definition: string;
  example?: string;
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string;
    email?: string | null;
    emailVerified?: boolean;
    isAnonymous?: boolean;
    tenantId?: string | null;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}
