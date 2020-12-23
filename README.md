# Screen Data
[browser] Obtain screen data.

### Install
```
npm install kc-screen-data
```

### Data
- **Screen**: Whole screen data
    - **aspect:** Aspect ratio (E.g: 16:9)
    - **density:** Pixel density (E.g: 2)
    - **width:** Screen width (E.g: 1366)
    - **height:** Screen height (E.g: 768)
    - **orientation:** "landscape" or "portrait"
    - **resolution:** width and height string (E.g: 1366x768)

- **Viewport**: Browser's viewport data
    - **aspect:** Aspect ratio (E.g: 16:9)
    - **density:** Pixel density (E.g: 2)
    - **width:** Viewport width (E.g: 1366)
    - **height:** Viewport height (E.g: 768)
    - **orientation:** "landscape" or "portrait"
    - **resolution:** width and height string (E.g: 1366x768)

### Use
```js
var sc = screen-data();
console.log(sc);
```
