import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://91de62663785b4050d9a0d8c24ef30dd@o4508371213025280.ingest.us.sentry.io/4508371216564224",

  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
