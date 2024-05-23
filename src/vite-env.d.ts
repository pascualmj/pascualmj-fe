/// <reference types="vite/client" />

declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
}
