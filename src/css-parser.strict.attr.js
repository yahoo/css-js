/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11,12],$V1=[2,37],$V2=[1,4],$V3=[1,11],$V4=[2,4],$V5=[1,7],$V6=[1,8,11,12,19,20,21,22,23,24,25,26,27,28,31,32,33,34,36,37,38,39,40],$V7=[12,19,20,21,22,23,24,25,26,27,28,32,34,37,38],$V8=[1,34],$V9=[1,23],$Va=[1,24],$Vb=[1,25],$Vc=[1,26],$Vd=[1,27],$Ve=[1,28],$Vf=[1,29],$Vg=[1,30],$Vh=[1,33],$Vi=[1,35],$Vj=[1,39],$Vk=[1,38],$Vl=[1,31],$Vm=[1,32],$Vn=[1,11,31,33],$Vo=[1,46],$Vp=[1,47],$Vq=[1,11,12,19,20,21,22,23,24,25,26,27,28,31,32,33,34,37,38,39,40],$Vr=[19,20,21,22,23,24,25,26],$Vs=[1,11,12,19,20,21,22,23,24,25,26,27,28,31,32,33,34,36,37,38,39,40];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"style_attribute":3,"space_or_empty":4,"declarations":5,"declaration_list":6,"property":7,":":8,"expr":9,"prio":10,";":11,"IDENT":12,"term":13,"term_list":14,"operator":15,"numeric_term":16,"unary_operator":17,"string_term":18,"NUMBER":19,"PERCENTAGE":20,"LENGTH":21,"EMS":22,"EXS":23,"ANGLE":24,"TIME":25,"FREQ":26,"STRING":27,"URI":28,"hexcolor":29,"function":30,"IMPORTANT_SYM":31,"FUNCTION":32,")":33,"HASH":34,"at_least_one_space":35,"S":36,"+":37,"-":38,"/":39,",":40,"$accept":0,"$end":1},
terminals_: {2:"error",8:":",11:";",12:"IDENT",19:"NUMBER",20:"PERCENTAGE",21:"LENGTH",22:"EMS",23:"EXS",24:"ANGLE",25:"TIME",26:"FREQ",27:"STRING",28:"URI",31:"IMPORTANT_SYM",32:"FUNCTION",33:")",34:"HASH",36:"S",37:"+",38:"-",39:"/",40:","},
productions_: [0,[3,3],[5,4],[5,5],[5,0],[6,3],[6,4],[6,0],[7,2],[9,2],[14,1],[14,2],[14,2],[14,3],[14,0],[13,1],[13,2],[13,1],[16,2],[16,2],[16,2],[16,2],[16,2],[16,2],[16,2],[16,2],[18,2],[18,2],[18,2],[18,2],[18,2],[10,2],[30,5],[29,2],[35,1],[35,2],[4,1],[4,0],[17,1],[17,1],[15,2],[15,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

      this.$ = [];
      var r = this.$;
      $$[$0-1] !== null? this.$.push($$[$0-1]) : '';
      $$[$0] !== null? $$[$0].forEach(function(e) { r.push(e); }) : ''
      return this.$;
    
break;
case 2:

      this.$ = {};
      this.$.key = $$[$0-3];
      this.$.value = $$[$0];
    
break;
case 3:

      this.$ = {};
      this.$.key = $$[$0-4];
      this.$.value = $$[$0-1] + ' ' + $$[$0];				/* TODO: should i need to add a space */
    
break;
case 4: case 7: case 14:
this.$ = null;
break;
case 5:

      this.$ = [];
      if ($$[$0] !== null) this.$.push($$[$0]);
    
break;
case 6:

      this.$ = [];
      this.$ = $$[$0-3];
      if ($$[$0] !== null) this.$.push($$[$0]);
    
break;
case 8: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 33: case 40: case 41:
this.$ = $$[$0-1];
break;
case 9:

      this.$ = $$[$0-1];
      if ($$[$0] !== null) this.$ = $$[$0-1] + ' ' + $$[$0];
    
break;
case 10: case 15: case 17: case 36: case 38: case 39:
this.$ = $$[$0];
break;
case 11: case 16:
this.$ = $$[$0-1] + $$[$0];
break;
case 12:
this.$ = $$[$0-1] + ' ' + $$[$0];
break;
case 13:
this.$ = $$[$0-2] + ' ' + $$[$0-1] + $$[$0];
break;
case 18: case 19:
this.$ = $$[$0-1] ;
break;
case 32:
this.$ = $$[$0-4] + $$[$0-2] + $$[$0-1];
break;
case 34: case 35:
this.$ = " ";
break;
case 37:
this.$ = "";
break;
}
},
table: [o($V0,$V1,{3:1,4:2,35:3,36:$V2}),{1:[3]},o($V3,$V4,{5:5,7:6,12:$V5}),o([1,8,11,12,19,20,21,22,23,24,25,26,27,28,31,32,33,34,37,38,39,40],[2,36],{36:[1,8]}),o($V6,[2,34]),{1:[2,7],6:9,11:[1,10]},{8:$V3},{4:12,8:$V1,35:3,36:$V2},o($V6,[2,35]),{1:[2,1],11:[1,13]},o($V0,$V1,{35:3,4:14,36:$V2}),o($V7,$V1,{35:3,4:15,36:$V2}),{8:[2,8]},o($V0,$V1,{35:3,4:16,36:$V2}),o($V3,$V4,{7:6,5:17,12:$V5}),{9:18,12:$V8,13:19,16:20,17:21,18:22,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,29:36,30:37,32:$Vj,34:$Vk,37:$Vl,38:$Vm},o($V3,$V4,{7:6,5:40,12:$V5}),o($V3,[2,5]),o($V3,[2,2],{10:41,31:[1,42]}),o($Vn,[2,14],{16:20,17:21,18:22,29:36,30:37,14:43,13:44,15:45,12:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,32:$Vj,34:$Vk,37:$Vl,38:$Vm,39:$Vo,40:$Vp}),o($Vq,[2,15]),{16:48,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg},o($Vq,[2,17]),o($Vq,$V1,{35:3,4:49,36:$V2}),o($Vq,$V1,{35:3,4:50,36:$V2}),o($Vq,$V1,{35:3,4:51,36:$V2}),o($Vq,$V1,{35:3,4:52,36:$V2}),o($Vq,$V1,{35:3,4:53,36:$V2}),o($Vq,$V1,{35:3,4:54,36:$V2}),o($Vq,$V1,{35:3,4:55,36:$V2}),o($Vq,$V1,{35:3,4:56,36:$V2}),o($Vr,[2,38]),o($Vr,[2,39]),o($Vq,$V1,{35:3,4:57,36:$V2}),o($Vq,$V1,{35:3,4:58,36:$V2}),o($Vq,$V1,{35:3,4:59,36:$V2}),o($Vq,$V1,{35:3,4:60,36:$V2}),o($Vq,$V1,{35:3,4:61,36:$V2}),o($Vq,$V1,{35:3,4:62,36:$V2}),o($V7,$V1,{35:3,4:63,36:$V2}),o($V3,[2,6]),o($V3,[2,3]),o($V3,$V1,{35:3,4:64,36:$V2}),o($Vn,[2,9],{16:20,17:21,18:22,29:36,30:37,13:65,15:66,12:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,32:$Vj,34:$Vk,37:$Vl,38:$Vm,39:$Vo,40:$Vp}),o($Vq,[2,10]),{12:$V8,13:67,16:20,17:21,18:22,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,29:36,30:37,32:$Vj,34:$Vk,37:$Vl,38:$Vm},o($V7,$V1,{35:3,4:68,36:$V2}),o($V7,$V1,{35:3,4:69,36:$V2}),o($Vq,[2,16]),o($Vq,[2,18]),o($Vq,[2,19]),o($Vq,[2,20]),o($Vq,[2,21]),o($Vq,[2,22]),o($Vq,[2,23]),o($Vq,[2,24]),o($Vq,[2,25]),o($Vq,[2,26]),o($Vq,[2,27]),o($Vq,[2,28]),o($Vq,[2,29]),o($Vq,[2,30]),o($Vs,[2,33]),{9:70,12:$V8,13:19,16:20,17:21,18:22,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,29:36,30:37,32:$Vj,34:$Vk,37:$Vl,38:$Vm},o($V3,[2,31]),o($Vq,[2,12]),{12:$V8,13:71,16:20,17:21,18:22,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,29:36,30:37,32:$Vj,34:$Vk,37:$Vl,38:$Vm},o($Vq,[2,11]),o($V7,[2,40]),o($V7,[2,41]),{33:[1,72]},o($Vq,[2,13]),o($Vq,$V1,{35:3,4:73,36:$V2}),o($Vs,[2,32])],
defaultActions: {12:[2,8]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 36;
break;
case 1:
break;
case 2:
break;
case 3:return 'CDO';
break;
case 4:return 'CDC';
break;
case 5:return 'INCLUDES';
break;
case 6:return 'DASHMATCH';
break;
case 7:return 'PREFIXMATCH';
break;
case 8:return 'SUFFIXMATCH';
break;
case 9:return 'SUBSTRINGMATCH';
break;
case 10:return 'COLUMN';
break;
case 11:return 27;
break;
case 12:return 'BAD_STRING';
break;
case 13:return 28;
break;
case 14:return 28;
break;
case 15:return 'BAD_URI';
break;
case 16:return 31;
break;
case 17:return 'IMPORT_SYM';
break;
case 18:return 'PAGE_SYM';
break;
case 19:return 'MEDIA_SYM';
break;
case 20:return 'CHARSET_SYM';
break;
case 21:return 'UNICODERANGE';
break;
case 22:return 'MEDIA_TYPE_PREFIX';
break;
case 23:return 'MEDIA_TYPE_PREFIX';
break;
case 24:return 'MEDIA_TYPE_AND';
break;
case 25:return 32;
break;
case 26:return 12;
break;
case 27:return 'VENDOR';
break;
case 28:return 'ATKEYWORD';
break;
case 29:return 34;
break;
case 30:return 22;
break;
case 31:return 23;
break;
case 32:return 21;
break;
case 33:return 21;
break;
case 34:return 21;
break;
case 35:return 21;
break;
case 36:return 21;
break;
case 37:return 21;
break;
case 38:return 24;
break;
case 39:return 24;
break;
case 40:return 24;
break;
case 41:return 25;
break;
case 42:return 25;
break;
case 43:return 26;
break;
case 44:return 26;
break;
case 45:return 20;
break;
case 46:return 19;
break;
case 47:return 'DIMENSION';
break;
case 48:return yy_.yytext; /* 'DELIM'; */
break;
}
},
rules: [/^(?:([ \t\r\n\f]+))/,/^(?:\/\*[^*]*\*+([^/*][^*]*\*+)*\/)/,/^(?:((\/\*[^*]*\*+([^/*][^*]*\*+)*)|(\/\*[^*]*(\*+[^/*][^*]*)*)))/,/^(?:<!--)/,/^(?:-->)/,/^(?:~=)/,/^(?:\|=)/,/^(?:\^=)/,/^(?:\$=)/,/^(?:\*=)/,/^(?:\|\|)/,/^(?:(("([ !#$%&'\(\)\*+,\-\.\/:;<=>\?@\[\\\]^_`\{\|\}~]|[a-zA-Z0-9])*")|('([ !#$%&"\(\)\*+,\-\.\/:;<=>\?@\[\\\]^_`\{\|\}~]|[a-zA-Z0-9])*')))/,/^(?:(("([^\n\r\f\\"]|\\(\n|\r\n|\r|\f)|((\\([0-9a-fA-F]){1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-fA-F]))*\\?)|('([^\n\r\f\\']|\\(\n|\r\n|\r|\f)|((\\([0-9a-fA-F]){1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-fA-F]))*\\?)))/,/^(?:url\((([ \t\r\n\f]+)?)(("([ !#$%&'\(\)\*+,\-\.\/:;<=>\?@\[\\\]^_`\{\|\}~]|[a-zA-Z0-9])*")|('([ !#$%&"\(\)\*+,\-\.\/:;<=>\?@\[\\\]^_`\{\|\}~]|[a-zA-Z0-9])*'))(([ \t\r\n\f]+)?)\))/,/^(?:url\((([ \t\r\n\f]+)?)(([a-zA-Z0-9]|[:\/\?#\[\]@]|[!$&'\*+,;=]|[%]|[\-\._~])*)(([ \t\r\n\f]+)?)\))/,/^(?:((url\((([ \t\r\n\f]+)?)([!#$%&*-\[\]-~]|([\240-\377])|((\\([0-9a-fA-F]){1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-fA-F]))*(([ \t\r\n\f]+)?))|(url\((([ \t\r\n\f]+)?)(("([ !#$%&'\(\)\*+,\-\.\/:;<=>\?@\[\\\]^_`\{\|\}~]|[a-zA-Z0-9])*")|('([ !#$%&"\(\)\*+,\-\.\/:;<=>\?@\[\\\]^_`\{\|\}~]|[a-zA-Z0-9])*'))(([ \t\r\n\f]+)?))|(url\((([ \t\r\n\f]+)?)(("([^\n\r\f\\"]|\\(\n|\r\n|\r|\f)|((\\([0-9a-fA-F]){1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-fA-F]))*\\?)|('([^\n\r\f\\']|\\(\n|\r\n|\r|\f)|((\\([0-9a-fA-F]){1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-fA-F]))*\\?)))))/,/^(?:!((([ \t\r\n\f]+)?)|(\/\*[^*]*\*+([^/*][^*]*\*+)*\/))*(I|i|\\0{0,4}(49|69)(\r\n|[ \t\r\n\f])?|\\[i])(M|m|\\0{0,4}(4d|6d)(\r\n|[ \t\r\n\f])?|\\[m])(P|p|\\0{0,4}(50|70)(\r\n|[ \t\r\n\f])?|\\[p])(O|o|\\0{0,4}(4f|6f)(\r\n|[ \t\r\n\f])?|\\[o])(R|r|\\0{0,4}(52|72)(\r\n|[ \t\r\n\f])?|\\[r])(T|t|\\0{0,4}(54|74)(\r\n|[ \t\r\n\f])?|\\[t])(A|a|\\0{0,4}(41|61)(\r\n|[ \t\r\n\f])?)(N|n|\\0{0,4}(4e|6e)(\r\n|[ \t\r\n\f])?|\\[n])(T|t|\\0{0,4}(54|74)(\r\n|[ \t\r\n\f])?|\\[t]))/,/^(?:@(I|i|\\0{0,4}(49|69)(\r\n|[ \t\r\n\f])?|\\[i])(M|m|\\0{0,4}(4d|6d)(\r\n|[ \t\r\n\f])?|\\[m])(P|p|\\0{0,4}(50|70)(\r\n|[ \t\r\n\f])?|\\[p])(O|o|\\0{0,4}(4f|6f)(\r\n|[ \t\r\n\f])?|\\[o])(R|r|\\0{0,4}(52|72)(\r\n|[ \t\r\n\f])?|\\[r])(T|t|\\0{0,4}(54|74)(\r\n|[ \t\r\n\f])?|\\[t]))/,/^(?:@(P|p|\\0{0,4}(50|70)(\r\n|[ \t\r\n\f])?|\\[p])(A|a|\\0{0,4}(41|61)(\r\n|[ \t\r\n\f])?)(G|g|\\0{0,4}(47|67)(\r\n|[ \t\r\n\f])?|\\[g])(E|e|\\0{0,4}(45|65)(\r\n|[ \t\r\n\f])?))/,/^(?:@(M|m|\\0{0,4}(4d|6d)(\r\n|[ \t\r\n\f])?|\\[m])(E|e|\\0{0,4}(45|65)(\r\n|[ \t\r\n\f])?)(D|d|\\0{0,4}(44|64)(\r\n|[ \t\r\n\f])?)(I|i|\\0{0,4}(49|69)(\r\n|[ \t\r\n\f])?|\\[i])(A|a|\\0{0,4}(41|61)(\r\n|[ \t\r\n\f])?))/,/^(?:@charset )/,/^(?:(U|u|\\0{0,4}(55|75)(\r\n|[ \t\r\n\f])?|\\[u])\+([0-9a-fA-F?]{1,6}(-[0-9a-fA-F]{1,6})?))/,/^(?:only\b)/,/^(?:not\b)/,/^(?:and\b)/,/^(?:([\-]?([_a-zA-Z])([_a-zA-Z0-9\-])*)\()/,/^(?:([\-]?([_a-zA-Z])([_a-zA-Z0-9\-])*))/,/^(?:([\-_]([0-9a-fA-F])-([0-9a-fA-F])))/,/^(?:@([\-]?([_a-zA-Z])([_a-zA-Z0-9\-])*))/,/^(?:#(([_a-zA-Z0-9\-])+))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(E|e|\\0{0,4}(45|65)(\r\n|[ \t\r\n\f])?)(M|m|\\0{0,4}(4d|6d)(\r\n|[ \t\r\n\f])?|\\[m]))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(E|e|\\0{0,4}(45|65)(\r\n|[ \t\r\n\f])?)(X|x|\\0{0,4}(58|78)(\r\n|[ \t\r\n\f])?|\\[x]))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(P|p|\\0{0,4}(50|70)(\r\n|[ \t\r\n\f])?|\\[p])(X|x|\\0{0,4}(58|78)(\r\n|[ \t\r\n\f])?|\\[x]))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(C|c|\\0{0,4}(43|63)(\r\n|[ \t\r\n\f])?)(M|m|\\0{0,4}(4d|6d)(\r\n|[ \t\r\n\f])?|\\[m]))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(M|m|\\0{0,4}(4d|6d)(\r\n|[ \t\r\n\f])?|\\[m])(M|m|\\0{0,4}(4d|6d)(\r\n|[ \t\r\n\f])?|\\[m]))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(I|i|\\0{0,4}(49|69)(\r\n|[ \t\r\n\f])?|\\[i])(N|n|\\0{0,4}(4e|6e)(\r\n|[ \t\r\n\f])?|\\[n]))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(P|p|\\0{0,4}(50|70)(\r\n|[ \t\r\n\f])?|\\[p])(T|t|\\0{0,4}(54|74)(\r\n|[ \t\r\n\f])?|\\[t]))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(P|p|\\0{0,4}(50|70)(\r\n|[ \t\r\n\f])?|\\[p])(C|c|\\0{0,4}(43|63)(\r\n|[ \t\r\n\f])?))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(D|d|\\0{0,4}(44|64)(\r\n|[ \t\r\n\f])?)(E|e|\\0{0,4}(45|65)(\r\n|[ \t\r\n\f])?)(G|g|\\0{0,4}(47|67)(\r\n|[ \t\r\n\f])?|\\[g]))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(R|r|\\0{0,4}(52|72)(\r\n|[ \t\r\n\f])?|\\[r])(A|a|\\0{0,4}(41|61)(\r\n|[ \t\r\n\f])?)(D|d|\\0{0,4}(44|64)(\r\n|[ \t\r\n\f])?))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(G|g|\\0{0,4}(47|67)(\r\n|[ \t\r\n\f])?|\\[g])(R|r|\\0{0,4}(52|72)(\r\n|[ \t\r\n\f])?|\\[r])(A|a|\\0{0,4}(41|61)(\r\n|[ \t\r\n\f])?)(D|d|\\0{0,4}(44|64)(\r\n|[ \t\r\n\f])?))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(M|m|\\0{0,4}(4d|6d)(\r\n|[ \t\r\n\f])?|\\[m])(S|s|\\0{0,4}(53|73)(\r\n|[ \t\r\n\f])?|\\[s]))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(S|s|\\0{0,4}(53|73)(\r\n|[ \t\r\n\f])?|\\[s]))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(H|h|\\0{0,4}(48|68)(\r\n|[ \t\r\n\f])?|\\[h])(Z|z|\\0{0,4}(5a|7a)(\r\n|[ \t\r\n\f])?|\\[z]))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)(K|k|\\0{0,4}(4b|6b)(\r\n|[ \t\r\n\f])?|\\[k])(H|h|\\0{0,4}(48|68)(\r\n|[ \t\r\n\f])?|\\[h])(Z|z|\\0{0,4}(5a|7a)(\r\n|[ \t\r\n\f])?|\\[z]))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)%)/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?))/,/^(?:([0-9]+(\.[0-9]+)?([eE][+\-][0-9])?|\.[0-9]+([eE][+\-][0-9])?)([\-]?([_a-zA-Z])([_a-zA-Z0-9\-])*))/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}