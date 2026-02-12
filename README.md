# 👾 Space Invaders - HTML Canvas 👾

🚧 Projeto em desenvolvimento  
Sistema de vida e levels em fase de implantação.

Projeto desenvolvido para consolidar conceitos de renderização gráfica com HTML5 Canvas e lógica de jogos utilizando JavaScript, baseado em uma aula prática.

---

## 📌 Sobre o Projeto

Este projeto é uma versão simplificada do clássico jogo de Atari **Space Invaders**.

O jogador controla uma nave que se move horizontalmente e dispara projéteis contra os inimigos.

O principal foco deste projeto é compreender o funcionamento do **Canvas** e a implementação da lógica de jogos em **JavaScript Puro**, estruturando o jogo sem o uso de uma engine.

---

## 🛠️ Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript  
- API Canvas  

---

## 🎮 Funcionalidades Implementadas

- ✔️ Movimentação do jogador  
- ✔️ Sistema de disparo do jogador  
- ✔️ Sistema de inimigos (Invaders)  
- ✔️ Sistema de disparo dos inimigos  
- ✔️ Detecção de colisão entre projéteis e inimigos  
- ✔️ Loop de animação com `requestAnimationFrame`

---

## 🎮 Controles

⬅️ **A** → mover para esquerda  
➡️ **D** → mover para direita  
🚀 **Espaço** → atirar  

---

## 📂 Estrutura do Projeto

```
📁 aula-space-invaders
 ├── index.html
 ├── style.css
 ├── README.md
 └── src
     ├── index.js
     ├── classes
     │    ├── Grid.js
     │    ├── Invaders.js
     │    ├── Player.js
     │    └── Projectile.js
     ├── utils
     │    └── constants.js
     └── assets
          ├── audios
          └── images
```
---

## ▶️ Como Executar

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto:

```bash
cd aula-space-invaders
```

3. Abra o arquivo `index.html` no navegador.

Se estiver usando VS Code, pode utilizar a extensão **Live Server** para facilitar.

---

## 📚 O que Aprendi

- Criar e utilizar o elemento `canvas`
- Renderizar elementos na tela com JavaScript
- Criar um loop de animação com `requestAnimationFrame`
- Detectar e gerenciar múltiplas teclas pressionadas
- Estruturar o código utilizando classes
- Implementar lógica de colisão
- Organizar projeto em módulos
- Separar responsabilidades (Player, Invaders, Grid, Projectile)

---

## 🚀 Próximas Implementações

- 🔄 Sistema de vida do jogador
- 📈 Sistema de pontuação
- 🎯 Levels progressivos
- 💀 Tela de Game Over
- 🎨 Versão 2.0 com artes autorais
- 🚀Novas mecânicas de gameplay
- 🔊 Reformulação visual e sonora

---

## 🎯 Observação

Este projeto foi feito com fins educacionais para consolidar conceitos de lógica de programação e desenvolvimento de jogos utilizando JavaScript puro.
