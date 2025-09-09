function verificarIdade() {
  const nome = document.getElementById('nome').value;
  const dataNascStr = document.getElementById('dataNasc').value;
  const resultado = document.getElementById('resultado');

  
  if (!nome || !dataNascStr) {
    resultado.innerText = 'Por favor, preencha seu nome e a data de nascimento.';
    return;
  }

  const dataNasc = new Date(dataNascStr);
  const hoje = new Date();

  
  if (dataNasc > hoje) {
    resultado.innerText = 'A data de nascimento não pode ser no futuro!';
    return;
  }

  
  let idade = hoje.getFullYear() - dataNasc.getFullYear();
  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();
  const mesNasc = dataNasc.getMonth();
  const diaNasc = dataNasc.getDate();

  
  if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
    idade--;
  }

  
  let categoria = '';
  if (idade < 12) {
    categoria = 'Criança';
  } else if (idade < 18) {
    categoria = 'Adolescente';
  } else if (idade < 60) {
    categoria = 'Adulto';
  } else {
    categoria = 'Idoso';
  }

  
  resultado.innerText = `${nome}, você tem ${idade} anos e é classificado(a) como ${categoria}.`;
}
