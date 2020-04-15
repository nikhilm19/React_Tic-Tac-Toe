(this["webpackJsonpstarter-app"]=this["webpackJsonpstarter-app"]||[]).push([[0],{53:function(e,t,a){e.exports=a(65)},58:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var r=a(30),n=a(24),s=a(25),i=a(27),l=a(26),o=a(0),c=a.n(o),u=a(7),m=a.n(u),h=(a(58),a(94)),p=a(39),d=a(93),v=a(89),b=a(87),f=a(88),y=a(86);function g(e){var t=c.a.useState(!0),a=Object(r.a)(t,2),n=a[0],s=a[1],i=function(){console.log("se close"),s(!1)};return c.a.createElement("div",null,c.a.createElement(d.a,{open:n,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},c.a.createElement(y.a,{id:"game-finish-dialog--title"},e.winner),c.a.createElement(b.a,null,c.a.createElement(f.a,{id:"game-finish-dialog--description"},"Want to play another game?")),c.a.createElement(v.a,null,c.a.createElement(h.a,{onClick:i,color:"primary"},"No"),c.a.createElement(h.a,{onClick:e.restart,color:"primary",autoFocus:!0},"Yes"))))}var E=a(4),N=a(90),x=a(91),k=a(92),O=a(40),q=a(38),j=a.n(q),C=Object(N.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function w(){var e=C();return c.a.createElement("div",{className:e.root},c.a.createElement(x.a,{position:"static"},c.a.createElement(k.a,null,c.a.createElement(O.a,{variant:"h6",className:e.title},"Tic Tac Toe"),c.a.createElement(h.a,{startIcon:c.a.createElement(j.a,null),color:"inherit",size:"large",href:"https://github.com/nikhilm19/React_Tic-Tac-Toe"},"Source"))))}var I=Object(N.a)({root:{"border-radius":"20px","background-color":"#6a2c70",borderRadius:10,border:"grey solid 2px",color:"white",height:140,width:140,"font-size":"140px",padding:"0 30px"},label:{textTransform:"capitalize"},"root:hover":{"background-color":"white"}});Object(p.a)({palette:{primary:{light:"#fff",main:"rgb(23, 105, 170)",dark:"#000"},secondary:{main:"#f44336"}},typography:{useNextVariants:!0}});function S(e){I();return c.a.createElement("button",{className:"square "+e.valueI+"-Player",onClick:e.onClick},e.valueI)}c.a.Component;var T=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();B(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",console.log(t[e]),this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return c.a.createElement(S,{valueI:this.props.squares[e],player:this.props.active===e&&this.props.squares?this.props.playerTurn:"",onClick:function(){t.props.onClick(e)}})}},{key:"render",value:function(){return c.a.createElement("div",{className:"board-container"},c.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(c.a.Component),W=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"displayWinner",value:function(){return console.log("egt"),-1!==this.props.status.indexOf("Winner")||!0===this.props.isDrawn?c.a.createElement(g,{winner:this.props.status,open:!0,restart:this.props.restart}):c.a.createElement("div",{className:"game-info--status"},this.props.status)}},{key:"render",value:function(){return this.displayWinner()}}]),a}(c.a.Component),X=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0},r}return Object(s.a)(a,[{key:"goBackTo",value:function(e){e>this.state.stepNumber&&(e=this.state.stepNumber),this.setState({stepNumber:e,xIsNext:e%2===0,history:this.state.history.slice(0,e+1)})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();B(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",console.log(a),this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,active:e}))}},{key:"render",value:function(){var e,t=this,a=this.state.history,r=a[this.state.stepNumber],n=B(r.squares),s=a.map((function(e,a){var r=a?"Visit move #"+a:"Restart";return c.a.createElement("li",{className:"moves",key:a},c.a.createElement(h.a,{className:"moves--element",onClick:function(){return t.goBackTo(a)},variant:"contained",color:"primary",disableElevation:!0},r))})),i=!1;return"X"===n||"Y"===n?(e="Winner: "+n,console.log(e)):-1===n?(e="Draw",i=!0,console.log(e)):e="Next player: "+(this.state.xIsNext?"X":"O"),c.a.createElement("div",null,c.a.createElement("div",{className:"navbar"},c.a.createElement(w,null)),c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(T,{squares:r.squares,onClick:function(e){return t.handleClick(e)},active:this.state.active,playerTurn:this.state.xIsNext?"X-Player":"O-Player"})),c.a.createElement("div",{className:"game-info"},c.a.createElement(W,{status:"X"==n||"Y"==n?"Winner: Player "+n:e,isDrawn:i,restart:function(){return t.goBackTo(0)}}),c.a.createElement("ol",null,s))))}}]),a}(c.a.Component);t.default=Object(E.a)(I)(X);function B(e){for(var t=0,a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<a.length;n++){var s=Object(r.a)(a[n],3),i=s[0],l=s[1],o=s[2];if(e[i]&&e[i]===e[l]&&e[i]===e[o])return e[i]}for(var c=0;c<9;c++)null!==e[c]&&t++;return 9==t?-1:null}m.a.render(c.a.createElement(X,null),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.7c0538d1.chunk.js.map