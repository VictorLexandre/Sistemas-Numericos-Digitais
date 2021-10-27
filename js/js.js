function Soma() {
    var x = document.getElementById("somaB");
    if (x.innerHTML === "") {
        x.innerHTML = "<h4>Para somar dois números binários, o procedimento é o seguinte :</h4>\n<br>" +
            "Exemplo 1: *\n <br><br>" +
            " 1100\n <br>" +
            " + 111\n <br>" +
            " -----\n <br>" +
            " = 10011 \n <br><br>" +
            "Explicando: Na soma de 0 com 1 o total é 1. Quando se soma 1 com 1, o resultado é 2, \n" +
            "mas como 2 em binário é 10, o resultado é 0 (zero) e passa-se o outro 1 para a \n" +
            "\"frente\", ou seja, para ser somado com o próximo elemento, conforme assinalado pelo \n" +
            "asterisco, como no exemplo acima.\n<br>" +
            "Exemplo 2: **\n<br><br>" +
            " 1100\n<br>" +
            " + 1111\n<br>" +
            " -----\n<br>" +
            " = 11011\n<br><br>" +
            "Explicando: Nesse caso acima, na quarta coluna da direita para a esquerda, nos \n" +
            "deparamos com uma soma de 1 com 1 mais a soma do 1 ( * ) que veio da soma \n" +
            "anterior. Quando temos esse caso (1 + 1 + 1), o resultado é 1 e passa-se o outro 1 para \n" +
            "frente.\n";
    }else {
        x.innerHTML = ""
    }
}
function Subtracao() {
    var x = document.getElementById("subtracaoB");
    if (x.innerHTML === "") {
        x.innerHTML = "<h4>Para subtrair dois números binários, o procedimento é o seguinte :</h4>\n<br>" +
            "* ***\n<br>" +
            " 1101110\n<br>" +
            " - 10111\n<br>" +
            " -------\n<br>" +
            "= 1010111\n<br><br>" +
            "Explicando: Quando temos 0 menos 1, precisamos \"pedir emprestado\" do elemento \n" +
            "vizinho. Esse empréstimo vem valendo 2 (dois), pelo fato de ser um número binário. \n" +
            "Então, no caso da coluna 0 - 1 = 1, porque na verdade a operação feita foi 2 - 1 = 1. \n" +
            "Esse processo se repete e o elemento que cedeu o \"empréstimo\" e valia 1 passa a \n" +
            "valer 0. Os asteriscos marcam os elementos que \"emprestaram\" para seus vizinhos. \n" +
            "Perceba, que, logicamente, quando o valor for zero, ele não pode \"emprestar\" para \n" +
            "ninguém, então o \"pedido\" passa para o próximo elemento e esse zero recebe o valor \n" +
            "de 1.\n";
    }else {
        x.innerHTML = ""
    }
}
function tabelaAscii() {
    var x = document.getElementById("ascii");
    if (x.innerHTML === "") {
        x.innerHTML = "<img class=\"img-fluid\" src=\"img/binario/img3.png\" alt=>";
    }else {
        x.innerHTML = ""
    }
}
function hDb() {
    var x = document.getElementById("HdB");
    if (x.innerHTML === "") {
        x.innerHTML = "<img class=\"img-fluid\" src=\"img/hexa/img2.png\" alt=>";
    }else {
        x.innerHTML = ""
    }
}
function HexaBi() {
    var x = document.getElementById("hExaBi");
    if (x.innerHTML === "") {
        x.innerHTML = "<h4>Conversão de Binário para Hexadecimal :\n</h4><br>" +
            "Separe o número binário em grupos de 4 dígitos da direita para a esquerda e então \n" +
            "faça a conversão de cada grupo de acordo com a tabela de conversão direta acima.\n" +
            "Caso a quantidade de dígitos a ser convertida não for um número múltiplo de 4, \n" +
            "complete com 0´s a esquerda até torná-lo múltiplo de 4.\n <br> " +
            "Ex: (1010111001010)B para hexadecimal :<br><br>" +
            "<img class=\"img-fluid\" src=\"img/hexa/img3.png\" alt=><br><br>" +
            "Note que os 3 primeiros zeros foram preenchidos apenas para formar um grupo.\n<br>" +
            "Desta forma o número correspondente em hexadecimal é 15CA.\n<br><br>" +
            "<h4>Conversão de Hexadecimal para Binário :</h4><br>" +
            "Execute o processo inverso ao da conversão de binário para hexadecimal, convertendo \n" +
            "cada dígito hexadecimal em um grupo de 4 dígitos binários.\n<br>" +
            "Ex: (1F7)H para binário:\n<br><br>" +
            "<img class=\"img-fluid\" src=\"img/hexa/img3.png\" alt=><br><br>" +
            "Podemos excluir os zeros à esquerda que sobraram no grupo mais a esquerda, assim o \n" +
            "resultado em binário será: 111110111.";
    }else {
        x.innerHTML = ""
    }
}
function HexaDec() {
    var x = document.getElementById("hExaDec");
    if (x.innerHTML === "") {
        x.innerHTML = "<h4>Conversão de Decimal para Hexadecimal :</h4>\n" +
            "Para esta conversão, dividiremos o número decimal por 16 sucessivas vezes, \n" +
            "separando sempre o seu resto e continuando a dividir o seu quociente até que ele seja \n" +
            "menor que 16. Por fim, a seqüência inversa dos restos (começando pelo quociente da \n" +
            "última divisão) formará o resultado.\n<br><br>" +
            "Ex: (289)D para hexadecimal:\n<br>" +
            "289 / 16 = 18 resto = 1\n<br>" +
            "18 / 16 = 1 resto = 2\n<br>" +
            "----------------------\n<br>" +
            "Resultado = (121)H\n<br><br>" +

            "<h4>Conversão de Hexadecimal para Decimal :</h4>\n" +
            "Para realizarmos essa conversão, primeiro transformamos cada dígito hexadecimal em \n" +
            "decimal. Assim o C, por exemplo, será convertido para 12.\n<br>" +
            "Agora multiplicamos cada número decimal convertido por 16n\n" +
            ", onde n é casa decimal \n" +
            "onde ele se encontra, sendo que o dígito mais a direita é 0.\n<br>" +
            "No final somamos todas as multiplicações obtidas.\n<br><br>" +
            "Ex: (7C12)H para decimal:\n<br><br>" +
            "7 x 163\n" +
            "+ 12 x 162\n" +
            "+ 1 x 161\n" +
            "+ 2 x 160\n" +
            "= (31762)D\n<br><br>" +
            "Exemplo de operações com hexadecimais\n<br><br>" +
            "Soma: Subtração:\n<br>" +
            " 15A 22C\n<br>" +
            " + 7B - 7F\n<br>" +
            " ----- -----\n<br>" +
            " 1D5 1AD";
    }else {
        x.innerHTML = ""
    }
}
function DecOct() {
    var x = document.getElementById("dEcOct");
    if (x.innerHTML === "") {
        x.innerHTML = "<h4>Conversão Decimal – Octal</h4>" +

            "<h5>Método de multiplicações sucessivas por 8 :</h5>\n" +
            "É utilizado para converter uma fração decimal para o sistema octal. Multiplica-se a fração decimal por 8, " +
            "obtendo-se na parte inteira do resultado o primeiro dígito da fração octal resultante. " +
            "O processo é repetido sucessivamente com a parte fracionária do resultado para obter os dígitos seguintes e " +
            "termina quando a parte fracionária é nula ou inferior à medida de erro especificada.\n" +
            "\n<br>" +
            "Exemplo :<br><br>" +
            "Com decimal 0.140625 em octal.\n<br>" +
            "0.140625 x 8 = 1.125<br><br>" +
            "0.125 x 8 = 1.0\n<br>" +
            "Combinamos os dois métodos anteriores podemos converter para octal números decimais com parte inteira e fracionária.<br><br>" +

            "<h4>Método de Divisões sucessivas por 8 :</h4>\n" +
            "É utilizado para converter uma fração decimal para o sistema octal. Dividi-se a fração decimal por 8, obtendo-se na parte inteira do resultado o primeiro dígito da fração octal resultante. O processo é repetido sucessivamente com a parte fracionária do resultado para obter os dígitos seguintes e termina quando a parte fracionária é nula ou inferior à 8 neste caso.\n" +
            "\n<br>" +
            "Exemplo :<br><br>" +
            "61 /8 = 7 resto 5 => 61(decimal) = 75(octal)<br><br>" +

            "<h5>Conversão Octal – Decimal</h5>" +
            "Existem vários métodos, sendo mais comumente utilizado o proveniente do TFN, em que se faz a conversão de forma direta através da fórmula.\n" +
            "\n<br>" +
            "Exemplo :<br><br>" +
            "Converter o número octal 764 para o sistema decimal.\n<br>" +
            "764(base8) = 7 x 8² + 6 x 8¹ + 4 x 8° = 448 + 48 + 4 = 500(base10)";
    }else {
        x.innerHTML = ""
    }
}
function biTal() {
    var x = document.getElementById("ocBi");
    if (x.innerHTML === "") {
        x.innerHTML = "<h4>Conversão Octal – Binário :</h4>" +
            "Quando existir necessidade de converter números octal em binários, " +
            "deve-se separar cada dígito do número octal e substituí-lo pelo seu valor correspondente de binário.\n" +
            "\n" +
            "Exemplo :<br><br>" +
            "Converter o número octal 1572 em binário.\n<br>" +
            "Logo, 1 5 7 2    =  001 101 111 010<br><br>" +

            "<h4>Conversão Binário – Octal</h4>\n" +
            "Para converter um número binário em octal, executa-se o processo inverso ao anterior. Agrupam-se os dígitos binários de 3 em 3 do ponto decimal da direita para a esquerda, substituindo-se cada trio de dígitos binários pelo equivalente dígito octal.\n" +
            "\n" +
            "Por exemplo, a conversão do número binário 1010111100 em octal:<br><br>" +
            "<img class=\"img-fluid\" src=\"img/octal/img2.png\" alt=\"\"><br><br>" +
            "Assim, tem-se 1010111100(bin) = 1274(oct)<br><br>";
    }else {
        x.innerHTML = ""
    }
}
function HecTal() {
    var x = document.getElementById("hecBi");
    if (x.innerHTML === "") {
        x.innerHTML = "<h4>Conversão Octal – Hexadecimal</h4>\n" +
            "Para esta conversão é necessário executar um passo intermediário utilizando o sistema binário. Primeiramente converte-se o número octal em binário e depois converte-se o binário para o sistema hexadecimal, agrupando-se os dígitos de 4 em 4 e fazendo cada grupo corresponder a um dígito hexadecimal.\n" +
            "\n<br>" +
            "Por, exemplo, a conversão o número octal 1057 em hexadecimal:<br><br>" +
            "Passagem ao binário :<br><br>" +
            "<img class=\"img-fluid\" src=\"img/octal/img3.png\" alt=\"\"><br><br>" +
            "Passagem ao hexadecimal :<br><br>" +
            "<img class=\"img-fluid\" src=\"img/octal/img4.png\" alt=\"\"><br><br>" +
            "Assim, tem-se 1057(oct) = 22F(hex)<br><br>" +

            "<h4>Conversão Hexadecimal – Octal</h4>" +
            "Esta conversão, assim como a anterior, exige um passo intermediário em que se utiliza o sistema binário. Converte-se o número hexadecimal em binário e este em octal.\n" +
            "\n" +
            "Exemplo:\n<br>" +
            "\n" +
            "Converter o número hexadecimal 1F4 em octal.<br><br>" +
            "<img class=\"img-fluid\" src=\"img/octal/img5.png\" alt=\"\"><br><br>" +
            "Conversão para octal<br><br>" +
            "<img class=\"img-fluid\" src=\"img/octal/img6.png\" alt=\"\"><br><br>" +
            "Assim, tem-se 1F4(hex) --> 000111110100(bin) = 0764(oct)";
    }else {
        x.innerHTML = ""
    }
}