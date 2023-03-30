/* eslint-disable no-console */
import { init } from './app';

async function initServer(): Promise<void> {
  try {
    const app = await init();
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

initServer();
