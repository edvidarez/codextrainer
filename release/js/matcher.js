/**
 * Created by Arturo Hernandez on 27/11/2016.
 */

define(function(){

    var matchingWords={
        "iniciar_programa":"finalizar_programa",
        "inicia_ejecucion":"termina_ejecucion",
        "repetir":"\tinicio\n\tfin",
        "mientras":"\tinicio\n\tfin",
        "si":"\tinicio\n\tfin",
        "inicio":"fin"
    }
    var specialTokens={
        "repetir":" [numero] veces",
        "mientras":" [expresion condicional] hacer",
         "si":" [condicional] entonces"
    }
    function Matcher(){
    }
    Matcher.prototype.checkWrongWord=function($this,belongsToLanguage){
        if(!belongsToLanguage){
            if($this.css('border-bottom')!="3px solid yellow"){
                $this.css('border-bottom','3px solid yellow');
            }
        }else{
            $this.css('border-bottom','0px');
        }

        return belongsToLanguage ?false:true;
    }

    Matcher.prototype.matchSpecialToken=function(word){
        return specialTokens[word.trim()];
    }

    Matcher.prototype.isSpecialToken=function(word){
        if(typeof(specialTokens[word.trim()])!="undefined")
            return true;
        return false;
    }

    Matcher.prototype.matchWord=function(word){
        if(matchingWords[word.trim()]!="undefined")
            return matchingWords[word.trim()];
    }
    Matcher.prototype.isMatchedAlready=function(word,children,line){
        var flag=false;

        $.each(children,function(index, val) {
            var child = $(this).children('pre').children('span').children('span');
            if(matchingWords[word.trim()]==child.text().trim()){
                flag= true;
            }
        });
        return flag;
    }

    Matcher.prototype.isMatchingWord=function(word){
            if(typeof(matchingWords[word.trim()])!="undefined")
               return true;
        return false;
    }

    return {Matcher:Matcher};

});