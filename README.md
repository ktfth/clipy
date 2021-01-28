# Clipy

## Usage

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <button id="btn" type="button">Copy</button>
    <script src="../dist/clipy.min.js"></script>
    <script>
      const btn = document.getElementById('btn');
      btn.addEventListener('click', () => {
        clipy.copy('clipy');
      });
    </script>
  </body>
</html>
```
