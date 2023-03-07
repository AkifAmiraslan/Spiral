function spiral(n, i, j) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push([]);
      for (let j = 0; j < n; j++) {
        matrix[i].push(0);
      }
    }
    let num = 1;
    let basSetir = 0;
    let sonSetir = n - 1;
    let basSutun = 0;
    let sonSutun = n - 1;
  
    while (basSetir <= sonSetir && basSutun <= sonSutun) {
      // basdaki setir duzelt
      for (let i = basSutun; i <= sonSutun; i++) {
        matrix[basSetir][i] = num++;
      }
      basSetir++;
  
      // sag teref 
      for (let i = basSetir; i <= sonSetir; i++) {
        matrix[i][sonSutun] = num++;
      }
      sonSutun--;
  
      // asagi sira
      for (let i = sonSutun; i >= basSutun; i--) {
        matrix[sonSetir][i] = num++;
      }
      sonSetir--;
  
      // sol teref 
      for (let i = sonSetir; i >= basSetir; i--) {
        matrix[i][basSutun] = num++;
      }
      basSutun++;
    }
  
  return matrix[i - 1][j - 1];
  }
  console.log(spiral(5,4,2))