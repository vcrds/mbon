# Exemplo de Uso dos Componentes

## Como Adicionar os Componentes no Layout

### 1. **Google Analytics**

```typescript
// app/layout.tsx
import { GoogleAnalytics } from "./components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>{/* ... outros meta tags ... */}</head>
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

### 2. **Dados Estruturados (Structured Data)**

```typescript
// app/layout.tsx
import { StructuredData } from "./components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* ... outros meta tags ... */}
        <StructuredData />
      </head>
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
```

### 3. **Ambos os Componentes**

```typescript
// app/layout.tsx
import { GoogleAnalytics, StructuredData } from "./components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* ... outros meta tags ... */}
        <StructuredData />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

## Configurações Necessárias

### Google Analytics

1. Criar conta no [Google Analytics](https://analytics.google.com/)
2. Obter o ID de medição (G-XXXXXXXXXX)
3. Substituir no componente

### Dados Estruturados

1. Atualizar informações de contato no `StructuredData.tsx`
2. Verificar coordenadas geográficas
3. Atualizar URLs das redes sociais
4. Configurar horários de funcionamento

## Benefícios

- **Google Analytics**: Rastreamento de visitantes e comportamento
- **Structured Data**: Rich snippets nos resultados de busca
- **SEO Local**: Melhor posicionamento para buscas em Curitiba
- **Credibilidade**: Informações estruturadas para motores de busca
