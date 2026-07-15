/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public production origin used to build per-route canonical URLs. */
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
