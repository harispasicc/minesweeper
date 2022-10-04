function Revealed(arr, x, y, newNonMinesCount) {
  if (arr[x][y].Revealed) {
    return arr;
  }

  let flipped = [];
  flipped.push(arr[x][y]);
  while (flipped.length !== 0) {
    let single = flipped.pop();

    if (!single.Revealed) {
      newNonMinesCount--;
      single.Revealed = true;
    }

    if (single.value !== 0) {
      break;
    }

    if (
      single.x > 0 &&
      single.y > 0 &&
      arr[single.x - 1][single.y - 1].value === 0 &&
      !arr[single.x - 1][single.y - 1].Revealed
    ) {
      flipped.push(arr[single.x - 1][single.y - 1]);
    }
    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      arr[single.x + 1][single.y + 1].value === 0 &&
      !arr[single.x + 1][single.y + 1].Revealed
    ) {
      flipped.push(arr[single.x + 1][single.y + 1]);
    }
    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      arr[single.x + 1][single.y - 1].value === 0 &&
      !arr[single.x + 1][single.y - 1].Revealed
    ) {
      flipped.push(arr[single.x + 1][single.y - 1]);
    }
    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      arr[single.x - 1][single.y + 1].value === 0 &&
      !arr[single.x - 1][single.y + 1].Revealed
    ) {
      flipped.push(arr[single.x - 1][single.y + 1]);
    }

    if (
      single.x > 0 &&
      arr[single.x - 1][single.y].value === 0 &&
      !arr[single.x - 1][single.y].Revealed
    ) {
      flipped.push(arr[single.x - 1][single.y]);
    }
    if (
      single.x < arr.length - 1 &&
      arr[single.x + 1][single.y].value === 0 &&
      !arr[single.x + 1][single.y].Revealed
    ) {
      flipped.push(arr[single.x + 1][single.y]);
    }
    if (
      single.y > 0 &&
      arr[single.x][single.y - 1].value === 0 &&
      !arr[single.x][single.y - 1].Revealed
    ) {
      flipped.push(arr[single.x][single.y - 1]);
    }
    if (
      single.y < arr[0].length - 1 &&
      arr[single.x][single.y + 1].value === 0 &&
      !arr[single.x][single.y + 1].Revealed
    ) {
      flipped.push(arr[single.x][single.y + 1]);
    }

    if (
      single.x > 0 &&
      single.y > 0 &&
      !arr[single.x - 1][single.y - 1].Revealed
    ) {
      arr[single.x - 1][single.y - 1].Revealed = true;
      newNonMinesCount--;
    }

    if (single.y > 0 && !arr[single.x][single.y - 1].Revealed) {
      arr[single.x][single.y - 1].Revealed = true;
      newNonMinesCount--;
    }

    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      !arr[single.x + 1][single.y - 1].Revealed
    ) {
      arr[single.x + 1][single.y - 1].Revealed = true;
      newNonMinesCount--;
    }

    if (single.x > 0 && !arr[single.x - 1][single.y].Revealed) {
      arr[single.x - 1][single.y].Revealed = true;
      newNonMinesCount--;
    }

    if (single.x < arr.length - 1 && !arr[single.x + 1][single.y].Revealed) {
      arr[single.x + 1][single.y].Revealed = true;
      newNonMinesCount--;
    }

    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x - 1][single.y + 1].Revealed
    ) {
      arr[single.x - 1][single.y + 1].Revealed = true;
      newNonMinesCount--;
    }

    if (single.y < arr[0].length - 1 && !arr[single.x][single.y + 1].Revealed) {
      arr[single.x][single.y + 1].Revealed = true;
      newNonMinesCount--;
    }

    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x + 1][single.y + 1].Revealed
    ) {
      arr[single.x + 1][single.y + 1].Revealed = true;
      newNonMinesCount--;
    }
  }
  return { arr, newNonMinesCount };
}

export default Revealed;
