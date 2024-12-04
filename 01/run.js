const first = (input) => {
  const leftDistances = [];
  const rightDistances = [];

  const lines = input.split('\n');
  for (const line of lines) {
    const [leftNumber, rightNumber] = line.split('   ');
    leftDistances.push(parseInt(leftNumber));
    rightDistances.push(parseInt(rightNumber));
  };

  leftDistances.sort((a, b) => a - b);
  rightDistances.sort((a, b) => a - b);

  let distance = 0;
  for (let i = 0; i < leftDistances.length; i++) {
    distance += Math.abs(leftDistances[i] - rightDistances[i]);
  }

  return distance;
};

const second = (input) => {
  const leftDistances = [];
  const rightDistances = [];

  const rightListFrequency = {};

  const lines = input.split('\n');
  for (const line of lines) {
    const [leftNumber, rightNumber] = line.split('   ');
    leftDistances.push(parseInt(leftNumber));
    rightDistances.push(parseInt(rightNumber));

    if (rightListFrequency[rightNumber] === undefined) {
      rightListFrequency[rightNumber] = 1;
    } else {
      rightListFrequency[rightNumber] ++;
    }
  };

  leftDistances.sort((a, b) => a - b);
  rightDistances.sort((a, b) => a - b);

  let distance = 0;
  for (let i = 0; i < leftDistances.length; i++) {
    leftAppearsOnRightList = rightListFrequency[leftDistances[i]] || 0;
    distance += leftDistances[i] * leftAppearsOnRightList;
  }

  return distance;
};

module.exports = {first, second};