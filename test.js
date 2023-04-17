
async function main() {
    const axios = require("axios");

    const options = {
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    };


    const request = {
        method: 'post',
        url: "https://tecweb-js.insper-comp.com.br/token",
        data: {
        username: 'pedrohrc1'
        },
        options
    };
    const response = await axios(request);
    const token = response.data.accessToken;

    const request1 = {
            method: 'GET',
            url: "https://tecweb-js.insper-comp.com.br/exercicio",
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
        };
    const response1 = await axios(request1);
    const exercicio = response1.data;
    
    //EX 1
    var enunciado1 = Object.keys(exercicio)[0];

    var SLUG = enunciado1;
    var exercicio1 = exercicio[SLUG];
    
    function soma(a,b){
        return a+b;
    }
    var resposta1 = soma(exercicio1.entrada.a, exercicio1.entrada.b);
    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta1
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);
    //EX 2
    var enunciado2 = Object.keys(exercicio)[1];

    var SLUG = enunciado2;
    var exercicio2 = exercicio[SLUG];
    
    
    function StringLength(a){
        return a.length;
    }
    var resposta2 = StringLength(exercicio2.entrada.string);
    

    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta2
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);


    //EX 3

    var enunciado3 = Object.keys(exercicio)[2];
    var SLUG = enunciado3;
    var exercicio3 = exercicio[SLUG];
    
    var email = exercicio3.entrada.email;

    var resposta3 = email.substring(0, email.indexOf('@'));


    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta3
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);

    //EX 4

    var enunciado4 = Object.keys(exercicio)[3];
    var SLUG = enunciado4;
    var exercicio4 = exercicio[SLUG];
    

    var v = exercicio4.entrada.v;
    var theta = exercicio4.entrada.theta;

    var distancia = v**2*Math.sin(2*theta)/9.8;
    
    function passou(distancia){
        if (distancia > 100){
            return 1;
        }
        else if(distancia < 100){
            return -1;
        }
        else{
            return 0;
        }
    }
    
    var resposta4 = passou(distancia);

    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta4
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);

    //EX 5

    var enunciado5 = Object.keys(exercicio)[4];
    var SLUG = enunciado5;
    var exercicio5 = exercicio[SLUG];
    

    function bisexto(year) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
          return true;
        } else {
          return false;
        }
      }

    var resposta5 = bisexto(exercicio5.entrada.ano);
   

    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta5
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);

    //EX 6

    var enunciado6 = Object.keys(exercicio)[5];
    var SLUG = enunciado6;
    var exercicio6 = exercicio[SLUG];

    function volume(raio, altura){
        return Math.round(Math.PI*raio**2*altura);
    }

    var resposta6 = volume(exercicio6.entrada.z, exercicio6.entrada.a);
    

    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta6
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);

    //EX 7

    var enunciado7 = Object.keys(exercicio)[6];
    var SLUG = enunciado7;
    var exercicio7 = exercicio[SLUG];

    function MRUV(vi, v, t){
        return vi + v*t;
    }

    var resposta7 = MRUV(exercicio7.entrada.s0, exercicio7.entrada.v, exercicio7.entrada.t);

    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta7
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);

    //EX 8

    var enunciado8 = Object.keys(exercicio)[7];
    var SLUG = enunciado8;
    var exercicio8 = exercicio[SLUG];

    var string = exercicio8.entrada.string;

    var resposta8 = string.split("").reverse().join("");

    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta8
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);

    //EX 9

    var enunciado9 = Object.keys(exercicio)[8];
    var SLUG = enunciado9;
    var exercicio9 = exercicio[SLUG];

    var object1 = exercicio9.entrada.objeto;
    var valores = Object.values(object1);
    var soma_val = 0;
    for (var i = 0; i < valores.length; i++){
        soma_val += valores[i];
    }
    var resposta9 = soma_val;
    

    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta9
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);

    //EX 10

    var enunciado10 = Object.keys(exercicio)[9];
    var SLUG = enunciado10;
    var exercicio10 = exercicio[SLUG];


    function nthPrimeDigit(n) {
        let count = 0;
        let num = 2;
        while (count < n) {
          let isPrime = true;
          for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
              isPrime = false;
              break;
            }
          }
          if (isPrime) {
            count++;
          }
          num++;
        }
        return num - 1;
    }

    var resposta10 = nthPrimeDigit(exercicio10.entrada.n);

    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta10
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);

    //EX 11

    var enunciado11 = Object.keys(exercicio)[10];
    var SLUG = enunciado11;
    var exercicio11 = exercicio[SLUG];

    var array = exercicio11.entrada.strings;

    var prefixos = [];

    for (var i = 1; i < array.length; i++){
        //Dividi a string em um array de caracteres (string 1)
        var string0 = array[i-1];
        var split0_string = string0.split("");
        //Dividi a string em um array de caracteres (string 2)
        var string1 = array[i];
        var split1_string = string1.split("");
        

        var save = []

        if (string0.length > string1.length){
            for (var j = 0; j < split1_string.length; j++){
                if (split0_string[j] == split1_string[j]){
                    save.push(split0_string[j]);
                    string=save.join("");
                    
                }
                else{
                    break;
                }
            
            
            }
        }
        else{
            for (var j = 0; j < split0_string.length; j++){
                if (split0_string[j] == split1_string[j]){
                    save.push(split0_string[j]);
                    
                    string=save.join("");
                    
                }
                else{
                    break;
                }
            
            }
        }
        prefixos.push(string);
    }
    var filtrados = [];
    for (var i = 1; i < prefixos.length; i++){
        if (prefixos[i] == prefixos[i-1]){
            filtrados.push(prefixos[i]);
        }
    }
    var definitivo = "";
    for (var i = 0; i < filtrados.length; i++){
        var comparando = filtrados[i];
        if (comparando.length > definitivo.length){
            definitivo = filtrados[i];
        }
        else{
            continue;
        }
    }
    var resposta11 = definitivo;

    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta11
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);

    //EX 12

    var enunciado12 = Object.keys(exercicio)[11];
    var SLUG = enunciado12;
    var exercicio12 = exercicio[SLUG];
    

    var array = exercicio12.entrada.numeros;

    var array_ajustado = array.sort(function(a, b){return b-a});
    

    var maior_2 = array_ajustado[1];
    

    var menor_2 = array_ajustado[array_ajustado.length-2];
   

    var soma = maior_2 + menor_2;

    var resposta12 = soma;


    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta12
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);

    //EX 13

    var enunciado13 = Object.keys(exercicio)[12];
    var SLUG = enunciado13;
    var exercicio13 = exercicio[SLUG];

    var array = [];

    var lista = exercicio13.entrada.palavras;

    for (var i = 0; i < lista.length; i++){
        var string = lista[i];
        var palindromo = string.split("").reverse().join("");

        if (string == palindromo){
            array.push(string);
        }
    }

    var resposta13 = array.length;
    

    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta13
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);

    //EX 14

    var enunciado14 = Object.keys(exercicio)[13];
    var SLUG = enunciado14;
    var exercicio14 = exercicio[SLUG];
    

    var array = exercicio14.entrada.strings;
    const numeros = array.map(function(array){
        return parseInt(array);
    });
    
    const sum = numeros.reduce(function(total, numero){
        return total + numero;
    }, 0);
    var resposta14 = sum;
    

    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta14
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);

    //EX 15

    var enunciado15 = Object.keys(exercicio)[14];
    var SLUG = enunciado15;
    var exercicio15 = exercicio[SLUG];
    

    var array = exercicio15.entrada.endpoints;
    var valor_final = 0;

    for (var i = 0; i < array.length; i++){
        const request_sum = {
            method: 'GET',
            url: array[i],
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
        };
        const response_sum = await axios(request_sum)
        valor_final += response_sum.data;
    }
    var resposta15 = valor_final;
   

    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta15
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);

    //EX 16

    var enunciado16 = Object.keys(exercicio)[15];
    var SLUG = enunciado16;
    var exercicio16 = exercicio[SLUG];

    var inicio = exercicio16.entrada.inicio;
    const request_i = {
        method: 'GET',
        url: inicio,
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    const response_i = await axios(request_i)

    var urls = response_i; 
    var resposta_16 = 0;
    
    while (true){
        const request_while = {
            method: 'GET',
            url: urls.data,
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
        };
        const response_while = await axios(request_while)

        urls = response_while;
        
        if (urls.data > 0 || urls.data <= 0){
            var resposta_16 = urls.data;
            break;
        }
        
    }


    
    var answer = {
        method: 'POST',
        url: "https://tecweb-js.insper-comp.com.br/exercicio/"+ SLUG,
        data:{
            resposta: resposta_16
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token},
    };
    var response2 = await axios(answer);
    console.log(response2.data);
}

main();