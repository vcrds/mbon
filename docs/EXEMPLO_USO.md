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

### 3. **Redes Sociais no Footer**

```typescript
// app/components/footer.tsx
import { SocialMedia } from "./index";

// O componente já está integrado no footer
// As redes sociais aparecem automaticamente
```

### 4. **Seção de Redes Sociais na Página Principal**

```typescript
// app/page.tsx
import { SocialSection } from "./components";

export default function Home() {
  return (
    <main>
      {/* ... outras seções ... */}

      {/* Seção de Redes Sociais */}
      <SocialSection />

      {/* ... outras seções ... */}
    </main>
  );
}
```

### 5. **Componente de Redes Sociais Personalizado**

```typescript
// Qualquer componente
import { SocialMedia } from "./components";

export default function MeuComponente() {
  return (
    <div>
      {/* Redes sociais pequenas */}
      <SocialMedia size="sm" />

      {/* Redes sociais com labels */}
      <SocialMedia size="lg" showLabels={true} />

      {/* Redes sociais personalizadas */}
      <SocialMedia size="md" className="text-blue-500" showLabels={false} />
    </div>
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

### Redes Sociais

- ✅ **Instagram**: @ministerioMBON (ativo)
- ~~Facebook~~: ministerioboasnovas (comentado)
- ~~YouTube~~: @ministerioboasnovas (comentado)
- ~~WhatsApp~~: (41) 99999-9999 (comentado)

## Benefícios

- **Google Analytics**: Rastreamento de visitantes e comportamento
- **Structured Data**: Rich snippets nos resultados de busca
- **SEO Local**: Melhor posicionamento para buscas em Curitiba
- **Credibilidade**: Informações estruturadas para motores de busca
- **Engajamento**: Redes sociais integradas para maior interação
- **Instagram**: Destaque especial para @ministerioMBON
