function copiarPix() {
  // Busca o campo input pelo ID
  const campoPix = document.getElementById('pix-code-input');
  
  // Seleciona o texto
  campoPix.select();
  campoPix.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Copia para a área de transferência usando a API moderna do navegador
  navigator.clipboard.writeText(campoPix.value).then(() => {
    // Feedback visual para o usuário
    const btn = document.getElementById('btn-copiar');
    const textoOriginal = btn.innerText;
    
    btn.innerText = 'Copiado!';
    btn.style.background = '#16a34a';
    btn.style.color = '#ffffff';

    // Volta ao texto original após 2 segundos
    setTimeout(() => {
      btn.innerText = textoOriginal;
      btn.style.background = '#ffffff';
      btn.style.color = 'var(--navy)';
    }, 2000);
  }).catch(err => {
    console.error('Erro ao copiar: ', err);
  });
}