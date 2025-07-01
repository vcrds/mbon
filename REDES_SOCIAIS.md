# Configuração das Redes Sociais

## Status Atual

### ✅ Instagram (ATIVO)

- **Username**: @ministerioMBON
- **URL**: https://www.instagram.com/ministerioMBON
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

### 1. **app/components/SocialMedia.tsx**

- ✅ Instagram ativo
- ~~Facebook, YouTube, WhatsApp comentados~~

### 2. **app/data/socialMedia.ts**

- ✅ Instagram ativo
- ~~Facebook, YouTube, WhatsApp comentados~~

### 3. **app/components/StructuredData.tsx**

- ✅ Instagram ativo nos dados estruturados
- ~~Facebook, YouTube comentados~~

### 4. **app/components/SocialSection.tsx**

- ✅ Título alterado para "Siga-nos no Instagram"
- ✅ Foco total no Instagram

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
2. **Foco**: Destaque total para @ministerioMBON
3. **Engajamento**: Concentração em uma plataforma
4. **Manutenção**: Menos configurações para gerenciar
5. **Performance**: Menos ícones e links para carregar

## Próximos Passos

1. **Monitorar engajamento** no Instagram
2. **Avaliar necessidade** de outras redes
3. **Reativar gradualmente** conforme demanda
4. **Manter configurações** comentadas para fácil reativação
