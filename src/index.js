import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import DialogDemo from "./Dialog";
import { withStyles } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/core/styles";

import ButtonAppBar from "./TitleBar";

const styles = makeStyles({
  root: {
    "border-radius": "20px",

    "background-color": "#6a2c70",

    borderRadius: 10,
    border: "grey solid 2px",
    color: "white",
    height: 140,
    width: 140,
    "font-size": "140px",
    padding: "0 30px",
  },
  label: {
    textTransform: "capitalize",
  },
  "root:hover": {
    "background-color": "white",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "rgb(23, 105, 170)",
      dark: "#000",
    },
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function Square(props) {
  const classes = styles();
  return (
    <button
      className={"square " + props.valueI + "-Player"}
      onClick={props.onClick}
    >
      {props.valueI}
    </button>
  );
}

class NewGameButton extends React.Component {
  render() {
    return <button className="newgame">New Game</button>;
  }
}

class Board extends React.Component {
  handleClick(i) {
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      //Ignore the click if winner or square is filled

      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";

    console.log(squares[i]);

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    // console.log(this.props.squares[i]);
    return (
      <Square
        valueI={this.props.squares[i]}
        player={
          this.props.active === i && this.props.squares
            ? this.props.playerTurn
            : ""
        }
        onClick={() => {
          this.props.onClick(i);
        }}
      />
    );
  }

  render() {
    return (
      <div className="board-container">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class GameInfoStatus extends React.Component {
  displayWinner() {
    console.log("egt");

    if (this.props.status.indexOf("Winner") !== -1)
      return (
        <DialogDemo
          winner={this.props.status}
          open={true}
          restart={this.props.restart}
        />
      );

    if (this.props.isDrawn === true) {
      return (
        <DialogDemo
          winner={this.props.status}
          open={true}
          restart={this.props.restart}
        />
      );
    } else return <div className="game-info--status">{this.props.status}</div>;

    // alert(this.props.status);
  }
  render() {
    return this.displayWinner();
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  goBackTo(step) {
    if (step > this.state.stepNumber) step = this.state.stepNumber;
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      history: this.state.history.slice(0, step + 1),
    });
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); // Throw away future history, if went back
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";

    console.log(squares);
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),

      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      active: i,
    });
  }

  render() {
    const history = this.state.history;
    const currentHistory = history[this.state.stepNumber];

    const winner = calculateWinner(currentHistory.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Visit move #" + move : "Restart";

      return (
        <li className="moves" key={move}>
          <Button
            className="moves--element"
            onClick={() => this.goBackTo(move)}
            variant="contained"
            color="primary"
            disableElevation
          >
            {desc}
          </Button>
        </li>
      );
    });

    var status,
      isDrawn = false;
    if (winner === "X" || winner === "Y") {
      status = "Winner: " + winner;

      console.log(status);

      /*this.setState({
        stepNumber: 0,
        xIsNext: true,
        history: this.state.history.slice(0, 1),
      });*/
    } else if (winner === -1) {
      status = "Draw";
      isDrawn = true;
      console.log(status);
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <div className="navbar">
          <ButtonAppBar />
        </div>

        <div className="game">
          <div className="game-board">
            <Board
              squares={currentHistory.squares}
              onClick={(i) => this.handleClick(i)}
              active={this.state.active}
              playerTurn={this.state.xIsNext ? "X-Player" : "O-Player"}
            />
          </div>
          <div className="game-info">
            <GameInfoStatus
              status={
                winner == "X" || winner == "Y"
                  ? "Winner: Player " + winner
                  : status
              }
              isDrawn={isDrawn}
              restart={() => this.goBackTo(0)}
            />
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
  }
}

// ========================================
export default withStyles(styles)(Game);

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  let draw = true;

  let count = 0;

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  for (var i = 0; i < 9; i++) {
    if (squares[i] !== null) count++;
  }
  if (count == 9) return -1;
  return null;
}
