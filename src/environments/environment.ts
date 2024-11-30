// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const API = 'http://localhost:3000';

export const environment = {
  production: false,
  supabaseUrl: 'https://uvvncaipgvbcsbnajrjp.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2dm5jYWlwZ3ZiY3NibmFqcmpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5ODE2NTQsImV4cCI6MjA0ODU1NzY1NH0.5fMdnMFSoYLeTLJReUW_qSDjizHX8qmSpoTbFnV6n8w',
  endpoints:{
    api:API,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
