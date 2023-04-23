import React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {


  function calculator() {
    const primeiroNumero = parseFloat(splitNumbers[0])
    const ultimoNumero = parseFloat(splitNumbers[2])
    const splitNumbers = numeroAtual.split(' ')
    const operator = splitNumbers[1]

    // Faz ação referente tecla pressionada
    switch (operator) {
      //se apertar mais seleciona a função + para operação de adição
      case '+':
        setNumeroAtual((primeiroNumero + ultimoNumero).toString())
      return
      //se apertar menos seleciona a função - para operação de subtração
      case '-':
        setNumeroAtual((primeiroNumero - ultimoNumero).toString())
      return
      //se apertar asteristico seleciona a função - para operação de multiplicação
      case '*':
        setNumeroAtual((primeiroNumero * ultimoNumero).toString())
      return
      //se apertar barra seleciona a função / para operação de divisão
      case '/':
        setNumeroAtual((primeiroNumero / ultimoNumero).toString())
      return
      //se apertar MOD vamos calcular o modulo para saber se a divisão é exata ou não
      case 'MOD':
        setNumeroAtual((primeiroNumero % ultimoNumero).toString())
      return
      //se apertar ² vamos calcular o numero escolhido elevado a ²
      case '²':
        setNumeroAtual((Math.pow(primeiroNumero,2)).toString())
      return
      //se apertar ³ vamos calcular o numero escolhido elevado a ³
      case '³':
        setNumeroAtual((Math.pow(primeiroNumero,3)).toString())
      return
      //se apertar ^* vamos calcular o numero escolhido elevado a ^* a qualquer numero escolhido
      case '^*':
        setNumeroAtual((Math.pow(primeiroNumero, ultimoNumero)).toString())
      return
    }
  }
  const [numeroAtual, setNumeroAtual] = useState("")
  const [ultimoNumero, setUltimoNumero] = useState("")
  
  //Alocando todas as teclas dentro do Layout, a ordem que está sendo colocada é a ordem que será exibida
  const botoes = ['LIMPAR', 'DEL', 'MOD', '','³', '²','^*','/', 7, 8, 9, "*", 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '+/-', '=',]
  
  //Tudo oque for digitado aparecerá no visor para visualização 
  function handleInput(buttonPressed) {
    console.log(buttonPressed) 
    if (buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" | buttonPressed === "MOD"
    | buttonPressed === '²' | buttonPressed === '³' | buttonPressed === '^*' ) {
      setNumeroAtual(numeroAtual + " " + buttonPressed + " ")
      return
    }
    switch (buttonPressed) {
      //se apertar DEL irá deletar numero por numero e operador por operador até a posição desejada
      case 'DEL':
        setNumeroAtual(numeroAtual.substring(0, (numeroAtual.length - 1)))
      return
      //se apertar Limpar o visor irá ser limpo para resetar para o padrão de inicio
      case 'LIMPAR': 
        setUltimoNumero("")
        setNumeroAtual("")
      return
      //se apertar = o botão irá calcular seu resultado
      case '=':
        setUltimoNumero(numeroAtual + " = ")
        calculator()
      return
      //se apertar +/- o sinal pode ser trocado ou para positivo ou para negativo
      case '+/-':
        setNumeroAtual((-1 * numeroAtual).toString())
      return
    }

    setNumeroAtual(numeroAtual + buttonPressed)
  }

//Layout Desenvolvido com base noque foi aprendido em aula + documentação do ReactNative
  return (
    <View style={estilo.caixa}>

      {/* Area onde o resultado é exibido */}
      <View style={estilo.resultados}>
        <Text style={estilo.historico}>{ultimoNumero}</Text>
        <Text style={estilo.saida}>{numeroAtual}</Text>
      </View>

      {/* Area onde os botões são exibidos*/}
      <View style={estilo.botoes}>

        {botoes.map((button) =>
          button === '=' ? // Mapeamento do botão =
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[estilo.button, { backgroundColor: 'black' }]}>
              <Text style={[estilo.textoBotao, { color: "white", fontSize: 40 }]}>{button}</Text>
            </TouchableOpacity>
            : // Mapeamento dos outros botões
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={estilo.button}>
              <Text style={[estilo.textoBotao, { color: typeof (button) === 'number' ? 'white' : 'gray' }]}>{button}</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

// Estilização
const estilo = StyleSheet.create({
  caixa: {
    flex: 1,
  },
  resultados: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "black"
  },
  saida: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    padding: 10,
    textAlign: "right"
  },
  historico: {
    color: "white",
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 90,
    flex: 2,
  },
  textoBotao: {
    color: "yellow",
    fontSize: 24,
  }
});