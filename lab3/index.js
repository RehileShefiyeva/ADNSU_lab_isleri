function fun() {
    var a, b, y, x, w;
    a = Number(document.form.a.value);
    b = Number(document.form.b.value);
    x = Number(document.form.x.value);
    y = b * Math.pow(Math.tan(x), 2) - a / Math.pow(Math.sin(x / a), 2);
    w = Math.sin(Math.sqrt(4 * Math.pow(y, 3) + x) / (Math.pow(y, 2) - 1));
    document.form.y.value = y;
    document.form.w.value = w;
  }