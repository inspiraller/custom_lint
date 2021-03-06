/* steves */
/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
var HTMLHint = (function (undefined) {

    var HTMLHint = {};

    HTMLHint.version = '@VERSION';
    HTMLHint.release = '@RELEASE';

    HTMLHint.rules = {};

    //默认配置
    HTMLHint.defaultRuleset = {
        'tagname-lowercase': true,
        'attr-lowercase': true,
        'attr-value-double-quotes': true,
        'doctype-first': true,
        'tag-pair': true,
        'spec-char-escape': true,
        'id-unique': true,
        'src-not-empty': true,
        'attr-no-duplication': true,
        'title-require': true
    };

    HTMLHint.addRule = function(rule){
        HTMLHint.rules[rule.id] = rule;
    };

    HTMLHint.verify = function(html, ruleset){

        if(ruleset === undefined || Object.keys(ruleset).length ===0){
            ruleset = HTMLHint.defaultRuleset;
        }

        // parse inline ruleset
        html = html.replace(/^\s*<!--\s*htmlhint\s+([^\r\n]+?)\s*-->/i, function(all, strRuleset){
            if(ruleset === undefined){
                ruleset = {};
            }
            strRuleset.replace(/(?:^|,)\s*([^:,]+)\s*(?:\:\s*([^,\s]+))?/g, function(all, key, value){
                if(value === 'false'){
                    value = false;
                }
                else if(value === 'true'){
                    value = true;
                }
                ruleset[key] = value === undefined ? true : value;
            });
            return '';
        });

        var parser = new HTMLParser();
        var reporter = new HTMLHint.Reporter(html, ruleset);

        var rules = HTMLHint.rules,
            rule;
        for (var id in ruleset){
            rule = rules[id];
            if (rule !== undefined && ruleset[id] !== false){
              rule.init(parser, reporter, ruleset[id]);
            }
        }

        parser.parse(html);

        return reporter.messages;
    };

    // format messages
    HTMLHint.format = function(arrMessages, options){
        options = options || {};
        var arrLogs = [];
        var colors = {
            white: '',
            grey: '',
            red: '',
            reset: ''
        };
        if(options.colors){
            colors.white = '\033[37m';
            colors.grey = '\033[90m';
            colors.red = '\033[31m';
            colors.reset = '\033[39m';
        }
        var indent = options.indent || 0;
        arrMessages.forEach(function(hint){
            var leftWindow = 40;
            var rightWindow = leftWindow + 20;
            var evidence = hint.evidence;
            var line = hint.line;
            var col = hint.col;
            var evidenceCount = evidence.length;
            var leftCol = col > leftWindow + 1 ? col - leftWindow : 1;
            var rightCol = evidence.length > col + rightWindow ? col + rightWindow : evidenceCount;
            if(col < leftWindow + 1){
                rightCol += leftWindow - col + 1;
            }
            evidence = evidence.replace(/\t/g, ' ').substring(leftCol - 1, rightCol);
            // add ...
            if(leftCol > 1){
                evidence = '...' + evidence;
                leftCol -= 3;
            }
            if(rightCol < evidenceCount){
                evidence += '...';
            }
            // show evidence
            arrLogs.push(colors.white+repeatStr(indent)+'L'+line+' |' + colors.grey + evidence + colors.reset);
            // show pointer & message
            var pointCol = col - leftCol;
            // add double byte character
            var match = evidence.substring(0, pointCol).match(/[^\u0000-\u00ff]/g);
            if(match !== null){
                pointCol += match.length;
            }
            arrLogs.push(colors.white+repeatStr(indent)+repeatStr(String(line).length + 3 + pointCol)+'^ ' + colors.red + hint.message + ' (' + hint.rule.id+')' + colors.reset);
        });
        return arrLogs;
    };

    // repeat string
    function repeatStr(n, str){
        return new Array(n + 1).join(str || ' ');
    }

    return HTMLHint;

})();

if (typeof exports === 'object' && exports){
    exports.HTMLHint = HTMLHint;
}

/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
(function(HTMLHint, undefined){

    var Reporter = function(){
        var self = this;
        self._init.apply(self,arguments);
    };

    Reporter.prototype = {
        _init: function(html, ruleset){
            var self = this;
            self.html = html;
            self.lines = html.split(/\r?\n/);
            var match = html.match(/\r?\n/);
            self.brLen = match !== null ? match[0].length : 0;
            self.ruleset = ruleset;
            self.messages = [];
        },
        // error message
        error: function(message, line, col, rule, raw){
            this.report('error', message, line, col, rule, raw);
        },
        // warning message
        warn: function(message, line, col, rule, raw){
            this.report('warning', message, line, col, rule, raw);
        },
        // info message
        info: function(message, line, col, rule, raw){
            this.report('info', message, line, col, rule, raw);
        },
        // save report
        report: function(type, message, line, col, rule, raw){
            var self = this;
            var lines = self.lines;
            var brLen = self.brLen;
            var evidence, evidenceLen;
            for(var i=line-1, lineCount=lines.length;i<lineCount;i++){
                evidence = lines[i];
                evidenceLen = evidence.length;
                if(col > evidenceLen && line < lineCount){
                    line ++;
                    col -= evidenceLen;
                    if(col !== 1){
                        col -= brLen;
                    }
                }
                else{
                    break;
                }
            }
            self.messages.push({
                type: type,
                message: message,
                raw: raw,
                evidence: evidence,
                line: line,
                col: col,
                rule: {
                    id: rule.id,
                    description: rule.description,
                    link: 'https://github.com/yaniswang/HTMLHint/wiki/' + rule.id
                }
            });
        }
    };

    HTMLHint.Reporter = Reporter;

})(HTMLHint);

/* jshint -W079 */
/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
var HTMLParser = (function(undefined){

    var HTMLParser = function(){
        var self = this;
        self._init.apply(self,arguments);
    };

    HTMLParser.prototype = {
        _init: function(){
            var self = this;
            self._listeners = {};
            self._mapCdataTags = self.makeMap("script,style");
            self._arrBlocks = [];
            self.lastEvent = null;
        },

        makeMap: function(str){
            var obj = {}, items = str.split(",");
            for ( var i = 0; i < items.length; i++ ){
                obj[ items[i] ] = true;
            }
            return obj;
        },

        // parse html code
        parse: function(html){

            var self = this,
                mapCdataTags = self._mapCdataTags;

            var regTag=/<(?:\/([^\s>]+)\s*|!--([\s\S]*?)--|!([^>]*?)|([\w\-:]+)((?:\s+[^\s"'>\/=\x00-\x0F\x7F\x80-\x9F]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'>]*))?)*?)\s*(\/?))>/g,
                regAttr = /\s*([^\s"'>\/=\x00-\x0F\x7F\x80-\x9F]+)(?:\s*=\s*(?:(")([^"]*)"|(')([^']*)'|([^\s"'>]*)))?/g,
                regLine = /\r?\n/g;

            var match, matchIndex, lastIndex = 0, tagName, arrAttrs, tagCDATA, attrsCDATA, arrCDATA, lastCDATAIndex = 0, text;
            var lastLineIndex = 0, line = 1;
            var arrBlocks = self._arrBlocks;

            self.fire('start', {
                pos: 0,
                line: 1,
                col: 1,
                html:html
            });

            while((match = regTag.exec(html))){
                matchIndex = match.index;
                if(matchIndex > lastIndex){//保存前面的文本或者CDATA
                    text = html.substring(lastIndex, matchIndex);
                    if(tagCDATA){
                        arrCDATA.push(text);
                    }
                    else{//文本
                        saveBlock('text', text, lastIndex);
                    }
                }
                lastIndex = regTag.lastIndex;

                if((tagName = match[1])){
                    if(tagCDATA && tagName === tagCDATA){//结束标签前输出CDATA
                        text = arrCDATA.join('');
                        saveBlock('cdata', text, lastCDATAIndex, {
                            'tagName': tagCDATA,
                            'attrs': attrsCDATA
                        });
                        tagCDATA = null;
                        attrsCDATA = null;
                        arrCDATA = null;
                    }
                    if(!tagCDATA){
                        //标签结束
                        saveBlock('tagend', match[0], matchIndex, {
                            'tagName': tagName
                        });
                        continue;
                    }
                }

                if(tagCDATA){
                    arrCDATA.push(match[0]);
                }
                else{
                    if((tagName = match[4])){//标签开始
                        arrAttrs = [];
                        var attrs = match[5],
                            attrMatch,
                            attrMatchCount = 0;
                        while((attrMatch = regAttr.exec(attrs))){
                            var name = attrMatch[1],
                                quote = attrMatch[2] ? attrMatch[2] :
                                    attrMatch[4] ? attrMatch[4] : '',
                                value = attrMatch[3] ? attrMatch[3] :
                                    attrMatch[5] ? attrMatch[5] :
                                    attrMatch[6] ? attrMatch[6] : '';
                            arrAttrs.push({'name': name, 'value': value, 'quote': quote, 'index': attrMatch.index, 'raw': attrMatch[0]});
                            attrMatchCount += attrMatch[0].length;
                        }
                        if(attrMatchCount === attrs.length){
                            saveBlock('tagstart', match[0], matchIndex, {
                                'tagName': tagName,
                                'attrs': arrAttrs,
                                'close': match[6]
                            });
                            if(mapCdataTags[tagName]){
                                tagCDATA = tagName;
                                attrsCDATA = arrAttrs.concat();
                                arrCDATA = [];
                                lastCDATAIndex = lastIndex;
                            }
                        }
                        else{//如果出现漏匹配，则把当前内容匹配为text
                            saveBlock('text', match[0], matchIndex);
                        }
                    }
                    else if(match[2] || match[3]){//注释标签
                        saveBlock('comment', match[0], matchIndex, {
                            'content': match[2] || match[3],
                            'long': match[2]?true:false
                        });
                    }
                }
            }

            if(html.length > lastIndex){
                //结尾文本
                text = html.substring(lastIndex, html.length);
                saveBlock('text', text, lastIndex);
            }

            self.fire('end', {
                pos: lastIndex,
                line: line,
                col: html.length - lastLineIndex + 1
            });

            //存储区块
            function saveBlock(type, raw, pos, data){
                var col = pos - lastLineIndex + 1;
                if(data === undefined){
                    data = {};
                }
                data.raw = raw;
                data.pos = pos;
                data.line = line;
                data.col = col;
                arrBlocks.push(data);
                self.fire(type, data);
                var lineMatch;
                while((lineMatch = regLine.exec(raw))){
                    line ++;
                    lastLineIndex = pos + regLine.lastIndex;
                }
            }

        },

        // add event
        addListener: function(types, listener){
            var _listeners = this._listeners;
            var arrTypes = types.split(/[,\s]/), type;
            for(var i=0, l = arrTypes.length;i<l;i++){
                type = arrTypes[i];
                if (_listeners[type] === undefined){
                    _listeners[type] = [];
                }
                _listeners[type].push(listener);
            }
        },

        // fire event
        fire: function(type, data){
            if (data === undefined){
                data = {};
            }
            data.type = type;
            var self = this,
                listeners = [],
                listenersType = self._listeners[type],
                listenersAll = self._listeners['all'];
            if (listenersType !== undefined){
                listeners = listeners.concat(listenersType);
            }
            if (listenersAll !== undefined){
                listeners = listeners.concat(listenersAll);
            }
            var lastEvent = self.lastEvent;
            if(lastEvent !== null){
                delete lastEvent['lastEvent'];
                data.lastEvent = lastEvent;
            }
            self.lastEvent = data;
            for (var i = 0, l = listeners.length; i < l; i++){
                listeners[i].call(self, data);
            }
        },

        // remove event
        removeListener: function(type, listener){
            var listenersType = this._listeners[type];
            if(listenersType !== undefined){
                for (var i = 0, l = listenersType.length; i < l; i++){
                    if (listenersType[i] === listener){
                        listenersType.splice(i, 1);
                        break;
                    }
                }
            }
        },

        //fix pos if event.raw have \n
        fixPos: function(event, index){
            var text = event.raw.substr(0, index);
            var arrLines = text.split(/\r?\n/),
                lineCount = arrLines.length - 1,
                line = event.line, col;
            if(lineCount > 0){
                line += lineCount;
                col = arrLines[lineCount].length + 1;
            }
            else{
                col = event.col + index;
            }
            return {
                line: line,
                col: col
            };
        },

        // covert array type of attrs to map
        getMapAttrs: function(arrAttrs){
            var mapAttrs = {},
                attr;
            for(var i=0,l=arrAttrs.length;i<l;i++){
                attr = arrAttrs[i];
                mapAttrs[attr.name] = attr.value;
            }
            return mapAttrs;
        }
    };

    return HTMLParser;

})();

if (typeof exports === 'object' && exports){
    exports.HTMLParser = HTMLParser;
}


var trace = function(x){
    console.log(x); 
};

var wrapTagPointers = function(str, markers){
    return new WrapTagPointers().init(str, markers);
};

var WrapTagPointers = function(){};

WrapTagPointers.prototype = {

    init:function(str, markers){

        str = this.fixQuotes(str);

        var strMarkerStart = markers.strMarkerStart;
        var strMarkerEnd = markers.strMarkerEnd;
        var strMarkerHandle = markers.strMarkerHandle;
        var strMarkerEndComment = markers.strMarkerEndComment;

    //If contains html
        if(str.search(/[<>]/)!==-1){

    //str = str.substring(0,100) + '<BIB>' + str.substr(100);

            // remove comments
            //str = str.replace(/-->/g,'¬');
            //str = str.replace(/<\!--[^¬]*¬/g,'');

            // fix self closing
            str = this.fixSelfClosing(str);

            //loop all tags and wrap with markers
            //set markers
            //convert:     <p></p>
            //to:        �<p></p>`
            str = str.replace(/(<\w+([\s\:][^>]*[^\/])?>)/g, strMarkerStart + "$1");
            str = str.replace(/(<\/\w+([\s\:][^>]*)?>)/g,"$1"+strMarkerEnd);

            str = this.removePointersInComments(str, strMarkerStart, strMarkerEnd, strMarkerEndComment);



            //Loop through each wrapped tag and add a handle marker around it. Example:
            //search: �(<(tag) >...</(tag)>)`
            //replace with: ¬1 <(tag) >...</(tag)>¬1
            //replace with: ¬2 <(tag) >...</(tag)>¬2
            //replace with: ¬3 <(tag) >...</(tag)>¬3
            //etc...

            var intC = 0,
            regI = RegExp(strMarkerStart+"(<(\\w[^\\s]*)[^\\/][^"+strMarkerStart+strMarkerEnd+"]*<\\/\\2\\s*>)"+strMarkerEnd,'g');
            var fnReplace = function(){
                var arg = arguments;
                var strA = ((strMarkerHandle + intC + ' ') +  arg[1] + (strMarkerHandle + intC + ' '));
                ++intC;
                return strA;
            };
            // Wrap uncollapsed tags
            while(str.search(regI)!== -1) {str = str.replace(regI,fnReplace);}

            // Wrap collapsed/self closing tags
            str = str.replace(/(<[^>]*\/>)/g,fnReplace);
             
//console.log('str = ', str);             
            return this.testBadHtml(str, strMarkerStart, strMarkerEnd);

        }else{
            return {
                isValid:false,
                intStartLine:0,
                strMsg:'You have not supplied any html!',
                strHtml:str
            };            
        }

    },
    fixSelfClosing:function(str){
        str = str.replace(/<(img|hr|br|meta|area|base|col|command|embed|input|keygen|link|param|source|track|wbr)([^>]*)\/?>/g,'<$1' + '$2/>');

        // if self closing fix has added to a non self closing item - ie <input></input> then remove the self closing fix.
        str = str.replace(/<(img|hr|br|meta|area|base|col|command|embed|input|keygen|link|param|source|track|wbr)([^<>]*)\/(>[^<]*<\/\1\s*>)/g,'<' + '$1' + '$2' + '$3');
        return str;
    },
    fixQuotes:function(html){

        // find
        // <input disabled selected=\'selected and something\' dude checked="checked" whatever whatever2/>

        // replace with
        // <input disabled selected="selected and something" dude checked="checked" whatever whatever2/>
      
        var regAttrApos = /(<[^<>]*\s)(\w[^\=<>\s\'\"]*)\=\'([^\']*)\'/g;
        while(html.search(regAttrApos) !== -1){
            html = html.replace(regAttrApos,'$1' + '$2="$3"');
        }
      
        // find
        // <input disabled selected=\'selected and something\' dude checked="checked" whatever whatever2/>

        // replace with
        // <input disabled="disabled" selected="selected and something" dude="dude" checked="checked" whatever="whatever" whatever2="whatever2"/>
      
      
        var regAttrNothing = /(<\w[^\s<>]*)((\s+\w[^\=<>\s\'\"]*\=\"[^\"]*\")*)\s(\w[^\=<>\s\'\"\/]*)(\s|\/|>)/g;  
        while(html.search(regAttrNothing) !== -1){           
          html = html.replace(regAttrNothing,'$1' + '$2' + ' ' + '$4' + '="' + '$4' + '"' + '$5');
        }
     
        // todo:
        // <body class="something" id="missingendquote>
        // <body class="missingendquote id="">

        return html;
    },    
    testBadHtml:function(str, strMarkerStart, strMarkerEnd){
        // Test bad html
        var intStartBad = str.lastIndexOf(strMarkerStart);

        if(intStartBad!==-1){
            var strStart = str.substr(intStartBad);
            var strStartTag = strStart.substring(0, strStart.indexOf('>'));
            var intStartLine = str.substring(0, intStartBad).split('\n').length;

            // find first instance of bad marker.
            var intEndBad = intStartBad + str.substr(intStartBad).search(strMarkerEnd);

            var strBad = str.substring(0, intEndBad);
            var strBadTag = strBad.substr(strBad.lastIndexOf('<'));
            var intBadLine = str.substring(0, intEndBad).split('\n').length;

            strStartTag = strStartTag.replace(strMarkerStart,'');
            strBadTag = strBadTag.replace(strMarkerEnd,'');

            return {
                isValid:false,
                intStartLine:intStartLine,
                intBadLine:intBadLine,
                strMsg:'Your html is not well formed. line:' + intStartLine + ', tag:' + strStartTag + ' doesnt match line: ' + intBadLine + ', tag: ' + strBadTag,
                strHtml:str
            };
        }
        return {
            isValid:true,
            strHtml:str
        }; 
    },
    removePointersInComments:function(str, strMarkerStart, strMarkerEnd, strMarkerEndComment){

        // remove any existing end marker after a --<
        str = str.replace(RegExp('(\\-\\->)\\' + strMarkerEnd,'g'),'$1');

        // Remove tagpointers inside  <!-- --> 
        str = str.replace(RegExp('(\\-\\->)','g'),'$1' + strMarkerEndComment);
        var regInsideComments = RegExp('(<\\!\\-\\-[^\\' + strMarkerEndComment + '\\' + strMarkerStart + '\\'  + strMarkerEnd + ']*' + ')[\\' + strMarkerStart + '\\' + strMarkerEnd + ']','gi');      
        while(str.search(regInsideComments) !==-1){                   
          str = str.replace(regInsideComments,'$1');
        }

        // Remove tagpointers inside  <![CDATA[]]>
        str = str.replace(/(\]\]>)/g,'$1' + strMarkerEndComment);

        var regInsideCdata = RegExp('(<\\!\\[CDATA\\[[^\\' + strMarkerEndComment + '\\' + strMarkerStart + '\\'  + strMarkerEnd + ']*' + ')[\\' + strMarkerStart + '\\' + strMarkerEnd + ']','gi');      
        while(str.search(regInsideCdata) !==-1){                   
          str = str.replace(regInsideCdata,'$1');
        }

        // Remove tagpointers inside <script> or <script type="text/javascript"> or <script language="javascript">        
        str = str.replace(/(<\/script\s*>)/g,'$1' + strMarkerEndComment);              
        var regInsideScript = RegExp('(<script(\\s+(type\\=\\"text\\/javascript\\"|language\\=\\"javascript\\"))*\s*>)([^\\' + strMarkerEndComment + ']*)[\\' + strMarkerStart + '\\'  + strMarkerEnd  + ']([^\\' + strMarkerEndComment+ ']*)\\' + strMarkerEndComment,'gi');            
        while(str.search(regInsideScript) !==-1){                   
          str = str.replace(regInsideScript,'$1' + '$4' + '$5');
        }
       
        // Remove tagpointers inside script comments //        
        var regInsideScriptLineComment = RegExp('(<script(\s|>)[^\\' + strMarkerEndComment + ']*\\/\\/[^\\n\\r\\f\\' + strMarkerEndComment + ']*)[\\' + strMarkerStart + '\\'  + strMarkerEnd  + ']','gi');            
        while(str.search(regInsideScriptLineComment) !==-1){                   
          str = str.replace(regInsideScriptLineComment,'$1');
        }

        // Remove tagpointers inside script comments /* */
        str = str.replace(/(\/\*)/g,'$1' + strMarkerEndComment);     
        var regInsideStar = RegExp('(\\/\\*[^\\' + strMarkerEndComment + '\\' + strMarkerStart + '\\'  + strMarkerEnd + ']*' + ')[\\' + strMarkerStart + '\\' + strMarkerEnd + ']','gi');      
        while(str.search(regInsideStar) !==-1){                   
          str = str.replace(regInsideStar,'$1');
        }

        str = str.replace(RegExp('\\' + strMarkerEndComment,'g'),'');    


        return str;   
    }
};

var styleBlocks = function(strAllStyles, strSelectors){
    return new StyleBlocks().init(strAllStyles, strSelectors);
};

var StyleBlocks = function(){};
StyleBlocks.prototype = {
    init : function(strAllStyles, strSelectors){

        var obj = {};
        var arrClasses = strSelectors.split('.');

        if(arrClasses.length > 1){
            obj = this.findClassesInStyles(strAllStyles, arrClasses, obj);           
        }
        return obj;
    },
    findClassesInStyles : function(strAllStyles, arrClasses, obj){
     
        for(var i = 1, intLen = arrClasses.length; i < intLen; ++i){


            var strClass = '.' + arrClasses[i];
            var encodedSelector = '\\.' + arrClasses[i];

            var regMatchWholeBlock = RegExp('(^|\\n|\\}) *([^\\{\\}\\n]*' + encodedSelector + '\\s*[\\,\\{\\.\\#\\:\\[][^\\}]*\\})','g');
            var regMatchSameClass = RegExp('(^|\\,)([^\\{\\,]*' + encodedSelector + '(\\[[^\\]]*\\]|\\:[^\\:][^\\,\\{]*|[\\#\\.][^\\,\\{]*)*)\\s*[\\,\\{]','g');

            var arrMatch = null;


            do{
                arrMatch = regMatchWholeBlock.exec(strAllStyles);
                if(arrMatch){
                    var strMatch = arrMatch[2];               
                    var intLine = this.getLine(strAllStyles, regMatchWholeBlock.lastIndex);  
       

                    var strLastSelector = this.getLastSelector(strMatch);
                    if(!obj[strClass]){
                        obj[strClass] = [];
                    }

                    var arrAdjoinedWith = this.getAdjoinedWith(strLastSelector, strClass);

                    obj = this.filterCombinedClassesToSingleLine(obj, strClass, strMatch, intLine, regMatchSameClass, strLastSelector, arrAdjoinedWith);
                }
            } while(arrMatch);
            
        }

        return obj;
    },
    getLastSelector:function(strMatch){
        var reg = /(^|\s)([\w\.\#\[\(][^\s\{\}]*)\s*(\{|$)/;
        var arrLastSelector = strMatch.match(reg);
        if(arrLastSelector && arrLastSelector.length){
            return arrLastSelector[2];
        }
        return null;
    },
    getAdjoinedWith:function(strSelectors, strClass){
        // TODO - tidy up
        var reg = /([\w\.\#\[\(][^\s\{\}\.\#\[\(]+)/g;
        var arrMatch;
        var arrAdjoinedWith = [];

        do{
            arrMatch = reg.exec(strSelectors);
            if(arrMatch){
                if(arrMatch[1] !== strClass){
                    arrAdjoinedWith.push(arrMatch[1]);
                }
            }
        }while(arrMatch);

        return arrAdjoinedWith;
    },
    filterCombinedClassesToSingleLine : function(obj, strClass, strMatch,  intLine, regMatchSameClass, strLastSelector, arrAdjoinedWith){
        // replace all other commas..
        var strNoContentInComments = this.replaceContentInComments(strMatch);
        var strCssProps = strMatch.replace(/^[^\{]*/,'');
        var arrMatchSameClass;
        var props = this.getProps(strCssProps);

        do{
            arrMatchSameClass = regMatchSameClass.exec(strNoContentInComments);

            if(arrMatchSameClass){
                var strEach = arrMatchSameClass[2];
                
                strEach = strEach.replace(/^\s*\}?\s*/,'');

                var strFiltered = strEach + strCssProps;

                var objToPush = {
                    selector:strLastSelector,
                    line:intLine,
                    block:strFiltered,
                    all:strMatch,
                    props:props
                };
                if(arrAdjoinedWith.length > 0){
                    objToPush.arrAdjoinedWith = arrAdjoinedWith;
                }
                obj[strClass].push(objToPush);
            }
        } while (arrMatchSameClass);

        return obj;
    },
    getProps:function(strCssProps){
        if(strCssProps){
            var reg = /[\{\;]\s*([^\:\s\;\}\{\!]+)\:\s*([^\;\:\}\{\!]+)/g;

 
            var arr;
            var props = {};
            
            do{
                arr = reg.exec(strCssProps);
                if(arr){
                    var key = arr[1];
                    var val = arr[2];
                    props[key] = val;
                }
            }while(arr);

            return props;
            
        }
        return {};
    },
    getLine : function(styles, intPos){
        var arrMatch = styles.substring(0, intPos).match(/\n/g);
        return (arrMatch && arrMatch.length)?arrMatch.length:0;
    },
    replaceContentInComments : function(style){
        style = style.replace(/\*\//g,'¬');   

        style = style.replace(/\/\*([^\¬]*)\¬/g,function($0, $1){
            var strCommentKeepNewLines = $1.replace(/[^\n]*/g,'');
            return '/' + '*' + strCommentKeepNewLines + '*' + '/';
        });
        return style;
    }    
};


var createHtmlAsJson = function(html, strMarkerHandle){

  var objParent = (arguments.length > 2)?arguments[2]:{};
  var index = (arguments.length > 3)?arguments[3]:0;
  var strHtmlAll = (arguments.length > 4)?arguments[4]:html;

  var arrChildren = [];


  // TODO:, reduce these down to one, by doing a find and replace on all attributes to ensure they are all one type, ie attr="dbl quoted value"
  var regAttr1 = /\s([^\=<>\s\'\"]+)\=\"([^\"]*)\"/g;

  var trim = function(str){
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  };


  var getPos = function(strHtmlAll, index, strMarkerHandle){
    var strUp = strHtmlAll.substring(0, index);

    var intLine = strUp.split(/\n/).length;


    //var intLastIndexOfLine = strUp.search(/(^|\n)[^\n]*$/);
    var intLastIndexOfLine = strUp.lastIndexOf('\n') + 1;

    var strCol = strUp.substr(intLastIndexOfLine);

    strCol = strCol.replace(RegExp('\\' + strMarkerHandle + '\\d+ ','g'),'');  
    var intCol = strCol.length + 1;

    return {
      line:intLine,
      col:intCol
    };
  };


  // Get children of each top element.
  // TODO: supply this regex to the function, to save redeclaring it.
  var regPairs = new RegExp('(\\' + strMarkerHandle + '(\\d+) <(\\w[^\\s<>]*)([^<>]*)>)([\\w\\W]*)\\' + strMarkerHandle + '\\2 ','g');        

  if(html.search(regPairs) === -1){
    arrChildren.push({
      elem:'textNode',
      content:html
    });
  }else{
    
    // on each child of top element, capture the elem, content, attributes.
    // if the child has children then recurse again.
    
    var arrMatch = null;
    var obj;
    do{

      arrMatch = regPairs.exec(html);

      if(arrMatch){
             
        
        obj = {};
        
        var intEachIndex = index + arrMatch.index;
        
        var elem = arrMatch[3];   

        var isSelfClosing = elem.lastIndexOf('/')!==-1 || false;

        var content = (!isSelfClosing)? arrMatch[5] :null;
        var attr = arrMatch[4] || false;
     

        obj.elem = elem;

        var pos = getPos(strHtmlAll, intEachIndex, strMarkerHandle);
        obj.line = pos.line;
        obj.col = pos.col;
        
        //obj.isSelfClosing = isSelfClosing;                                     
        
        if(attr){
          var arrAttr;
          obj.attr = {};
          
          // TODO: only have one while, for one type of attribute supplied.

          do{
            arrAttr = regAttr1.exec(attr);
            if(arrAttr){
              var key = arrAttr[1];
              var val = arrAttr[2];
              val = trim(val);   
              key = trim(key);            
              obj.attr[key] = val; 
            }         
          }while(arrAttr);
        }

        if(content){
          content = content.substring(0, content.lastIndexOf('</'));
          obj.children = createHtmlAsJson(content, strMarkerHandle, obj, intEachIndex + arrMatch[1].length, strHtmlAll);
          
        }  
        if(objParent.elem){
          obj.parent = objParent;
        }           
        arrChildren.push(obj);
        if(arrChildren.length > 1){
          obj.preSiblings = arrChildren.slice(0, arrChildren.length - 1); 
        }   
      }
    } while(arrMatch);
  }
  return arrChildren;   

             /* This method should create example:
var json = [{
  elem:"body",
  line:2,
  attr:{
    class:"elem1 elem2 elem3"
  },
  children:[
    {
      h1:{

      }
    },
    {
      p1:{
        classes:'p1class',
        children:[
          {
            span:{

            }
          },
          {
            span:{

            }
          }
        ]
      }
    },
    {
      p2:{
        classes:'p2class',
        children:[
          {
            span:{

            }
          },
          {
            span:{

            }
          }
        ]
      }
    }          
  ]          
}] 
    */

};

var styleBlocksFilter = function(strClasses, objElem, objStyles, isExcludeBemModifier){
    var inst = new StyleBlocksFilter();
    return inst.init(strClasses, objElem, objStyles, isExcludeBemModifier);
};
var StyleBlocksFilter = function(){};
StyleBlocksFilter.prototype = {
    init:function(strClasses, objElem, objStyles, isExcludeBemModifier){
        var objStylesFiltered = {};
        objStylesFiltered = this.filterOnClasses(strClasses, objElem, objStyles, objStylesFiltered, isExcludeBemModifier);
        return objStylesFiltered;
    },
    filterOnClasses:function(strClasses, objElem, objStyles, objStylesFiltered, isExcludeBemModifier){
        var arrClasses = strClasses.split(' ');        
        for(var i=0, intLen = arrClasses.length; i < intLen; ++i){
            var strClass = arrClasses[i];

            if(strClass){

//console.log('styleBlocksFilter - strClass = ', strClass);


                objStylesFiltered['.' + strClass] = [];
                objStylesFiltered = this.filterOutParents(strClass, objStyles, objElem, objStylesFiltered, isExcludeBemModifier);                
            }
        }


//console.log('#########################################');       
//console.log('objElem = ', objElem);
//console.log('elem = ', objElem.elem);
//console.log('strClasses= ', strClasses);    

//console.log('strAllStyles = ', strAllStyles); 
//console.log('objStyles = ');
//console.dir(objStyles);

//console.log('objStylesFiltered = ',  objStylesFiltered);

        return objStylesFiltered;
    },
    filterOutParents:function(strClass, objStyles, objElem, objStylesFiltered, isExcludeBemModifier){
        var arrStyles = objStyles['.' + strClass];


        if(arrStyles){
            for(var i = 0, intLen = arrStyles.length; i < intLen; ++i){
                var objEachStyle = arrStyles[i];

                var isBemModifier = this.getBemModifier(strClass, objStyles, objEachStyle, isExcludeBemModifier);

                if(isBemModifier){
                    delete objStylesFiltered['.' + strClass];
                    return objStylesFiltered;
                }
                // We don't need two lots of objStylesFiltered['.' + strClass] to match properties against in reportMultilpleClassesWithSameProps                
                var isExistingAdjoinedToThis = this.getExistingAdjoinedWith(objStylesFiltered, objEachStyle);
                if(isExistingAdjoinedToThis){
                    delete objStylesFiltered['.' + strClass];
                    return objStylesFiltered;
                }

                var block = objEachStyle.block;


                //block = this.removeClassFromEndOfBlock(block, strClass);
                block = this.removeProps(block);
                block = this.removeLastAjoiningSelectorsFromBlock(block);

                var strPrecedingSelector = this.getPreceedingSelector(block);        
                var isParent = this.recurseParentsToMatchPreceedingSelectors(block, strPrecedingSelector, objElem.parent);
          
                if(isParent){
                    objStylesFiltered['.' + strClass].push(objEachStyle);
                }       

            }
        }

        return objStylesFiltered;
    }, 
    getBemModifier:function(strClass, objStyles, objEachStyle, isExcludeBemModifier){

        if(isExcludeBemModifier){
            var regBem  = /^[\.\#\w][^\.\#\{\(\[\;\:]*\-\-[^\-]+$/;
                
            if(strClass.search(regBem)!==-1){             
                return true;
            }            
        }
        return false;
    },
    getExistingAdjoinedWith:function(objStylesFiltered, objEachStyle){
        var arrAdjoinedWith = objEachStyle.arrAdjoinedWith;
            
        if(arrAdjoinedWith){
            for(var i=0, intLen = arrAdjoinedWith.length; i < intLen; ++i){
                var strEachSelector = arrAdjoinedWith[i];
                if(typeof objStylesFiltered[strEachSelector]!=='undefined'){
                    return true;
                }
            }
        }
    },
    removeClassFromEndOfBlock:function(block, strClass){
        return block.substring(0, block.lastIndexOf('.' + strClass));
    },
   
    getPreceedingSelector : function(block){
        var regPreceedingSelector = /[^\s\[\]\(\)\:]+(\:+[^\s\:]+|\[[^\[\]]*\]|\([^\(\)]*\))*(\s*(\+|~|>))?\s*$/i;
        // 

        var strPrecedingSelector = block.substr(block.search(regPreceedingSelector));        
        return strPrecedingSelector;

    },
    recurseParentsToMatchPreceedingSelectors:function(block, strSelector, objElem){

//console.log('___________________________________________________________');
////console.log('block = ', block)
//console.log('strSelector="' +  strSelector + '"');
//console.log('objElem.parent= ', objElem);


        if(!strSelector){          
            return true;
        }else if(!objElem){
            return false;
        }

        var isMatch = this.matchSelectorsOnParent(block, strSelector, objElem);

        // TOD
        // hasDirectParent
        // hasDirectSibling
        // hasGenericSibling
        // hasElem
        // hasSquare
        // hasPseudo

        return isMatch;
    },

    /*********************************************************************************************/
    matchSelectorsOnParent:function(block, strSelector, objElem){
        var objAdjoined = this.getAdjoined(strSelector);

        //var arrClasses = objAdjoined.arrClasses;
        //var strId = objAdjoined.strId;
        //var strElem = objAdjoined.strElem;

        var isSelectors = (Object.keys(objAdjoined).length > 0)? true:false;

        if(isSelectors){
            var isParentMatchAdjoined = this.matchAdjoinedOnParent(objElem, objAdjoined);     


            if(isParentMatchAdjoined){                
                block = this.removeLastAjoiningSelectorsFromBlock(block);

                var strPrevPrecedingSelector = this.getPreceedingSelector(block);
                return this.recurseParentsToMatchPreceedingSelectors(block, strPrevPrecedingSelector, objElem.parent);       
            }else{
                return this.recurseParentsToMatchPreceedingSelectors(block, strSelector, objElem.parent);
            }
        }else{
            return false;
        }

    },
    getAdjoined:function(strSelector){
        var objAdjoined = {};

        var arrClasses = [];
        //var strId = '';
        //var strElem = '';
        

        var isSiblingSelector = (strSelector.search(/[\+\~]\s*$/)!==-1)?true:false;

        if(!isSiblingSelector){

            // remove all parenthesis and square bracket matchers.
            strSelector = strSelector.replace(/\[[^\[\]]*\]/g,'');
            strSelector = strSelector.replace(/\([^\(\)]*\)/g,'');
            
            // get classes
            var regAllCombinedClasses = /\.[^\.\#\s\>\+\~\[\(\:]+/g;
            var arrMatch;

            do{
                arrMatch = regAllCombinedClasses.exec(strSelector);
                if(arrMatch){
                    arrClasses.push(arrMatch[0]); 
                }
            }while(arrMatch);

            if(arrClasses.length){
                objAdjoined.arrClasses = arrClasses;
            }

            // get id
            var arrId = strSelector.match(/\#[^\.\#\s\>\+\~\[\(\:]+/);
            if(arrId && arrId.length){
                objAdjoined.strId = arrId[0];
            }

            // get elem
            var arrElem = strSelector.match(/^\s*([^\.\#\s\>\+\~\[\(\:]+)/);
            if(arrElem && arrElem.length){
                objAdjoined.strElem = arrElem[1];
            }
        }     
        return objAdjoined;
    }, 
    matchAdjoinedOnParent:function(objElem, objAdjoined){

        // test if elem
        var strElem = objAdjoined.strElem;

        if(strElem && strElem!=='' && objElem.elem !== strElem){         
            return false;
        }
        var attr = objElem.attr || {};

        // test if id
        var strId = objAdjoined.strId;

        if(strId && strId!=='' && attr.id !== strId.substr(1)){       
            return false;
        }

        var arrClasses = objAdjoined.arrClasses;
        if(arrClasses && arrClasses.length){
            if(!attr.class){
                return false;
            }
            for(var i=0, intLen = arrClasses.length; i < intLen; ++i){
                var strClass = arrClasses[i];
                var reg = RegExp('(^|\\s)' + strClass.substr(1) + '(\\s|$)');
                if(attr.class.search(reg) === -1){
                    return false;
                }                
            }
        }

        return true;
    },
    removeProps:function(block){
       return block.replace(/\{[^\{\}]*\}\s*$/,'');
    },
    removeLastAjoiningSelectorsFromBlock:function(block){

        var intIndexSpaceInBrackets = block.search(/([\(\[]|$)/);

        block = block.substring(0, intIndexSpaceInBrackets);
        
        var reg = /[^\s\[\]\(\)\:]+(\:+[^\s\:]+|\[[^\[\]]*\]|\([^\(\)]*\))*(\s*(\+|~|>))?\s*$/i;

        block = block.replace(reg,'');
        block = block.replace(/\s*$/,'');

        return block;
    }
};
// dependencies
var wrapTagPointers = (typeof wrapTagPointers!=='undefined')?wrapTagPointers:function wrapTagPointers(){};
var createHtmlAsJson = (typeof createHtmlAsJson!=='undefined')?createHtmlAsJson:function createHtmlAsJson(){};
var styleBlocks = (typeof styleBlocks!=='undefined')?styleBlocks:function styleBlocks(){};
var styleBlocksFilter = (typeof styleBlocksFilter!=='undefined')?styleBlocksFilter:function styleBlocksFilter(){};


var reportMultipleClassesWithSameProps  = function(strWrapped, markers, strAllStyles, strRegExcludeClasses, isExcludeBemModifier){
    var inst = new ReportMultipleClassesWithSameProps();
    return inst.init(strWrapped, markers, strAllStyles, strRegExcludeClasses, isExcludeBemModifier);
};
var ReportMultipleClassesWithSameProps = function(){};

ReportMultipleClassesWithSameProps.prototype = {
    init:function(strWrapped, markers, strAllStyles, strRegExcludeClasses, isExcludeBemModifier){


        var arrHtmlJson = this.getHtmlAsJson(strWrapped, markers);
        var objReport = this.recurseJson(arrHtmlJson, strAllStyles, strRegExcludeClasses, isExcludeBemModifier);
//console.log('objReport = ', objReport);
        return objReport;
    },  
    trim: function(str){
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    },
    getHtmlAsJson : function(strWrapped, markers){
        // remove everything outside body
        //html = html.replace(/^[\w\W]*(<body(\s[^<>]*>|>)[\w\W]*<\/body\s*>)[\w\W]*$/gi,'$1');
        
        var arrHtmlJson = createHtmlAsJson(strWrapped, markers.strMarkerHandle);       
        return arrHtmlJson;
        
    },

    recurseJson:function(arrHtmlJson, strAllStyles, strRegExcludeClasses, isExcludeBemModifier){//, objReport
        var objReport = (arguments.length > 4)?arguments[4]:[];
        
        for(var i = 0, intLen = arrHtmlJson.length; i < intLen; ++i){
            var objElem = arrHtmlJson[i];
            var attr = objElem.attr;
            var strClasses = (attr)?attr.class:'';

            //console.log('##############################################################################')
            //console.log('recurseJson - elem = ', objElem.elem);  

            if(strClasses){
             
                var strClassesCombined = '.' + strClasses.split(' ').join('.');
                var objStyles = styleBlocks(strAllStyles, strClassesCombined);
                objReport = this.reportMissingClasses(strAllStyles, strClasses, objElem, objStyles, objReport);

                var isMultipleClasses = strClasses.split(' ').length > 1;

                if(isMultipleClasses){
                    objReport = this.filterOutNonParents(strAllStyles, strClasses, objElem, strRegExcludeClasses, isExcludeBemModifier, objStyles, objReport);
                }
            }
            if(objElem.children){
                objReport = this.recurseJson(objElem.children, strAllStyles, strRegExcludeClasses, isExcludeBemModifier, objReport);
            }
        }
        return objReport;
    },
    reportMissingClasses:function(strAllStyles, strClasses, objElem, objStyles, objReport){


        var strSelectorsMissing = this.getMissingSelectors(strClasses, objStyles);

        if(strSelectorsMissing){
            if(!objReport.arrSelectorsMissingFromCss){
                objReport.arrSelectorsMissingFromCss = [];
            }
            objReport.arrSelectorsMissingFromCss.push({
                objElem:objElem,
                strSelectors:strSelectorsMissing
            });
        }
        return objReport;
    },
    getMissingSelectors:function(strClasses, objStyles){
        var arrClasses = strClasses.split(' ');      
        var strSelectorsMissing = '';
        for(var i = 0, intLen = arrClasses.length; i < intLen; ++i){
            var strClass = arrClasses[i];
            if(typeof objStyles['.' + strClass] === 'undefined'){
                if(strSelectorsMissing!==''){
                    strSelectorsMissing+=',';
                }
                strSelectorsMissing+='.' + strClass;
            }
        }
        return strSelectorsMissing;

    },    
    filterOutNonParents:function(strAllStyles, strClasses, objElem, strRegExcludeClasses, isExcludeBemModifier, objStyles, objReport){   

        var strClassesCombined = strClasses.replace(/(^|\s+)/g,'.');

        if(strRegExcludeClasses){
            var regExclude = RegExp(strRegExcludeClasses,'g');
            strClassesCombined = strClassesCombined.replace(regExclude, '');
            strClasses = strClassesCombined.replace(/\./g,' ');
            strClasses = this.trim(strClasses);
        }
        
        var isStyles = (Object.keys(objStyles).length > 0)?true:false;        
        var objStylesFiltered = (isStyles)?styleBlocksFilter(strClasses, objElem, objStyles, isExcludeBemModifier):{};



//console.log('________________________________________');
//console.log('objStyles = ', objStyles);    
//console.log('objStylesFiltered = ', objStylesFiltered);

        var objMatching = this.compareProps(objStylesFiltered);
        var isMatching = (Object.keys(objMatching.properties).length > 0 )? true : false;        
        if(isMatching){

            if(!objReport.arrMultipleClassesSameProperties){
                objReport.arrMultipleClassesSameProperties = [];
            }
            objReport.arrMultipleClassesSameProperties.push({
                elem:objElem,
                matching:objMatching
            });
        }
        return objReport;

    },
    compareProps:function(objStylesFiltered){

        var isMultipleClasses = (Object.keys(objStylesFiltered).length > 1)? true: false;


        var objMatchingSelectors = {};
        var objMatchingProperties = {};



        if(isMultipleClasses){
            var arrAllProps = [];

            var strTheClass, i, p, intLen;


            var filterProps = function(arrAllProps, prop){
                arrAllPropsFiltered = arrAllProps.filter(function(item){
                    return item[prop];
                });
                return arrAllPropsFiltered;
            };


            for(strTheClass in objStylesFiltered){
                var arrClass = objStylesFiltered[strTheClass];                
                var strThisClassAllProps = '';

                for(i = 0, intLen = arrClass.length; i < intLen; ++i){
                    var objClass = arrClass[i];
                    var objClassProps = objClass.props;                                
                    
                    for(p in objClassProps){
                        var prop = p;

                        prop = this.matchFuzzyPropNames(prop);

                        var arrAllPropsFiltered = filterProps(arrAllProps, prop);

                        var objPropInOtherSelector =  arrAllPropsFiltered[0] || null;

                        if(objPropInOtherSelector && strThisClassAllProps.indexOf(',' + prop + ',') === -1){
                                                                                                                
                            if(!objMatchingProperties[prop]){

                                var objOtherMatch = objPropInOtherSelector[prop];
                                var strOtherSelector = objOtherMatch.selector;

                                objMatchingSelectors[strOtherSelector] = objOtherMatch;

                                objMatchingProperties[prop] = [];                                  
                                objMatchingProperties[prop].push(objOtherMatch);
                            }

                            objMatchingSelectors[strTheClass] = objClass;
                            objMatchingProperties[prop].push(objClass); 

                           
                        }else{
                            strThisClassAllProps+=',' + prop + ',';    
                        }

                        var objPropToClass = {};
                        objPropToClass[prop] = objClass;
                        arrAllProps.push(objPropToClass);
                        
                    }
                }
            }
        }             
        return {
            properties:objMatchingProperties,
            selectors:objMatchingSelectors
        };

    },
    matchFuzzyPropNames:function(prop){
        return prop;
        //var regFuzzy = /^(margin|padding)\-[\w\W]*$/;
        //return prop.replace(regFuzzy,'$1');
    }
};


/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * Copyright (c) 2014, Takeshi Kurosawa <taken.spc@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'alt-require',
    description: 'The alt attribute of an <img> element must be present and alt attribute of area[href] and input[type=image] must have a value.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var tagName = event.tagName.toLowerCase(),
                mapAttrs = parser.getMapAttrs(event.attrs),
                col = event.col + tagName.length + 1,
                selector;
            if(tagName === 'img' && !('alt' in mapAttrs)){
                reporter.warn('An alt attribute must be present on <img> elements.', event.line, col, self, event.raw);
            }
            else if((tagName === 'area' && 'href' in mapAttrs) ||
                (tagName === 'input' && mapAttrs['type'] === 'image')){
                if(!('alt' in mapAttrs) || mapAttrs['alt'] === ''){
                    selector = tagName === 'area' ? 'area[href]' : 'input[type=image]';
                    reporter.warn('The alt attribute of ' + selector + ' must have a value.', event.line, col, self, event.raw);
                }
            }
        });
    }
});

/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'attr-lowercase',
    description: 'All attribute names must be in lowercase.',
    init: function(parser, reporter, options){
        var self = this;
        var exceptions = Array.isArray(options) ? options : [];
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs,
                attr,
                col = event.col + event.tagName.length + 1;
            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                var attrName = attr.name;
                if (exceptions.indexOf(attrName) === -1 && attrName !== attrName.toLowerCase()){
                    reporter.error('The attribute name of [ '+attrName+' ] must be in lowercase.', event.line, col + attr.index, self, attr.raw);
                }
            }
        });
    }
});

/**
 * Copyright (c) 2014, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'attr-no-duplication',
    description: 'Elements cannot have duplicate attributes.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs;
            var attr;
            var attrName;
            var col = event.col + event.tagName.length + 1;

            var mapAttrName = {};
            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                attrName = attr.name;
                if(mapAttrName[attrName] === true){
                    reporter.error('Duplicate of attribute name [ '+attr.name+' ] was found.', event.line, col + attr.index, self, attr.raw);
                }
                mapAttrName[attrName] = true;
            }
        });
    }
});
/**
 * Copyright (c) 2014, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'attr-unsafe-chars',
    description: 'Attribute values cannot contain unsafe chars.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs,
                attr,
                col = event.col + event.tagName.length + 1;
            // exclude \x09(\t), \x0a(\r), \x0d(\n)
            var regUnsafe = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/;
            var match;
            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                match = attr.value.match(regUnsafe);
                if(match !== null){
                    var unsafeCode = escape(match[0]).replace(/%u/, '\\u').replace(/%/, '\\x');
                    reporter.warn('The value of attribute [ '+attr.name+' ] cannot contain an unsafe char [ ' + unsafeCode + ' ].', event.line, col + attr.index, self, attr.raw);
                }
            }
        });
    }
});

/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'attr-value-double-quotes',
    description: 'Attribute values must be in double quotes.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs,
                attr,
                col = event.col + event.tagName.length + 1;
            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                if((attr.value !== '' && attr.quote !== '"') ||
                    (attr.value === '' && attr.quote === "'")){
                    reporter.error('The value of attribute [ '+attr.name+' ] must be in double quotes.', event.line, col + attr.index, self, attr.raw);
                }
            }
        });
    }
});
/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'attr-value-not-empty',
    description: 'All attributes must have values.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs,
                attr,
                col = event.col + event.tagName.length + 1;
            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                if(attr.quote === '' && attr.value === ''){
                    reporter.warn('The attribute [ '+attr.name+' ] must have a value.', event.line, col + attr.index, self, attr.raw);
                }
            }
        });
    }
});
/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'csslint',
    description: 'Scan css with csslint.',
    init: function(parser, reporter, options){
        var self = this;
        parser.addListener('cdata', function(event){
            if(event.tagName.toLowerCase() === 'style'){

                var cssVerify;

                if(typeof exports === 'object' && require){
                    cssVerify = require("csslint").CSSLint.verify;
                }
                else{
                    cssVerify = CSSLint.verify;
                }

                if(options !== undefined){
                    var styleLine = event.line - 1,
                        styleCol = event.col - 1;
                    try{
                        var messages = cssVerify(event.raw, options).messages;
                        messages.forEach(function(error){
                            var line = error.line;
                            reporter[error.type==='warning'?'warn':'error']('['+error.rule.id+'] '+error.message, styleLine + line, (line === 1 ? styleCol : 0) + error.col, self, error.evidence);
                        });
                    }
                    catch(e){}
                }

            }
        });
    }
});
/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'doctype-first',
    description: 'Doctype must be declared first.',
    init: function(parser, reporter){
        var self = this;
        var allEvent = function(event){
            if(event.type === 'start' || (event.type === 'text' && /^\s*$/.test(event.raw))){
                return;
            }
            if((event.type !== 'comment' && event.long === false) || /^DOCTYPE\s+/i.test(event.content) === false){
                reporter.error('Doctype must be declared first.', event.line, event.col, self, event.raw);
            }
            parser.removeListener('all', allEvent);
        };
        parser.addListener('all', allEvent);
    }
});
/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'doctype-html5',
    description: 'Invalid doctype. Use: "<!DOCTYPE html>"',
    init: function(parser, reporter){
        var self = this;
        function onComment(event){
            if(event.long === false && event.content.toLowerCase() !== 'doctype html'){
                reporter.warn('Invalid doctype. Use: "<!DOCTYPE html>"', event.line, event.col, self, event.raw);
            }
        }
        function onTagStart(){
            parser.removeListener('comment', onComment);
            parser.removeListener('tagstart', onTagStart);
        }
        parser.addListener('all', onComment);
        parser.addListener('tagstart', onTagStart);
    }
});
/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'head-script-disabled',
    description: 'The <script> tag cannot be used in a <head> tag.',
    init: function(parser, reporter){
        var self = this;
        var reScript = /^(text\/javascript|application\/javascript)$/i;
        var isInHead = false;
        function onTagStart(event){
            var mapAttrs = parser.getMapAttrs(event.attrs);
            var type = mapAttrs.type;
            var tagName = event.tagName.toLowerCase();
            if(tagName === 'head'){
                isInHead = true;
            }
            if(isInHead === true &&
                tagName === 'script' &&
                (!type || reScript.test(type) === true)){
                reporter.warn('The <script> tag cannot be used in a <head> tag.', event.line, event.col, self, event.raw);
            }
        }
        function onTagEnd(event){
            if(event.tagName.toLowerCase() === 'head'){
                parser.removeListener('tagstart', onTagStart);
                parser.removeListener('tagend', onTagEnd);
            }
        }
        parser.addListener('tagstart', onTagStart);
        parser.addListener('tagend', onTagEnd);
    }
});

/**
 * Copyright (c) 2014, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'href-abs-or-rel',
    description: 'An href attribute must be either absolute or relative.',
    init: function(parser, reporter, options){
        var self = this;

        var hrefMode = options === 'abs' ? 'absolute' : 'relative';

        parser.addListener('tagstart', function(event){
            var attrs = event.attrs;
            var attr;
            var col = event.col + event.tagName.length + 1;

            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                if(attr.name === 'href'){
                    if((hrefMode === 'absolute' && /^\w+?:/.test(attr.value) === false) ||
                        (hrefMode === 'relative' && /^https?:\/\//.test(attr.value) === true)){
                        reporter.warn('The value of the href attribute [ '+attr.value+' ] must be '+hrefMode+'.', event.line, col + attr.index, self, attr.raw);
                    }
                    break;
                }
            }
        });
    }
});
/**
 * Copyright (c) 2014, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'id-class-ad-disabled',
    description: 'The id and class attributes cannot use the ad keyword, it will be blocked by adblock software.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs;
            var attr;
            var attrName;
            var col = event.col + event.tagName.length + 1;

            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                attrName = attr.name;
                if(/^(id|class)$/i.test(attrName)){
                    if(/(^|[-\_])ad([-\_]|$)/i.test(attr.value)){
                        reporter.warn('The value of attribute '+attrName+' cannot use the ad keyword.', event.line, col + attr.index, self, attr.raw);
                    }
                }
            }
        });
    }
});
/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'id-class-value',
    description: 'The id and class attribute values must meet the specified rules.',
    init: function(parser, reporter, options){
        var self = this;
        var arrRules = {
            'underline': {
                'regId': /^[a-z\d]+(_[a-z\d]+)*$/,
                'message': 'The id and class attribute values must be in lowercase and split by an underscore.'
            },
            'dash': {
                'regId': /^[a-z\d]+(-[a-z\d]+)*$/,
                'message': 'The id and class attribute values must be in lowercase and split by a dash.'
            },
            'hump': {
                'regId': /^[a-z][a-zA-Z\d]*([A-Z][a-zA-Z\d]*)*$/,
                'message': 'The id and class attribute values must meet the camelCase style.'
            }
        }, rule;
        if(typeof options === 'string'){
            rule = arrRules[options];
        }
        else{
            rule = options;
        }
        if(rule && rule.regId){
            var regId = rule.regId,
                message = rule.message;
            parser.addListener('tagstart', function(event){
                var attrs = event.attrs,
                    attr,
                    col = event.col + event.tagName.length + 1;
                for(var i=0, l1=attrs.length;i<l1;i++){
                    attr = attrs[i];
                    if(attr.name.toLowerCase() === 'id'){
                        if(regId.test(attr.value) === false){
                            reporter.warn(message, event.line, col + attr.index, self, attr.raw);
                        }
                    }
                    if(attr.name.toLowerCase() === 'class'){
                        var arrClass = attr.value.split(/\s+/g), classValue;
                        for(var j=0, l2=arrClass.length;j<l2;j++){
                            classValue = arrClass[j];
                            if(classValue && regId.test(classValue) === false){
                                reporter.warn(message, event.line, col + attr.index, self, classValue);
                            }
                        }
                    }
                }
            });
        }
    }
});
/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'id-unique',
    description: 'The value of id attributes must be unique.',
    init: function(parser, reporter){
        var self = this;
        var mapIdCount = {};
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs,
                attr,
                id,
                col = event.col + event.tagName.length + 1;
            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                if(attr.name.toLowerCase() === 'id'){
                    id = attr.value;
                    if(id){
                        if(mapIdCount[id] === undefined){
                            mapIdCount[id] = 1;
                        }
                        else{
                            mapIdCount[id] ++;
                        }
                        if(mapIdCount[id] > 1){
                            reporter.error('The id value [ '+id+' ] must be unique.', event.line, col + attr.index, self, attr.raw);
                        }
                    }
                    break;
                }
            }
        });
    }
});
/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'inline-script-disabled',
    description: 'Inline script cannot be used.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs;
            var attr;
            var col = event.col + event.tagName.length + 1;
            var attrName;
            var reEvent = /^on(unload|message|submit|select|scroll|resize|mouseover|mouseout|mousemove|mouseleave|mouseenter|mousedown|load|keyup|keypress|keydown|focus|dblclick|click|change|blur|error)$/i;

            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                attrName = attr.name.toLowerCase();
                if(reEvent.test(attrName) === true){
                    reporter.warn('Inline script [ '+attr.raw+' ] cannot be used.', event.line, col + attr.index, self, attr.raw);
                }
                else if(attrName === 'src' || attrName === 'href'){
                    if(/^\s*javascript:/i.test(attr.value)){
                        reporter.warn('Inline script [ '+attr.raw+' ] cannot be used.', event.line, col + attr.index, self, attr.raw);
                    }
                }
            }
        });
    }
});

/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'inline-style-disabled',
    description: 'Inline style cannot be used.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs;
            var attr;
            var col = event.col + event.tagName.length + 1;
            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                if(attr.name.toLowerCase() === 'style'){
                    reporter.warn('Inline style [ '+attr.raw+' ] cannot be used.', event.line, col + attr.index, self, attr.raw);
                }
            }
        });
    }
});

/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'jshint',
    description: 'Scan script with jshint.',
    init: function(parser, reporter, options){
        var self = this;
        parser.addListener('cdata', function(event){
            if(event.tagName.toLowerCase() === 'script'){

                var mapAttrs = parser.getMapAttrs(event.attrs),
                    type = mapAttrs.type;

                // Only scan internal javascript
                if(mapAttrs.src !== undefined || (type && /^(text\/javascript)$/i.test(type) === false)){
                    return;
                }

                var jsVerify;

                if(typeof exports === 'object' && require){
                    jsVerify = require('jshint').JSHINT;
                }
                else{
                    jsVerify = JSHINT;
                }

                if(options !== undefined){
                    var styleLine = event.line - 1,
                        styleCol = event.col - 1;
                    var code = event.raw.replace(/\t/g,' ');
                    try{
                        var status = jsVerify(code, options);
                        if(status === false){
                            jsVerify.errors.forEach(function(error){
                                var line = error.line;
                                reporter.warn(error.reason, styleLine + line, (line === 1 ? styleCol : 0) + error.character, self, error.evidence);
                            });
                        }
                    }
                    catch(e){}
                }

            }
        });
    }
});

var reportMultipleClassesWithSameProps = (typeof reportMultipleClassesWithSameProps!=='undefined')?reportMultipleClassesWithSameProps:function reportMultipleClassesWithSameProps(){};
var wrapTagPointers = (typeof wrapTagPointers!=='undefined')?wrapTagPointers:function wrapTagPointers(){};


var fs = require('fs');


HTMLHint.addRule({
    id: 'multiple-classes-same-property',
    description: 'Prevent classes with the same properties',
    init: function multipleClases(parser, reporter, options) {

        var self = this;

        // REMOVE FOR BUILD 
        /*           
        var reporter = {
            error:function(str, intLine){
                console.log(str);
            },
            warn:function(str, intLine){
                console.log(str);
            }
        }
        var strAllStyles = $('#styles').val();
        var strRegExcludeClasses =  '(\\.gr\\-1|\\.gr\\-2)+';
        var isExcludeBemModifier = true;
        */

        // RESTORE FOR BUILD  
             
        var getOption = function(options, prop){
            /*{
                "tag-pair": true,
                "multiple-classes-same-property":"strStylesPaths=C:\\projects\\careers\\Cwo.Careers.Web.UI\\ui\\app\\css\\,someOtherPath;strRegExcludeClasses=(\\.gr\\-1|\\.gr\\-2)+;isExcludeBemModifier=true;"
            }*/

            var arrMatch = options.match(RegExp('(^|\\;)' + prop + '\\=([^\\;]+)'));

            if(arrMatch && arrMatch.length){
                return arrMatch[2];
            }
            return null;
        };

        var strStylesPaths = getOption(options, 'strStylesPaths');
        var strRegExcludeClasses = getOption(options, 'strRegExcludeClasses');
        var isExcludeBemModifier = getOption(options, 'isExcludeBemModifier');
        isExcludeBemModifier = (isExcludeBemModifier ==='true')?true:false;
        
        //example
        //var strAllStyles = '.classX{ background:red;}'; 
        
        var getDirFiles = function(dir, strExt) {
            var reg = RegExp('\\.' + strExt + '$');
            var results = [];
            var list = fs.readdirSync(dir);
            list.forEach(function(file) {
                file = dir + '/' + file;

                file = file.replace(/\//g,'\\');
                file = file.replace(/\\/g,'\\\\');

                var stat = fs.statSync(file);


                if (stat && stat.isDirectory()){
                    results = results.concat(getDirFiles(file, strExt));
                }else if(reg.test(file)){
                    results.push(file);
                }                        
            });
            return results;
        };
        var concatFilesContent = function(files){
            var arr = [];
            var key;
            for(key in files){
                var filePath = files[key];
                var content = fs.readFileSync(filePath, "utf8");
                arr.push(content);
            }

            return arr.join('');
        };
        var concatAllCssFiles = function(strStylesPaths){
            var arrFiles = strStylesPaths.split(',');
            var arr = [];
            for(var i=0, intLen = arrFiles.length; i < intLen; ++i){
                var strFilePath = arrFiles[i];
                arr = arr.concat(getDirFiles(strFilePath, 'css'));    
            }
            var strAllStyles = concatFilesContent(arr); 
            return strAllStyles;           
        };

        var strAllStyles = concatAllCssFiles(strStylesPaths);
        

        var allEvent = function(event) {
            if(event.type == 'start'){

                var html = event.html;

                var markers = {
                    strMarkerStart : '\u21A3',
                    strMarkerEnd : '\u20AA',
                    strMarkerHandle : '\u20A9',
                    strMarkerEndComment : '\u03C8'
                };

                var htmlWrapped = wrapTagPointers(html, markers);
                        
                if(htmlWrapped.isValid === true){
                    var strWrapped = htmlWrapped.strHtml;                    
                    var objReport = reportMultipleClassesWithSameProps(strWrapped, markers, strAllStyles, strRegExcludeClasses, isExcludeBemModifier);

                    var arrMultipleClassesSameProperties = objReport.arrMultipleClassesSameProperties || [];
                    var arrSelectorsMissingFromCss = objReport.arrSelectorsMissingFromCss || [];

                    var objElem, strSelectors, strReport;

                    for(var i=0, intLen = arrMultipleClassesSameProperties.length; i < intLen; ++i){
                        var objMultiple = arrMultipleClassesSameProperties[i];
                        objElem = objMultiple.elem;
                        var objMatchingSelectors = Object.keys(objMultiple.matching.selectors);
                        strSelectors = objMatchingSelectors.join(',');
                        var objMatchingProperties = Object.keys(objMultiple.matching.properties);
                        var strProperties = objMatchingProperties.join(',');

                        strReport = "Multiple selectors exist with same properties. selectors = " + strSelectors + '. Properties = ' + strProperties ;
                        reporter.error(strReport, objElem.line, 0, self, event.raw);                    
                    }

                    for(i=0, intLen = arrSelectorsMissingFromCss.length; i < intLen; ++i){
                        var objMissing = arrSelectorsMissingFromCss[i];

                        objElem = objMissing.objElem;

                        strSelectors = objMissing.strSelectors;
                        strReport = "Selector(s) don't exist in css: " + strSelectors;
                        var intLine = objElem.line;

                        reporter.warn(strReport, intLine, 0, self, event.raw);                    
                    }
                }else{
                    
                    // capture tag pairing.
                    var intStartLine = htmlWrapped.intStartLine;
                    var intBadLine = htmlWrapped.intBadLine;
                    var strMsg = htmlWrapped.strMsg;
                    
                    if(typeof intBadLine !== 'undefined'){
                        reporter.error(strMsg, intBadLine, 0, self, event.raw);      
                        reporter.error(strMsg, intStartLine, 0, self, event.raw); 
                    }
                                          
                }

            }
            parser.removeListener("start", allEvent);
        };
        parser.addListener("start", allEvent);
    }
});

/**
 * Copyright (c) 2014, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'space-tab-mixed-disabled',
    description: 'Do not mix tabs and spaces for indentation.',
    init: function(parser, reporter, options){
        var self = this;
        var indentMode = 'nomix';
        var spaceLengthRequire = null;
        if(typeof options === 'string'){
            var match = options.match(/^([a-z]+)(\d+)?/);
            indentMode = match[1];
            spaceLengthRequire = match[2] && parseInt(match[2], 10);
        }
        parser.addListener('text', function(event){
            var raw = event.raw;
            var reMixed = /(^|\r?\n)([ \t]+)/g;
            var match;
            while((match = reMixed.exec(raw))){
                var fixedPos = parser.fixPos(event, match.index + match[1].length);
                if(fixedPos.col !== 1){
                    continue;
                }
                var whiteSpace  = match[2];
                if(indentMode === 'space'){
                    if(spaceLengthRequire){
                        if(/^ +$/.test(whiteSpace) === false || whiteSpace.length % spaceLengthRequire !== 0){
                            reporter.warn('Please use space for indentation and keep '+spaceLengthRequire+' length.', fixedPos.line, 1, self, event.raw);
                        }
                    }
                    else{
                        if(/^ +$/.test(whiteSpace) === false){
                            reporter.warn('Please use space for indentation.', fixedPos.line, 1, self, event.raw);
                        }
                    }
                }
                else if(indentMode === 'tab' && /^\t+$/.test(whiteSpace) === false){
                    reporter.warn('Please use tab for indentation.', fixedPos.line, 1, self, event.raw);
                }
                else if(/ +\t|\t+ /.test(whiteSpace) === true){
                    reporter.warn('Do not mix tabs and spaces for indentation.', fixedPos.line, 1, self, event.raw);
                }
            }
        });
    }
});

/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'spec-char-escape',
    description: 'Special characters must be escaped.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('text', function(event){
            var raw = event.raw,
                reSpecChar = /[<>]/g,
                match;
            while((match = reSpecChar.exec(raw))){
                var fixedPos = parser.fixPos(event, match.index);
                reporter.error('Special characters must be escaped : [ '+match[0]+' ].', fixedPos.line, fixedPos.col, self, event.raw);
            }
        });
    }
});
/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'src-not-empty',
    description: 'The src attribute of an img(script,link) must have a value.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var tagName = event.tagName,
                attrs = event.attrs,
                attr,
                col = event.col + tagName.length + 1;
            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                if(((/^(img|script|embed|bgsound|iframe)$/.test(tagName) === true && attr.name === 'src') ||
                    (tagName === 'link' && attr.name === 'href') ||
                    (tagName === 'object' && attr.name === 'data')) &&
                    attr.value === ''){
                    reporter.error('The attribute [ '+attr.name + ' ] of the tag [ '+tagName+' ] must have a value.', event.line, col + attr.index, self, attr.raw);
                }
            }
        });
    }
});
/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'style-disabled',
    description: '<style> tags cannot be used.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            if(event.tagName.toLowerCase() === 'style'){
                reporter.warn('The <style> tag cannot be used.', event.line, event.col, self, event.raw);
            }
        });
    }
});

/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'tag-pair',
    description: 'Tag must be paired.',
    init: function(parser, reporter){
        var self = this;
        var stack=[],
            mapEmptyTags = parser.makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed,track,command,source,keygen,wbr");//HTML 4.01 + HTML 5
        parser.addListener('tagstart', function(event){
            var tagName = event.tagName.toLowerCase();
            if (mapEmptyTags[tagName] === undefined && !event.close){
                stack.push({
                    tagName: tagName,
                    line: event.line,
                    raw: event.raw
                });
            }
        });
        parser.addListener('tagend', function(event){
            var tagName = event.tagName.toLowerCase();
            //向上寻找匹配的开始标签
            for(var pos = stack.length-1;pos >= 0; pos--){
                if(stack[pos].tagName === tagName){
                    break;
                }
            }
            if(pos >= 0){
                var arrTags = [];
                for(var i=stack.length-1;i>pos;i--){
                    arrTags.push('</'+stack[i].tagName+'>');
                }
                if(arrTags.length > 0){
                    var lastEvent = stack[stack.length-1];
                    reporter.error('Tag must be paired, missing: [ '+ arrTags.join('') + ' ], start tag match failed [ ' + lastEvent.raw + ' ] on line ' + lastEvent.line + '.', event.line, event.col, self, event.raw);
                }
                stack.length=pos;
            }
            else{
                reporter.error('Tag must be paired, no start tag: [ ' + event.raw + ' ]', event.line, event.col, self, event.raw);
            }
        });
        parser.addListener('end', function(event){
            var arrTags = [];
            for(var i=stack.length-1;i>=0;i--){
                arrTags.push('</'+stack[i].tagName+'>');
            }
            if(arrTags.length > 0){
                var lastEvent = stack[stack.length-1];
                reporter.error('Tag must be paired, missing: [ '+ arrTags.join('') + ' ], open tag match failed [ ' + lastEvent.raw + ' ] on line ' + lastEvent.line + '.', event.line, event.col, self, '');
            }
        });
    }
});

/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'tag-self-close',
    description: 'Empty tags must be self closed.',
    init: function(parser, reporter){
        var self = this;
        var mapEmptyTags = parser.makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed,track,command,source,keygen,wbr");//HTML 4.01 + HTML 5
        parser.addListener('tagstart', function(event){
            var tagName = event.tagName.toLowerCase();
            if(mapEmptyTags[tagName] !== undefined){
                if(!event.close){
                    reporter.warn('The empty tag : [ '+tagName+' ] must be self closed.', event.line, event.col, self, event.raw);
                }
            }
        });
    }
});

/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'tagname-lowercase',
    description: 'All html element names must be in lowercase.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart,tagend', function(event){
            var tagName = event.tagName;
            if(tagName !== tagName.toLowerCase()){
                reporter.error('The html element name of [ '+tagName+' ] must be in lowercase.', event.line, event.col, self, event.raw);
            }
        });
    }
});
/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'title-require',
    description: '<title> must be present in <head> tag.',
    init: function(parser, reporter){
        var self = this;
        var headBegin = false;
        var hasTitle = false;
        function onTagStart(event){
            var tagName = event.tagName.toLowerCase();
            if(tagName === 'head'){
                headBegin = true;
            }
            else if(tagName === 'title' && headBegin){
                hasTitle = true;
            }
        }
        function onTagEnd(event){
            var tagName = event.tagName.toLowerCase();
            if(hasTitle && tagName === 'title'){
                var lastEvent = event.lastEvent;
                if(lastEvent.type !== 'text' || (lastEvent.type === 'text' && /^\s*$/.test(lastEvent.raw) === true)){
                    reporter.error('<title></title> must not be empty.', event.line, event.col, self, event.raw);
                }
            }
            else if(tagName === 'head'){
                if(hasTitle === false){
                    reporter.error('<title> must be present in <head> tag.', event.line, event.col, self, event.raw);
                }
                parser.removeListener('tagstart', onTagStart);
                parser.removeListener('tagend', onTagEnd);
            }
        }
        parser.addListener('tagstart', onTagStart);
        parser.addListener('tagend', onTagEnd);
    }
});
