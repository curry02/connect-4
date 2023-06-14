import {useState} from 'react';

function Circle({value}) {
  if (value==null) {
    return;
    
  } if (value=="red") {
    return <span className="redCircle"> </span>
  } else {
    return  <span className="blueCircle"> </span>
  }
}

function Slot({value, onSlotClick}) {

  return (<button className="dot" onClick={onSlotClick}><Circle value={value}/></button>);
}

function Column0({array, columnClick}) {
  return (
    <>
    <div className="column column0">
    <div>
      <Slot value={array[0]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[7]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[14]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[21]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[28]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[35]} onSlotClick={columnClick}/>
    </div>
    </div>
    </>
  )
}
function Column1({array, columnClick}) {
  return (
    <>
    <div className="column column1">
    <div>
      <Slot value={array[1]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[8]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[15]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[22]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[29]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[36]} onSlotClick={columnClick}/>
    </div>
    </div>
    </>
  )
}

function Column2({array, columnClick}) {
  return (
    <>
    <div className="column column2">
    <div>
      <Slot value={array[2]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[9]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[16]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[23]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[30]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[37]} onSlotClick={columnClick}/>
    </div>
    </div>
    </>
  )
}

function Column3({array, columnClick}) {
  return (
    <>
    <div className="column column3">
    <div>
      <Slot value={array[3]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[10]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[17]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[24]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[31]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[38]} onSlotClick={columnClick}/>
    </div>
    </div>
    </>
  )
}

function Column4({array, columnClick}) {
  return (
    <>
    <div className="column column4">
    <div>
      <Slot value={array[4]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[11]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[18]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[25]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[32]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[39]} onSlotClick={columnClick}/>
    </div>
    </div>
    </>
  )
}

function Column5({array, columnClick}) {
  return (
    <>
    <div className="column column5">
    <div>
      <Slot value={array[5]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[12]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[19]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[26]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[33]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[40]} onSlotClick={columnClick}/>
    </div>
    </div>
    </>
  )
}

function Column6({array, columnClick}) {
  return (
    <>
    <div className="column column6">
    <div>
      <Slot value={array[6]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[13]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[20]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[27]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[34]} onSlotClick={columnClick}/>
    </div>
    <div>
      <Slot value={array[41]} onSlotClick={columnClick}/>
    </div>
    </div>
    </>
  )
}

export default function Board() {

  const [array, setArray] = useState(Array(42).fill(null));
  const [redNext, setNext] = useState(true);

  function columnClick(i) {
    if ((array[i])||calculateWinner(array)) {
      return;
    }

    const newArray = array.slice();
    var colour;

    if (redNext) {colour= "red";}
    else {colour = "blue";}

    for (let a=5; a>=0; a--) {
      if (array[i+7*a]==null){
        newArray[i+7*a] = colour;
        setArray(newArray);
        setNext(!redNext);
        break;
      }
    }

  }

  
  const winner = calculateWinner(array);
  let status;
  if (winner=="draw") {status= "Draw!"; }
  else if (winner) {status = "Winner: " + winner+"!";}
  else {status = "Next player: " + (redNext ? "Red" : "Blue");}

  function restart() {
    setArray(Array(42).fill(null));
    setNext(true);
  }

  return (
    <>
    <div className="title">CONNECT 4</div>
    <div className="board">
    <Column0 array={array} columnClick={()=>columnClick(0)}/>
    <Column1 array={array} columnClick={()=>columnClick(1)}/>
    <Column2 array={array} columnClick={()=>columnClick(2)}/>
    <Column3 array={array} columnClick={()=>columnClick(3)}/> 
    <Column4 array={array} columnClick={()=>columnClick(4)}/>
    <Column5 array={array} columnClick={()=>columnClick(5)}/>
    <Column6 array={array} columnClick={()=>columnClick(6)}/>
    </div>
    <div className="other">
    <button className="startOverButton" onClick={()=>restart()}>Start Over</button>
    <div className="status">{status}</div>
    </div>
    </>
  )
}


function calculateWinner(array) {
  const lines = [
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
    [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
    [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
    [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
    [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
    [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
    
    [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35],
    [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36,],
    [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37],
    [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
    [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
    [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40],
    [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],

    [14, 22, 30, 38],
    [7, 15, 23, 31], [15, 23, 31, 39],
    [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40],
    [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41],
    [2, 10, 18, 26], [10, 18, 26, 34],
    [3, 11, 19, 27],

    [3, 9, 15, 21],
    [4, 10, 16, 22], [10, 16, 22, 28],
    [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35],
    [6, 12, 18, 24], [12, 18, 24, 30], [18, 24, 30, 36],
    [13, 19, 25, 31], [19, 25, 31, 37],
    [20, 26, 32, 38]
  ];

  for (let i=0; i<lines.length; i++) {
    const [a, b, c, d] = lines[i];

    if (array[a]&&array[a]===array[b]&&array[a]===array[c]&&array[a]===array[d]) {
      return array[a];
    }
  }

  for (let i=0; i<array.length; i++) {
    if (array[i]==null) {
      return null;
    }
  }
  return "draw";
}
