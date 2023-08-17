var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var Writer = require("./Writer")
var PDFWriter = require("./PDFWriter");
var HtmlParser = require("./HtmlParser");

var leitor = new Reader();
var escritor = new Writer();

async function main(){
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados =  Processor.Process(dados);
    var usuarios = new Table(dadosProcessados);
    var html = await HtmlParser.Parse(usuarios);  

    escritor.Write("meuhtmlgerado.html", html)
    PDFWriter.WritePDF("meupdfgerado.pdf", html)
}

main();