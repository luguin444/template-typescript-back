import '@config/env';
import { init } from './app';

async function initServer(): Promise<void> {
  const app = await init();
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
}

initServer();
