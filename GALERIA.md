# 📸 Sistema de Galeria - Ministério Boas Novas

Este documento explica como usar o sistema de galeria implementado no site da igreja.

## 🚀 Funcionalidades

- **Galeria responsiva** com grid adaptativo
- **Filtros por categoria** (Eventos, Atividades, Infraestrutura)
- **Modal de visualização** com detalhes da imagem
- **Animações suaves** de entrada e hover
- **Otimização automática** de imagens pelo Next.js
- **Placeholders elegantes** para imagens em carregamento
- **Script automatizado** para adicionar novas imagens

## 📁 Estrutura de Arquivos

```
app/
├── components/
│   └── gallery.tsx          # Componente principal da galeria
├── data/
│   └── gallery.ts           # Dados das imagens
└── hooks/
    └── useScrollAnimation.ts # Hook para animações

public/
└── images/
    └── gallery/
        ├── eventos/         # Fotos de eventos
        ├── atividades/      # Fotos de atividades
        └── infraestrutura/  # Fotos do templo

scripts/
└── add-gallery-image.js     # Script para adicionar imagens
```

## 🛠️ Como Adicionar Imagens

### Método 1: Script Automatizado (Recomendado)

1. **Execute o script:**

   ```bash
   npm run add-image minha-foto.jpg
   ```

2. **Siga as instruções:**

   - Escolha a categoria (1-3)
   - Digite o título da imagem
   - Digite a descrição
   - Digite o texto alternativo (para acessibilidade)
   - Confirme as dimensões (opcional)

3. **O script irá:**
   - Copiar a imagem para a pasta correta
   - Adicionar os dados ao arquivo `gallery.ts`
   - Gerar o próximo ID automaticamente

### Método 2: Manual

1. **Copie a imagem** para a pasta correta:

   ```
   public/images/gallery/[categoria]/minha-imagem.jpg
   ```

2. **Edite o arquivo** `app/data/gallery.ts`:
   ```typescript
   {
     id: 10, // Próximo ID disponível
     src: "/images/gallery/eventos/minha-imagem.jpg",
     alt: "Descrição para acessibilidade",
     category: "eventos",
     title: "Título da Imagem",
     description: "Descrição detalhada",
     width: 800,
     height: 600
   }
   ```

## 🎨 Categorias Disponíveis

### 📅 Eventos

- **Cultos de domingo**
- **Batismos**
- **Confraternizações**
- **Celebrações especiais**

### 🏃 Atividades

- **Estudos bíblicos**
- **Grupo de jovens**
- **Momento de oração**
- **Equipe de louvor**

### 🏛️ Infraestrutura

- **Templo externo**
- **Templo interno**
- **Salas de estudo**
- **Áreas comuns**

## ⚡ Otimizações Implementadas

### Performance

- **Lazy loading** nativo do Next.js
- **Placeholder blur** durante carregamento
- **WebP** automático quando suportado
- **Responsive images** para diferentes dispositivos

### UX/UI

- **Animações suaves** de entrada
- **Hover effects** com zoom e overlay
- **Modal responsivo** para visualização
- **Filtros intuitivos** por categoria

### Acessibilidade

- **Alt text** obrigatório para todas as imagens
- **Navegação por teclado** no modal
- **Contraste adequado** nos textos
- **Estrutura semântica** correta

## 📱 Responsividade

| Dispositivo | Colunas | Comportamento   |
| ----------- | ------- | --------------- |
| Mobile      | 1       | Scroll vertical |
| Tablet      | 2       | Grid 2x2        |
| Desktop     | 3       | Grid 3x3        |

## 🎯 Dicas para Boas Fotos

### Qualidade Técnica

- **Resolução**: Mínimo 800x600px
- **Formato**: JPG para fotos, PNG para gráficos
- **Peso**: Máximo 500KB por imagem
- **Orientação**: Horizontal preferencial

### Conteúdo

- **Momentos autênticos** de adoração
- **Pessoas sorrindo** e participando
- **Ambiente bem iluminado**
- **Composição equilibrada**

### Categorização

- **Eventos**: Momentos especiais e celebrações
- **Atividades**: Rotinas e grupos regulares
- **Infraestrutura**: Espaços físicos e instalações

## 🔧 Comandos Úteis

```bash
# Adicionar nova imagem
npm run add-image foto.jpg

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Verificar linting
npm run lint
```

## 🐛 Solução de Problemas

### Imagem não aparece

1. Verifique se o arquivo existe na pasta correta
2. Confirme se o caminho no `gallery.ts` está correto
3. Verifique se o formato é suportado (JPG, PNG, WebP)

### Erro no script

1. Certifique-se de que o arquivo existe
2. Verifique se tem permissões de escrita
3. Confirme se o formato é suportado

### Performance lenta

1. Otimize as imagens antes de adicionar
2. Use dimensões adequadas (800x600px)
3. Mantenha o peso abaixo de 500KB

## 📈 Próximas Melhorias

- [ ] **Upload direto** pela interface web
- [ ] **Edição de metadados** inline
- [ ] **Compressão automática** de imagens
- [ ] **Tags e busca** avançada
- [ ] **Slideshow automático** no modal
- [ ] **Compartilhamento** de imagens

## 🤝 Contribuição

Para contribuir com melhorias:

1. **Fork** o repositório
2. **Crie** uma branch para sua feature
3. **Implemente** as mudanças
4. **Teste** localmente
5. **Envie** um pull request

---

**Desenvolvido com ❤️ para o Ministério Boas Novas**
