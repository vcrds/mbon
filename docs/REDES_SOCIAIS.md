# Configuração das Redes Sociais

## Variáveis de Ambiente

O username do Instagram é configurado via `.env`:

```env
NEXT_PUBLIC_INSTAGRAM_USERNAME=ministerioMBON
```

A URL é montada automaticamente como `https://www.instagram.com/{username}`.

A fonte única da configuração é `app/data/socialMedia.ts`. Os componentes abaixo consomem essa config:

- `SocialMedia.tsx`
- `SocialSection.tsx`
- `StructuredData.tsx`

## Status Atual

### ✅ Instagram (ATIVO)

- **Env**: `NEXT_PUBLIC_INSTAGRAM_USERNAME`
- **Username**: `@` + valor da env (ex.: `@ministerioMBON`)
- **URL**: `https://www.instagram.com/` + valor da env
- **Status**: Ativo em todos os componentes
- **Destaque**: Seção especial no site

### ~~Facebook~~ (COMENTADO)

- **Username**: ministerioboasnovas
- **URL**: https://www.facebook.com/ministerioboasnovas
- **Status**: Comentado em todos os componentes
- **Motivo**: Foco apenas no Instagram

### ~~YouTube~~ (COMENTADO)

- **Username**: @ministerioboasnovas
- **URL**: https://www.youtube.com/@ministerioboasnovas
- **Status**: Comentado em todos os componentes
- **Motivo**: Foco apenas no Instagram

### ~~WhatsApp~~ (COMENTADO)

- **Username**: (41) 99999-9999
- **URL**: https://wa.me/5541999999999
- **Status**: Comentado em todos os componentes
- **Motivo**: Foco apenas no Instagram

## Arquivos Modificados

### 1. **app/data/socialMedia.ts**

- ✅ Lê `NEXT_PUBLIC_INSTAGRAM_USERNAME`
- ✅ Monta username (`@...`) e URL do Instagram
- ~~Facebook, YouTube, WhatsApp comentados~~

### 2. **app/components/SocialMedia.tsx**

- ✅ Usa `socialMediaConfig.instagram`
- ~~Facebook, YouTube, WhatsApp comentados~~

### 3. **app/components/StructuredData.tsx**

- ✅ Usa `socialMediaConfig.instagram.url` nos dados estruturados
- ~~Facebook, YouTube comentados~~

### 4. **app/components/SocialSection.tsx**

- ✅ Título "Siga-nos no Instagram"
- ✅ Username e URL vindos de `socialMediaConfig.instagram`

## Como Alterar o Instagram

1. Atualize `.env.local` (e `.env.example` se necessário):

```env
NEXT_PUBLIC_INSTAGRAM_USERNAME=seuUsuario
```

2. Reinicie o servidor de desenvolvimento.

Não é necessário alterar URLs hardcoded nos componentes.

## Como Reativar Outras Redes

Para reativar outras redes sociais, basta descomentar as linhas nos arquivos:

### SocialMedia.tsx

```typescript
// Descomentar as linhas:
// {
//   name: "Facebook",
//   url: "https://www.facebook.com/ministerioboasnovas",
//   icon: FaFacebook,
//   color: "hover:text-blue-600",
//   label: "Ministério Boas Novas",
// },
```

### socialMedia.ts

```typescript
// Descomentar as linhas:
// facebook: {
//   username: "ministerioboasnovas",
//   url: "https://www.facebook.com/ministerioboasnovas",
//   color: "hover:text-blue-600",
//   label: "Ministério Boas Novas",
// },
```

### StructuredData.tsx

```typescript
// Descomentar as linhas:
// "https://www.facebook.com/ministerioboasnovas",
// "https://www.youtube.com/@ministerioboasnovas",
```

## Benefícios do Foco no Instagram

1. **Simplicidade**: Interface mais limpa
2. **Foco**: Destaque total no perfil configurado via env
3. **Engajamento**: Concentração em uma plataforma
4. **Manutenção**: Username centralizado em variável de ambiente
5. **Performance**: Menos ícones e links para carregar

## Próximos Passos

1. **Monitorar engajamento** no Instagram
2. **Avaliar necessidade** de outras redes
3. **Reativar gradualmente** conforme demanda
4. **Manter configurações** comentadas para fácil reativação
