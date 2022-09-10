# kaffteil

### Usage
1. Install dependencies
```console

npm install
```
2. If you don't have TheCocktailDB API Key, you can [get it on TheCocktailDB website](https://www.thecocktaildb.com/) OR use the test key "1", which is free for studying purposes and cannot be used for production
3. Create a `.env.local` file inside the root folder and put your key inside:
```
REACT_APP_API_KEY=1
```

### Running the website in the development mode
```console
ionic serve
```

### Build for Android
```console
ionic build
ionic cap add android # skip on the next builds
ionic cap copy
ionic cap sync
ionic cap open android
```
