export class Frame {
  constructor(e, h) {
    // e là mảng các ptu, h là mảng chỉ số để làm nổi bật
    this.elements = [];
    this.highlights = [];
    this.information = "";

    // nếu e, h == undefined hoặc [] thì elements = highlights = []
    // Ngược lại
    if (e != undefined && e.length) this.elements = e;
    if (h != undefined && h.length) this.highlights = h;
  }
}

class Animation {
  constructor() {
    this.frames = [];
  }
  addFrame(frame) {
    const temp = JSON.parse(JSON.stringify(frame)); // Only store a copy
    this.frames.push(temp);
  }
  getFrames() {
    return this.frames;
  }
}

export default class Algorithms {
  // nhận vào (mảng e, hướng sắp order: asc, desc)
  // eg: mảng e = [5,3,8,4,6]
  static bubble(e) {
    let elements = e; // mảng truyền vào
    let solution = new Animation(); //để lưu trữ các bước sắp xếp.
    let swapped = false;
    for (let i = 0; i < elements.length; ++i) {
      swapped = false;
      for (let j = 0; j < elements.length - 1; ++j) {
        solution.addFrame(new Frame([], [j, j + 1])); // truyền mảng e rỗng, mảng h là ptu nổi bật
        if (elements[j] > elements[j + 1]) {
          swapped = true;
          const temp = elements[j];
          elements[j] = elements[j + 1];
          elements[j + 1] = temp;

          solution.addFrame(new Frame([j, j + 1], [j, j + 1]));
        }
      }

      if (!swapped) break;
    }
    return solution; // trả về Ojb chứa frames[các bước sắp xếp]
  }

  static selection(e) {
    let elements = e; // mảng truyền vào
    let solution = new Animation(); //để lưu trữ các bước sắp xếp.

    for (let i = 0; i < elements.length - 1; i++) {
      let min_idx = i;
      for (let j = i + 1; j < elements.length; j++) {
        solution.addFrame(new Frame([], [min_idx, j]));
        if (elements[j] < elements[min_idx]) min_idx = j;
      }
      if (min_idx != i) {
        solution.addFrame(new Frame([i, min_idx], [i, min_idx]));
        const temp = elements[i];
        elements[i] = elements[min_idx];
        elements[min_idx] = temp;
      }
    }
    return solution;
  }

  static insertion(e) {
    let elements = e;
    let solution = new Animation();

    for (let i = 1; i < elements.length; ++i) {
      let key = elements[i];
      let j = i - 1;

      solution.addFrame(new Frame([], [j, j + 1]));

      while (j >=0 && elements[j] > key) {
        solution.addFrame(new Frame([], [j, j + 1]));
        elements[j + 1] = elements[j];
        solution.addFrame(new Frame([j, j + 1], [j, j + 1]));
        j = j - 1;
      }
  // changing the final value don't affect the animation
      elements[j + 1] = key;
    }

    return solution;
  }
}
