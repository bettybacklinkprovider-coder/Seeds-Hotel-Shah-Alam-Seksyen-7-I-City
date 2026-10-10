import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type PageRoute = 'home' | 'rooms' | 'about' | 'contact';

interface RouterContextType {
  currentPage: PageRoute;
  currentPath: string;
  searchParams: URLSearchParams;
  navigate: (path: string, params?: Record<string, string>) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function getRouteFromPath(path: string): PageRoute {
  const normalized = path.replace(/\/+$/, '') || '/';
  if (normalized === '/rooms') return 'rooms';
  if (normalized === '/about') return 'about';
  if (normalized === '/contact') return 'contact';
  return 'home';
}

export function getPathFromRoute(route: PageRoute): string {
  switch (route) {
    case 'rooms': return '/rooms';
    case 'about': return '/about';
    case 'contact': return '/contact';
    case 'home':
    default: return '/';
  }
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname || '/');
  const [searchParams, setSearchParams] = useState<URLSearchParams>(() => new URLSearchParams(window.location.search));

  const currentPage = getRouteFromPath(currentPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setSearchParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title dynamically based on route
  useEffect(() => {
    switch (currentPage) {
      case 'rooms':
        document.title = 'Rooms & Suites | Seeds Hotel Shah Alam Seksyen 7 I-City';
        break;
      case 'about':
        document.title = 'About Us & Location | Seeds Hotel Shah Alam Seksyen 7 I-City';
        break;
      case 'contact':
        document.title = 'Contact & Booking Inquiry | Seeds Hotel Shah Alam Seksyen 7 I-City';
        break;
      case 'home':
      default:
        document.title = 'Seeds Hotel Shah Alam Seksyen 7 I-City | Luxury Boutique Hotel';
        break;
    }
  }, [currentPage]);

  const navigate = (path: string, params?: Record<string, string>) => {
    const url = new URL(path, window.location.origin);
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        url.searchParams.set(key, val);
      });
    }

    const newPathWithSearch = url.pathname + url.search;
    if (window.location.pathname + window.location.search !== newPathWithSearch) {
      window.history.pushState(null, '', newPathWithSearch);
    }

    setCurrentPath(url.pathname);
    setSearchParams(new URLSearchParams(url.search));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPage, currentPath, searchParams, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
  className?: string;
}

export function Link({ to, params, children, className, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // allow open in new tab with meta/ctrl
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to, params);
  };

  let href = to;
  if (params) {
    const search = new URLSearchParams(params).toString();
    href = `${to}?${search}`;
  }

  return (
    <a href={href} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
}
