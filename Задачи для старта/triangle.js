function triangle(a,b,c) {
  if ((a==b && b==c) && (a&&b&&c !== 0) && (a&&b&&c <= 10)){
    console.log("Равносторонний треугольник");
  }
  else if ((a>10) || (b > 10) || (c > 10)) {
    console.log("Нет такого треугольника");
  }
  else if ((a==0) || (b==0) || (c==0)) {
    console.log("Треугольник не может иметь сторону, длина которой 0");
  }
  else {
   console.log("Верный треугольник"); 
  }
}
console.log(triangle(5,3,4)); 
