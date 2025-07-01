# 📸 Galeria de Imagens

Este diretório contém as imagens da galeria do site da igreja.

## 📁 Estrutura de Pastas

```
gallery/
├── eventos/           # Fotos de eventos especiais
│   ├── culto-domingo.jpg
│   ├── batismo.jpg
│   └── confraternizacao.jpg
├── atividades/        # Fotos de atividades regulares
│   ├── estudo-biblico.jpg
│   ├── grupo-jovens.jpg
│   ├── oracao.jpg
│   └── louvor.jpg
└── infraestrutura/    # Fotos do templo e instalações
    ├── templo-externo.jpg
    └── templo-interno.jpg
```

## 📋 Como Adicionar Imagens

### 1. Preparação das Imagens

- **Formato**: JPG ou PNG
- **Tamanho recomendado**: 800x600 pixels
- **Qualidade**: Boa qualidade, mas otimizada para web
- **Peso máximo**: 500KB por imagem

### 2. Nomenclatura

- Use **nomes descritivos** em português
- Separe palavras com **hífens** (ex: `culto-domingo.jpg`)
- Use **minúsculas** e sem acentos

### 3. Organização

- Coloque cada imagem na pasta correta
- Mantenha a estrutura de categorias
- Atualize o arquivo `app/data/gallery.ts` com as novas imagens

## 🔧 Configuração no Código

Após adicionar uma nova imagem, atualize o arquivo `app/data/gallery.ts`:

```typescript
{
  id: 10, // Próximo ID disponível
  src: "/images/gallery/eventos/nova-imagem.jpg",
  alt: "Descrição da imagem para acessibilidade",
  category: "eventos", // ou "atividades" ou "infraestrutura"
  title: "Título da Imagem",
  description: "Descrição detalhada da imagem",
  width: 800,
  height: 600
}
```

## 🎯 Dicas para Boas Fotos

### Eventos

- **Cultos**: Momentos de adoração, louvor, pregação
- **Batismos**: Celebrações especiais
- **Confraternizações**: Momentos de comunhão

### Atividades

- **Estudos bíblicos**: Grupos estudando
- **Grupo de jovens**: Atividades e comunhão
- **Oração**: Momentos de intercessão
- **Louvor**: Equipe de música

### Infraestrutura

- **Templo externo**: Fachada e entrada
- **Templo interno**: Ambiente de adoração
- **Salas**: Espaços de estudo e reunião

## ⚡ Otimização

O Next.js otimiza automaticamente as imagens:

- **Lazy loading** nativo
- **Placeholder blur** durante carregamento
- **Responsive images** para diferentes dispositivos
- **WebP** quando suportado pelo navegador

## 📱 Responsividade

As imagens se adaptam automaticamente:

- **Mobile**: 1 coluna
- **Tablet**: 2 colunas
- **Desktop**: 3 colunas

## 🎨 Efeitos Visuais

- **Hover**: Zoom suave e overlay com informações
- **Modal**: Visualização ampliada com detalhes
- **Animações**: Entrada suave com scroll
- **Filtros**: Navegação por categoria
