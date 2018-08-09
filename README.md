# Company repos on GitHub 

This is a demo app to show my expertise with React, React Router, Redux, Redux Saga, Styled Components and the rest.

It took:

- TypeScript
- React
- React Router
- React Redux
- Redux Saga,
- Styled Components
- Webpack 
- Yarn
- Some fresh beer

## How to run the app
As it's a client app, you will need Node (latest version or something that is not too ancient should work).
I prefer to use Yarn as my package manager these days but NPM should work just fine.

When you have Node installed here are next steps:

1. Run `yarn install` or `npm install` inside the folder. It will install all deps.
2. Run `yarn start` or `npm start` which will compile the code and run the app on some port of localhost. 
By default it's 9001, but if busy, it will be different, copied automatically to clipboard on compilation, you will see the message. 
In the simplest case, if you don't copy anything to clipboard during compilation, then just past in the browser address bar and it should be the right url.
3. When it compiles and you run the app, it redirects you to default organisation page, now it's facebook.
Look at some gifs in this repo inside `gifs` folder to see how it works on my macbook and don't claim it doesn't work on yours ;).

## Github API requests limitations

Github allows you to run unauthorized API requests but it's just about 60 requests per hour which is quite a low number.
It wasn't enough for me to build the app so I dug deeper with the tokens they mention and found the solution.

1. Go to [https://github.com/settings/tokens](https://github.com/settings/tokens), click `Generate new token`, copy to clipboard.
2. Copy `.env.example` to `.env` in the root of the folder and copy your token which should look like `e3308b593e828ab4b1f6a1e61cce6c8b779877c2` near `GITHUB_ACCESS_TOKEN=` so the file contents becomes something like this: `GITHUB_ACCESS_TOKEN=e3308b593e828ab4b1f6a1e61cce6c8b779877c2`. Save it.
3. Start the app with `yarn start` or `npm start`.
4. Now you have 5000 requests per hour. Is it enough?

If you don't run through this token-schmoken playgame, you still have your 60 requests which might be enough to estimate the app.
