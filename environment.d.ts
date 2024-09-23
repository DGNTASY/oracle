declare global {
    namespace NodeJS {
      interface ProcessEnv {
        HELIUS_RPC: string | null;
        SUPABASE_URL: string | null;
        SUPABASE_ANON_KEY: string | null;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}