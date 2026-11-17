# Nova Neruda · Avaliação de Qualidade Esteira

App para a avaliação de qualidade da uva na recepção e na esteira da Nova Neruda.
Ele substitui o formulário antigo, que era lento.

**Abrir o app:** https://angeloeduardocom-coder.github.io/avaliacao-qualidade-esteira-/

## O que faz

- **Formulário curto.** O operador digita em gramas o peso que a balança mostra, e o app calcula o percentual, os pontos e a nota de 100.
- **Fotos em cada tópico.** Cada foto fica ligada ao item ou à amostra e guarda data, hora e celular.
- **PDF no mesmo formato do relatório anterior.** Tem o resumo dos tópicos e, em cada tópico, os dados, as fotos e o resultado, com a assinatura no final.
- **Envio pelo WhatsApp.** Ao finalizar, o PDF vai para o WhatsApp do dono, cadastrado em Ajustes.
- **Funciona sem internet.** Depois de aberto uma vez, o app guarda uma cópia no celular.
- **Sem banco de dados.** As avaliações ficam no celular de quem avaliou, e o histórico de cada um aparece na tela inicial.

## Instalar no celular

1. Abra o link acima no celular.
2. Instale o atalho:
   - **Android (Chrome):** menu ⋮ → **Adicionar à tela inicial**.
   - **iPhone (Safari):** botão compartilhar → **Adicionar à Tela de Início**.

## Publicar uma versão nova

Aumente o número nos três lugares, sempre com o mesmo valor:

- `APP_VERSAO` em `index.html`
- `version.json`
- `VERSAO` em `sw.js`

Nos celulares, a tela inicial mostra "Versão nova disponível" com o botão **Atualizar**. O mesmo botão também fica em **Ajustes → Versão do app**.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O app inteiro |
| `sw.js` | Cópia para uso sem internet |
| `version.json` | Número da versão publicada. O app compara com o instalado e avisa quando há versão nova |
| `manifest.webmanifest`, `icones/` | Ícone e nome na tela inicial do celular |
| `vendor/` | Gerador de PDF (jsPDF e jsPDF-AutoTable), guardado aqui para funcionar sem internet |

© Ângelo Eduardo. Todos os direitos reservados.
